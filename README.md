<p align="center">
  <img src="icon.svg" alt="draw.io Logo" width="21%">
</p>

# draw.io on StartOS

> Everything not listed in this document should behave the same as upstream
> draw.io. If a feature, setting, or behavior is not mentioned here, the upstream
> documentation is accurate and fully applicable — see the Documentation section of
> `instructions.md` for links.

[draw.io](https://github.com/jgraph/drawio) is a diagram and whiteboard editor
that runs entirely in the browser. This package serves the editor from the StartOS
server; the server never stores a diagram. It is an unofficial package, not
affiliated with or endorsed by draw.io Ltd, which owns the draw.io name and logo.

---

## Table of Contents

- [Image and Container Runtime](#image-and-container-runtime)
- [Volume and Data Layout](#volume-and-data-layout)
- [File Models](#file-models)
- [Dependencies](#dependencies)
- [Network Access and Interfaces](#network-access-and-interfaces)
- [Installation and First-Run Flow](#installation-and-first-run-flow)
- [Actions](#actions)
- [Tasks](#tasks)
- [Health Checks](#health-checks)
- [Backups and Restore](#backups-and-restore)
- [Limitations and Differences](#limitations-and-differences)
- [Quick Reference for AI Consumers](#quick-reference-for-ai-consumers)

---

## Image and Container Runtime

The package runs draw.io's official image, with its own entrypoint, in one
subcontainer. The root `Dockerfile` upgrades its CA store and rebuilds Java's `cacerts`
from it, a temporary layer that comes out once upstream ships an image whose Java no
longer trusts emSign ECC Root CA - G3.

| Property      | Value                                                            |
| ------------- | ---------------------------------------------------------------- |
| Image         | `jgraph/drawio`, upstream, plus the CA-store layer               |
| Architectures | x86_64, aarch64                                                  |
| Entrypoint    | upstream `docker-entrypoint.sh`, then Tomcat (`catalina.sh run`) |
| User          | the image's `tomcat` user                                        |
| Subcontainer  | `drawio-sub`, running the daemon `primary`                       |

On every start the entrypoint regenerates the editor's startup scripts
(`js/PreConfig.js`, `js/PostConfig.js`) from environment variables, so a setting only
takes effect through a restart; the Set Primary URL action restarts a running service
for that reason. The entrypoint also creates a self-signed keystore and a Tomcat HTTPS
connector on port 8443, which the package does not expose.

Two log lines at every start are expected and harmless: Tomcat's WARNING that the
context path `[/]` "has been changed to []" (from upstream's `server.xml` edit), and
the entrypoint's printout of both startup scripts.

## Volume and Data Layout

The package has one small volume, and it holds no diagram.

| Volume    | Mount point | Contents                      |
| --------- | ----------- | ----------------------------- |
| `startos` | not mounted | `store.json`: the primary URL |

Diagrams live wherever each user saves them: on their own device, in their browser's
storage for that address, or in Nextcloud when opened through its draw.io app. There
is no database, and the draw.io container mounts no volume at all.

## File Models

One JSON file, written only by the package, never by draw.io.

**`store.json`** (`startos` volume) holds `primaryUrl`, the address chosen with Set
Primary URL, empty until one is chosen. draw.io uses that address at its hostname's
current port and scheme. While the hostname is not one of the Web UI's addresses, or
nothing is chosen, it uses the preferred address instead: a public domain (HTTPS
first), else the `.local` address, else the first. The choice is kept, so draw.io
returns to it when the address does. Whenever the address in use changes, draw.io
restarts to pick it up. It reaches draw.io as environment variables:

| Variable              | Value                                                                                |
| --------------------- | ------------------------------------------------------------------------------------ |
| `DRAWIO_SERVER_URL`   | Always `/`. Keeps the editor's own requests relative, so it works from every address |
| `DRAWIO_BASE_URL`     | The address in use. Used in HTML exports, embed code and editor links                |
| `DRAWIO_LIGHTBOX_URL` | The address in use. Used for viewer links (File → Publish → Link…)                   |

`DRAWIO_SERVER_URL` must stay set: given only `DRAWIO_BASE_URL`, the upstream
entrypoint derives an absolute server URL from it, and the editor then sends its own
requests to the primary address even when opened from another one.

## Dependencies

None. The Nextcloud draw.io app (listed in Nextcloud as **Diagramming**) uses this
service only through the user's browser: Nextcloud frames the editor from this
service's address, and the editor hands the diagram back to Nextcloud, which saves
it. Nothing passes between the two services on the server, so the package declares
no dependency and does not need Nextcloud installed.

In that mode the editor's language, dark mode and editor configuration come from the
Diagramming app's settings, not from this service. The app always loads the editor
with `configure=1` and a `lang=` parameter, and with `configure=1` draw.io applies
only the configuration the embedding page sends. On its default Auto setting, the app
adds `dark=1` whenever the user's device prefers dark, so the editor turns dark.

## Network Access and Interfaces

The package exposes one HTTP interface. The server has no login: anyone who can
reach an address can use the editor, though there is nothing stored for them to
read.

| Interface | ID   | Type | Port | Protocol | Serves                                                                                                                                                                      |
| --------- | ---- | ---- | ---- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Web UI    | `ui` | `ui` | 8080 | HTTP     | The editor; the viewer behind share links (`/?lightbox=1`); the viewer script HTML exports load (`/js/viewer-static.min.js`); the embed mode Nextcloud frames (`/?embed=1`) |

Tomcat's HTTPS port, 8443, is not exposed. Two upstream endpoints fetch URLs
server-side: `/proxy` is switched off (the upstream default, `ENABLE_DRAWIO_PROXY`
unset) and answers 404; `/embed2.js?fetch=` fetches only public addresses, refusing
private, loopback, link-local and `.local` ones.

## Installation and First-Run Flow

There is no setup wizard and no account to create; the editor is usable as soon as
the service starts. Install stores no primary URL: draw.io uses the preferred address
(see File Models), and the Set Primary URL task asks the user to choose one.

## Actions

The package has one action. It can run while the service is running or stopped; a
running draw.io restarts to apply it, which takes a few seconds.

**Set Primary URL** (`set-primary-url`), built by `sdk.setupPrimaryUrl` — run it when
people open exported files and share links from somewhere the current address does not
reach, typically over a VPN or a domain rather than the LAN. It offers the Web UI's
off-box addresses, pre-selects the preferred one and pre-fills the stored choice. It
rewrites `primaryUrl` in `store.json`, which restarts a running draw.io. Links and
files exported earlier keep the address they were made with. Safe to repeat.

## Tasks

The package raises one task, and it never blocks the service.

**Set Primary URL**, severity `important`. Init raises it while no primary URL is
chosen, as after install, and while the chosen one's hostname is not one of the Web
UI's addresses: the address was disabled, a domain was removed, a backup was restored
onto a server with a different name, or an IP address's network link is down. Choosing
an address clears it, and so does the chosen address coming back. While it is raised,
draw.io keeps running on the preferred address.

## Health Checks

One check reports whether the editor is being served.

**Web Interface** (`primary`) checks that port 8080 is listening. Tomcat opens it only
after the editor has deployed, so a listening port means the editor is being served.
Startup takes a few seconds. A failure that lasts means Tomcat did not start: look for
a Java exception in the log.

## Backups and Restore

The one volume is copied whole (`ofVolumes('startos')`). It holds only the primary
URL.

A backup contains no diagrams, because the server never has any. Users' diagrams
must be backed up wherever they save them — their devices, or Nextcloud. After a
restore onto a server with a different name, the stored primary URL no longer
matches any address: draw.io uses the preferred address, and the task above asks for
a new one.

## Limitations and Differences

Most of these come from the upstream image itself, not from the package; they are
listed because the hosted draw.io at app.diagrams.net behaves differently.

1. **No server-side storage.** The editor saves to the user's device ("Device",
   offered only where the browser has the File System Access pickers — Chrome and
   Edge on a computer; draw.io also excludes Opera), to the browser's storage for
   that one address ("Browser", lost when site data is cleared), or as a download.
   Upstream's maintainers state the back end has nothing to do with saving, users or
   authentication.
2. **No real-time co-editing.** draw.io's live collaboration needs its hosted
   service; the upstream image switches sync off. In the Nextcloud app pointed at
   this service, two people editing one diagram get a "file was updated in the
   meantime" conflict instead of live updates.
3. **No cloud storage sign-in.** Google Drive, OneDrive and GitLab need OAuth
   credentials the package does not set; the upstream image switches GitHub,
   Dropbox and Trello off entirely.
4. **No server-side export.** Upstream's export server has reached end of life:
   Export as → PDF uses the browser's print dialog, and PNG, JPEG and SVG export are
   rendered in the browser.
5. **No login.** Anyone who can reach one of its addresses can use the editor.
6. **A new primary URL can lag in an open browser.** The startup scripts are served
   without cache headers, so a browser that loaded draw.io recently may keep
   exporting with the old address after it changes. Reloading the page fetches the
   new one.
7. **URL proxy off.** With `/proxy` disabled, importing an image by URL from a site
   that does not allow cross-origin requests fails; downloading it and inserting the
   file works.

---

## Quick Reference for AI Consumers

```yaml
package_id: drawio
image: jgraph/drawio
architectures: [x86_64, aarch64]
subcontainers: [drawio-sub]
volumes:
  startos: null
file_models:
  - startos/store.json
startos_managed_env_vars:
  - DRAWIO_SERVER_URL
  - DRAWIO_BASE_URL
  - DRAWIO_LIGHTBOX_URL
dependencies: none
interfaces:
  ui: { type: ui, port: 8080 }
actions:
  - set-primary-url
tasks:
  - { action: set-primary-url, severity: important } # while unset or not a Web UI address
health_checks:
  - primary
```
