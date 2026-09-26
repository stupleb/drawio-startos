# Updating the upstream version

Upstream is the official `jgraph/drawio` image on Docker Hub, pinned by tag in
`startos/manifest/index.ts`. The image is built by
[jgraph/docker-drawio](https://github.com/jgraph/docker-drawio) from whatever
[jgraph/drawio](https://github.com/jgraph/drawio) has on `master` at build time,
and tagged with that commit's `VERSION` file.

## Determining the upstream version

draw.io releases every few days, but a Docker tag only appears when
docker-drawio's weekly build runs (Mondays, 04:05 UTC) or its maintainers trigger
one. So the newest GitHub release is often not yet an image. Read the tags, not
the releases:

```bash
curl -s "https://hub.docker.com/v2/repositories/jgraph/drawio/tags?page_size=10&ordering=last_updated" \
  | jq -r '.results[].name'
```

Ignore `latest` and `dev`, and pick the highest `X.Y.Z`. Confirm it carries both
architectures:

```bash
docker manifest inspect jgraph/drawio:X.Y.Z | jq -r '.manifests[].platform.architecture'
```

**Tags are not immutable.** The weekly build re-pushes the current version's tag
with a fresh build, so the same tag can hold different bytes a week apart. A
packed `.s9pk` embeds the image it pulled, so a released package is fixed; only
a rebuild of the same version picks up the newer bytes.

## Applying the bump

1. Set `images.drawio.source.dockerTag` in `startos/manifest/index.ts` to
   `jgraph/drawio:X.Y.Z`.
2. In `startos/versions/current.ts`, set `version` to `X.Y.Z:0` and rewrite the
   release notes for the new range, linking the upstream releases page.
3. Check the upstream entrypoint for changed environment variables before
   building — the package drives it through `DRAWIO_SERVER_URL`,
   `DRAWIO_BASE_URL` and `DRAWIO_LIGHTBOX_URL`:

   ```bash
   curl -s https://raw.githubusercontent.com/jgraph/docker-drawio/dev/main/docker-entrypoint.sh | less
   ```
