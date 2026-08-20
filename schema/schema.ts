/* Writer's Codex — Reference Pack schema, v2.
 *
 * This is the public, standalone copy of the reference-pack portion of the Writer's Codex
 * app schema (`src/lib/schema.ts`), published for external validation and for anyone
 * building tools against the packs in this repo.
 *
 * Schema v2 changes (2026-08-06, per Reference Pack Library Plan v1.2 §3):
 *   - `book_cards` → `work_cards`: the landmark-work card gains a `medium` field so works
 *     from any medium (novel, comic, game, …) share one shape. `book_cards` is retired;
 *     no public pack was ever released with it.
 *   - Medium enum (9 values): novel | film | tv | comic | manga | graphic-novel | game | audio | nonfiction.
 *     `comic` vs `graphic-novel`: periodical/serialized vs. long-form single work.
 *     `nonfiction` covers factual books in a Works collection (craft references, history,
 *     psychology). `stage` is deferred. The enum is closed as of the 2026-08-06 pre-release
 *     amendment; post-release changes must be backwards-compatible.
 *     NOTE: the enum governs the `medium` field on work_cards entries;
 *     the per-example `medium` field on example_cards remains free text (it predates the
 *     enum and carries richer descriptions, e.g. "Novel (Kim Stanley Robinson)").
 *   - Four-tier quality: excellent | strong | weak | terrible.
 *       excellent — best-in-class; study this (intentionally rare)
 *       strong    — reliable, works well, good reference
 *       weak      — flawed, incomplete, or only partially successful
 *       terrible  — actively teaches the wrong lesson; cautionary example
 *   - Pack version header (§3.2): packVersion (semver) + schemaVersion (integer) +
 *     lastUpdated + minAppVersion on every pack file. schemaVersion increments only on
 *     breaking schema changes; packVersion follows the semver policy in the plan
 *     (patch = corrections; minor = new entries; major = breaking/structural).
 *
 * After the first public release, the shipped format is never broken again: any future
 * schema change must be backwards-compatible so already-downloaded packs keep working.
 */

export const REF_SCHEMA_VERSION = 2;

/* ---------- enums ---------- */
export const REF_QUALITY = ['excellent', 'strong', 'weak', 'terrible'] as const;
export const REF_MEDIUM = [
  'novel',
  'film',
  'tv',
  'comic',
  'manga',
  'graphic-novel',
  'game',
  'audio',
  'nonfiction',
] as const;
export const CARD_SCHEMAS = [
  'example_cards',
  'principle_cards',
  'author_cards',
  'work_cards',
  'checklist_cards',
] as const;
export const PACK_STATUS = ['planned', 'live', 'refreshing', 'deprecated', 'archived'] as const;

export type RefQuality = (typeof REF_QUALITY)[number];
export type RefMedium = (typeof REF_MEDIUM)[number];
export type CardSchema = (typeof CARD_SCHEMAS)[number];
export type PackStatus = (typeof PACK_STATUS)[number];

/* ---------- collections ---------- */
export interface ReferenceCollection {
  id: string; // permanent handle — never renamed (display comes from label)
  label: string;
  labelSingular: string;
  badge: string;
  schema: CardSchema;
  badgeBg: string;
  badgeFg: string;
}

/* ---------- cards ---------- */
export interface ReferenceExample {
  work?: string;
  medium?: string; // free text (see header note) — NOT the RefMedium enum
  year?: string;
  quality?: RefQuality;
  text?: string;
}

export interface ReferenceWorkListItem {
  title?: string;
  year?: string;
  note?: string;
  start?: boolean; // "start here" marker in an author's works list
}

export interface ReferenceEntry {
  id: string;
  kind: string; // == a collection id
  category: string;
  name: string;
  description: string;
  // example_cards
  examples?: ReferenceExample[];
  // principle_cards
  principle?: string;
  example?: string;
  application?: string;
  // author_cards
  meta?: string;
  knownFor?: string;
  signature?: string;
  works?: ReferenceWorkListItem[];
  // work_cards (formerly book_cards; gains `medium`)
  author?: string;
  year?: string;
  awards?: string;
  text?: string;
  medium?: RefMedium;
  // checklist_cards
  items?: string[];
  /** derived UI fields — injected by the app, never authored */
  _label?: string;
  _badge?: string;
  _bg?: string;
  _fg?: string;
}

/* ---------- the pack file ---------- */
export interface ReferencePack {
  id?: string; // matches the app's referencePackId and the manifest `id`
  name?: string;
  /** §3.2 version header */
  packVersion?: string; // semver
  schemaVersion?: number; // == REF_SCHEMA_VERSION for packs in this repo
  lastUpdated?: string; // YYYY-MM-DD
  minAppVersion?: string;
  collections: ReferenceCollection[];
  entries: ReferenceEntry[];
}

/* ---------- manifest.json ---------- */
export interface ManifestPackEntry {
  id: string;
  label: string;
  file: string; // repo-relative path, e.g. "packs/reference-scifi.json"
  packVersion: string;
  schemaVersion: number;
  lastUpdated: string | null;
  collections: string[]; // display labels
  entryCount: number;
  approxSizeKB: number;
  status: PackStatus;
  mediumCoverage: RefMedium[];
  /** optional; entries MUST be exact manifest `id` values, never short names */
  adjacentPacks?: string[];
}

export interface Manifest {
  schemaVersion: number;
  updated: string;
  packs: ManifestPackEntry[];
}
