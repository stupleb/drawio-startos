# draw.io

## Documentation

- [draw.io documentation](https://www.drawio.com/docs/*) — the editor's user guide, shortcuts and FAQ.

## What you get on StartOS

- The draw.io editor on the **Web UI** interface. It has no login and keeps nothing on
  your server: each diagram lives wherever you save it.
- Share links, HTML exports and embed code that point at your own server instead of
  draw.io's.
- An editor you can point Nextcloud's draw.io app at, so diagrams in Nextcloud open in
  your own draw.io.

## Getting set up

1. Open the **Web UI**. The editor starts on a blank diagram.
2. Before you rely on it, decide where your diagrams will live. Use **File → Save
   as…** and pick a place under **Where**:
   - **Device** saves a `.drawio` file to a folder you choose, and keeps saving to
     it. Any folder your computer can see works, including a mounted network share.
     It is only offered in Chrome and Edge on a computer.
   - **Browser** keeps the diagram inside your browser, for this one address only.
     It disappears if you clear the site's data, and you won't find it if you open
     draw.io at a different address. Use it for scratch work.
   - **Download** saves a copy to your downloads folder. In Firefox, Safari and on
     phones, this is the way to keep a file.

## Using draw.io

### Sharing and exporting

**File → Publish → Link…**, **File → Export as → HTML…** and **File → Embed** all
produce links or files that load from your server's **primary URL** — the `.local`
address, unless you change it. People who open them need to reach that address. If
they open them over a VPN or through a domain instead, run **Set Primary URL** and
choose an address that works for them. Links and files you made earlier keep the
address they were made with.

### Using it from Nextcloud

1. As a Nextcloud admin, install the **Diagramming** app from Nextcloud's Apps page.
   It is Nextcloud's draw.io app.
2. In Nextcloud's **Administration settings**, open **Diagramming**, set **Editor
   URL** to one of draw.io's Web UI addresses, and click **Save**. Choose an HTTPS
   address every Nextcloud user's browser can reach — the same kind of address you
   use for Nextcloud itself.
3. Create or open a `.drawio` file in Nextcloud. It opens in your draw.io and saves
   back to Nextcloud, with Nextcloud's version history.

Inside Nextcloud, the editor's settings belong to the Diagramming app: **Editor
configuration** and **Language** on its admin page, and each user's **Dark** setting
under their personal settings. With **Dark** on Auto, the editor turns dark whenever
your device is in dark mode.

### Set Primary URL

This action chooses which of draw.io's addresses goes into share links, HTML exports
and embed code. If draw.io is running, it restarts, which takes a few seconds; if a
browser that already had draw.io open still uses the old address, reload the page.
If the chosen address stops existing, for example after you disable it, StartOS asks
you to pick a new one, and draw.io keeps working meanwhile.

## Limitations

- **No real-time co-editing.** That needs draw.io's hosted service. Through
  Nextcloud, if two people edit the same diagram at once, the second to save is told
  the file was updated in the meantime.
- **No login.** Anyone who can open one of draw.io's addresses can use the editor.
  It stores nothing for them to read, but think twice before giving it a public
  address.
