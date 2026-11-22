# UKMAAI website

Source for the UK Multi-Agent & Agentic AI Community (UKMAAI) homepage. The site is two files served by GitHub Pages: `index.html` (the page) and `labs.js` (the labs directory data).

## Publishing with GitHub Pages

1. Create a GitHub organisation called `ukmaai` (or use a personal account).
2. In it, create a public repository named `ukmaai.github.io`.
3. Upload `index.html`, `labs.js` and this `README.md` to the repository (Add file → Upload files → Commit).
4. Open Settings → Pages. Under "Build and deployment", choose "Deploy from a branch", branch `main`, folder `/ (root)`, and save.
5. After a minute or two the site is live at `https://ukmaai.github.io`.

If the repository has a different name, for example `website`, the address becomes `https://<account>.github.io/website/`.

## Adding an event

Open `index.html`, find the `events` list in the `<script>` near the bottom, and add an entry:

```js
{
  date: "2027-03-15",
  title: "Seminar: Cooperative multi-agent learning",
  where: "King's College London and online",
  link: "https://example.org/event"
},
```

Events whose date has passed are hidden automatically. Community members can open a pull request, or send the details on Slack or by email and an organiser will add them.

## Adding or updating a lab

Open `labs.js` and add an entry to the `labs` list:

```js
{
  "name": "Example Lab",
  "org": "University of Example",
  "city": "London",
  "url": "https://example.org",
  "lat": 51.5115,
  "lon": -0.1160,
  "tags": ["Reinforcement learning", "Cooperation"],
  "desc": "One or two sentences about the lab."
},
```

The map on the page is drawn from this same list, so a new entry appears in both the directory and the map. To find `lat` and `lon`, right-click the lab's location in Google Maps or OpenStreetMap and copy the coordinates. An entry without coordinates is listed in the directory but not shown on the map.

The data was exported from the Google My Maps "UK Multi-Agent Systems Labs" in November 2026. `labs` holds the 2025 entries; `labs2020` holds entries from the 2020 map that were never updated. The map's "Outdated entries" layer was left out.

## Things to check before launch

- The Slack invite link may expire. Replace it with a link set to never expire (it appears four times in `index.html`).
- The map uses Leaflet (loaded from cdnjs) with OpenStreetMap tiles; no account or key is needed. Two labs had no coordinates on the original map and were placed by city: the Hartree Centre team (Daresbury) and the DICE Lab (Egham).
- Stefano Albrecht's affiliation in the organisers section is left blank.
- The 2020 symposium organiser line should be confirmed.
