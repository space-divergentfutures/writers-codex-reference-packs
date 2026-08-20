# Writer's Codex — Reference Pack Library

Genre reference packs for writers: research-grade libraries of **tropes, subgenres,
authors, landmark works, craft guidance, and genre-specific primers** — each entry
illustrated with worked examples rated on a four-tier quality scale, so you can study
what works, what almost works, and what teaches the wrong lesson.

Packs are plain JSON. Use them inside the [Writer's Codex](https://github.com/space-divergentfutures)
app via the in-app pack picker, or download any pack directly and use it however you like.

## The packs

| Pack | Status | Download |
|---|---|---|
| Science Fiction | live | `packs/reference-scifi.json` |
| Fantasy | planned | `packs/reference-fantasy.json` |
| Mystery, Crime & Thriller | planned | `packs/reference-mystery-crime-thriller.json` |
| Horror | planned | `packs/reference-horror.json` |
| Romance | planned | `packs/reference-romance.json` |
| Historical Fiction | planned | `packs/reference-historical.json` |
| Literary Fiction | planned | `packs/reference-literary.json` |
| War / Military | planned | `packs/reference-war-military.json` |
| Comedy / Humor | planned | `packs/reference-comedy.json` |
| Western | planned | `packs/reference-western.json` |
| Superhero | planned | `packs/reference-superhero.json` |
| Manga | planned | `packs/reference-manga.json` |
| TV Formats | planned | `packs/reference-tv-formats.json` |
| Erotica | planned (on demand) | `packs/reference-erotica.json` |
| Religious / Inspirational | planned (on demand) | `packs/reference-religious-inspirational.json` |

`manifest.json` is the machine-readable index: per-pack version, entry count, size,
status, and adjacent-pack suggestions. Once live, files are served via jsDelivr:

```
https://cdn.jsdelivr.net/gh/space-divergentfutures/writers-codex-reference-packs@main/manifest.json
https://cdn.jsdelivr.net/gh/space-divergentfutures/writers-codex-reference-packs@main/packs/reference-scifi.json
```

**Pack status values:** `planned` (announced, not yet built) · `live` (maintained) ·
`refreshing` (annual refresh pass in progress — still fine to use) · `deprecated`
(downloadable, no longer maintained) · `archived` (kept for history, hidden from browse).

## Schema guide

Authoritative types live in [`schema/schema.ts`](./schema/schema.ts) (schema v2). A pack
file is:

```json
{
  "id": "sf-reference",
  "name": "Science Fiction",
  "packVersion": "1.0.0",
  "schemaVersion": 2,
  "lastUpdated": "2026-08-06",
  "minAppVersion": "0.1.0",
  "collections": [ { "id": "trope", "label": "Tropes", "schema": "example_cards", "...": "…" } ],
  "entries": [ { "id": "trope-1", "kind": "trope", "name": "Generation ships", "...": "…" } ]
}
```

Five card shapes:

- **`example_cards`** — a named concept + worked examples (`work`, `medium`, `year`,
  `quality`, `text`). Used for Tropes, Technologies, Character.
- **`principle_cards`** — a named concept + `principle` / `example` / `application`.
  Used for Subgenres, Craft, History, and the specialist primer collections.
- **`author_cards`** — a creator + `meta` / `knownFor` / `signature` / `works[]`.
- **`work_cards`** — a landmark title + `author`, `year`, `awards`, `text`, and a
  `medium` from the enum below. (Replaces the old `book_cards` — a "Works" collection
  can hold *Watchmen* next to *The Left Hand of Darkness* without shape distortion.)
- **`checklist_cards`** — a named checklist + `items[]`.

**Medium enum** (`work_cards.medium`):
`novel | film | tv | comic | manga | graphic-novel | game | audio | nonfiction`
— `comic` = periodical/serialized; `graphic-novel` = long-form single work;
`nonfiction` = factual books (history, psychology, craft references) in a Works
collection. The per-example `medium` field on `example_cards` is free text (it predates
the enum and carries richer descriptions).

**Quality tiers** (every worked example carries one):

| Tier | Meaning |
|---|---|
| `excellent` | Best-in-class. Study this. Sets the standard for the technique or trope. |
| `strong` | Reliable, works well, good reference. |
| `weak` | Flawed, incomplete, or only partially successful. |
| `terrible` | Actively teaches the wrong lesson. Cautionary example. |

`excellent` is intentionally rare — it means *study this*, not *pretty good*.

**Versioning.** `packVersion` is semver: **patch** = corrections, typo fixes,
quality-tier reassessments; **minor** = new entries, examples, authors, works;
**major** = schema-breaking or large structural change. `schemaVersion` is a separate
integer that only increments on breaking schema changes. Packs refresh on an annual
cycle (6-month option for fast-moving genres); the app compares versions against the
manifest and offers updates — pull, not push.

## A note on YA / Middle Grade

YA and Middle Grade are **audience-age brackets, not genres** — any pack here may
contain YA/MG works. Where they appear, entries note the typical shifts: stakes scaled
to the protagonist's world, institutional power differentials, voice constraints, and
the common expectation of hope or agency at the end. There is no dedicated YA pack.

## Contributing

The working rules, in brief:

1. **Analysis and opinion only.** Entries must remain original critical analysis about
   works. **No extended quotation. No plot summary that could substitute for reading or
   watching the work.** Short illustrative references only. This is what keeps the
   licensing clean (see below) — it is not negotiable.
2. **Genre-first, medium as attribute.** Genre is the pack; medium is a tag on entries
   and examples. Proposals reintroducing medium-first branching are rejected on sight.
3. **Four-tier quality from birth** for every pack. Keep `excellent` rare.
4. **Cross-pack duplication is intentional.** Packs are self-contained; the same work
   may appear in several packs. Never "deduplicate" across packs.
5. **Curated, not generated.** AI drafts; a human curates, verifies, and
   quality-controls every entry before merge.
6. **`adjacentPacks` entries are exact manifest `id` values** (`"horror-reference"`,
   never `"horror"`).
7. **IDs are permanent handles.** Never rename a collection or entry `id`; change
   labels for display.
8. **Published works only.** Every cited work and worked example must be a published or
   released work a reader could actually go study. No unpublished manuscripts,
   works-in-progress, or private material — screening for this is a required step in
   every pack build and refresh pass.

## License

- **Pack data (`packs/`): CC BY 4.0** — use, share, adapt, sell — with attribution to
  Divergent Futures. See [`LICENSE-DATA.md`](./LICENSE-DATA.md).
- **Schema and code: MIT.** See [`LICENSE`](./LICENSE).

The packs are original critical analysis *about* works — commentary, evaluation, and
categorization in our own words — not reproduction of the works themselves.

Copyright (C) 2026 Divergent Futures
