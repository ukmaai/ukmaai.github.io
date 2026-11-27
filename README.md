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

Events whose date has passed are hidden automatically. Community members send the details on Slack or by email and an organiser adds them.

## News (Google Form, approved by an organiser)

Members submit news with a Google Form; the page reads the form's Google Sheet and shows the rows an organiser has approved. Nothing in this repository needs editing to publish a news item.

Set-up, once:

1. The news form needs these questions, in this order: **Date** (date, required), **Headline** (short answer, required), **Link (optional)** (short answer), **Details (optional)** (paragraph), **Your name** (short answer), **Contact email (not published)** (short answer).
2. In the form, open Responses → Link to Sheets. In the sheet, name column H `Approved` and give it tick boxes (Insert → Tick box).
3. Add a second tab called `Public` and put this in cell A1:
   `=QUERY('Form responses 1'!A:H, "select B,C,D,E where H = TRUE order by B desc format B 'yyyy-mm-dd'", 1)`
4. File → Share → Publish to web → choose the `Public` tab and "Comma-separated values (.csv)" → Publish. Only that tab is public, so names and emails stay private.
5. In `index.html`, set `NEWS_FORM_URL` (the form link) and `NEWS_CSV_URL` (the published CSV link). The News section is hidden until `NEWS_FORM_URL` is set.

To publish a news item, tick its `Approved` box. To remove it, untick it.

## Lab updates (existing labs only) and new labs

Labs use the lab Google Form for both updates and new entries.

- **Update to an existing lab**: applied on the page automatically. The page reads the lab form's sheet and, for a row whose lab name matches a lab already in `labs.js`, replaces that lab's organisation, city, website, topics and description. Map coordinates always come from `labs.js`.
- **New lab**: never appears automatically. An organiser reviews the form response and adds the lab to `labs.js` (below).

Set-up, once: in the lab form's sheet, add a `Public` tab with this in A1 (it leaves out the contact email column):
`=QUERY('Form responses 1'!A:I, "select A,C,D,E,F,G,H where B contains 'Update'", 1)`
Publish that tab as CSV (as in step 4 above) and set `LAB_UPDATES_CSV_URL` in `index.html`. While it is empty, the page shows `labs.js` unchanged.

Anyone who knows a lab's name can submit an update for it, so check the sheet from time to time; delete a bad row to undo it.

## Adding a new lab

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
