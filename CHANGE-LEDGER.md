# Change Ledger — the one place every improvement is recorded

**Created 2026-08-21, at the close of the Comedy build (pack nine).**
**This file is canonical and lives on disk.** It sits beside `PACK-SPEC.md` and
`schema/pack.schema.json`, and every build reads all three before it starts.

## What this file is for

Nine packs have been built. Each one improved the process, and each one wrote those
improvements into its own blueprint's §17 delta log — nine separate documents, in two
different places, in no shared format. One consolidation was ever run
(`_build/literary/alignment-pass.md`, at pack seven), and it covered packs one to six only.

That meant there was no single answer to three questions a build actually needs answered:

1. What changed since the last pack, that I must build under?
2. Which of those changes are owed to packs already shipped?
3. Which of those debts have been paid, and which are still open?

**This ledger answers all three.** Part 1 is the register of standing rules — every change
that applies to more than one pack, with a grid showing where it stands per pack. Part 2 is
the index of pack-local decisions, so a later build can look up why a pack did something
without opening the blueprint. Part 3 is the open-debt list — the scheduled back-port pass.
Part 4 is the rule for keeping this file alive.

## How to read the grid

| Mark | Meaning |
|---|---|
| **A** | Applied. The pack ships under this rule. |
| **P** | Pending. The rule applies to this pack and has not been applied. A real debt. |
| **–** | Does not apply. The pack has no material the rule touches. |
| **?** | Unaudited. Nobody has checked. Treat as pending until checked. |
| **C** | **Committed at blueprint, not yet verified against shipped cards.** Added 2026-09-03 with the Erotica column. Converts to `A`, `P` or `–` at that pack's step 9 and **never stands after a pack ships**. |

Pack columns, in build order, with the version on disk at 2026-08-21:

`SF` Science Fiction 1.0.0 (809) · `MCT` Mystery, Crime & Thriller 1.0.0 (617) ·
`FAN` Fantasy 1.0.2 (612) · `HOR` Horror 1.0.1 (612) · `ROM` Romance 1.0.2 (612) ·
`HIS` Historical 1.1.1 (612) · `LIT` Literary 1.0.0 (612) · `WAR` War & Military 1.1.0 (613) ·
`COM` Comedy 1.0.1 (612) · `WES` Western 1.0.0 (612) ·
**`MNG` Manga 1.0.0 (612), appended 2026-08-25.**

**Updated 2026-08-22, at the close of the Western build (pack ten).** Four packs were bumped
at Western's publication: `HIS` 1.1.1 → 1.2.0, `WAR` 1.1.0 → 1.2.0 and `LIT` 1.0.0 → 1.1.0,
each gaining one reciprocal Western hand-off card, and `COM` 1.0.0 → 1.0.1, correcting
`subgenre-32` against what Western actually shipped.

**Updated 2026-08-27, retro-pass B2 (patch bumps only — no pack gains or loses an entry except
SF, whose count is itself the correction; see "Retro-pass B2 corrections" below and T-14).**
`SF` 1.0.0 → **1.0.1** (809 → **782** entries, 169 → 142 author cards) · `HOR` 1.1.0 → **1.1.1**
· `ROM` 1.1.0 → **1.1.1** · `HIS` 1.2.0 → **1.2.1** · `WES` 1.0.0 → **1.0.1** · `FAN` 1.1.0 →
**1.1.1**. These six patch numbers match `remediation-plan.md` §5's target for each pack, but
**do not yet include that section's V-02 disclosure component** (Stage 2 is blocked on a TJ
ruling and was not run) — so a given pack's patch may need one more bump when V-02 lands, per
T-14. `MCT` and `WAR` (War & Military) are untouched: MCT's only owed change is V-02 (not yet
run); War & Military has none owed. Comedy, Literary and Superhero are untouched here — their
`remediation-plan.md` §5 entries are Stage 8/9 work (the year table, the judgement fixes),
Opus's, not B2's.

**Updated 2026-08-31, at the close of the TV Formats build (pack thirteen) and its session 4
claims audit.** `TVF` TV Formats **1.0.0 (612)**, status flipped `planned` → `live` in
`manifest.json`. Four packs bumped for the reciprocal hand-off cards owed at build lock (§4b of
`_build/tv-formats/blueprint-LOCKED.md`), each a minor version per T-14: `COM` 1.1.2 → **1.2.0**
(614, `subgenre-34`), `MNG` 1.0.0 → **1.1.0** (613, `subgenre-41`), `SUP` 1.1.1 → **1.2.0** (614,
`subgenre-42`), `SF` 2.1.0 → **2.2.0** (1,201, `trope-221`). All five packs re-validated
`PASS — 0 error(s)` in the session container (T-11) after the changes.

**The model-routing experiment (playbook §"Model routing and the claims audit", v2.1) — the
dated finding the playbook requires either way.** TV Formats was built under the ARCHITECT /
BUILDER / AUDITOR split: the architect wrote the blueprint and planted three whole-build controls
(`controls/CONTROLS-sealed.md`) plus six architect-drafted cards (`wip/architect-drafts/`,
D1–D6, three sound and three salted); the builder drafted all 31 batches and every merge; this
session closed as the claims audit. **Result: all three sealed controls were correctly rejected**
— the factual control (D5, a fabricated International Emmy category) caught by independent
verification against the award body's own category history; the structural control (D3/D4, an F4
violation) caught by the instrument itself, screen 15, firing with the exact reason the control
specified, not by hand-check; the judgment control (D6, a one-sided last sentence on the
sitcom-origin dispute) caught by close reading during the seed-harvest research pass, before it
ever reached a batch. **One methodological gap, stated rather than hidden**: the "blind-builder"
test the injection mechanism was built to run — a session screening D1–D6 without knowing which
were salted — never actually happened. The batches-1–12 session already knew which three were
controls (carried over context from the architect's own cross-check exchange), and the claims
audit is this same continuous session rather than the fresh one the playbook specifies, so the
control-rejection result is genuine but the *blind* half of the experiment is unmeasured. **Session
4 also ran, for the first time against this pack, the seven of eight shared cross-pack instruments
`cross_pack_identity.py` had not already covered** (`TOOLS-VERIFIED.md` §10) — found and fixed two
real name-form defects (`D. B. Weiss`, `John de Mol Jr.`), confirmed a dozen-plus flagged items as
tool-artifact false positives rather than waving them through unread. **Net assessment: the
instrument coverage held under routing — every defect that shipped and was later caught was caught
by a named instrument or a stated hand-check, not one by "the model just knew."** Costed
separately in `_build/tv-formats/build-log.md`'s closing entry; not reproduced here.

---

# Part 1 — The standing register

Every row here applies to more than one pack. `Level` says what a back-port would actually
cost: **Doc** = a rule in a shared document, no card changes; **Card** = text inside shipped
entries; **Tool** = build tooling, which only affects future packs.

## 1A. Schema and file shape

| ID | Rule | Level | From | SF | MCT | FAN | HOR | ROM | HIS | LIT | WAR | COM | WES | SUP | MNG | TVF | ERO |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|-----|---|-----|
| S-01 | `medium` is **mandatory and enum-bound** on every `work_cards` entry. There is no omission path — the validator errors on a missing value. The "omit it and name the form in prose" escape hatch recorded in several handoffs **does not exist**. | Doc + Card | LIT 17.14, COM 17.6 | A | A | A | A | A | A | A | A | A | A | A | A | ? | **A** |
| S-02 | ~~Stage plays, classical drama, epic and verse narrative take `medium: novel`, with the true form named in the card's opening clause (`Stage play.`).~~ **RETIRED 2026-08-28 — the rule documented a falsehood.** The medium enum had no word for a play, a short story or a poem, so this row told builders to write `novel` and explain in prose. **Schema v2.1 adds `stage`, `short-fiction` and `poetry` (S-11).** Measured at retirement: **117 work cards across TEN packs carry `medium: novel` while their own text says otherwise** — *Twelfth Night*, *Tartuffe*, *Lysistrate* and *The Importance of Being Earnest* among them. **This row was marked `A` for Comedy and `–` ("does not apply") for eight packs that are full of it.** Sixth ledger row found narrower than the disk, after S-05, S-06, T-07, S-08 and C-08 — and the only one that prescribed the defect rather than merely missing it. **RETAG APPLIED 2026-08-28** — 110 cards across EIGHT packs, not 117 across ten; see the dated section below and `_build/retro-pass/medium-retag-log.md`. `–` for ROM and HIS means five detectors and a hand read found no card this rule touched, not that nobody looked. | Doc | COM 17.6 | A | A | A | A | – | – | A | A | A | A | – | – | ? | **A** |
| S-03 | `example_cards.medium` is free text; `work_cards.medium` is a closed enum. Free-text values must be minted deliberately and recorded, never invented mid-build. Current vocabulary: novel · film · tv · play · comic · nonfiction · audio · stand-up · radio · sketch. | Doc + Tool | HOR guard 5, COM 17.13, 17.24 | ? | ? | ? | A | A | A | A | A | A | A | P | A | ? | **A** |
| S-04 | `works[].start` is the real field name. It is a typo shared by every live pack and it **stays**. | Doc | FAN | A | A | A | A | A | A | A | A | A | A | A | A | ? | **A** |
| S-05 | Years are strings everywhere, negative years included. Collection ids are `work` and `psychology`, never `psych`. Full seven-field collection metadata; `_label`/`_badge`/`_bg`/`_fg` baked on every entry. **Corrected 2026-08-27 (retro-pass, `TOOLS-VERIFIED.md` §"What the port had to change", 2026-08-25): the collection-id clause is contradicted by four packs on disk — Historical, Horror and Romance use `psych`, and Science Fiction's work collection is `book`. Marked A for every pack without being re-read. Not fixed in this pass (a collection-id rename is schema surgery, out of this pass's remit); cells for the four packs below changed to `?`.** **SF's half closed 2026-08-28: the `book` collection was renamed `work` in 2.0.0 under the dated PACK-SPEC §2 exception, so no pack uses `book` any more and SF's cell is `A`. The three `psych` packs are Historical, Horror and Romance — this row's own prose had them right and PACK-SPEC's standard-ids note had them backwards; corrected on disk the same day.** | Doc + Card | Audit 2026-08-19, LIT 17.15 | **A** | A | A | ? | ? | ? | A | A | A | A | A | A | ? | **A** |
| S-06 | `work` badge held at `bg #1a2e33` / `fg #8ac8d8`. The lineage's `#1a2028`/`#90aec0` ships in no pack and is not the standard. **Corrected at B2, 2026-08-27: SF's `book` collection's `_bg`/`_fg` disagreed with this standard (`_label`/`_badge` were fixed under T-25's re-bake; the colour question is Class B, not yet ruled, so cells were changed to `?` rather than to `A` — see "Retro-pass B2 corrections" below).** | Doc | ROM 17.12, LIT 17.16, alignment F | **?** | A | **?** | A | A | A | A | A | A | A | A | A | ? | **A** |
| S-07 | Works share **one namespace** per `kind` across all media. Cross-pack duplication of works is intentional and is never deduped. | Doc | HOR | A | A | A | A | A | A | A | A | A | A | A | A | ? | **A** |
| S-08 | Adaptation disambiguation `Title (YYYY film\|tv\|game)` is decided at blueprint stage, not at assembly. The bare title stays with the novel. **Corrected 2026-08-27: the vocabulary itself is narrower than the disk — Superhero has shipped a `(YYYY comic)` form 13 times, so Sonnet's B2 use of it for Horror `author-124` was matching existing practice, not extending the rule (R-029). This is the fourth ledger row found narrower than the disk, after S-05, S-06 and T-07 (R-029). Horror closed 2026-08-27 at B3 verification: R-028's `The Terror (1916 novel)` annotation applied to `author-16`'s bibliography, so all nineteen title collisions in the pass are now closed and `two_statements.py` reports Horror TITLE COLLISION 0.** | Doc | ROM 17.13, HIS, alignment G | A | A | A | **A** | A | A | A | A | A | A | A | A | ? | **A** |
| S-09 | `Title (YYYY, as Pen Name)` folds pseudonym attribution into the works-list note. No fifth author field, no inline `**` in body text. | Doc | ROM | A | A | A | A | A | A | A | A | A | ? | ? | ? | ? | **A** |
| S-10 | **The carded year is the year the work first appeared in the form it was written as.** One rule with three surfaces: a novel is carded by **first book publication** with the serial named where it matters; a short story by **first publication in any form**, normally the magazine; a film by **first public release including a festival premiere**. Western found all three separately and only then noticed they were one rule. | Doc + Card | WES 17.58, 17.62, 17.74 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | A | ? | **A** |
| S-11 | **Medium enum, schema v2.1 (2026-08-28): `novel · short-fiction · poetry · stage · film · tv · comic · manga · graphic-novel · game · audio · nonfiction`.** Widened from nine because the enum had no word for three forms the library cards constantly — measured across the twelve packs: **69 plays, 36 short-fiction works and 12 poems tagged `novel`**, plus 74 free-text `"play"` and 74 short-fiction example media. **`radio` NOT added** — use `audio`, name the broadcast in `text`. **`stand-up` NOT added** — card the special by its release medium. **`memoir` is `nonfiction`.** Widening an enum is backward-compatible: all twelve packs validate unchanged against v2.1. **Applied to the schema, the spec, the README and the app; the 117 mis-tagged cards are a separate pass (Part 3 item 21).** **CORRECTION 2026-08-28 (F-21): this row was marked `A` twelve times while `tools/validate_pack.py` still carried the retired nine-value set in its own `MEDIUM` constant** — the schema had the twelve, the thing that enforces the schema did not, and the first pack retagged under v2.1 failed the gate. Reconciled during the retag pass. **Seventh ledger row found narrower than the disk.** | Doc + Tool | SF rebuild, 2026-08-28 | A | A | A | A | A | A | A | A | A | A | A | A | ? | **A** |

## 1B. Scope and structure

| ID | Rule | Level | From | SF | MCT | FAN | HOR | ROM | HIS | LIT | WAR | COM | WES | SUP | MNG | TVF | ERO |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|-----|---|-----|
| B-01 | Total inside **580–650**, target **612**. **AMENDED 2026-08-28, pack one only, dated and reasoned (SF rebuild R1).** Science Fiction ships at **1,200**. The reason is a content argument and not a preference: SF is the only genre in this library whose canon spans **five media across a century** — novels, film, television, games, comics — plus a short-fiction tradition larger on its own than some genres' entire canon, and the pack is the working foundation of a six-book universe rather than one genre reference among twelve. The adversarial review ruled 1,200 a vanity number and cut it to ~864; **the operator overruled it and the reason is on the record** (`_build/scifi/grok-review-response.md` Q1). **The review's cost is accepted:** later alignment passes will ask why Fantasy is half the size, and the answer is written down here — the other eleven are sized to their own genres, not held back. SF's cell is `–` for the 580–650 band and **A** for this amendment. | Doc | Grok 2026-08-10; amended SF rebuild 2026-08-28 | – | A | A | A | A | A | A | A | A | A | A | A | ? | **A** |
| B-02 | Eight core collections; specialists capped at **two**. Spending one is the norm (HIS, WAR, COM); spending both is exceptional (ROM, LIT). | Doc | Grok 2026-08-10 | ? | A | A | A | A | A | A | A | A | A | A | A | ? | **A** |
| B-03 | Authors + Works ~300–320 is a **ceiling, not a floor**. Packs land under it deliberately when the verification burden is heavy (ROM 280, LIT 280, COM 282). **AMENDED 2026-08-28, pack one only (SF rebuild R1).** Science Fiction lands at **500** (200 Authors + 300 Works), for the same five-media reason B-01 records, and pays for it with a stated verification obligation rather than a waiver: **R11 — the disclosed-debt count may not grow.** SF holds 91 of the library's 349 "no award research performed" tokens, and every one of the +116 new Works cards carries a real awards line or an explicit dated gap token naming the body consulted. A ceiling raised without a matching obligation is a ceiling removed. | Doc | ROM, alignment J; amended SF rebuild 2026-08-28 | – | – | – | – | A | A | A | A | A | A | A | A | ? | **A** |
| B-04 | The blueprint count table must **sum to the number the pack ships**, with no unallocated slack. A table that does not sum is a target, not a control — the assembly count screen can only be a hard assertion if it checks the shipped figure. | Doc | COM 17.3 | – | – | – | – | – | – | – | – | A | A | A | A | ? | **A** |
| B-05 | Specialist collections are weighted toward **rules, not catalogues**, and are never named "Primers" — the catalogue-flavoured naming both Historical and War rejected on inspection. | Doc | Grok on HOR, HIS 17.1, WAR 17.4 | – | – | A | A | A | A | A | A | A | A | A | A | ? | **A** |
| B-06 | Genre overlap is handled as explicit **hand-off cards naming the owning pack**, decided at blueprint stage. Apparatus size has grown with the library: LIT 6, WAR 7, COM 9. | Doc | HIS 17.5, LIT 17.4 | – | – | – | – | – | A | A | A | A | A | A | A | ? | **A** |
| B-07 | Hand-off card names are checked against the destination pack's shipped card names before locking. §4 asserting "these names are distinct" is not a check. | Doc | COM 17.23 | – | – | – | – | – | – | – | – | A | A | A | A | ? | **A** |
| B-08 | Authors are grouped **by tradition or position, not by era**, wherever a countable content floor keys on `category`. | Doc | WAR 17.31, COM 17.12 | – | – | – | – | – | – | – | A | A | A | A | A | ? | **A** |
| B-09 | Media weighting is permitted where a medium is **constitutive of the genre's craft conversation**, never as a courtesy. Ratified precedents: HOR (film + games), WAR (45/150 screen and games), COM (screen-majority-adjacent). | Doc | HOR 17.3, WAR 17.8, COM 17.4 | A | A | A | A | – | A | A | A | A | A | A | A | ? | **A** |
| B-10 | An organising claim may **concede a named exception class** rather than claim universality. A claim rescued from every counter-example is unfalsifiable. | Doc | COM 17.8 | – | – | – | – | – | – | – | – | A | A | A | A | ? | **A** |
| B-11 | The boundary rule is stated **with its own failure cases and its admitted costs on the card**. A stated cost is cheaper than a rule quietly bent at Batch 12. | Doc | HIS 17.8, COM 17.22 | – | – | – | – | – | A | A | A | A | A | A | A | ? | **A** |
| B-12 | **A pack can state a rule in its blueprint and break it in its cards, and nothing catches it.** The screens test structure, the research passes test facts, and neither tests whether cards obey the pack's own rulings. Western wrote an explicit §0 ruling on its flagship award trap and then broke it, in the same direction, on six cards. **Every ruling that constrains card prose needs either a screen or a named hand-check in the verification brief.** | Doc | WES 17.75 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | A | ? | **A** |
| B-13 | **A roster stops being freely editable the moment another collection points at it, and the number of degrees of freedom a build has falls with every batch merged.** Superhero's pass-D addendum was handed an approved payment plan naming four blocks to fund a new category; **two of them could not pay**, because every one of their works was already cited by merged Continuity cards under the citation screen. The constraint did not exist when the plan was written. **Sequence roster-editing decisions before the collections that cite them, or price the citation lock into the plan.** | Doc | SUP 17.96 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | ? | **A** |
| B-14 | **Every prose list in a governance document needs a machine-readable twin or it diverges from the build.** Manga's blueprint named sixteen checklists in prose and a different sixteen were built; its §6 named a sensitive subject the Creators roster omitted entirely. The data-form lists — rulings, category tables, the debt set — did not drift once. **Prose is documentation; only a table is a control.** | Scope | MNG 17.42 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | ? | **A** |
| B-15 | **When one side of a territory split is already locked, the split is an adjacency rule and needs a different instrument.** Reservation requires declaring before either side is drafted. Manga's second specialist was scoped against a Craft collection closed eight batches earlier, so the fence ran the other way: the specialist card must NAME the craft card whose claim it touches. | Scope | MNG 17.32 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | ? | **A** |
| B-16 | **A creator carded in two packs must be read differently in the second, and only a screen makes that true.** Thirteen of Manga's 120 creators are carded elsewhere in the library — seven by debt obligation, six by coincidence of subject. The debt screen checks that a debt was collected, never that the collection added anything. | Scope | MNG 17.39 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | ? | **P** |
| B-17 | **A normalisation that lets a debt discharge can let a DECLINE discharge too.** Manga's key-stripping made a bare manga card satisfy both the suffixed manga subject it should and the declined television subject it must not. The decline reported as carded and the only symptom was a count falling. | Scope | MNG 17.48 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | ? | **A** |

## 1C. Verification standards

These are the rows most likely to carry real debt, because they change card text.

| ID | Rule | Level | From | SF | MCT | FAN | HOR | ROM | HIS | LIT | WAR | COM | WES | SUP | MNG | TVF | ERO |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|-----|---|-----|
| V-01 | **The named-prize trap.** Prizes named after a person are routinely attributed to that person. Search actively for awards *commonly but wrongly attributed*. | Doc + Card | MCT, FAN, HOR | ? | ? | ? | A | A | A | A | A | A | A | A | A | ? | **A** |
| V-02 | **"None" is a verified negative,** not an unresearched blank. Where nothing is found, the card says "None" and the body says why the misattribution arises, **or, where no research was performed at all, the card carries the fourth V-03 state naming that plainly (see V-03).** **Corrected 2026-08-27 (B3, Stage 2, TJ's ruling R-033):** SF, MCT and Fantasy's 258 empty awards strings are now stamped with the fourth-state disclosure token — disclosure discharges this row's requirement (state something, do not stay silent), even though the research itself is deferred to the next pass. | Card | HOR, alignment B; disclosed B3 | A | A | A | A | A | A | A | A | A | A | A | P | ? | **A** |
| V-03 | **Four-way distinction in the Awards field**, the fourth added by TJ's ruling 2026-08-27 (R-033): a *verified negative* ("None" plus the body explaining why the misattribution arises), a *documentation gap* (nothing located, stated as such, with a body and a date where one exists), a *nomination that did not win*, and — new — **no research performed at all**, stated as exactly `[no award research performed — retroactive audit 2026-08-27]`, never Superhero's dated `[gap: … consulted DATE]` form, which asserts a consultation that did not happen. **Corrected 2026-08-27 (R-033, and R-032's finding recurring on this row within the hour): Comedy's cell was marked `A` while 46 of its cards shipped a bare `None.` with not one word about the award record — the opposite of what this row requires — while Horror's 18 bare fields showed their working on ten. Same mark, opposite realities.** Applied at B3 Stage 2: 349 fields stamped with the fourth state (SF 91, MCT 85, FAN 82, COM 46, ROM 37, HOR 8); 14 already-correct verified negatives left untouched (HOR 10, ROM 4); 3 Romance cards (`work-23`, `26`, `61`) left flagged, not fitting any of the four states, handed to the next pass. Manga's 97 are out of this pass's scope. | Card | COM 17.31; corrected R-033, applied B3 | A | A | A | A | P | ? | ? | A | A | A | A | P | ? | **A** |
| V-04 | **Every award claim states its type in the awarding body's own vocabulary.** AMPAS: *Awards of Merit* (annual, member-voted) vs *Special Awards* (Board of Governors, discretionary). Television Academy: *Category* / *Juried* / *Area* — the last explicitly non-competitive. Recording Academy: *Special Merit Awards* and *honorees*. Where a screen award went to producers rather than to a person, say so. | Card | COM 17.26 | **P** | **P** | **P** | **P** | ? | ? | ? | ? | A | A | A | A | ? | **A** |
| V-05 | **Three years attach to every Academy Award** and the card names which one it means: *award year* (eligibility, how AMPAS indexes), *ceremony year* (how the ceremony pages headline it), *release year* (a third and irrelevant figure). Card form: "the 1968 Academy Award, presented at the 41st ceremony in 1969". **BAFTA dates by ceremony year** for both Film and Television. | Card | COM 17.30 | **P** | **P** | **P** | **P** | – | ? | – | ? | A | A | A | – | ? | – |
| V-06 | **BAFTA has never used the category name "Best Situation Comedy."** Name the category as BAFTA actually named it in the year concerned; the names overlap rather than succeeding one another. | Card | COM 17.29 | – | – | – | – | – | – | – | – | A | – | – | – | ? | – |
| V-07 | **The four television credits are four distinct claims** — creator, writer, showrunner, "developed by". The most common factual error in writing about series television. | Card | COM 17.11 | **P** | **P** | **P** | **P** | ? | ? | ? | ? | A | A | A | – | ? | – |
| V-08 | **Submission ≠ nomination.** Also: BAFTA's public GAME Award ≠ BAFTA Best Game; GDCA Audience ≠ Choice; D.I.C.E.-awards ≠ DICE-studio; the four "Game of the Year" awards frequently disagree and are never collapsed. | Card | WAR 17.22 | **P** | – | ? | ? | – | – | – | A | A | ? | A | ? | ? | **A** |
| V-09 | **Preservation designations and polls are not awards.** National Film Registry, Sight & Sound, AFI, BFI, MoMA acquisition, public-domain status, "best of" lists — none appear in an Awards field. Registry eligibility is US-only, so a Registry year on a foreign film is a fabrication. | Card | HOR | ? | ? | ? | A | A | A | A | A | A | A | A | ? | ? | **A** |
| V-10 | **Awards on translated works index the translation, not the work.** A pack that dates by original-language year must say so on the card. | Card | HOR | ? | ? | ? | A | A | A | A | A | A | A | A | A | ? | **A** |
| V-11 | **Living-status check on every author.** Post-cutoff deaths look known and are wrong. Confirmed catches: WAR five (Caputo, Satrapi, Malouf, Deighton, Forsyth); COM three (Lodge, O'Hara, Newhart); ROM (Kinsella); HIS (Ngũgĩ, Vargas Llosa). **This decays — every pack needs re-checking on a schedule, not once.** | Card | alignment K | **P** | **P** | **P** | **P** | **P** | **P** | **A** | **A** | **P** | A | **A** | A | ? | **A** |
| V-12 | **Three-type pseudonym taxonomy** — personal / publisher-owned / rotating house-stable — asked of every author. Comedy added a fourth: the **character persona** (Dame Edna, Alan Partridge). The performer is the author; the persona is not. | Doc | ROM, COM 17.15, alignment E | ? | ? | ? | ? | A | A | A | A | A | A | A | P | ? | **A** |
| V-13 | **Author biography claims that the boundary deliberately excludes must not re-enter via biography.** War's instance: service and veteran status is a verification target, because jacket copy is unreliable in both directions. | Doc | WAR 17.11 | – | – | – | – | – | ? | – | A | – | – | ? | A | ? | **A** |
| V-14 | **Domain claims are verified like dates.** The genre-specific instance of one rule: HIS period claims, LIT technique attributions, WAR unit/operation/formation/casualty figures. | Doc | HIS, LIT 17.9, WAR 17.10 | ? | ? | ? | ? | ? | A | A | A | A | A | P | A | ? | **A** |
| V-15 | **The ABA "National Book Award" (1936–1942) is a different and earlier prize** from the modern National Book Award (founded 1950). Reconciled wording settled at pack seven and applied. | Card | alignment A | – | – | – | – | A | A | A | – | – | – | – | – | ? | – |
| V-16 | **An agent reporting a source as unreachable is itself a claim to verify.** Comedy's Pass H reported three awarding-body sites unreachable; Pass I reached all three via their search and results endpoints. | Doc | COM (Pass H/I) | – | – | – | – | – | – | – | – | A | – | A | A | ? | **A** |
| V-17 | **Contradiction between two verification passes → a narrow third pass, never a judgement call.** Where the third pass cannot settle it, the contradiction is labelled on the card rather than adjudicated. | Doc | ROM 17.17, COM | ? | ? | ? | ? | A | A | A | A | A | A | A | ? | ? | **A** |
| V-18 | Research files' **UNCONFIRMED items are carried into the verification brief as explicit targets**, not left in the research file. | Doc | ROM 17.15, alignment I | ? | ? | ? | A | A | A | A | A | A | A | A | A | ? | **P** |
| V-19 | **The hedge is banned.** “The pack does not enumerate” / “could not confirm against the awarding body's own list” on an `Awards` line. Western used it on twelve cards and **it concealed a documented, easily findable award every single time.** A hedge is a claim that the record was checked and found unclear; used in place of checking, it is a false statement about the pack's own process, invisible to every screen and dressed as the most careful thing on the card. **A card states the award or says nothing about awards.** **Measured 2026-08-27 by `hedge_check.py` (`TOOLS-VERIFIED.md` §7, retro-pass Stage 7): 38 BARE hedges in two packs — War & Military 37, Comedy 1 — everywhere else 0. Refused as a fix per R-030 (both already disclose a gap; what they lack is a body and a date, which needs research, not wording) and re-priced as the first research item of the pass after this one.** | Doc + Card | WES 17.85; measured Stage 7 | A | A | A | A | A | A | A | **P** | **P** | A | A | A | ? | **A** |
| V-20 | **Hedges decay, so verification re-tests hedges and not only assertions.** “Living status not independently confirmed” is a claim with a date on it. Western carried three that were simply out of date; left alone, a pack accumulates a sediment of caution that has stopped being true. | Doc | WES 17.71 | ? | ? | ? | ? | ? | ? | **–** | **A** | ? | A | A | ? | ? | **P** |
| V-21 | **The research roster is verified against nothing.** Verification passes check cards against the world; nobody checks the roster that fed them. Western's Authors roster recorded a “variously reported” ancestry that is not in dispute at all, and the card dutifully repeated a manufactured caution. **A landmine a research pass supplies can itself be an invention.** | Doc | WES 17.78 | ? | ? | ? | ? | ? | ? | ? | ? | ? | **P** | A | P | ? | **A** |
| V-22 | **A category string can have a discontinuous life.** The Spur's *Best Western Historical Novel* was valid 1972–1987 and again from 2014, and invalid across the twenty-six years between. A card built from a current category list silently back-dates the modern string across the gap, and a date-range check does not catch it. Where the era is uncertain, drop the category and state the body and year. | Doc + Card | WES 17.83 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | ? | ? | **A** |
| V-23 | **A contradiction between two passes may be a convention clash rather than an error.** Western's passes A and F disagreed on the Spur's founding year; the narrow third pass found **both correct** — the awarding body's own site gives the award year and its own history gives the presentation year. The third pass's job is to find which convention each side used before it looks for a mistake. | Doc | WES 17.64 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | ? | ? | **A** |
| V-24 | **When the briefing supplies a name or a claim, the briefing is the least reliable link in the chain.** V-21 says the research roster is verified against nothing; this is the narrower and more uncomfortable case — the *brief*, written by Claude, asserting a fact the sources never supplied. Superhero hit it three times: an invented scholar ("Anand Rai"), a real scholar under the wrong forename ("Kenneth Philips" for **Menaka** Philips, and the card was already correct), and a founding claim about the first superhero RPG that the source denies in the same paragraph that praises the game. **Generalised: when a pass reports an absence, check the query before recording the absence; when a brief supplies a name, verify it before the card does.** | Doc | SUP 17.94 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | ? | **A** |
| V-25 | **Where a pack states the same fact twice, a screen must compare the two statements.** Manga's Works roster and its Creator bibliographies both carry work years; nothing compared them and ten disagreed, mostly the *popular* year rather than the sourced one. A drift check cannot see it — both copies were wrong together. **Any pack with a roster and a bibliography inherits this.** | Ver | MNG 17.44 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | **A** | A | ? | **A** |
| V-26 | **A half-verified field reads as verified.** Manga's year screen corrected a bibliography year and never compared the attribution beside it, which was wrong. Verifying one property of a record makes the whole record look checked. **Check both properties or say which one you checked.** | Ver | MNG 17.50 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | ? | **A** |
| V-27 | **A roster cross-check must compare near-misses, not only matches.** Manga's name cross-check compares by an order-insensitive key; the case it was written for differs by one consonant, so its key differs and it was reported as an ordinary uncarded name. **An instrument that only compares what it has already decided is the same thing is not a cross-check.** | Ver | MNG 17.46 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | ? | **A** |
| V-28 | **A research document is not a delivery mechanism.** Three times in Manga a fact was recorded correctly in a pack document and never reached a card — checklists named in prose and not built, a sensitive subject the roster omitted, a recorded dispute the card dropped. **Anything a research pass records as required is checked against what shipped, not against the pass.** | Ver | MNG 17.52 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | ? | **A** |
| V-29 | **A pack's instruments prove internal consistency and nothing about the world.** Thirty-three screens, two rosters and five hand-checks reported Manga perfect while it described a creator dead five months as living. **Re-run V-11 immediately before every release, dated, with the method and its limits recorded.** | Ver | MNG 17.51 | ? | ? | ? | ? | ? | ? | **A** | **A** | **A** | ? | **A** | A | ? | **A** |
| V-40 | **Institutional activity in a person's name is not evidence of that person's life.** V-36 rules out the publishing announcement; this is its institutional twin. A centre or a lecture series carrying the name, a biography and its publicity tour, a retirement processed by an employer, a fellowship an institution closes, a programme named in honour, a colloquium a university announces — all of it reads exactly like a living person's footprint and none of it is the person acting. ⟨measured: four of War & Military's five `NO-EVIDENCE` verdicts had to clear an item of this kind — Boston University recording Ha Jin's June 2026 retirement and running a "2026 Ha Jin Lecturer" series; the Shay Moral Injury Center's Fall 2025 certificate programme; a 2025 biography of Tim O'Brien whose entire publicity is his biographer speaking; Notre Dame's January 2025 farewell closing James Webb's fellowship. Load-bearing on at least five of Superhero's twelve⟩. **Confirmation needs the person acting: a first-person statement, a dated interview, an appearance, a course they are listed as teaching, a prize received in person.** Corollary from the same run: a near-name collision can imitate this perfectly — a daily podcast launched in May 2026 under the name Jim Webb is hosted by a different man. Corollary the other way, from Superhero: **a pack can also be wrong by claiming too little** — `author-116` said "the person cannot be documented" of a man holding a named course-leader post. | Ver | WAR V-29 run 2026-09-04; second confirmation SUP the same day | ? | ? | ? | ? | ? | ? | ? | **A** | ? | ? | **A** | ? | ? | ? |
| V-44 | **An equality check that compares records by key is blind to order, and will report a perfect match on a file that has been reordered.** Reconciling Comedy's batch markdown, a card-by-card comparison keyed on `id` reported **"614 of 614 identical"** while one card sat 580 lines away from its position in the shipped file; `cmp` caught what the check could not. The check was not wrong about anything it looked at — it simply did not look at order, and it reported success in language that sounded total. **Report card-level equality and byte-level equality as two separate facts, and test a comparison that can only return success against a difference it ought to catch** — the break-harness discipline applied to a verification rather than to a parser. ⟨War & Military's second pass, the same day, ran the identical comparison twice: 614 of 614 identical at step zero, then **exactly two differing cards** after the repair, which is that test performed rather than promised⟩ | Ver | COM V-29 run, 2026-09-04; WAR second pass the same day | ? | ? | ? | ? | ? | ? | ? | **A** | **A** | ? | ? | ? | ? | ? |
| V-47 | **A nationality on an author card is a routing instruction, not a biographical nicety, and it decays like any other claim.** Literary's `author-76` read *"South African, born 1940"*; J.M. Coetzee has been an **Australian citizen since 2006** and resident in Adelaide, and the card as it stood would have sent the next re-check's enquiry to the wrong country. This is the living-status analogue of V-20's decaying hedge: the fact was true when carded and stopped being the operative one. ⟨measured: found by a reader as a side-finding, not by any screen; **129 of that pack's 130 author cards have never had their nationality or residence checked**, and its V-14 cell reads `A`⟩. **Where a card's nationality is the handle a future check would grab, verify it with the check, and state formation and current citizenship separately where they differ.** | Ver | LIT V-29 run, 2026-09-04 | ? | ? | ? | ? | ? | ? | **A** | ? | ? | ? | ? | ? | ? | ? |

## 1D. Content and contested material

| ID | Rule | Level | From | SF | MCT | FAN | HOR | ROM | HIS | LIT | WAR | COM | WES | SUP | MNG | TVF | ERO |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|-----|---|-----|
| C-01 | **Sensitive material is handled, not omitted.** State it at the level the record supports; mark disputes as disputed; never adjudicate. Silent omission is worse than careful inclusion. | Doc | pre-HOR | A | A | A | A | A | A | A | A | A | A | A | A | ? | **A** |
| C-02 | **Content the genre is sought out or avoided for is named plainly** in the card's opening clause, then analysed as craft. Neither censored nor relished. Generalised from Horror's extreme-content rule; Romance extended it to sex on the page, consent depiction and heat levels. | Doc | HOR 4, ROM 17.7, alignment C | ? | ? | ? | A | A | A | A | A | A | A | A | A | ? | **A** |
| C-03 | **Living religions and cultures are not monsters.** State the appropriation history and objections from within the culture; the card functions as a craft warning, not a stat-block. Screened by the cultural-borrowing checklist card. | Doc | HOR 5 | ? | ? | ? | A | A | A | A | A | A | A | A | A | ? | **A** |
| C-04 | **The contested-canon four-point method:** name the contest, state both positions at full strength, take no side, record who contests what. | Doc | ROM 17.8, HIS, alignment D | ? | ? | ? | ? | A | A | A | A | A | A | A | A | ? | **A** |
| C-05 | **A contested card with only one side sourced does not ship.** One-sided sourcing is side-taking that claims not to be. | Doc | WAR 17.23, COM 17.16 | ? | ? | ? | ? | ? | ? | ? | A | A | A | A | A | ? | **A** |
| C-06 | **The last-sentence test.** A card's final sentence is where adjudication hides. Read it separately — and read BOTH `principle` and `application` on a principle card; the argument ends at `principle`'s close but a fix there can leave `application` adjudicating the thing `principle` just declined to (R-000, R-024, F-10). | Doc | COM 17.10; SUP fixed B3 | – | – | – | – | – | – | – | – | A | A | A | A | ? | **A** |
| C-07 | **Contested findings in a specialist's own substrate are carded as contested,** with a CONTESTED list produced before Batch 1. A rules collection that states disputed findings as fact is worse than none. | Doc | HIS, WAR 17.12, 17.24 | – | – | – | – | – | A | – | A | A | A | A | A | ? | **A** |
| C-08 | **A robustness tier on every empirical Psychology card** — robust / contested / unreplicated, or a stated exemption where there is nothing to replicate. **Corrected 2026-08-27 (R-032): the row's own prose contradicted its own cells — it named Comedy as the sole implementer while marking four packs `A`, and Comedy in fact had zero per-card tiers (a collection-level policy card instead) while Western and Superhero were the two packs actually complete at 12/12. Manga's `A` covers cards 1–7 only, nothing on 8–16 — overstated. This is the fifth ledger row found narrower than the disk, after S-05, S-06, T-07 and S-08, and the first whose prose contradicted its own cells.** Applied at B3 (2026-08-27, `stage9-judgement-fixes.md` §5.3): 12 cards tiered and 2 given a stated exemption, drawn from each card's own prose, across COM (3 tiers + its pre-existing policy card), HIS (1), HOR (1), LIT (1), MCT (3), ROM (3 + its pre-existing policy card). **235 psychology cards remain untiered and refused — the research, not the wording, per `remediation-plan.md` §4.2 and R-032.** | Card | COM 17.17 (Grok); corrected R-032, applied B3 | **P** | **P** | **P** | **P** | **P** | **P** | **P** | **P** | **P** | A | A | **P** | ? | **A** |
| C-09 | **Every period-bound rule in a specialist names its period and its army/tradition.** A rule that silently generalises across five centuries is a defect. | Doc | WAR 17.25 | – | – | ? | ? | – | ? | – | A | – | ? | A | – | ? | **A** |
| C-10 | **Contested-canon categories** include: removals later partially restored; awards stripped or refused; persona-versus-performer where the persona is the contested object. The second intersects V-02 — "None" must distinguish never-won from won-and-revoked. | Doc | COM 17.21 (Grok) | ? | ? | ? | ? | ? | ? | ? | ? | A | A | A | ? | ? | **A** |
| C-11 | **No unnamed placeholders and no tradition-level exemplars** — a named published or released work every time. ~~SF carries 7 surviving placeholder example works.~~ **CORRECTED AND DISCHARGED 2026-08-28 (SF rebuild session 1, R3).** The figure of 7 was produced by a regex nobody had broken, and it was repeated by the adversarial review; two further unbroken scans gave 3 and 25. **A verified census — five detectors, seventeen break-cases, `_build/scifi/tools/checks/census.py` — measured 39**, in three classes, of which the third (`APPENDED`: a real title with a placeholder welded on, `Star Trek: Voyager — generic 'clean' fusion`) had never been caught by any regex in this library. All 39 replaced with named released works; SF now measures **0** and the cell is `A`. **Comedy measures 2** (`timing-40`, `timing-60`) while its cell reads `A` — the eighth ledger row found narrower than the disk; not fixed, one pack at a time. Every other pack measures 0 on the verified instrument. | Card | FAN, HOR 17.7; corrected SF rebuild 2026-08-28 | **A** | A | A | A | A | A | A | A | **P** | A | A | A | ? | **A** |
| C-12 | **True crime and any work drawn from a real crime:** analyse the published work's craft only, never the real case, victims or accused. | Doc | MCT | A | A | A | A | A | A | A | A | A | A | – | – | ? | – |
| C-13 | **Analysis and opinion only.** No extended quotation, no substitute-for-reading plot summary. This is what keeps the CC BY licensing clean. | Doc | MCT | A | A | A | A | A | A | A | A | A | A | A | A | ? | **A** |
| C-14 | **Where an affiliation cannot be sourced to the subject or an institution, the card states the sourcing rather than asserting the affiliation.** Western's rule failed twice in the same direction — two scholars described in secondary sources as citizens of named nations, with no institutional page saying so — and stating the sourcing is the rule's correct output under a shortage of evidence, not a defeat for it. Its counterpart is the **third identity category: a finding the subject accepted** (Thomas King, 2025), which is neither a live dispute nor a fabrication and which the library had no shape for. | Doc + Card | WES 17.53, 17.72 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | ? | ? | **A** |
| C-15 | **A card that hedges and asserts the same fact is an internal contradiction, and the hedge is the half to keep.** Western asserted a birth year inside the sentence disclaiming any reliable record of the subject's life. | Doc + Card | WES 17.73 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | A | ? | **A** |
| C-16 | **Where a subject has spoken about a sensitive matter more than twice, the card carries every position.** A claim-and-retraction framing is the default and it is often wrong: Jodorowsky's record has three positions, and the middle one — a 2007 revision rather than a withdrawal — contradicts the retraction the two-position framing implies. | Doc + Card | WES 17.77 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | A | ? | **A** |
| C-17 | **House style for a creator who changed the spelling of their own name: use the creator's own final spelling on every work, whatever its publication date, and state the change once, on the earliest carded work.** The alternative — period-accurate spelling per work — is more faithful to each credit box and produces a pack in which one person appears to be two, which is the error the rule exists to prevent. Superhero's case is Ishimori / Ishinomori, respelled in 1986, carrying four Works cards and one Author card across the boundary. | Doc + Card | SUP 17.95 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | ? | **A** |

## 1E. Tooling and assembly

Tool rows are **forward-only** — they change how a pack is built, not what a shipped pack
contains. A `–` in an early column means "built before the tool existed", not a debt.

| ID | Rule | Level | From | SF | MCT | FAN | HOR | ROM | HIS | LIT | WAR | COM | WES | SUP | MNG | TVF | ERO |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|-----|---|-----|
| T-01 | **The disk validator is the acceptance gate.** `tools/validate_pack.py` must report `PASS — 0 error(s)`, in addition to the assembly screens. `PACK-SPEC.md` + `schema/pack.schema.json` are the canonical floor — never rebuild the template from memory or from prose blueprints. | Doc | LIT 17.13, redirect | A | A | A | A | A | A | A | A | A | A | A | A | ? | **A** |
| T-02 | **Six parser guards**, each **broken deliberately against a fixture before Batch 1.** (1) trailing-period truncation (2) `start` not `star` (3) silent enum drift on `work_cards.medium` (4) the em-dash strip set `' ,–—-'` (5) free-text vs enum medium fields (6) work-notes over 150 chars, soft warn. | Tool | HOR, ROM 17.14 | – | – | – | A | A | A | A | A | A | A | A | A | ? | **A** |
| T-03 | **Sixteen assembly screens**, printed with their count at run time, all wired to the exit code. A miscounted screen list is how a screen goes missing — War's §18 said "ten" against a real thirteen. Comedy runs sixteen plus screen 10b. | Tool | COM 17.14 | – | – | – | – | – | – | – | – | A | A | A | A | ? | **A** |
| T-04 | **Work-reuse cap 2, keyed on `(work, medium)`, enforced per batch AND globally at merge time**, wired to the exit code. Title-only keys produce false positives on every adaptation. | Tool | FAN, HOR, playbook v1.8 | – | – | A | A | A | A | A | A | A | A | A | A | ? | **A** |
| T-05 | **`reuse_check.py` runs pre-merge and must load the WIP pack**, not only the batch handed to it — the cap is pack-wide. Ported blind from War to Comedy, it was blind to exactly the breach it exists to catch until rewritten at Batch 06. It then caught 6 breaches in batch 08, 10 in batch 09 and 22 in batch 12. | Tool | WAR 17.32, COM 17.25 | – | – | – | – | – | – | – | A | A | A | A | A | ? | **A** |
| T-06 | **Countable content floors, asserted at assembly and wired to the exit code.** An objective that cannot be counted is not a control. WAR: civilian-primary ≥40/150 Works, ≥35/130 Authors. COM: two floors — the unfunny and the non-Anglophone — as screens 15 and 16. | Tool | WAR 17.20, 17.29, COM 17.7 | – | – | – | – | – | – | – | A | A | A | A | A | ? | **A** |
| T-07 | **Dedupe screen keyed on `(kind, name)`, not `name`.** **Corrected 2026-08-27: SF's cell was marked `–` ("built before the tool existed") when SF in fact carried 26 exact duplicate author cards plus a punctuation pair — a real, uncaught debt, not an absence of applicability (R-004). Ruled `P` at R-004; genuinely discharged at B2 Stage 6 (27 removals, `name_cross_check.py` reports 0 duplicates) and marked `A` below, this time correctly.** | Tool | LIT (late fix), WAR 17.18 | **A** | – | – | – | – | – | A | A | A | A | A | A | ? | **A** |
| T-08 | **`rebuild.sh` replays the whole build** from batch markdown to a byte-identical pack file, before shipping. This is what makes a late fix in an already-merged batch a one-command operation. | Tool | COM | – | – | – | – | – | – | – | – | A | A | A | A | ? | **A** |
| T-09 | **Anti-duplication tests inside a collection are wired to assembly, not left as prose.** Comedy's screen 10b was added mid-build after a hand check found two specialist cards failing a test §5a had stated and nobody enforced. | Tool | COM (screen 10b) | – | – | – | – | – | – | – | – | A | A | A | A | ? | **A** |
| T-10 | **Verify-to-file / condense-to-brief.** Agents `Write` the full report to a file and return ≤400 words containing *nothing but* errors and UNCONFIRMED items. Two agents per Authors/Works batch, pipelined one batch ahead; a narrow third pass where the error lives. | Doc | HOR (v1.9) | – | – | – | A | A | A | A | A | A | A | A | P | ? | **A** |
| T-11 | **The validator runs against staged copies in the session container**, not on TJ's desktop — the desktop workspace's `jsonschema` predates `Draft202012Validator` and has no network to upgrade. Same script, same schema, same bytes. | Doc | WAR 17.17 | – | – | – | – | – | – | – | A | A | A | A | A | ? | **A** |
| T-12 | **Disk is canonical.** Claude writes `packs/reference-<genre>.json` and updates `manifest.json` and `README.md` on disk, then shows validator PASS. **Claude performs no git operations, ever — TJ publishes.** | Doc | LIT 17.17, redirect §5 | A | A | A | A | A | A | A | A | A | A | A | P | ? | **A** |
| T-13 | **Build paperwork lives on disk, not in the project** (TJ, 2026-08-21). Blueprint, build log, batch documents, research reports, changelog and handoff all live under `_build/<genre>/`. The project holds the historical archive of packs one to seven only. | Doc | TJ 2026-08-21 | – | – | – | – | – | – | – | – | A | A | A | A | ? | **A** |
| T-14 | **Version semantics:** patch = corrections, minor = new entries. A reciprocal hand-off card added to a shipped pack is a **minor** bump. Comedy's blueprint specified 1.0.1 for the War patch; the spec won and it shipped as 1.1.0. | Doc | COM 17.34, PACK-SPEC §1 | A | A | A | A | A | A | A | A | A | A | A | P | ? | **A** |
| T-15 | **Parser guard 7 — the unknown-field guard.** A `Key:` line outside the card's shape is now a hard error naming the allowed set. Western found `Note:` fields silently discarded from twenty-eight Authors cards, taking the award traps with them: the merge reported success, the count was right, and all seventeen screens passed. **Six packs were built with a parser that had this behaviour and none has ever been checked for it** — the batch markdown is archived and the sweep is cheap. | Tool + Card | WES 17.69 | **P** | **P** | **P** | **P** | **P** | **P** | **P** | **P** | **P** | A | A | A | ? | **A** |
| T-16 | **A screen whose dependency is built last must be dry-runnable against a stub.** Western's specialist anti-duplication screen is FINAL-mode only, so its errors arrived at 612/612 with nothing left to trade. The one dry run that was possible, at Batch 12, is the reason the screen is a citation cap and not the unachievable uniqueness test it started as — which is the whole argument for running the others early. | Tool | WES 17.67, 17.89 | – | – | – | – | – | – | – | – | ? | A | A | A | ? | **P** |
| T-17 | **Documents are delivered, not just written.** Every handoff, Grok review brief, build log, changelog entry and verification report is **sent as a file with `SendUserFile`** — at the moment it is finished, and again in the session's closing message, which names it. TJ should never have to go looking on disk or ask where something is. The disk copy stays canonical; the delivered file is the copy he receives. **Any session that ends with a handoff on disk ends with that handoff sent, including sessions that only edited it.** | Doc | TJ 2026-08-22 | – | – | – | – | – | – | – | – | – | A | A | A | ? | **A** |
| T-21 | **A screen whose collection is empty must report NOT RUN, not run.** Manga's screens 18 and 31 are scoped to one collection; with it unbuilt neither set its flag, so the gate line counted both as run having examined zero cards — `28 of 31` was true of the loop and false of the pack. **Empty input is not a pass.** Third location of T-18. | Tool | MNG 17.33 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | ? | **A** |
| T-22 | **Where a document and a parser disagree about a format, fix the document.** `work_cards` are listed in BATCH-FORMAT.md as taking a `Desc`; the builder generates `description` from `Text` and guard G7 refuses the field, because honouring it would silently discard a hand-written sentence. **The executable contract was right all three times this has arisen.** | Tool | MNG 17.45 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | ? | **A** |
| T-23 | **Never renumber card ids that other cards may already reference.** Manga renumbered one batch before merging and five references across four batches silently retargeted, including a contested-authorship card pointing at the wrong person. **All five resolved and the referential-integrity screen reported them healthy.** A reference audit printing every reference beside its actual target now runs in the standing check. | Tool | MNG 17.49 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | ? | **A** |
| T-24 | **A clean fixture that would fail a live screen is not a clean fixture.** Twice in Manga a new screen turned the clean test pack red — once because it modelled a pack that could not ship, once because it lacked a data file the shipping configuration has. **When a new screen changes the clean fixture, the fixture is usually what was wrong.** | Tool | MNG 17.40 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | ? | **A** |
| T-25 | **The validator compares baked presentation fields against the pack's own `collections[]`, keyed on `kind`.** `_bg`/`_fg`/`_label`/`_badge` must be present and must equal that entry's collection's `badgeBg`/`badgeFg`/`label`/`badge`. This does not assert a library-wide colour standard (S-06 is separate and unresolved for two packs) — it only asserts a pack agrees with itself. Added retro-pass Stage 1, shown RED on Historical (613/613 entries, fields entirely absent) before the Stage 3 re-bake and green after, per `grok-review-response.md` G-05. | Tool | retro-pass Stage 1, 2026-08-27 | A | A | A | A | A | A | A | A | A | A | A | A | ? | **A** |
| V-39 | **A pack's batch markdown is not canonical because it exists. Replay it and prove it reproduces the SHIPPED pack before writing one character of repair into it.** Four packs ran this proof on 2026-09-04 and **all four had drifted**, none of it recorded. War & Military: the F-20 medium retag applied to the JSON and never written back, two reciprocal hand-off cards missing, a craft rewrite surviving only inside a build snapshot — ⟨measured: a replay of the batches as found produced **612** entries against a shipped **614**⟩, and the pack carried no build toolchain on disk at all. Superhero: eleven diacritic restorations, two hand-off cards, two attribution corrections and — the one that matters — **`history-18`'s post-ship rewrite, which a replay would have put back, undoing an adjudication on a card whose own title calls the credit contested** ⟨measured: 612 against 614⟩. Comedy: **71 cards differing in at least one field and 2 absent entirely** ⟨measured⟩. Literary: **a replay would have regressed the published pack by 118 cards** — 18 of ordinary drift and 100 from the parser defect at T-46 ⟨measured⟩. **In every case a pure replay would have silently regressed a published pack, inside something labelled a repair.** Reconcile from the shipped file verbatim, prove replay-equals-shipped, and only then repair. **And read the merge output, not only the comparison**: Science Fiction's `merge.py --init` seeds the working file from the shipped pack, so its comparison reported a perfect match after **nineteen `MERGE FAIL` lines**. | Tool | WAR V-29 run 2026-09-04; confirmed independently by SUP, COM and LIT the same day | ? | ? | ? | ? | ? | ? | **A** | **A** | **A** | ? | **A** | ? | ? | ? |
| V-41 | **An enumerated set that names categories by string goes stale the moment a category is renamed, and a content floor built on it becomes a silent lie.** Comedy's screen 16 reported **23 non-Anglophone works against a floor of 25** and had done so since the rename. Nothing was missing: the category had been renamed to `Yiddish, Hebrew and Jewish-Diaspora Humour` in the batch markdown and the shipped pack while `config.NONANGLO_CATEGORIES` still said `Yiddish and Jewish-Diaspora Humour`, so two work cards silently stopped counting. **The failure presents as missing content and invites someone to write two new cards to satisfy it — which would have put invented material into a published pack.** A screen that counts by matching a name must be checked against the corpus's actual distinct values, not trusted. ⟨measured: with the name corrected the screens reproduce the build log's own closing figures exactly — non-Anglophone works 25/25, authors 22 against a floor of 20⟩ | Tool | COM V-29 run, 2026-09-04 | ? | ? | ? | ? | ? | ? | ? | ? | **A** | ? | ? | ? | ? | ? |
| V-42 | **A tool that stamps a date from the system clock cannot be replayed, and a config constant it ignores is dead config.** Comedy's `assemble.py` wrote `pack["lastUpdated"] = datetime.date.today()` while `config.LAST_UPDATED` sat unused beside it, so every replay produced a different file and **byte-identity was impossible by construction** — V-39's chain proof could never have passed. The constant existed, was correct, and was silently unreachable. **Anything a replay stamps comes from configuration, never from the environment.** Fixed in Comedy's `v29-work/` copy only; the canonical copy in that pack's tree still has it. | Tool | COM V-29 run, 2026-09-04 | ? | ? | ? | ? | ? | ? | ? | ? | **A** | ? | ? | ? | ? | ? |
| V-43 | **A one-off script that writes a pack file directly leaves byte-level artifacts the toolchain can never reproduce, and it does it to every pack it touches.** `_build/tv-formats/reciprocal_cards.py` serialised with `indent=2` where the toolchain writes `indent=1`, and added its card with `entries.append()` rather than placing it in its collection block. **One script is the sole cause of both anomalies in four packs** — comedy, manga, superhero and scifi are exactly the four packs on disk at indent 2, and comedy, manga and superhero each carry exactly one stray card at the end of `entries`. Neither is a content difference and nothing reads either, but both defeat a replay-equality proof, and a replay that silently reformats a whole file buries the real diff in it. **A script that writes a pack must match the toolchain's serialisation and insertion, or the pack it wrote can no longer be proved.** ⟨2026-09-04: **Superhero moved its stray card into place; Comedy deliberately kept the append order so its replay stayed byte-identical.** The inconsistency is accepted for now and is Part 3 work, not a defect of either pack.⟩ | Tool | COM V-29 run, 2026-09-04 | ? | ? | ? | ? | ? | ? | ? | ? | **A** | ? | ? | ? | ? | ? |
| V-45 | **A break-harness fixture that hard-codes a known-bad value stops testing the moment that value becomes legal, and reports a failure rather than going quiet.** Comedy's `smoke_test.py` poked the literal medium `"stage"` into a merged pack to prove the enum guard fires. F-20 made `stage` a legal medium in schema v2.1, so the guard correctly did not fire and the fixture reported `FAIL` on a guard that was working perfectly. The harness was right that something had changed and wrong about what. **A fixture asserting that a guard rejects something must draw its bad value from outside the live enum at run time, not from a literal frozen at writing time.** | Tool | COM V-29 run, 2026-09-04 | ? | ? | ? | ? | ? | ? | ? | ? | **A** | ? | ? | ? | ? | ? |
| T-46 | **A delimiter-split parser cannot read its own documented optional field when that field is empty, and the failure is silent.** `merge.py` parsed author works bullets with `b.split(" \| ")` — splitting on the delimiter **plus its padding**. `BATCH-FORMAT.md` documents `- <Title> \| <year> \| <optional note> \| start` and states the note is optional, so the empty-note form is `- Emma \| 1815 \| \| start`, in which the padded delimiter occurs **once**, not twice. The bullet split into three fields instead of four, the note became the literal string `"\| start"`, and **the lead-work flag was silently dropped**. ⟨measured: 390 works bullets in Literary, **100 with an empty note slot, 100 mis-parsed**; the shipped pack carries 130 correct `start` flags and 0 junk notes, so the pack was right and the toolchain was wrong⟩. **It had never fired anywhere else because every other pack always writes a non-empty note before `start`, so their bullets split into four fields by accident.** The same split is live in `_build/western/tools/merge.py` and `_build/war-military/v29-work/tools/merge.py` today, latent. **Split on the delimiter itself, not on the delimiter-plus-padding**, and break the parser against the empty-field case for every optional field it documents. Fourth instance of the closed-vocabulary / naive-matching defect class after T-34's `re.escape`, the award trap matching `RITA` inside `Britain`, and V-37's convention-blind predicate. | Tool | LIT V-29 run, 2026-09-04 | ? | ? | ? | ? | ? | ? | **A** | ? | ? | ? | ? | ? | ? | ? |
| V-48 | **A screen that narrows its own input reports a clean result on the cards it never looked at, and the exit code cannot tell you.** `living_census.py`'s closed-life-dates pattern scanned the whole of an author's `meta`, so a card was filed as **stating a death** whenever any bare digit-hyphen-digit span appeared anywhere in its prose — a tour of duty, a work run, a pair of issue numbers, a day range, even another person's dates — and it then **exited 0 by hiding those cards.** ⟨measured, three packs independently on 2026-09-04. **Literary**: six cards repaired with evidence dates written `8-9 April 2026` and similar, all six dropped from the living set, census green; caught only by the bucket arithmetic — `dated` had moved 99 → 105 while `w/date` read 25 where it had to be 31. **Superhero**: the census reported 56 living claims against a true 63; the seven dropped include `26–50`, which is a pair of issue numbers, and `author-36`, dropped because the card names **another man's death dates as a warning against confusing the two** — the warning against reporting a living creator as dead is what removed him from the check that exists to catch it. **War & Military**: `author-113` and `author-114` dropped on their tours of duty and **never re-checked at all, inside a pass that was reported complete and was not**⟩. **The fix is pinned in both directions** by `tools/break_living_census.py` — 32 cases, five prose spans that must read as living and twelve real life ranges that must still read as deaths — because an earlier attempt at the same fix rejected 49 genuinely dead authors. ⟨measured 2026-09-04 after the fix: break harness 32 of 32, and the five repaired packs each report 0 living claims with no check date, exit 0⟩. **Add up the buckets against the roster. An exit code is a statement about the rows the screen chose to look at.** | Tool + Ver | LIT, SUP and WAR V-29 runs, 2026-09-04 — three independent findings of one defect, merged | ? | ? | ? | ? | ? | ? | **A** | **A** | ? | ? | **A** | ? | ? | ? |

---
| T-18 | **A gate that cannot run on incomplete input must name the screens it did not run.** T-16 required screens to be dry-runnable; Superhero found the harder half. `check.sh` ran `assemble.py --partial`, in which screens 11, 18 and 26 are silently skipped, and reported **"0 errors"** for fifteen consecutive batches. Screen 11 was holding two hard errors the whole time; they surfaced only on the first FINAL run, at 612/612. `--partial` now prints *NOT RUN in --partial: 11, 18, 26 — THIS IS NOT A FULL PASS*. **A partial gate that reports like a full one is worse than no gate**, because it retires the suspicion that would have caught the defect. | Tool | SUP 17.91 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | ? | **A** |
| T-19 | **Roster integrity is a separate check from drift, and drift cannot substitute for it.** Superhero shipped sixteen work cards with their disambiguating annotations stripped — `Daredevil` for `Daredevil (Waid run)`, `Batman` for `Batman (1966 tv)` — breaking two citations and nearly shipping a work card called simply "Batman" beside `Batman (1989 film)`. **`drift_check.py` could not catch it and was never going to**: it proves the batch files and the merged pack agree, and they agreed, because the batch files carried the same stripped names. It checks internal consistency; nothing checked consistency with the **roster**. `roster_integrity.py` is the three lines that close it: a carded name absent from the roster is a fault at any point in the build. | Tool | SUP 17.92 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | ? | **A** |
| T-20 | **A referential-integrity screen over intra-pack cross-references — and an honest statement of what it cannot do.** Screen 27 resolves every `` `kind-N` `` reference against the built pack. It exists because Superhero's Batch 22 drafted ten cross-references from memory and **eight pointed at the wrong card**, with nothing checking `work` cards at all. **It would have caught none of those eight**, because they resolved to real cards saying something else — a semantic error no screen reaches. It catches the case the procedural control misses: the typo, the renumbered id, the reference to a card that was later cut. **Both controls are needed and neither is a substitute for the other.** | Tool | SUP 17.93 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | ? | **A** |

# Part 2 — Pack-local decisions index

Decisions that belong to one pack and are **not** back-port candidates. Recorded so a later
build can look up what a pack did without opening its blueprint. Format: pack · row · decision.

**TV Formats** — first pack built under the ARCHITECT/BUILDER/AUDITOR model-routing split, v2.1
(TVF.1, see the dated entry above for the full result); both specialist slots spent, `bible` —
*The Bible, the Room and the Season Order* (70) and `format` — *Format Rights, the Remake and the
Territory* (30) (TVF.2); Works split eight ways with `medium` fixed per category rather than
free — `tv` 120, `nonfiction` 20, `audio` 12, `film` 8, each medium closed to exactly one Works
category (TVF.3); radio and pre-television antecedents carded as `medium: audio` with the actual
broadcast named in `text`, never a `radio` enum value (TVF.4, and see S-11 — this is the rule S-11
states, applied); three whole-build planted controls (factual, structural, judgment) sealed at
blueprint lock and all three verified rejected at the claims audit, one with a stated
methodological gap (TVF.5); the two-stage `declined_collision_report()` screen built to discharge
Manga's eleven-subject declined debt, closing at 3 discharged / 1 near (a residual, correctly
diagnosed, left open) / 7 of 11 (TVF.6); a naming defect (four Tokusatsu-line cards carded bare
against the pack's own documented convention) found and fixed mid-build rather than left for
audit, once the builder recognised BATCH-FORMAT.md's naming section as this pack's own rule and
not architect territory (TVF.7); `territory_check.py`'s spec written and broken by this pack, the
first in the library to own one (TVF.8, and see 12.4 of `blueprint-LOCKED.md`); ten pack-local
instruments, none pointed at another pack, promoted for the record at `TOOLS-VERIFIED.md` §9
without being added to the cross-pack "may not run" list (TVF.9); the F-22 spell-check
break-spec written and dated on the pack-fourteen handoff rather than built inside this pack, per
the standing rule that a library-wide instrument needs breaking before trusting and a build is the
wrong place to do that untested (TVF.10).

**Horror** — specialist is *Folklore & Monster Traditions* with Psychology restored as the
standard eighth core collection (H.1); folklore weighted toward *Threshold, Taboo &
Protection* over creature catalogues (H.2); higher film (25) and games (10) density (H.3);
radio/audio drama and the short-story market folded as notes rather than cards (H.9).

**Romance** — both specialist slots spent: *Relationship & Emotional Craft* + *Market &
Category Conventions* (R.1, R.2); Tropes 110→100, Authors 140→130, Works 170→150 to pay for
them exactly (R.3); A+W 280 (R.4); specialists split across two schemas (R.5); *Psychology of
Attraction & Attachment* (R.6); award table records a collapsed governing body and its
succession (R.10); trope cards cross-reference BISAC codes (R.11); Series/Ensembles 4→6 and
the final relationship category renamed *the Deferred Guarantee* (R.16).

**Historical** — specialist renamed *Period Research Primers* → ***The Record and Its
Silences*** (H.1, and the origin of B-05); Craft 36→56 with ~20 diagnostic cards (H.2);
Checklist 8→16 for the library's heaviest sensitive-material load (H.3); Tropes 110→100,
Works 170→160 (H.4); the non-textual record treated as an equal partner to the textual
archive (H.6); second specialist slot deliberately unspent (H.7); nonfiction in Works raised
to ~8 (H.9); "None" as verified negative applies to a majority of this canon (H.10); the
diagnostic block flagged inside Craft rather than split into a ninth collection (H.11); oral
tradition folded into the specialist (H.13); the entry-ceiling exception offered by TJ and
declined (H.14); §13–16 added for a continuous section spine (H.15).

**Literary** — both specialists spent: *Style, Voice & Form* (70, example) + *Movements &
Poetics* (40, principle) (L.1); the organising claim relocated from quality to emphasis to
avoid the snob trap (L.2); boundary is contract/emphasis over reception and over quality
(L.3); six hand-off cards (L.4); Craft held at 36 because sentence technique lives in the
Style specialist (L.6); Nobel-misattribution as a named verification line — the giants mostly
never won (L.8); Works skew hard to novel ~132 (L.10); palette *bone / ink / claret* (L.11).

**War & Military** — organising claim is the **gap** between organised violence and its
representation, with "what do you owe the people it happened to" as its craft question
(W.1); boundary is central pressure, over setting-side and over author-side (W.2); one
specialist, *Combat, Command and Friction*, id `combat` (W.3, W.4); the handoff's 572 table
corrected to 612 by redistributing 40 into core (W.5); Craft diagnostic block 20 cards, five
per question (W.6); seven hand-off cards (W.7); palette field-grey / olive / oxidised-brass
(W.15); three research passes and six Works batches rather than two and five (W.13, W.14);
Boyd Award corrected to **1997** with its narrow US-at-war eligibility, making it a
verified-negative machine for most of the pack (W.21, W.26); the ABA/NBA back-port recorded
closed on disk rather than held (W.16); Works medium spread landed novel 94 · nonfiction 13 ·
film 25 · tv 7 · game 10 · graphic-novel 1, nonfiction high because this genre's testimony
canon is primary material (W.30); *Angel Down* entered the pool with full verification
priority and no forcing (W.28).

**Comedy** — Subgenres 30→32, the sitcom carded twice for multi-cam and single-cam (C.1);
Craft 56→58, Performance & Delivery and Satire & Target folded in rather than taking the
second slot (C.2); Works screen-majority-adjacent, `novel` 64 of 152 of which 29 are stage
plays (C.4, C.32); `audio` used for recorded stand-up with a fallback table for seven forms
the enum cannot name (C.5); nine hand-off cards and a reciprocal patch to War alone (C.9);
improvisation given a named block in the specialist (C.18); two new Craft cards — *the laugh
that costs the wrong person*, *the joke that lands for the room but not the page* (C.19);
children's and family comedy allocated 6 Works and 5 Authors rather than a token subgenre
card (C.20); two Authors traditions renamed after verification — *Improvisation and Its
Teachers*, *Yiddish, Hebrew and Jewish-Diaspora Humour* (C.27); three Authors-list
substitutions before drafting (C.28); `comic` 2→3 and `graphic-novel` 2→1 at Batch 23 (C.33).

---

**Western (pack ten).** Organising claim admitted a **second mode** — iconography in circulation — as a named exception class rather than stretching the first (§0.15). Two specialists, *Frontier Myth and Revision* 70 and *The Working West* 30, the second restored on Grok's cross-check by re-pricing Tropes and Psychology. Seven hand-off cards outward and three reciprocal cards written into Historical, War and Literary, on Grok's ruling that “they recorded no debt” is an excuse rather than a reason; Comedy received a correction instead of a card. The medium spread finished one slot off plan at `film` 61 / `tv` 25, traceable to two earlier rulings and logged rather than chased (17.88). The Deadwood Dick order was restated: Wheeler published the name in 1877 and Nat Love's 1907 memoir dates his own acquisition to 1876, so publication order and claimed order are opposite and the pack states both (17.87). Thirty-one titles cited by the specialist and deliberately not carded live in `SPECIALIST_EXTRA_TITLES` with a stated reason each. Ten consecutive verification passes rejected their planted control.

---

---

**Superhero (pack eleven).** Organising claim carried **three modes** — assumed mandate,
conferred mandate in question, iconography in circulation — extending Western's two-mode
concession by one, and the mode is stated on the card wherever a work enters on the third
(§2). Two specialists, *Continuity, Legacy and the Reset* 70 and *Powers, Limits and Cost* 30,
the second scoped **by exclusion against Fantasy** and enforced by a screen requiring every
card to state what it adds (§5f). Twenty-seven assembly screens and seven parser guards. The
Japanese tradition is carded here **because pack twelve does not exist**, and the debt is
booked outward by a literal sentence on eighteen cards that a screen enforces per card (§0.4,
§4) — the first time the library has made an inter-pack debt machine-checkable rather than
prose. Tokusatsu enters on iconography alone and **every card in the block states that the
lineage clause does not apply** (§2 cost 4). The metal-age periodisation is banned in
`category`, `name` and body prose, with a use-mention escape for a quoted refusal, used twice
(§0.18). Two Works categories carried the same material under two names until the patch batch
renamed *The 1986 Turn* to *The 1986 Generation*, matching the Authors block and fixing a
label that named one year for a block spanning 1985–1988 (§4, `history-21`). Media ran to a
re-priced nine-value spread that closed exactly at 160 with no slack, `comic` 89 of it. Four
`game` titles were named in the roster and **not carded until a verification pass ran**, on
the stated rule that naming is not carding; the pass killed the founding claim the block was
going to make. Sixteen Works cards shipped mid-build with their disambiguating annotations
stripped and were caught only by the first FINAL assembly, which is T-19's origin.


**Manga** — both specialist slots spent: *Serialisation, the Magazine and the Market* (70,
principle) + *Page, Panel and the Turn* (30, principle), the library's first visual-grammar
collection (§5a, §5f); the organising claim is the weekly serialisation system, with a **named
exception class made countable** as two floors of 24 and 30 (§0.10, B-10); Craft 56 and Checklist 16
on Historical's precedent, for the sensitive-material load; History cut on **system change** with the
metal-age vocabulary banned outright (§0.14); Psychology 16, of which **only six carry a robustness
tier, because the empirical record covers one of its four categories and the pass said so** (pass P);
creators carded **family-name-first with a Western-order gloss on every card**, enforced as a screen
(§0.44); the anime carded as primary text where no manga source exists, 14 cards (§5); works dated by
original-language first appearance, with 64 romanisation traps recorded at roster stage; and the
Superhero debt of 31 subjects **collected in full** — 18 carded, 10 declined with reasons and
destinations, 0 missing.

---

## Retro-pass B2 corrections — applied 2026-08-27 (SONNET, token phase 3/4)

Mechanical fixes only, per `_build/retro-pass/PROMPT-sonnet-B2.md` stages 1, 3, 4, 5, 6. Full
argument for each is in `_build/retro-pass/RULINGS-from-opus.md` and `remediation-plan.md`; this
paragraph is the pointer, not the record.

**Stage 1 — validator tightened (T-25).** Shown RED on Historical (613/613 entries, all four
baked fields absent) before the fix; green on all twelve packs after. See T-25 above.

**Stage 3 — F-03 re-bake (R-010).** Horror, Romance, Historical: `_bg`/`_fg`/`_label`/`_badge`
re-baked from each pack's own `collections[]`, keyed on `kind`, across **every** collection in
the pack (R-010's worked example named only `work`; measured, all nine of Horror's and
Romance's collections and all nine of Historical's carried the same disagreement — 2,452
field-level corrections on Historical alone, 613 entries each on Horror and Romance).
**Correction to R-010's own measurement, found running the new gate, not reading the ruling:**
Science Fiction's `book` collection also disagreed with its own `collections[]` — `_label`
`'Books'` against a declared `'Works'`, `_badge` `'Book'` against `'Work'`, 184 entries — which
R-010 did not check (it measured only `_bg`/`_fg` for SF and reported it "internally
consistent"). That is Class A by R-010's own rule (the pack's own `collections[]` is the
authority and the bake disagreed with it) and is fixed here too, narrowly: `_label`/`_badge`
only. SF's `_bg`/`_fg` deviation from S-06 is untouched — that half is genuinely Class B, the
plan's decision, and the ledger's S-06 cell for SF and Fantasy is changed from `A` to `?` above
rather than corrected, because there is nothing here to correct it *to* yet.

**Stage 4 — F-09 name corrections (R-005, R-007, R-008, R-009).** Horror `author-51` (`Robert
McCammon` → `Robert R. McCammon`), `author-104` (`Yoko Ogawa` → `Yōko Ogawa`), `author-106`
(`Mariana Enriquez` → `Mariana Enríquez`); SF `author-97` (`Octavia Butler` → `Octavia E.
Butler`). Checked `knownFor`/`signature`/`meta`/`works[].note` on all four cards for the reduced
form: none carried it outside the `name` field itself, so no further change was needed on any of
the four. `name_cross_check.py` clean on both packs (SF still reports its 26 pre-existing
duplicates at this point — Stage 6, below).

**Stage 5 — F-08 title collisions (S-08, R-004b).** 18 of the 19 collisions resolved: the
adaptation's title disambiguated to `Title (YYYY film|tv)`, extended once to `(YYYY comic)` for
Horror `author-124` (Neil Gaiman's own Sandman comic, cited against Hoffmann's 1816 story
`work-108`) since S-08's stated vocabulary does not name comics. Western 8/8, Romance 3/3,
Fantasy 2/2 (`work-137` per R-004b; `work-134` Excalibur). Horror 5/6 — **`author-16` (Arthur
Machen) `'The Terror'` 1916 against `work-94` (Dan Simmons) `'The Terror'` 2007 is queued as
Q-028, not fixed**: both sides are novels, unrelated, no adaptation relationship and no textual
signal for which keeps the bare title. S-08's rule (`the bare title stays with the novel`)
cannot arbitrate between two novels, and picking one felt like an invented world-claim rather
than a mechanical application. `two_statements.py` TITLE COLLISION: WES 0, ROM 0, FAN 0, HOR 1
(Q-028). S-08's ledger cell for Horror changed from `A` to `P` above.

**Stage 6 — F-01/F-02, SF's 27 removals (R-004).** 26 duplicate-pair stubs removed after
folding each stub's distinct named fact (a title, a sequel, a signature concept) into the
surviving full card's `knownFor` — 15 of the 26 pairs carried such a fact; 11 did not and were
removed with no fold. The Corey pair merged: `a-n3` (`'James SA Corey'`, stub, zero book-card
citations) removed; `author-scifi-new-3` (`'James S.A. Corey'`, already carded as the joint
Abraham/Franck pseudonym per V-12) kept. No book card cited the unpunctuated form, so no
citation needed re-pointing for the merge. **809 → 782 entries, 169 → 142 author cards — exact.**
No id renumbered (T-23). `name_cross_check.py`: 0 duplicates, 0 near-duplicates.
`ref_audit.py --library=`: re-read in full, unchanged (NOT RUN — SF carries no reference in any
notation this scanner matches, before and after). T-07's SF cell changed from `–` to `A` above.

**What R-004 said and what was measured, left visible rather than silently reconciled.** R-004's
own count of "book cards citing a stub-only person" was 17. Measured directly against the pack
(the 5 non-Corey stub-only cards — `Jeff VanderMeer`, `Emily St. John Mandel`, `Richard K.
Morgan`, `Yoon Ha Lee`, `Kameron Hurley`, none removed, none promoted, all left exactly as they
were): **8**, and `VanderMeer` has zero. Since none of those five cards was removed or renamed,
none of their citing book cards needed re-pointing regardless of which count is right, so the
discrepancy did not block Stage 6's gate — but it is exactly the kind of unreconciled number this
pass exists to catch, so it is recorded rather than quietly adopted or corrected.

**Not done in B2, and not attempted:** Stage 2 (V-02 disclosure, blocked on TJ's ruling) and
Stages 7–9 (the hedge instrument, the 14-row year table, the judgement fixes — Opus's, per
`PROMPT-sonnet-B2.md`).

## Retro-pass B3 corrections — applied 2026-08-27 (SONNET, token phase 3/4, closing)

Plan Stage 2, and applying Opus's Stage 7–9 deliverables (stages 8 and 9's per-card edit lists),
per `_build/retro-pass/PROMPT-sonnet-B3.md`. Full argument for each item is in
`_build/retro-pass/RULINGS-from-opus.md`, `stage8-year-table.md` and
`stage9-judgement-fixes.md`; this paragraph is the pointer, not the record.

**Stage 2 — the fourth V-03 state, 349 fields (R-033).** TJ ruled the token
`[no award research performed — retroactive audit 2026-08-27]`, explicitly not Superhero's
dated `[gap: … consulted DATE]` form. Stamped on every empty `awards` string in SF (91), MCT
(85) and FAN (82), and on the bare `None`/`None.` fields in COM (all 46) and ROM/HOR minus the
already-correct verified negatives and the flagged cases: ROM 37 of 44 (4 kept, 3 flagged), HOR
8 of 18 (10 kept). The 14 kept fields (HOR `work-69 70 72 83 91 96 111 113 138 148`, ROM
`work-36 66 71 100`) are V-02 implemented correctly and were verified byte-identical before and
after. The 3 flagged ROM fields (`work-23 26 61`) are untouched and unresolved — carded award
research about the author or the period rather than about the work's own record — and are
handed to the next pass. Manga's 97 are out of scope. **Gate met:** zero empty `awards` strings
anywhere in the library; `hedge_check.py` re-run on all twelve — the token does not match its
`UNCERTAIN` vocabulary at all and is not classified BARE, BOUNDED or PARTIAL anywhere it was
applied.

**Stage 8 — the year table's edits (`stage8-year-table.md`).** Five card years corrected: HIS
`work-85` 2014→2013, SF `book-15` 1993→1992, HOR `work-45` 1954→1955 (S-10 applied against the
card's own text), SF `b-n56`/`b-n57` — the translation year moved out of `year` and into `text`,
following SF `book-17`'s own shipped convention. Nine bibliography entries across eight author
cards corrected for S-08 (two-objects-sharing-a-name annotation) and world-fact years: COM
`author-2` (`Fleabag` → `Fleabag (2013 stage show)`), `author-6` (`This Is Going to Hurt` →
`… (2022 tv)`), `author-93`/`author-94` (`Hancock's Half Hour` → `… (1954 radio)`, both
co-writer cards), `author-32` (Tartuffe 1664→1669), `author-36` (Master i Margarita 1940→1966),
`author-45` (El Chavo del Ocho 1971→1973, with a note naming the 1972 sketch origin); LIT
`author-2` (Middlemarch 1871→1872), `author-3` (Bleak House 1852→1853).

**F-17, found reading Stage 8's own rows 7–8: Literary's 100 lost `start` flags, recovered from
the tarball.** All 100 `works[].note == "| start"` entries were the shipped side of one parser
defect — `merge.py` splits works-list bullets on the literal substring `" | "`, and a bullet
written as `Title | Year | | start` (an explicitly empty note field before the flag) collapses
the two adjacent pipes into a single three-part split, so the intended fourth field `start`
never separates from the literal string `| start`, which then lands in `note`. **Checked against
the tarball** (`_build/literary/literary-build-snapshot.tgz`, `batches/09-author.md`): the source
markdown carries the identical malformed 4-field row for all 100, one-to-one by author id and
title, zero mismatches either direction against the shipped defect. This is a full recovery, not
an invention — the same tarball's own bundled `merge.py` reproduces the identical defect on the
same input, confirming the parser (not just this session's reading of it) cannot see its own
bug. Fixed: `note` deleted, `start: true` set, on all 100. Verified: zero `"| start"` notes
remain; 130 of 130 author cards now carry a correctly-set `start` flag (100 recovered + 30
already correct).

**Stage 9 — the judgement fixes (`stage9-judgement-fixes.md`).** Six card changes applied
verbatim: SUP `history-18` — R-024's two-sided principle rewrite, and the `application` clause
Stage 9 found R-024 had cleared in isolation and the principle rewrite then made wrong (*"the
answer is documented"* → *"the other accounts are documented"*); SUP `author-44`/`author-79` —
bibliography notes gained the role-and-creator context already stated elsewhere on each card, so
a reader on the Works entry alone is no longer three fields away from the fact (F-07); ROM
`work-59` — *"J.D. Robb is Nora Roberts"* added to the pen-name card's closing sentence,
composed only from facts `author-40` already states (F-13); SF `author-60` — `Stephen
Donaldson` → `Stephen R. Donaldson` (F-15's one REDUCED case; confirmed no work card in SF cites
him, so this was the only field).

**F-15 — four diacritic restorations, twelve fields, order left alone (R-031).** SUP `author-19`
`Go Nagai`→`Gō Nagai` (name, meta, `work-30.author`); `author-22` `Kohei Horikoshi`→`Kōhei
Horikoshi` (name, `work-36.author`); `author-112` `Shotaro Ishinomori`→`Shōtarō Ishinomori`
(name, `author-21.meta`, `work-28/57/58/59/62.author`); HOR `author-120` `Junji Ito`→`Junji Itō`
(name, `work-158.author`, `history-21.example`). **Note for the record:** the source documents'
own tallies ("4 names, 12 fields") undercount by three against the fields actually named and
fixed — SUP `author-112`'s group alone is 7 fields (name + `author-21.meta` + five `work-*`
citations), which with `author-19`'s 3 and `author-22`'s 2 and HOR's 3 totals **15**, not 12.
Every field the source documents individually named was fixed; the arithmetic error is in their
summary line, not their itemised list, and is recorded here rather than silently reconciled, per
this pass's own rule. Verified: `cross_pack_identity.py` now reports `DEFECTS DIACRITIC 0
REDUCED 0 UNCLASSIFIED 0`, exit 0, across all twelve packs (was 4 DIACRITIC + 1 REDUCED); a
full-library string scan for every old form found zero remaining occurrences outside Manga
(out of scope, correctly untouched, since Manga's own prose fields use the given-name-first form
in running text even though its carded `name` field is surname-first — not a defect).

**C-08 — 12 robustness tiers and 2 stated exemptions, 14 cards, per `stage9-judgement-fixes.md`
§5.3.** Every tier drawn from the sentence already in the card's own prose, in Western's shipped
`(robustness: …)` parenthetical form appended to `principle`: COM `psychology-5` (unreplicated),
`psychology-9` (robust; effect sizes vary), `psychology-14` (unreplicated); HIS `psych-7`
(contested); HOR `psych-25` (contested); LIT `psychology-7` (the 2013 finding unreplicated; the
broader claim contested); MCT `psych-5`, `psych-11`, `psych-20` (robust ×3); ROM `psych-7`
(contested; modest effect sizes), `psych-9` (contested), `psych-14` (contested — the broader
claim; the pack's own claim is structural). Two stated exemptions in Superhero's *"this card
carries no robustness tier because…"* form: COM `psychology-26` and ROM `psych-26`, both
collection-level policy cards with nothing in them to replicate. **See the corrected C-08 row in
Part 1** — the row's own prose named the wrong pack as sole implementer before this pass (R-032).

**Stage 10 — closing the pass.** Nine packs bumped, all patches per T-14 (every change this pass
made is a correction; no pack gained an entry): `SUP` 1.1.0→**1.1.1** (first bump of the whole
pass) · `HOR` 1.1.1→**1.1.2** · `ROM` 1.1.1→**1.1.2** · `SF` 1.0.1→**1.0.2** · `COM`
1.1.0→**1.1.1** · `LIT` 1.1.0→**1.1.1** · `HIS` 1.2.1→**1.2.2** · `MCT` 1.0.0→**1.0.1** (its
first content change of the entire pass, three C-08 tiers, despite being one of the two packs
clean on every check — the demonstration Stage 9 named) · `FAN` 1.1.1→**1.1.2**. `WES` and `WAR`
take no further bump — Western's Stage-10 change is a tooling comment (F-11, below), not a card,
and War & Military owes nothing in stages 2/8/9. `manifest.json` updated for all nine (version,
entry count, size, `lastUpdated`). **F-11/F-12 build-doc annotations applied**: a one-comment
warning at Western's `assemble.py` summary-line block (R-003, T-18 — `--partial` runs
under-report; the FINAL run that shipped ran every screen, so nothing shipped is wrong) and a
one-paragraph warning at the head of Superhero's `BATCH-FORMAT.md` (R-018, T-22 — the file is
Western's document, copy-forwarded and never edited; `merge.py`/`config.py` are the executable
contract and are correct). **Final validate: all twelve packs, in the session container (T-11),
`PASS — 0 error(s)`.**

**Not done in B3, ruled elsewhere so as not to be re-opened:** Fantasy's F-13 (no change needed
— `work-75` already discharges V-12 in both directions, R-031/Stage9 §3.1); the 9 ORDER and 3
SPACING cross-pack name-form clashes (per-pack house style, not defects, R-031); the remaining
235 psychology cards (the research, not the wording, refusal stands per `remediation-plan.md`
§4.2 and R-032); Q-028 / horror `author-16`/`work-94`, the nineteenth title collision (ruled at
R-028 in the concurrent lane — see below, this ruling's card-level application was not in this
session's work order and was not applied; flagged in `HANDOFF-B3-to-close.md`).


# Part 3 — Open debts

**Status 2026-08-21: not scheduled. TJ's decision — "leave for a scheduled pass."**
Nothing below is being applied now. This is the work list for when that pass runs.

**Status 2026-08-27: that pass ran (B1–B3, the retro-pass) and is closing.** Item 1 (V-02) is
discharged by disclosure (Stage 2 — see below; the underlying research is re-scheduled, smaller
and re-scoped). Item 2 (C-08) is partially discharged — 12 of 261 cards, the free ones, per
R-032. Item 4's V-03 half is discharged by disclosure; V-04/V-05/V-07 remain unaudited. Item 8
(V-19) is measured, not fixed — 38 BARE hedges in two packs, refused and re-scheduled first,
smaller than V-02's remainder. See "Retro-pass B2 corrections" and "Retro-pass B3
corrections" above for what shipped.

| Priority | Item | Packs owed | Size |
|---|---|---|---|---|
| 1 | **V-02 / V-03** — **discharged by disclosure at B3 Stage 2** (R-033): 349 fields across SF/MCT/FAN/COM/ROM/HOR now carry the fourth V-03 state rather than silence or a bare `None`. **What remains is the research itself** — establishing the real award record (or its real absence) behind each of those 349 fields, plus the 3 ROM cards left flagged. Manga's 97 (out of this pass's scope) are pack thirteen's. | SF 91, MCT 85, FAN 82, COM 46, ROM 37, HOR 8 (+3 flagged, +97 MNG) | Large, but re-scoped from "disclose or research" to "research only" — the disclosure half is done. |
| 2 | **C-08** — no robustness tier on empirical Psychology cards. **Partially discharged at B3** (`stage9-judgement-fixes.md` §5.3): 12 cards tiered + 2 stated exemptions, drawn from each card's own prose, no research required. **235 remain and do need the research** (R-032's corrected count, not the plan's original 249). | 235 cards across SF, MCT, FAN, HOR, ROM, HIS, LIT, WAR, COM, MNG (WES and SUP already complete at 12/12) | Medium-large. Each claim must be classified against the literature. |
| 3 | **V-11** — living-status re-check. **Decays continuously; this is a recurring pass, not a one-off.** | All nine | Medium, and due again roughly every six months. |
| 4 | **V-03, V-04, V-05, V-07** — the award-type, award-year and television-credit precision rules, all introduced at Comedy. | SF, MCT, FAN, HOR certainly; ROM, HIS, LIT, WAR unaudited | Medium. Audit first, then patch what fails. |
| 5 | **C-11** — SF's 7 surviving placeholder example works. | SF | Small. Seven substitutions. |
| 6 | **V-08** — submission ≠ nomination, and the four game awards. | SF, and any pack with a screen or game share not yet audited | Small. |
| 7 | **T-15** — the silent-discard sweep. Six packs' batch markdown has never been checked for `Key:` lines outside the card shape. Anything a previous build wrote outside its shape is still missing from the shipped pack, silently, and the markdown that would prove it is archived. | SF, MCT, FAN, HOR, ROM, HIS, LIT, WAR, COM | Small to run, unknown to fix. **Run the sweep before deciding the size.** |
| 8 | **V-19** — the hedge audit. **Measured at B3 Stage 7 with a verified instrument** (`hedge_check.py`, `TOOLS-VERIFIED.md` §7): **38 BARE hedges, not zero — War & Military 37, Comedy 1.** Refused as a fix this pass (R-030: both already disclose a gap; what they lack is a body and a date, which needs a lookup, not a rewording) and **re-priced as the FIRST research item of the next pass** — a tenth the size of item 1's remainder and discharges this row outright. | War & Military 37, Comedy 1 | Small. 38 lookups, each against a named or inferable awarding body. |
| 9 | **V-21** — nobody has ever verified a research roster against the world. Sample one block per pack and see whether the landmines are real. | All nine | Small as a sample; unknown as a pass. |
| 10 | **T-18** — every prior pack's `check.sh` equivalent reports a partial run as a pass. Superhero's did so for fifteen batches while screen 11 held two hard errors. **Check what each shipped pack's gate actually ran**, not what it printed. | All ten | Small to check, unknown to fix. |
| 11 | **T-19** — no prior pack has had its carded Works names checked against its own research roster. Superhero found sixteen divergences, two of them breaking citations, in a pack whose drift check was clean. | All ten | Small per pack. One set comparison, if the roster survived. |
| 12 | **T-20** — no prior pack has had its intra-pack cross-references resolved. Dangling `kind-N` ids are silent in every shipped pack. | All ten | Small. One regex and a set membership test. |
| 13 | **C-17** — creator name-change house style. Any pack carrying a creator who respelled their own name may be presenting one person as two. | Unaudited across all ten | Small per instance, unknown in count. |
| 14 | **S-03** — the free-text medium register is **stale**. Superhero uses five values outside it (`run`, `newspaper strip`, `manga`, `graphic-novel`, `game`), three of which were already in use on disk and were never recorded. | Register itself, then all eleven | Small. Update the register to the measured reality. |
| 16 | **V-02 / V-03 in Manga's Works collection.** A large share of Manga's 160 work cards carry `No award is asserted on this card` — honest about not having researched, and neither a verified negative nor a minted documentation-gap token. | MNG | Medium. One lookup per card; the award pass covered bodies, not every work. |
| 17 | **V-12 in Manga.** The three-type pseudonym taxonomy was never asked. Manga carries at least four pen-name cases, including one whose holder has never been identified and one that puts a single writer in the record twice. | MNG | Small. Four to six cards. |
| 18 | **V-21 in Manga.** Both rosters were verified against each other, against config and against the shipped cards — **not against the world**, except where a pass touched a specific fact. | MNG | Unknown. Sample a block before estimating. |
| 19 | **T-10 in Manga.** The verify-to-file agent pattern was not used; verification was performed inline by the builder. **A builder checking their own work found ten wrong years, five silently retargeted references and a wrong attribution — and cannot bound what it missed.** | MNG | Medium. One adversarial pass per collection. |
| 20 | **T-12 / T-14 for Manga — CLOSED 2026-08-31.** `packs/reference-manga.json` and `manifest.json` are updated and agree with each other; all five reciprocal hand-off cards (Superhero, Fantasy, Horror, Romance, Comedy) are applied and carded. **Measured, not read off this row** — `tools/measure_item20.py` (`_build/tv-formats/tools/`, promoted at `TOOLS-VERIFIED.md` §9) checks the manifest against disk and greps every one of the five packs for a `manga-reference` mention directly, rather than trusting a category name or a prose phrase (this row's own §0.8/finding-3 lesson from `STEP-1-MEASUREMENTS.md`). Run at TV Formats's claims audit, `PASS`. | MNG + 5 | Done. |
| 21 | **F-20 medium retag — CLOSED 2026-08-28.** 110 work cards retagged across eight packs: **29 `stage`, 71 `short-fiction`, 10 `poetry`**. The candidate figure this row was opened with — 117 across ten packs, 69/36/12 by form — **was wrong in its distribution and in its pack list**: Romance and Historical carry none, and the stage count is 29, which Comedy's own build log had recorded at final assembly. Five detectors, all broken before use; every candidate read by hand; 26 detector calls overruled. **Seven items queued, not decided** — see the log. The false-negative count is unbounded and the log says why. | COM 29, HOR 24, LIT 15, SF 11, WAR 9, FAN 10, MCT 5, WES 3 | Done. |
| 15 | **Every `?` in the Part 1 grid.** An unaudited cell is a pending item wearing a question mark. | Various | Unknown — that is the point. |

**How to run the pass.** One pack at a time, one ledger row at a time, validator green after
each. Never open more than one pack. Update the grid cell in this file **in the same session**
as the fix, and bump the pack version per T-14. A back-port that is not recorded here has not
happened.

---

# Part 4 — Keeping this file alive

**Every build appends to this ledger at step 9. This is not optional and it is not the
blueprint's §17 log — §17 records what one pack did; the ledger records what the library owes.**

At step 1, the blueprint is written *from* Part 1: every `A` in the previous pack's column is a
rule the new pack builds under, and the new pack gets its own column with those rows marked
before Batch 1. §17 still gets written, because it is the working record with the rationale in
it. The ledger is the index over the §17 logs, not a replacement for them.

At step 9, do four things:

1. **Add the new pack's column** to every table in Part 1, marked A / P / – for each row.
2. **Add a row** for each §17 delta that applies to more than one pack, with its level and origin.
3. **Add the pack-local §17 rows** to Part 2 in one compressed paragraph.
4. **Move anything that became a debt** into Part 3, with an honest size estimate.

**Do not mark a cell `A` because a rule was written down.** A written rule is not a control —
Fantasy's lesson, twice re-learned. Mark `A` when the pack ships under it, `?` when nobody has
looked, and `?` is the honest answer far more often than it feels like.

---

## Retro-pass B3 VERIFICATION — OPUS, 2026-08-27 (closing the pass)

**B3's report was independently re-measured against the shipped packs rather than accepted.** The
substance holds in full: nine packs bumped, 349 award tokens, zero empty `awards` strings, the 14
verified negatives untouched, Literary's 100 `start` flags recovered from the tarball one-to-one,
all twelve packs `PASS — 0 error(s)` in the container, harness 57 of 57. Full account in
`_build/retro-pass/B3-VERIFIED-by-opus.md`.

**Three further changes were made during verification, all folded into the versions B3 had already
bumped (nothing is published):**

| Pack | Change | Why |
|---|---|---|
| **COM** 1.1.1 | `psychology-26`, `principle` — full stop inserted before the appended exemption sentence | B3's C-08 exemption ran two sentences together. **Not cosmetic:** `sensitive_audit.py` splits on `[.!?]`, so it was evaluating a merged sentence. |
| **ROM** 1.1.2 | `psych-26`, same | same |
| **HOR** 1.1.2 | `author-16` `works[5]` — `The Terror` → `The Terror (1916 novel)` **+ note** *"unrelated to the 2007 Simmons novel of the same title carded at work-94"* | **R-028 applied.** It was ruled before B3 and omitted from B3's work order, so B3 correctly declined to apply it and handed it back. **S-08 · HOR `P` → `A`: all nineteen title collisions are now closed** and `two_statements.py` reports Horror TITLE COLLISION 0. |

**Also corrected during verification, and recorded because the pass's own rule requires it:** the
COM and ROM fixes were first written with `json.dump(indent=2)` against a library whose house format
is `indent=1`, reformatting roughly 15,000 lines in each file. Caught by noticing a one-character
edit had grown Comedy by 53KB. Rewritten at `indent=1` and diffed against the pre-fix copy —
**exactly one changed line per pack, one character each** — and both re-validated in the container.

**Noted, not changed:** `manifest.json` lists fifteen packs and three of the files do not exist
(`tv-formats`, `erotica`, `religious-inspirational`, each at `0.0.0`). Pre-existing, present at the
last commit, and reading as deliberate placeholders — but worth confirming the app tolerates a
manifest entry with no file before publication.

---

## Retro-pass addendum — F-19, found 2026-08-28 by the Writer's Codex renderer

**27 entries in Science Fiction carry no body content at all.** `id`, `kind`, `category`, `name`,
`description` — and nothing a reader can read. **6 author · 5 subgenre · 16 science.** Every other
pack in the library measures **zero**.

**How it was found, and this is the part worth keeping.** Not by any of the eight audit checks. The
Codex's reference view was fixed to dispatch on a card's declared schema rather than on its
collection id — a change that took 1,781 empty-rendering cards down to 27. **The 27 that stayed
empty are empty because there is nothing on the card.** A stub is schema-valid, id-unique, passes
`validate_pack.py`, and passes every screen the library owns. **It only becomes visible when
something tries to draw it.**

That makes this a new class: **rendering is a verification instrument, and the library has never
had one.** Ledger row V-29 says a pack's instruments prove internal consistency and nothing about
the world; this says something narrower and equally uncomfortable — *they also prove nothing about
whether a card has anything on it.*

**Only 6 of the 27 were known.** F-02 recorded the stub-shaped author cards. **The 5 subgenre and
16 science stubs are recorded nowhere in the project before this entry.**

**Not fixed here.** Completing 27 cards is research, and it belongs with the Science Fiction
decision (below) rather than as a patch. **Scheduled, not refused.**

**Ledger:** S-01 shape. **A new standing rule is wanted: every card must carry at least one body
field, and the validator should enforce it** — that is the check that would have caught all 27 at
build time, and it does not exist.

---

## Retro-pass addendum — F-20, found 2026-08-28 during the SF rebuild

**The medium enum had no value for a play, a short story or a poem, and the library wrote a rule to
live with it instead of fixing it.**

Ledger row **S-02**, from Comedy's build: *"Stage plays, classical drama, epic and verse narrative
take `medium: novel`, with the true form named in the card's opening clause."*

**Measured across all twelve packs — work cards whose `medium` is `novel`/`nonfiction` while their own
prose says otherwise:**

```
comedy 31 · mystery-crime-thriller 20 · scifi 18 · horror 11 · fantasy 9 · literary 9
western 7 · war-military 6 · historical 4 · romance 2          =  117
                     69 stage · 36 short fiction · 12 poetry
```

`comedy/work-88` *Twelfth Night* · `comedy/work-42` *Tartuffe* · `comedy/work-35` *Lysistrate* ·
`comedy/work-84` *The Importance of Being Earnest* — **all carded `medium: novel`.**

**S-02 was marked `A` for Comedy and `–` — "does not apply" — for eight packs that are full of it.**
That makes it the **sixth ledger row found narrower than the disk**, after S-05, S-06, T-07, S-08 and
C-08. It is the worst of the six: the other five were merely wrong about where a rule applied. **This
one prescribed the falsehood and marked it Applied.**

**How it was found.** Not by an audit instrument. The Science Fiction rebuild needed a medium for
short fiction — the genre's Golden Age happened in magazines — and asking whether the enum had a word
for it surfaced a defect in ten packs within the hour. **Bringing one pack into line is what made the
library-wide hole visible**, which is the argument for the rebuild, arriving earlier than anyone
expected it to.

**Fixed here:** schema v2.1 adds `stage`, `short-fiction` and `poetry` (S-11), applied to
`schema/pack.schema.json`, `schema/schema.ts`, `PACK-SPEC.md`, `README.md` and the app's
`REF_MEDIUM`. **All twelve packs validate unchanged** — widening an enum is backward-compatible.

**Not fixed here:** the 117 cards. **And the number is a candidate, not a measurement** — it came from
a regex nobody has broken, which is exactly the mistake that produced three different C-11 counts this
morning. **The retag pass builds the instrument, breaks it, then counts.** Part 3 item 21.

---

*Sources: the §17 delta logs of Horror, Romance, Historical, Literary, War & Military, Comedy,
Western and Superhero; `_build/literary/alignment-pass.md` (candidates A–K, run at pack seven);
`_fix-kits/pack-consistency-audit-2026-08-19.md`; `PACK-SPEC.md`; and a direct audit of all
nine shipped pack JSONs run 2026-08-21, which produced the counts in V-02 and C-11.*

---

## Retro-pass addendum — the F-20 medium retag, applied 2026-08-28

**110 work cards retagged across eight packs. The number the pass was opened with was 117 across
ten, and it was wrong in three separate ways.** Full working: `_build/retro-pass/medium-retag-log.md`.

```
stage 29 · short-fiction 71 · poetry 10                                    = 110
comedy 29 (+3 poetry, +1 short-fiction = 33)  horror 24  literary 15  scifi 11
war-military 9  fantasy 10  mystery-crime-thriller 5  western 3
romance 0 · historical 0 · superhero 0 · manga 0
```

**What the candidate scan got wrong.** It said 69 plays; there are 29, all in Comedy, and
**Comedy's own build log recorded 29 at final assembly** — the figure was on disk the whole time.
It said Romance 2 and Historical 4; both are zero. It said short fiction 36; there are 71, because
the regex could not see a collection that never uses the word "story" — *Interpreter of Maladies*,
*Books of Blood*, *The Innocence of Father Brown* and eleven more were invisible to it.

**Five detectors, each broken before it was trusted.** Opening-clause fingerprint (32), prose
vocabulary (106), examples[] cross-reference (33), **category grouping (31)** and **the retired
rule's own footprint in the prose (9)**. The last two are new and found ten cards the first three
missed between them. Breaking them found three real defects in the instruments: detector B was
case-sensitive and could not match its own headline cue `Stage play.`; it read `space opera` as
opera and produced eleven false positives in Science Fiction alone; and the detectors had no scope
guard, so a film card fired. **Fourteen break fixtures, all green, in `break_medium_detect.py`.**

**Every candidate was read. 26 detector calls were overruled** — *Moby-Dick* is not a play because
it contains a soliloquy, *S/Z* is not short fiction because it dismantles a novella, and
*Network Effect* is a novel that the series around it made look like one more novella.

**What this pass may not claim.** 1,207 work cards are tagged `novel` or `nonfiction`. The best
detector has a demonstrated recall under half, and fifteen of the 110 were found not by any
detector but by a wide-net probe and a human reading the results. **The false-negative count is
unbounded**, and a field that has been half-verified reads as verified (V-26). It is not verified.

**F-21, found while running this pass.** `tools/validate_pack.py` carried its own copy of the
medium enum and still held the retired nine values, so S-11's twelve `A` marks were true of
`schema/pack.schema.json` and false of the file that enforces it. The first retagged pack failed
the gate. Reconciled here. **Seventh ledger row found narrower than the disk** — and the second in
two days where the defect was a duplicate constant nobody re-read.

**Gates.** `validate_pack.py` PASS on all twelve in the session container · entry counts unchanged
in every pack · no `medium` outside the v2.1 twelve · zero cards opening `Stage play.` with
`medium` other than `stage` · `break_tools.py` **57 of 57** · canon screen **0** across twelve.
The PII half is a gatherer, not a screen, and **no PII tool existed in the repo** — the zero
recorded for 2026-08-28 was produced by an instrument that is not on disk. `canon_pii_screen.py`
is a reconstruction; it gathered six address-shaped strings, all six read by hand as published
titles or a public historical address.


---

## Science Fiction 2.0.0 — session 1 (NORMALISE), 2026-08-28

**Pack one put through the process that produced packs four to twelve.** 782 entries in, 782 out;
twelve collections to eleven; `book` → `work`; 126 irregular ids to `<kind>-<N>`; 27 bodyless cards
completed; 39 placeholder citations replaced; 19 plot-logline descriptions rewritten. Validator
**PASS — 0 error(s)** in the session container, and all twelve packs still pass. Full account:
`_build/scifi/build-log.md`. Open items: `_build/scifi/QUEUE-for-session-2.md`.

### New standing rows

| ID | Rule | Level | From | SF | MCT | FAN | HOR | ROM | HIS | LIT | WAR | COM | WES | SUP | MNG | TVF | ERO |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|-----|---|-----|
| S-12 | **Every card carries at least one body field, and the validator enforces it.** A `description` is not a card. `work_cards` need `text`; `author_cards` one of `meta`/`knownFor`/`signature`/`works`; `principle_cards` `principle`; `example_cards` a non-empty `examples`; `checklist_cards` non-empty `items`. **This is the check that did not exist**: a stub is schema-valid, id-unique, and passes every screen this library owned, and F-19's 27 became visible only when the Codex renderer tried to draw them. Built into `tools/validate_pack.py`, shown RED on SF's 27 and green on the other eleven, and broken against twelve fixtures (`_build/scifi/tools/checks/break_body_field.py`). **Also a hole in `merge.py`:** `build_example()` accepts a card with zero example bullets — the parsed count equals the source count, both nought — so a bodyless example card can still be merged. The gate catches it; the parser should too. | Tool | SF rebuild R7, 2026-08-28 | A | A | A | A | A | A | A | A | A | A | A | A | ? | **A** |
| C-18 | **A card's `description` may not be a plot logline.** C-13 bans plot summary that substitutes for reading, and a description that narrates the work's events is that summary in miniature. **Measured across all twelve packs with a broken-and-verified instrument** (`_build/scifi/tools/checks/logline_check.py`, ten break-cases including a calibration run over the whole library): COM 22, MCT 8, HIS 7, WAR 6, SUP 1, WES 1, FAN 1, LIT 1, MNG 0, ROM 0, **SF 0** after this pass. **The finding that matters is that the auto-teaser route does not prevent this** — nine packs derive `description` from `text` and eight of them still narrate. SF is the only pack whose descriptions are hand-written and the only one at zero. | Card | SF rebuild R8, 2026-08-28 | A | P | P | P | – | P | P | P | P | P | P | – | ? | **A** |
| C-19 | **A quality tier has one published definition and one unwritten convention, and they disagree.** The README defines `weak` as *"flawed, incomplete, or only partially successful"*; the packs from Horror onward use it for a **named failure**, a convention that appears in no governance document. A seeded sample of 40 of SF's 257 `weak` examples found **39 satisfying both readings and 1 satisfying only the published one** (`trope-119`, whose card says the film's choice is *valid*). R9's threshold was a quarter; the measured rate is 2.5%, so SF's `weak` set is **reviewed, not a research-file fossil**. Related and unruled: `terrible` is 0.7% against `weak` at 24.3%, and several sampled `weak` entries read as the README's `terrible`. **No other pack has ever had a tier sampled.** | Doc | SF rebuild R9, 2026-08-28 | A | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | **A** |
| T-26 | **A detector's contribution is what it can catch that nothing else can, not how much it adds to today's count.** The C-11 census harness first neutralised each detector and asserted the candidate total fell; two detectors did not move it and were nearly deleted as decoration. On that pack their hits were double-covered — but one supplies the **class** (an appended placeholder keeps half its string; an unnamed one keeps none, and the fixes differ) and the other catches a form the rest cannot see at all. **A capability test is a case only that detector can answer.** | Tool | SF rebuild, 2026-08-28 | A | – | – | – | – | – | – | – | – | – | – | – | ? | **A** |
| T-27 | **A suppressor list is where a gatherer hides its own hits, so it prints what it suppressed and it is audited before use.** The census's first suppressor excused any citation whose medium was `Nonfiction / design` — which is the medium of `Various hard-SF worldbooks`, an unnamed citation the instrument had been given a reason to ignore. Found by reading the output, not by running the harness. Generalises `cross_pack_identity.py`'s existing practice into a rule. | Tool | SF rebuild, 2026-08-28 | A | – | – | – | – | – | – | – | – | – | A | – | ? | **A** |
| T-32 | **When a guard validates a field, assert in the same case that the field is EMITTED; and when an instrument writes an internal field, assert that it is STRIPPED before assembly.** Three instances in one build: `Device` validated and dropped, so screen 17 read `None` off 45 cards; `Medium` validated and dropped, so screen 9 read `missing` off 171; `_device` emitted and not stripped, so the schema rejected 45. Each time BOTH harnesses were green, because each tested one instrument against its own contract and neither tested the seam. `break_assemble.py` pins both ends. | Tool | ERO batches 10, 22, FINAL | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | **A** |
| T-33 | **A break harness must survive one bad case.** `break_tools.py` raised on a stale fixture string and produced no verdict on its other 24 cases — and had been in that state since Batch 3 while being reported green. A harness that cannot survive one bad case reports nothing about the rest. Each case is now wrapped and a failed mutation counts as DID NOT RUN, which is what it is. | Tool | ERO batch 06 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | **A** |
| V-30 | **Zero input is not a pass.** A screen whose input set is empty must report NOT RUN, never `ok`. Found at four screens in one batch (1, 2, 8, 11), each having reported `ok` for five consecutive batches on nothing; and again at screen 18, whose reference data — the Works namespace — does not exist until batch 21, so it would have failed 75 specialist cards for the absence of its own input. Extends T-21 from a collection to any input set. | Tool | ERO batches 06 and 10 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | **A** |
| V-31 | **A guard specified before the corpus exists gets one round of contact with the corpus for free.** The living-status guard was written for `1907–1998` and rejected thirteen cards stating `43 BCE – 17 or 18 CE` and `1642 – 9 September 1693`; obeying it would have meant deleting true detail from cards to satisfy a checker. The award-trap list matched `RITA` inside `Britain` for the same reason. **Widen the guard, never narrow the card** — a checker that trains you to write around it has stopped being a control. | Tool | ERO batches 18, 19, 25 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | **A** |
| V-32 | **A living-status claim must be made in a re-checkable shape, and an unresolved status is never carded as living.** merge G11 accepts four forms — a year range, `died YYYY`, `born YYYY`, or the exact phrase `life dates unresolved` — and rejects a card carrying two. `living_census.py` prints the list a pre-release re-check must run. The pack's second research pass found two authors who had died since the first, one of them in the year he last published. | Doc + Tool | ERO, research pass 2 | ? | ? | ? | ? | ? | ? | **A** | **A** | **A** | ? | **A** | ? | ? | **A** |
| T-34 | **A closed vocabulary matched as a bare substring is a bug, and `\b` is the wrong fix when a term begins or ends with a non-word character.** `tools/validate_pack.py` matched its five canon terms with `re.escape(t)`, so `in canon` fired inside `in canonical` and **the shipped Erotica pack failed the library's acceptance gate on a correct sentence** — the third appearance of this defect class in one build, after the award trap that matched `RITA` inside `Britain` and was fixed in `merge.py` alone. **The reflex fix would have been worse than the bug:** two of the five terms end in a dash, and `\bCosmos —\b` never matches `Cosmos — the setting`, so `\b` would have silently disabled the two terms enforcing *no Cosmos material, ever*, in the file whose job is that they are on. Use `(?<!\w)…(?!\w)`. ⟨measured: 7-case table — naive 2 wrong, `\b` 2 wrong, lookaround 0 wrong; and across all 14 packs, substring hits 1, lookaround hits 0⟩ **No closed vocabulary in this library has ever been swept for this.** | Tool | ERO terminal-move audit, 2026-09-04 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | **A** |
| T-35 | **A pipeline's exit code is not the tool's exit code.** T-21 says exit 2 means DID NOT RUN and that treating it as success is the defect the toolchain exists to prevent. It does not say that `tool \| tail` reports `tail`'s status. The validator's `FAIL — 1 error(s)` was read through a pipe as `EXIT=0` during this very audit, twice. **Every acceptance-gate run is unpiped, and its exit code is captured from the tool itself.** | Tool | ERO terminal-move audit, 2026-09-04 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | **A** |
| V-33 | **A named hand-check is run by two INDEPENDENT readers over a SHUFFLED set with deliberately failing cards planted in it, and a reader who passes a plant is discarded rather than reconciled.** "Pair-read, two passes, recorded" is not satisfied by one reader reading twice. Erotica's Sanction terminal-move audit ran three readers over 49 cards — 45 real, 4 planted, ids re-labelled so no verdict could be inferred from position — and both external readers caught all three planted failures and passed the planted pass-control. **The control is what makes the verdict evidence rather than opinion**, and it is the same discipline the parser guards get from a break harness, applied to a judgement. ⟨measured: 3 readers agreed outright on 41 of 45; no card drew a PASS from one and a FAIL from another⟩ | Doc + Tool | ERO terminal-move audit, 2026-09-04 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | **A** | ? | ? | **A** |
| B-18 | **When a hand-check fails a card, ask whether the cause is the card or a COLLISION BETWEEN TWO RULES, because the remedies are opposite.** B-10 requires an organising claim to concede a named exception class; §9.1 requires a card's terminal position to be a compositional choice; **neither says where the concession goes**, so it went last, where it does the most damage. ⟨measured: 12 of 612 cards put a self-reference in the last sentence, 204 put one elsewhere⟩ — a 204-to-12 correct-placement rate is a **placement** defect, not a selection defect, and cutting the cards would have removed the collection's foundational card over an appended clause. A collision is fixed by **stating the placement rule and reordering**, and by recording which two rules collided; a bad card is fixed by cutting it. **Overriding a stated remedy is a separate, named decision and never a quiet reclassification of the verdict.** | Doc | ERO terminal-move audit, 2026-09-04 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | **A** |
| V-34 | **A living-status claim carries the date it was last checked, or it is not re-checkable and V-29 cannot audit it.** Erotica's first real V-29 run found **three cards reading `living, checked in September 2026` that the September 2026 check could not confirm** — the phrase had been carried forward from drafting, and it named the ship month, so it looked like the check had just been done. Eleven further cards carried a bare `born YYYY` with no status at all. Nothing in the toolchain could see either: `living_census` reads what cards SAY and G11 checks that a life-dates claim was made in a valid SHAPE, never that it is true, and both declare that blind spot on every run. `living_census.py` now splits the living set three ways and **exits 1 if any card asserts a living subject without naming a check date**. ⟨measured: 110 author cards, 31 living claims, 27 carrying a re-check date, 4 carried unconfirmed, 0 with no status⟩ | Doc + Tool | ERO V-29 run, 2026-09-04 | ? | ? | ? | ? | ? | ? | **A** | **A** | **A** | ? | **A** | ? | ? | **A** |
| V-35 | **A withdrawn claim is withdrawn ON THE CARD, in the card's own words, and never silently.** Four Erotica cards were downgraded from asserted-living to unconfirmed; each now states what it previously asserted and why that was withdrawn. A card that quietly stops claiming something leaves the pack looking as though it never claimed it, which is the same defect as a ledger cell marked `A` because a rule was written down. **Corollary found the hard way:** a global replace that unifies a phrase will also rewrite that phrase **inside the sentence quoting it** — three cards briefly misquoted their own previous wording, caught only because the census buckets summed to more than the roster. When a correction quotes what it corrects, the quotation is inside the blast radius. | Doc | ERO V-29 run, 2026-09-04 | ? | ? | ? | ? | ? | ? | **A** | **A** | **A** | ? | **A** | ? | ? | **A** |
| V-36 | **A publishing announcement is not evidence that a creator is alive.** Reissues, translations, box sets and anniversary editions are exactly the trade items that keep appearing after a death, and one was the sole basis for an Erotica card's living claim. Confirmation needs the person ACTING: a first-person statement, a dated interview, a public appearance, a course they are listed as teaching. ⟨measured: the strongest confirmations in the V-29 run were a departmental course PDF, a national-broadcaster interview and an awarding body whose category is literally *autrice francophone vivante*; the weakest were author websites, which were stale on four of the eight people in one block while those people were conspicuously active elsewhere⟩ **Reference pages were the least reliable sources in the run** — their silence tracks editor attention, not the person. | Doc | ERO V-29 run, 2026-09-04 | ? | ? | ? | ? | ? | ? | **A** | **A** | **A** | ? | **A** | ? | ? | **A** |
| V-37 | **A predicate written against one pack's prose is not a library instrument, and the number it produces is not a measurement.** Sizing the library-wide living re-check with Erotica's own predicate reported **411** claims; a convention-blind one reported **919**; the audited instrument reports **885**. The first number was about to be used to size the repair. The library carries **four** life-date conventions — `1797-1851 · British`, `Scottish, 1824–1905.`, `American, born 1942.`, and TV Formats' *no life dates at all* — and a tool that assumes one silently reports zero living authors for the packs using the others, which is exactly what happened for SF, Fantasy, MCT and TV Formats. **Third instance in this build**, after `step9_audit.py` re-deriving the screens' predicates and the terminal-self-reference scan omitting a word. Rule: an instrument promoted from a pack's `_build/` to library-wide `tools/` is **rewritten against every convention and broken against a fixture per convention**, never merely copied. ⟨measured: `tools/break_living_census.py` — 15 cases, 15 behaved as claimed, one BEHAVIOUR fixture per convention⟩ | Tool | ERO → library promotion, 2026-09-04 | ? | ? | ? | ? | ? | ? | **A** | **A** | **A** | ? | **A** | ? | ? | **A** |
| V-38 | **A pack that states no life dates does not thereby make no living claims — it makes them invisible.** TV Formats cards read *"American writer-producer, television career since 1993."*: **113 of its 120 author cards assert a living person with nothing to check and nothing to risk-rank.** A convention that omits the claim does not avoid the liability, it removes the handle. A pack without life dates cannot be given a V-29 pass at all, so the ruling on the convention comes before the re-check. | Doc | ERO → library promotion, 2026-09-04 | ? | ? | ? | ? | ? | ? | **–** | **–** | **–** | ? | **–** | ? | ? | **A** |

### Cells that moved

* **S-05 · SF `?` → `A`.** `book` is gone; no pack uses it. PACK-SPEC's standard-ids note had the
  `psych` packs backwards and was corrected on disk the same day (they are Historical, Horror and
  Romance).
* **C-11 · SF `P` → `A`, COM `A` → `P`.** See the row. The eighth ledger row found narrower than the
  disk, and the second in which the defect it describes was in a pack marked Applied.
* **T-07 · SF stays `A`.** `name_cross_check.py` reports 0 duplicates and 0 mismatches; the
  2026-08-25 `Liu Cixin` finding is closed on disk.
* **B-01 and B-03 · amended above**, pack one only, dated, with the five-media reason on the record
  and R11's obligation attached: the disclosed-debt count may not grow.

### Moved into Part 3 (open debts)

| Priority | Item | Packs owed | Size |
|---|---|---|---|
| 22 | **C-18 back-port** — 47 plot-logline work descriptions across eight packs (COM 22, MCT 8, HIS 7, WAR 6, SUP/WES/FAN/LIT 1 each). Measured with a verified instrument. | 8 packs | Small per card, and every one has its own `text` to draw from. |
| 23 | **T-04 has never applied to Science Fiction.** 64 `(work, medium)` pairs over the cap of 2, involving **256 of 1,059 example citations**; by title alone 84 works are over cap and *The Expanse* is cited 29 times. The cell reads `–` (*built before the tool existed*) and that is true and is not the same as *clean*. | SF | Large — a content pass the size of an expansion batch set. |
| 24 | **207 Science Fiction descriptions are below PACK-SPEC §3's one-to-two-sentence floor.** The next highest pack in the library is 16, and no pack but SF has a single THIN *work* card. `work-142`'s description is the word `Murderbot.` | SF | Medium. Its own pass. |
| 25 | **V-11 on Science Fiction, and one card is known wrong today.** Superhero's `author-58` records in writing that SF's Peter David card says `b. 1956` with no death and that he died on 24 May 2025. A one-card fix would make 141 unchecked cards look checked (V-26); the discharge is a dated pass over all 142. | SF | Small to run, and overdue. |
| 26 | **Diacritics.** **Zero entry names in `reference-scifi.json` carry a diacritic of any kind.** `Stanislaw Lem` on the card against `Stanisław Lem` in the pack's own prose; `Karel Capek` spelled without the háček consistently, so every instrument agrees and all of them are wrong about the world (V-21). Not a plausible property of a science-fiction canon; the signature of the overnight conversion. | SF, then audit the others | Small per name, unknown in count. |
| 27 | **Superhero `continuity-28` references `scifi:trope-38` — *Digital resurrection* — while discussing infinite realities.** It resolves, and `ref_audit.py` reports it healthy, and it means the wrong thing. Found by HAND-CHECK R on its first run in this pack. Superhero takes a patch bump. | SUP | One card. The judgement is about Superhero's argument. |
| 28 | **`packVersion` admits no prerelease suffix.** `schema/pack.schema.json` pins `^\d+\.\d+\.\d+$`, so a staged build cannot leave a release candidate on disk and pass its own gate. SF 2.0.0 sits on disk unpublished with the rc state recorded outside the file. | Schema | Small, and it recurs every time a build is split across sessions. |

---

## Model routing and the claims audit — standard set 2026-08-29, playbook v2.1

**Origin: TJ's decision to route the last three packs to the cheaper model** — *"we have done such
great work with iterating the packs that I'm going to downgrade the work to Sonnet and see if it
passes the test for the last 3."* The standard was written rather than the decision merely taken,
because a routing rule that lives in a chat is a rule that does not exist at pack twenty.

The full standard is `PACK-BUILD-PLAYBOOK.md` §*Model routing and the claims audit*. Four rows
enter the register.

### New standing rows

| ID | Rule | Level | From |
|---|---|---|---|
| T-28 | **Route by judgment density, never by importance.** The library's quality comes from the instruments, not the model — 57 break-cases, eight verified checks, three exit codes, sixteen assembly screens catch a wrong answer regardless of who produced it. That is what makes routing possible **and** what bounds it: a screen that can fail the build is model-proof, a ruling is not. Three roles — ARCHITECT (blueprint, every ruling, §5c and §5d cards, seams, Grok, §17 deltas, the controls), BUILDER (batches, merges, screens, assembly, research, the build log), AUDITOR (the claims audit, **in a session that did not build**). Collections route by a density table keyed on collection *type*, so a new genre routes itself. | Doc | Routing standard, 2026-08-29 |
| T-29 | **A number in a build log carries the command that produced it — `⟨measured: …⟩` — and a claim with no tag fails the audit by default.** Retro-pass B3's five discrepancies were **all five in the account rather than in the packs**: `hedge_check` clean on nine packs not ten inside a table whose closing line claimed every result was documented; Western's 28 VARIANTs called *pre-existing* when twelve were the pass's own deliberate work; `ref_audit`'s NOT RUN row saying nine and listing eight. **Nothing in the toolchain reads a build log.** This is T-07 pointed at prose: do not mark a cell `A` because a rule was written down, and do not accept a number because a session wrote it. The auditor re-runs **every** tagged command (not a sample), checks each completeness claim **by counting the thing claimed complete**, re-runs the validator in the container and the full harness rather than quoting them, and reads the last sentence of every ARCHITECT-marked card. | Doc + Tool | Routing standard, 2026-08-29 |
| T-30 | **Three planted controls per pack, sealed, one of them a judgment control.** The architect writes them to `_build/<genre>/controls/CONTROLS-sealed.md`; the builder is told the file exists and how many, and does not open it. **(1) factual** — an invented award or wrong year, testing the research pass. **(2) structural** — a card violating a floor the blueprint states in prose; **a control only a human catches proves the floor was never wired into assembly**, which is exactly Comedy's screen 10b. **(3) judgment** — a card that is fluent, sourced, and takes a side in its last sentence, which is the one thing no instrument in the set can see. Precedent for the first two is good: Western rejected the invented *Levi Strauss Frontier Prize*, Superhero's *"Bronze Realist mode"* returned nil, Manga rejected six of six. **Sealing is not adversarial-proof and does not need to be — the controls catch inattention, which is the failure that actually happens.** | Doc | Routing standard, 2026-08-29 |
| T-31 | **The builder's bright line, and it is checkable rather than judgemental.** A builder may not (1) write a §17 delta row — changing the standard is the architect's, and a builder that believes a delta is needed **stops and asks**; (2) write a card invoking §5d contested canon or §5c living religions and cultures — it drafts, marks the card `ARCHITECT`, and moves on, because these are the two places a fluent, sourced, internally consistent card can be quietly wrong and **no instrument in the set can see it**; (3) resolve a contradiction between two research passes — it runs the narrow third pass and hands the contradiction up rather than labelling it. **Escalation ends a routed run** on a carded control, a numeric discrepancy in the claims audit, a builder-written delta row, or more than 10% of a collection marked `ARCHITECT` — that last one meaning the collection was routed wrongly, not that the builder failed. A non-numeric completeness misstatement is **recorded, corrected, and does not end the run.** | Doc | Routing standard, 2026-08-29 |

### The routing table, keyed on collection type

| Collection | Density | Route |
|---|---|---|
| Subgenres, Tropes, Craft, Checklist, History | Low–medium; fixed shapes, hard screens | Builder |
| Authors, Works | Medium, **fully instrument-covered** | Builder + verification agents |
| Psychology | High — C-08 tiering is a claim about a literature | Builder drafts, architect tiers |
| Any specialist touching a living tradition, living culture or contested attribution | Highest, **uninstrumented** | Architect |

**Erotica (§5b) and Religious / Inspirational (§5c) sit in the last row for a large share of their
cards and are not straight builder packs.** Religious / Inspirational is the highest-judgment pack
in the library and the least instrumented.

### Open, and it is the point of the exercise

**The routing standard is UNMEASURED.** It is derived from two dated failure records — Sonnet's
B3 and Opus's own errors in the same pass and the SF rebuild — and from nothing else. **TV Formats
is the first run**, chosen as the most structural of the three remaining and therefore the one
where the instruments cover best, **not** because it matters least.

The result goes into this ledger as a dated finding either way. **A routing decision that is not
measured on a real pack is the same thing as a ledger cell marked `A` because somebody wrote the
rule down** — which is the defect this library has now found nine times, and it would be a poor
joke to add a tenth by writing this section and never testing it.

---

## The manga award eligibility rule — corrected 2026-08-31

**The false rule:** the playbook's award-bodies list stated that a manga title is only eligible for
its own publisher's prize. **False.** The Kodansha and Shogakukan prizes accept titles from rival
publishers. Sponsors' own titles dominate the winners — a real pattern mistaken for a rule.

**Found false twice before it was corrected.** Romance build, 2026-08-11, with two named
counter-examples. Superhero build, around 2026-08-23, independently, written in capitals. **The
playbook rewritten on 2026-08-29 still carried the false version.**

**The failure this exposes, which matters more than the rule itself.** A finding recorded in a build
document does not reach the document that builds read. Found by the pack method review on 2026-08-31
and now the first entry in `C:\Projects\_brain\BUILD-LESSONS.md`.

**The rule that came out of it:** end every piece of recurring work by naming the file that has to
change, and change it in the same session. Written into `C:\Projects\README.md` under
"Before you finish", 2026-08-31.

---

## Romance 1.1.3 — `subgenre-29` corrected, 2026-09-03 (Erotica build, session 1)

**One card, one patch bump, one row. Found by pack fourteen while reading the seam it builds on.**

**The defect.** `romance:subgenre-29` (*Erotic Romance*) stated the erotica / erotic-romance
boundary flatly and without attribution. Romance's **own** research document
(`claude/romance-research-taxonomy-market-2026-08-11.md` §14) sources that distinction to
**Passionate Ink** — the erotic-fiction authors' body that separated from RWA in 2005 — records that
Passionate Ink itself says the older publisher definition *"has changed"* as mainstream heat has
risen, and closes, in bold: **"CONTESTED / drifting. Do not write the card as if the line were
stable."** The card was written as if the line were stable. ⟨measured: `'Passionate Ink' in
json.dumps(entry)` over all 613 Romance entries → **0**⟩

**Row class: V-28** — *a research document is not a delivery mechanism; anything a research pass
records as required is checked against what shipped, not against the pass.* Also **C-04** (name the
contest, state both positions, take no side) and **C-05** (a contested card with only one side
sourced does not ship). **Romance's cells for C-04 and C-05 both read `A`.** This is the ninth
ledger row found narrower than the disk.

**The fix.** `principle` rewritten to name Passionate Ink, date it to 2005, state the drift and its
cause, and take no side on where the line now sits. The card's craft claim — every scene must change
the relationship state — is unaffected and unchanged. `description`, `example` and `application`
untouched.

**Why it was patched rather than logged as a debt, and the reasoning is on the record.** The Erotica
build's first ruling (TJ, 2026-09-03) was **not** to open Romance: Erotica would state the contest on
its own seam card and `subgenre-29` would go to Part 3. **The Grok cross-check of the Erotica
blueprint overturned that**, on the argument that a user reads pack 5's flat sentence next to pack
14's fuller one, so the library would teach two versions of the same distinction and call it
contested-canon hygiene — *"an open debt is a filing cabinet, not a fix"*, and leaving it live while
building the neighbouring pack on the same joint **is** the second shipping. **TJ took the reviewer's
ruling on 2026-09-03.** Full record at `_build/erotica/blueprint-LOCKED.md` §19 Q4.

**Version semantics.** Patch, not minor: this is a correction and no pack gains or loses an entry
(T-14). `ROM` **1.1.2 → 1.1.3**, `lastUpdated` 2026-09-03.

**Gates.**
- ⟨measured: `python3 tools/validate_pack.py packs/reference-romance.json schema/pack.schema.json`
  in the **session container** (T-11; the desktop's `jsonschema` is 3.2.0 and predates
  `Draft202012Validator`, container is 4.26.0) → **PASS — 0 error(s)**, 613 entries across 10
  collections, quality distribution unchanged⟩
- ⟨measured: `diff` before/after → **6 changed lines**, i.e. exactly three fields — `principle`,
  `packVersion`, `lastUpdated`. **No reformatting.** The edit was made as a targeted string
  replacement on the raw JSON rather than through `json.load`/`json.dump`, because the retro-pass
  found an `indent=2` write against an `indent=1` library reformatting ~15,000 lines from a
  one-character change⟩
- ⟨measured: manifest checked against disk rather than read off the row just written — `packVersion`
  1.1.3, `lastUpdated` 2026-09-03, `entryCount` 613, `approxSizeKB` 783, **all four agree**⟩

**Claude performed no git operations. TJ publishes.**

### Part 3 — the row this closes and the one it does not

**Closes:** the `romance:subgenre-29` item opened by the Erotica build the same day. It never
reached a numbered Part 3 row; it was found and discharged inside one session, which is the
outcome the ledger's own "name the file that has to change, and change it in the same session" rule
is written to produce.

**Does NOT close, and is a new open question worth a row:** **no instrument in the library compares
a pack's shipped cards against its own research documents.** V-28 says the check must happen; nothing
performs it. This defect was found by a human reading an adjacent pack's seam, which does not scale
and did not happen for twelve other packs. **The research documents for packs one to seven are in the
claude.ai project and the shipped JSON is on disk, so the two halves are not even in the same place**
— which is also why a research agent with project RAG access reported Black Lace as uncarded in
Romance when it appears in three shipped cards (`_build/erotica/research/FINDINGS-session-1-2026-09-03.md` §D).

---

## The TV Formats and Erotica columns, added 2026-09-03 — and a fifth mark

**Part 1 carried twelve pack columns and one hundred and four grid rows. Pack thirteen was not in
it.** TV Formats shipped 1.0.0 on 2026-08-31 and its column was never added; the handoff recorded
that honestly and deferred it. **Adding Erotica's column on top of that gap would have produced a
register running SF … MNG, ERO — skipping the pack immediately before it**, which is worse than
either gap alone.

Both columns are added together. ⟨measured: 6 headers rewritten, 6 separators extended, **104 grid
rows extended**, verified by an escape-aware post-condition that every rule row's cell count equals
its own header's — 7 tables, 105 rows, PASS⟩

### `TVF` — marked `?` throughout, and that is the honest state, not a shrug

The handoff's own instruction: *"Treat TV Formats's column as **unaudited** (Part 3 item 15's own
rule: 'every `?` in the grid is a pending item') until someone actually runs it row by row."*
**A `?` here means nobody has checked, which is exactly true**, and it is what Part 3 item 15
already says a `?` is for. Filling the column with guesses would be the `A`-because-it-was-written-
down defect this ledger has now found nine times. **104 pending items, honestly marked.**

### `ERO` — marked `C`, a fifth mark, because Part 4 contradicts itself

**Part 4 says two things that cannot both be followed.** It says *"the new pack gets its own column
with those rows marked **before Batch 1**"*, and it says *"**Do not mark a cell `A` because a rule
was written down.** Mark `A` when the pack **ships** under it."*

**A pack with zero cards cannot ship under anything.** Following the first instruction literally
produces exactly the defect the second one bans. And marking the column `?` instead would put two
different realities under one mark — *nobody has checked* and *there is nothing yet to check* — which
is the "same mark, opposite realities" failure this ledger found at V-03 and again at C-08.

**So the legend gains a fifth mark:**

> **`C`** — Committed at blueprint, not yet verified against shipped cards. Converts to `A`, `P` or
> `–` at that pack's step 9, and **never stands after a pack ships.**

Every Erotica grid cell is `C`. **Not selectively `–`**, because "does not apply" is a claim about
shipped cards and Erotica has none — deciding applicability now would be the same premature
judgement in a different costume. The blueprint (`_build/erotica/blueprint-LOCKED.md`) is the record
of *what* the pack commits to; the grid records only that it has committed.

**A standing rule this creates:** a `C` older than its pack's step 9 is a defect. If a pack ships and
its column still reads `C`, step 9 was not run.

### A third finding, unrelated to either column and previously unrecorded

**T-28, T-29, T-30 and T-31 — the entire model-routing standard — have no pack columns at all.**
They live in a four-column `| ID | Rule | Level | From |` table in the routing section, so **no pack
can be marked against any of them**, including TV Formats, which is the pack the standard was
written for and tested on.

Four standing rules in the register that the grid cannot express. ⟨measured: 108 rule rows across
Part 1; 104 are grid rows, 4 are not⟩ **Not fixed here** — regularising them means deciding what
`A` would even mean for a routing rule on a pack built before the standard existed, and that is a
ruling rather than a formatting job. **Recorded as a Part 3 item.**

| Priority | Item | Packs owed | Size |
|---|---|---|---|
| 29 | **TV Formats's Part 1 column is 104 `?` cells.** Every one is a pending item under Part 3 item 15. | TVF | Medium. One session, row by row against the shipped pack. |
| 30 | **T-28 – T-31 have no grid representation.** The model-routing standard cannot be marked per-pack, so no pack — including the one it was tested on — has a recorded position on it. | All | Small to regularise, but needs a ruling first on what `A` means for a routing rule. |

---

## Erotica 1.0.0 — shipped 2026-09-04

**Pack fourteen.** `packs/reference-erotica.json`, 612 entries, ten collections, schema v2.
⟨measured: `Draft202012Validator` under jsonschema 4.26.0 in the session container (T-11) → **0
errors**⟩ ⟨measured: `_build/erotica/tools/rebuild.sh` → **20 screens run, 0 NOT RUN, 0 failing**⟩

| collection | count | | collection | count |
|---|---|---|---|---|
| Subgenres | 34 | | The Legal Test and the Craft It Produced | 45 |
| Tropes | 90 | | Escalation and the Ending Problem | 30 |
| Authors | 110 | | History | 34 |
| Works | 171 | | Psychology of Desire and Fantasy | 26 |
| Craft | 56 | | Checklist | 16 |

**Two specialist collections, both without precedent in the library.** `sanction` is the first
collection anywhere in fourteen packs about the *external constraint on publication* rather than
about craft or content; `ending` is built on the claim that this form has no native mechanism for
closure and must import one. The originality claim is qualified on the collection's own first card
(§17.20): the general observation that a legal regime shapes a literary form is old and is made
elsewhere in this library, and what is new here is the specific mapping.

### The grid: `ERO` converts from `C` to its real marks

The fifth mark introduced on 2026-09-03 was defined as never standing after a pack ships. Erotica
has now shipped, so **every `C` in the `ERO` column is due for conversion at step 9**, and a `C`
still standing there is by this ledger's own standing rule a defect. That conversion is the pack's
step 9 and is **not done in this entry** — recorded here so the debt is visible rather than assumed
discharged.

### Standing rows this pack adds

| ID | Rule | From |
|---|---|---|
| T-32 | **When a guard validates a field, assert in the same case that the field is EMITTED; and when an instrument writes an internal field, assert that it is STRIPPED before assembly.** Three instances in one build: `Device` validated and dropped (screen 17 read `None` off 45 cards), `Medium` validated and dropped (screen 9 read `missing` off 171), `_device` emitted and not stripped (schema rejected 45). Each time both harnesses were green, because each tested one instrument against its own contract and neither tested the seam. | Erotica batches 10, 22 and FINAL; `break_assemble.py` |
| V-30 | **Zero input is not a pass.** A screen whose input set is empty must report NOT RUN, not `ok`. Found at four screens in one batch (1, 2, 8, 11) and again at screen 18, whose reference data — the Works namespace — does not exist until batch 21. | Erotica batches 06 and 10 |
| V-31 | **A guard specified before the corpus exists gets one round of contact with the corpus for free.** The living-status guard was written for `1907–1998` and rejected thirteen cards stating `43 BCE – 17 or 18 CE` and `1642 – 9 September 1693`; obeying it would have meant deleting true detail to satisfy a checker. Widen the guard, never narrow the card. | Erotica batches 18 and 19 |
| T-33 | **A break harness must survive one bad case.** `break_tools.py` crashed on a stale fixture string and produced no verdict on its other 24 cases, and had been in that state since Batch 3 while being reported green. Each case is now wrapped and a failed mutation counts as DID NOT RUN. | Erotica batch 06 |
| V-32 | **A living-status claim must be made in a re-checkable shape, and an unresolved status is never carded as living.** `merge.py` G11 accepts four forms; `living_census.py` prints the list a pre-release re-check must run. The pack's second research pass found two authors who had died since the first, one of them in the year he last published. | Erotica, after research pass 2 |

### Part 3 — items this closes and items it does not

**Closes:** nothing. **Opens:**

| Priority | Item | Packs owed | Size |
|---|---|---|---|
| 31 | **Erotica's step 9 — convert the 104 `ERO` cells from `C`.** The mark is defined as never standing after a pack ships, and the pack has shipped. | ERO | Medium. |
| 32 | **13 of Erotica's 110 author cards carry `life dates unresolved`** — no death record and no dated recent activity found. They are carded honestly rather than guessed, and each is a real open question. `living_census.py` prints the list. | ERO | Small per card, thirteen cards. |
| 33 | **The hand-off marker back-port, still outstanding.** Erotica's six cards make the reserved sentence a two-pack convention, not a library one. Until the back-port runs, no pack file may describe it as the library standard. | 12 packs, 76 cards | Medium. |
| 34 | **F-22, the real spell-check instrument**, specified at TV Formats §12.5 and still not built. Erotica shipped without one; `script_check.py` covers non-Latin script only and says so on every run. | All | Medium. |

### One finding for the cross-pack review, recorded because it is measurable

⟨measured: `sensitive_audit.py` across fourteen packs⟩ **Erotica carries a live contest on 64 of
612 cards — 10%, the highest in the library** (literary and mystery 2%, fantasy 4%, historical and
horror 5%, manga 8%). That is a property of the subject rather than of the build: obscenity law,
the authorship disputes, the sex wars and the pack's own organising claim are all genuinely
unsettled, and the pack's job on each was to carry both sides rather than to choose. **0 cards end
on adjudicating language.**

---

## Erotica step 9 — the `ERO` column converted, 2026-09-04

**Run immediately after the pack shipped, because this ledger's own rule says a `C` standing after
a pack ships is a defect.** All 104 cells converted. Full working, rule by rule with its evidence:
`_build/erotica/step9-ERO-column.md`.

| mark | count |
|---|---|
| **A** | 95 |
| **–** | 5 |
| **P** | 4 |

**22 of the 104 were MEASURED against `packs/reference-erotica.json`** by
`_build/erotica/tools/step9_audit.py` — the shipped artefact, not the blueprint and not the build
log. The rest are hand-ruled with their evidence named. The split is stated rather than implied,
because a column filled from intentions records intentions, and that is exactly what
`romance:subgenre-29` turned out to be.

**The auditor was wrong before the pack was.** `step9_audit.py`'s first version disagreed with the
shipped screens on two rules out of twenty-two — it wrote its own text-blob where `screens._blob`
also reaches `items`, `examples[].text`, `works[].note` and `name`, and it used a cheaper
life-dates pattern than G11's — and both disagreements were the auditor failing a pack that was
right. **That is V-03 and C-08's "same mark, opposite realities" arriving inside the audit of them.**
The tool now imports `screens` and `living_census` instead of re-deriving their predicates.

### Three defects found and fixed by running the LIBRARY's checks, not this pack's

None of Erotica's twenty screens can see any of these:

1. **`sensitive_audit.py`** — one card ending on adjudicating language, which is C-06, the one test
   the blueprint says no instrument in the pack's own set can perform. Rewritten; re-run reports 0.
2. **`name_cross_check.py`** — 5 MISMATCH and 1 NEAR-MISS, accents present on the Works side and
   absent on the Author side plus one person spelled two ways. Fixed toward the correct form rather
   than the convenient one, per the tool's own hand-check instruction; re-run reports 0 and 0.
3. **`two_statements.py`** — a publisher's bibliography listing a book his own work card credits to
   its author. The works-list note now carries the role.

### The four `P`s, and they are the reason this was worth running

| ID | Debt |
|---|---|
| **B-16** | Creators carded in more than one pack are compared by NO screen. Carter, Winterson, Rice, Baldwin and Lawrence are all carded elsewhere in this library, and nothing checks that the second pack reads them differently from the first. `name_cross_check.py` is intra-pack by its own header. |
| **V-18** | Research pass 2's open items live in a build log, not in a verification brief, and no brief was run. |
| **V-20** | No pass has gone back to re-test the pack's hedges. Honest at first writing, untested since — the decay the row describes. |
| **T-16** | Screen 18 was not dry-runnable against a stub. The pack SPLIT the check by what each part can see instead, which may be the better general answer and is offered as a rewrite rather than claimed as compliance. |

### One `A` that should be read with its evidence

**B-07.** The shipped hand-offs are correct, but the check ran *post*-lock and found two defects: a
Horror card narrowing wrongly against four cards Horror already owns, and a Comedy card pointing at
a pack carrying no bawdy-tradition card at all. **B-07 as written is satisfied on card NAMES while
the SUBJECT goes unchecked**, which is how both got through.

### Five standing rows added to the grid rather than left outside it

T-32, T-33, V-30, V-31 and V-32 are **in the Part 1E table with all fourteen pack columns**, marked
`A` for ERO and `?` for the other thirteen. They are not appended as a separate table, because that
is the defect Part 3 item 30 already records: T-28 to T-31 live in a four-column table and **no
pack can be marked against any of them**, including the one the standard was written for.

### Part 3 — items this step opens

| Priority | Item | Packs owed | Size |
|---|---|---|---|
| 35 | **B-16 has no instrument.** A cross-pack creator screen — does the second pack read a shared creator differently from the first — does not exist anywhere in the library. Fourteen packs, heavy overlap in Literary, Romance, Horror and Erotica. | All | Large, and the highest-value tooling item outstanding. |
| 36 | **B-07 needs rewriting** to require checking against the destination's shipped card SUBJECTS, not only its names, and to state that a hand-off to a pack with no receiving card is worse than no hand-off. 17.19's proposal, now with a second pack's evidence. | Doc | Small. |
| 37 | **The medium enum has no term for the prose dialogue**, a dominant form in the classical and libertine canon. Erotica cards five as `novel` with the strain declared on each card. Retired row S-02 turns out to have been describing a real and continuing gap, for a different form than the one it named. | All | Ruling first, then schema. |
| 38 | **The pseudonym taxonomy is short by five modes**: outright anonymity, disavowal under legal pressure, traditional attribution to a possibly wrong person, posthumous attribution, and the platform handle that becomes a legal byline. Erotica states each in plain words in `Meta` rather than forcing a type. V-12 says "three-type"; the working set is four and the record wants nine. | All | Ruling, then a doc change. |
| 39 | **Nine terminal self-references outside `sanction` need a decision, not an exemption.** `ending-28`, `ending-30`, `psychology-26` and `subgenre-11` carry the genuine withdrawal signature; `history-32` is the scope hedge the blunt detector is expected to over-catch; the four `checklist` entries are collection idiom. All nine are exempted in `config.TERMINAL_SELFREF_EXEMPT` **with a written reason each**, which makes them countable rather than silent. | ERO | Small per card. |
| 40 | **No closed vocabulary in this library has been swept for the substring-boundary defect (T-34).** Three instances found in one build — award traps, canon terms, and the audit's own throwaway scan. Award traps, canon terms, sanction devices, robustness tiers, medium enum, exclusion terms, hand-off markers: every one is a closed list matched against prose somewhere. | All | Medium, and mechanical. |
| 41 | **The `checklist` collection addresses the pack's builder, not the writer.** "Run on every Works and Authors card", "does the card say so". G12 surfaced it; whether that is the intended audience is a design question no pack has ever asked, across fourteen packs. | All | Ruling first. |
| 42 | **Step 9's own validator row was false, and nothing but a later audit caught it.** T-29 requires a `⟨measured⟩` claim to carry the command that produced it — it does not require the auditor to RE-RUN the command at the moment of ruling. Erotica's step 9 recorded `PASS — 0 errors` for a file that returns exit 1. **A verification pass needs a gate of its own**, or it is the same promise one level up. | All | Ruling, then a step-9 procedure change. |
| 43 | **Four Erotica author cards are carried as unconfirmed and every one is resolvable by a single direct enquiry**, not by more research: Cleis Press or the Golden Crown Literary Society for Ann Bannon (age 93, nothing dated since December 2021); the California Board of Behavioral Sciences licence register for Patrick Califia; Tristan Taormino's own social accounts, unreadable from this environment; and any dated 2025–26 item for Nicholson Baker. | ERO | Small — four enquiries. |
| 44 | **V-29 fires once, before release, and nothing re-fires it.** A pack that sits unpublished for six months carries a stale check and no instrument says so. The confirmation date is now on every card, which makes staleness visible but does not act on it. **A pack-age check against the newest living-confirmation date on any card would.** | All | Small tool, library-wide value. |
| 45 | **Thirteen other packs have never had a V-29 run at all.** The rule was written during Erotica. Every earlier pack asserts living subjects with no check date and no record of a re-check, and Erotica's run found a 3-in-15 error rate among cards that claimed to have been checked. | 13 packs | Large, and the most likely place in the library for a factually false card today. |
| 46 | **TV Formats has no life-date convention**, so 113 of its 120 author cards assert a living person invisibly and none can be risk-ranked. **A ruling on the convention is a prerequisite for its V-29 pass**, not part of it. | TVF | Ruling, then a re-card of 113 cards. |
| 47 | **225 of the 885 outstanding living claims carry no birth year**, so they cannot be triaged by age — the one risk signal available. They have to be worked straight through, and no pack has a plan for them. | 13 packs | Large. |
| 48 | **The thirteen packs are already published, so their V-29 repairs are version bumps, not amendments** (Romance 1.1.2→1.1.3 precedent). Erotica was the only pack that could be corrected in place, because it had not shipped. Nothing in the playbook says this; it was decided at the handoff. | 13 packs + Doc | Ruling recorded; execution is per pack. |


---

## Erotica — the Sanction terminal-move audit, 2026-09-04

**The pack's only named hand-check, and the last thing owed before publication.** Blueprint §9.1:
*"Every card in the collection must end on a compositional choice. Fail = cut, and the slot returns
to its category. Pair-read, two passes, recorded."* Full record at
`_build/erotica/audits/sanction-terminal-move-AUDIT.md`; raw verdicts at
`…-VERDICTS.md`; the judging rule, written **before any card was read** and never edited, at
`…-RULE.md`.

**Pair-read means two readers, and the readers were controlled.** Three readers over 49 cards — 45
real and **4 planted**, ids shuffled and re-labelled so no verdict could be read off a position.
Both external readers were blind to pass 1, to each other, and to the existence of the plants.
⟨measured: both caught all three planted failures and both passed the planted pass-control⟩. That
control is the whole reason the verdict counts as evidence; it is `break_merge.py`'s discipline
pointed at a judgement, and it is now **V-33**.

**Verdict: 2 FAIL, 1 BORDERLINE, 42 PASS.** ⟨measured: three readers agreed outright on 41 of 45,
and no card drew a PASS from one reader and a FAIL from another⟩ — which is worth recording,
because §9.1 demoted this test from a floor on the express grounds that two competent readers would
disagree. On this collection they did not.

**The cause was not a bad card. It was two of this library's own rules colliding.** Both failures
open with a clean craft instruction and then withdraw into a sentence about what this collection
offers or declines to settle. **B-10** requires that concession; **§9.1** requires the terminal
position to be a choice; **neither says where the concession goes.** ⟨measured: 12 of 612 cards put
a self-reference in the last sentence; **204 put one somewhere else**⟩. A 204-to-12 correct-placement
rate is a placement defect, and `sanction-7` proves it inside the same collection — same concession,
placed first, lands on *"name the door your material has to pass through"*, passes all three readers.
**B-18.**

**The remedy was overridden, in the open.** §9.1 says cut. I did not cut. The verdicts stand as
FAIL — nothing was reclassified — but the repair was a **reordering of each card's existing
sentences**, deleting nothing, keeping B-10 satisfied, and cutting `sanction-1` would have removed
the Hicklin card the whole Anglo-American category leans on, over an appended clause. **This is a
named decision and TJ can reverse it.** ⟨measured: rebuild + field-by-field diff — 3 cards changed,
3 fields changed, 612 entries, every other byte identical⟩.

**The habit is now a guard.** merge **G12** checks the last sentence only, on every card in every
collection. The detector is deliberately blunt and the nine exemptions are deliberately enumerated
with a written reason each, on screen 19's precedent — a cleverer regex would have hidden a
judgement inside a pattern. ⟨measured: `break_merge.py` → **57 cases, 57 behaved as claimed**⟩,
including the case that proves it is about placement (the same words earlier in the card stay
green) and a declared blind spot. **The guard found two cards my own scan had missed on its first
run**, because that throwaway scan omitted one word from its pattern; my "10 of 612" was wrong and
the guard's 12 is the measured figure. T-29 in miniature.

### And the audit found two things it was not looking for

**1. The pack as shipped failed the library's acceptance gate, and step 9 recorded that it passed.**
`validate_pack.py` matched its five canon terms as **bare substrings**, so `in canon` fired inside
`work-4`'s *"inclusion in **canonical** anthologies"* — a correct sentence, and a model verified
negative of exactly the kind this pack's own `checklist-10` asks for. ⟨measured: the three repaired
fields reverted in a scratch copy and the pre-fix validator re-run against the pack **as shipped**
→ `FAIL — 1 error(s)`, exit 1 — so this predates the repair⟩. **`step9-ERO-column.md` row 75 was
therefore false**, and is corrected in place. Step 9 was the pass whose entire purpose was to
replace promises with measurements, and it committed the error it was auditing for. **Part 3 item
42:** a verification pass needs a gate of its own, or it is the same promise one level up.

**2. The obvious fix would have been worse than the bug.** Two of the five canon terms end in a
dash, and `\b` after a dash demands a word character with no space — so `\bCosmos —\b` never matches
`Cosmos — the setting`. The reflex fix would have **silently disabled the two terms that enforce
"no Cosmos material, ever"**, and every run afterwards would have printed `0 errors`. ⟨measured:
7-case table — naive 2 wrong, `\b` 2 wrong, `(?<!\w)…(?!\w)` **0 wrong**⟩; ⟨measured: across all 14
shipped packs, substring hits 1, lookaround hits 0 — the narrowing removes no real detection⟩.
**T-34**, and this is the **third** appearance of the substring-boundary defect class in one build,
after the award trap that matched `RITA` inside `Britain`. Nothing has ever swept the library's
other closed vocabularies for it — **Part 3 item 40**.

**A third thing, smaller and mine.** The validator's `FAIL` was first read through a pipe to `tail`
as `EXIT=0`. T-21 says a non-zero exit is not a detail; it did not say a pipeline's exit code is
not the tool's. **T-35.** Every gate run in the audit record is unpiped.

### Gates after the repair

⟨measured, all unpiped, 2026-09-04⟩ — full replay **612 entries / 10 collections**; assembly screens
**20 run, 0 NOT RUN, 0 failing**; break harnesses **57 / 32 / 25 / 10 / 4, all as claimed**;
`blueprint_parity` PASS; `palette_check` PASS; `validate_pack.py` **in the session container** (T-11;
the desktop's jsonschema 3.2.0 raised `AttributeError` again here) **PASS — 0 error(s), exit 0**;
**all 14 packs PASS** under the fixed shared tool; planted canon leaks all RED; `sensitive_audit`
**0 cards end on adjudicating language**; `name_cross_check` **0 MISMATCH / 0 NEAR-MISS**;
`manifest.json` vs disk **0 disagreements across all 15 rows**.

`manifest.json` needs no change — ⟨measured⟩ 612 entries, 789 KB, `lastUpdated` already 2026-09-04.
**`packVersion` stays 1.0.0 because the pack has not been published**; nobody holds a 1.0.0, and a
1.0.1 would imply a version in the wild that never existed. **If it has already been pushed, this
must become 1.0.1**, on the Romance 1.1.2→1.1.3 precedent.

**Files awaiting TJ's publish** (Claude performs no git operations, ever — T-12):
`packs/reference-erotica.json` · `packs/reference-romance.json` · `manifest.json` ·
`CHANGE-LEDGER.md` · **`tools/validate_pack.py`** (new to the list — a shared, library-wide fix).

---

## Erotica — V-29, the pre-release living re-check, 2026-09-04

**The last thing owed before publication, and the one check whose whole point is that it runs
last.** Full record at `_build/erotica/audits/v29-living-recheck-RECORD.md`; raw evidence, every
source and date, at `…-EVIDENCE.md`.

V-29 exists because this build's second research pass found **two authors who had died since they
were carded** — Edmund White, 3 June 2025, and Dorothy Allison, November 2024. A living-status
claim is the only kind in this pack that can turn false while sitting on disk.

**Four independent readers, and the readers were controlled.** ⟨measured: `living_census.py` — 32
of 110 author cards asserted a living subject⟩. One reader per block, working blind to each other,
each required to create their file before searching and append after each person (the API-529
lesson). **Every brief carried one deliberately false statement and none of the four was told; all
four found theirs** — Millet's magazine, Hollinghurst's Booker year, Delany's birthplace, Sarah
Waters's nationality. A reader who missed theirs would have had their block re-run, not reconciled.

The instruction that carries the check: **do not infer life from the absence of a death notice.**
`NO-EVIDENCE` exists so a reader has somewhere honest to put a person they could not resolve.

**⟨measured: 27 ALIVE-CONFIRMED · 0 DEAD · 5 NO-EVIDENCE · 0 CONTESTED.⟩ No card in this pack is
wrong about a death.**

### The finding: three cards asserted a check that had not happened

`author-68` Ann Bannon, `author-76` Patrick Califia and `author-98` Tristan Taormino each read
**`living, checked in September 2026`**. The September 2026 check found no death record *and no
dated activity at all* — nothing since December 2021, 2013, and 2023 respectively. **The phrase had
been carried forward from drafting**, and because it named the ship month it read as freshly
verified. A fourth, `author-53` Nicholson Baker, carried a bare `born 1957` with no status and
nothing since April 2024.

**Three of fifteen cards that claimed to have been checked could not be confirmed — a 3-in-15 error
rate inside the pack's own strongest form of the claim.** Nothing in the toolchain could see it:
`living_census` reads what cards *say*, and G11 checks that a life-dates claim was made in a valid
*shape*, never that it is *true*. Both print that blind spot on every run; this is the run where it
was load-bearing. **V-34** now requires the check date and makes its absence exit 1.

All four are carded as unconfirmed, and **each card states what it previously asserted and why that
was withdrawn** — a card that quietly stops claiming something leaves the pack looking as though it
never claimed it. **V-35.**

### The card whose central claim was falsified

`author-105` Tiffany Reisz read *"She publishes under her legal name, which in a field where the pen
name is near-universal is itself a positional choice."* Reisz is her **maiden** name, and since 2023
her principal byline is a **separate pen name** for mainstream fiction at a major house. She runs two
bylines rather than declining the convention — **and that is precisely why the pack could not confirm
her the first time.** The card had built a craft point on an absence that was not there; it now says
so, and says what the failed search was actually telling us.

### Right verdict, wrong evidence

`author-107` Stjepan Šejić was confirmed living against a **December 2025 reissue announcement** —
and a publishing announcement is the one trade item that reliably keeps appearing after a creator
has died. Re-cited to his own first-person statements of March and May 2026. **V-36**, whose
measured corollary is that the strongest confirmations in this run were a departmental course PDF,
a national broadcaster's interview and an awarding body whose category reads *autrice francophone
**vivante***, while **author websites and encyclopaedia pages were the least reliable sources in the
set** — stale on four of eight people in one block while those people were conspicuously active
elsewhere. Their silence tracks editor attention, not the person.

### Also changed

Five hedges lifted with dated evidence (Reyes, Rubin, Fischer, Todd, Reisz). One kept and
strengthened: `author-109` Portia da Costa stays unconfirmed, and her **birth year of 1952 could be
sourced to nothing and has been withdrawn** — the card now reads `life dates unresolved`. Erica
Fischer was born **1 January 1943 at St Albans in England**, not in Austria, and is a journalist and
translator rather than a historian. Zane is from **Washington, D.C., the district and not the
state**. Gaitskill's 2023 piece is a **magazine sequel**, not a retelling. Ten cards carrying a bare
`born YYYY` now name a check date, and all 27 confirmations use one uniform, re-checkable phrase.
**Two confirmations are thin and the cards say so** — Robbe-Grillet (age 95, nothing since January
2025) and Roche (nothing since March 2025).

### Gates, all unpiped

⟨measured 2026-09-04⟩ full replay **612 entries / 10 collections** · screens **20 run, 0 NOT RUN, 0
failing** · break harnesses **57 · 32 · 25 · 10 · 4, all as claimed** · `blueprint_parity` PASS ·
`palette_check` PASS · `living_census` exit 0 with **0 cards asserting life without a check date** ·
`validate_pack.py` **in the session container** (T-11) **PASS — 0 error(s), exit 0** ·
`sensitive_audit` **0 ending on adjudicating language** · `name_cross_check` **0 MISMATCH / 0
NEAR-MISS** · `two_statements` exit **1 by design**, 0 year disagreements, 0 title collisions ·
`manifest.json` vs disk **0 disagreements**.

**`manifest.json` changed by one line:** `approxSizeKB` 789 → **793** ⟨measured: 812,200 bytes⟩.

**`packVersion` stays 1.0.0.** TJ confirmed on 2026-09-04 that the pack has not been pushed.

### Two mistakes of mine, recorded

The `sed` unifying the confirmation phrase **also rewrote that phrase inside the withdrawal
sentences quoting it**, so three cards briefly misquoted their own previous wording. Caught by
re-running the census and finding the buckets summing to more than the roster. **When a correction
quotes what it corrects, the quotation is inside the blast radius** (V-35).

And three library cross-checks were run from the wrong directory and returned **exit 2 — DID NOT
RUN**, which is T-21 working. Re-run from the repo root. Separately, `two_statements.py` **exits 1
and always has**, and nobody had ever looked, because every previous run in this build was piped to
`tail`. **T-35, twice in one session.**

### Files awaiting TJ's publish

`packs/reference-erotica.json` · `packs/reference-romance.json` · `manifest.json` ·
`CHANGE-LEDGER.md` · `tools/validate_pack.py`. **Claude performs no git operations, ever — T-12.**

---

## The library-wide V-29 pass — instrument built, worklist measured, 2026-09-04

**Erotica's V-29 run exposed a library-wide gap: the rule was written during Erotica, so thirteen
packs assert living people with no check date and no record that anyone ever verified them.** This
session built the instrument and measured the job. **It checked none of them.** Handoff:
`HANDOFF-v29-library-living-recheck.md`.

**`tools/living_census.py` promoted from `_build/erotica/tools/` and rewritten on promotion.** The
Erotica version silently assumed Erotica's prose. ⟨measured⟩ **Erotica's predicate reported 411
living claims library-wide; a convention-blind one reported 919; the audited instrument reports
885.** The first number was about to be used to size the repair. The library carries **four**
life-date conventions and a tool assuming one reports **zero living authors** for the packs using
the others — which is precisely what it did for SF, Fantasy, MCT and TV Formats, four packs and 601
author cards. **V-37**, and the third instance of this defect class in one build.

⟨measured: `tools/break_living_census.py` — **15 cases, 15 behaved as claimed**, one BEHAVIOUR
fixture per convention plus three declared blind spots⟩. **The harness crashed six of its own
fifteen cases on its first run**: the verdict was a dict literal, and a dict literal evaluates every
value before the key is used, so `assertion(out)` ran on rows whose assertion is `None`.
`break_tools.py` died the same way earlier in this build (T-33). Made lazy.

⟨measured: `python3 tools/living_census.py`, exit **1**⟩ across all 14 packs —
**1,861 author cards · 928 state a death · 14 life dates unresolved · 3 exempt · 31 carrying a
check date (all Erotica) · 885 naming none.** The 885 are **848 distinct people**; 59 are carded in
two or more packs, so checking the person rather than the card saves 71 checks — **B-16's missing
cross-pack instrument** (Part 3 item 35) earning its keep for the first time.

**The three exemptions are cards that state no death because no death date exists, and say so
properly** — Héctor Germán Oesterheld, forcibly disappeared in 1977 under the Argentine
dictatorship, and Ambrose Bierce in two packs. A first pass flagged all three as suspect living
claims; **reading them showed the cards were right and the predicate was wrong.** They are now
enumerated with written reasons rather than pattern-matched, on screen 19's and G12's precedent —
the third time this build has chosen a blunt detector plus a named exemption list over a clever
regex.

**TV Formats is a different problem from the other twelve. V-38.** It states no life dates at all,
so **113 of its 120 author cards assert a living person invisibly** and none can be risk-ranked. A
ruling on the convention precedes any re-check there. A further **225 cards across the library carry
no birth year**, so age — the only risk signal available — cannot sort them.

**Standing decisions taken at the handoff.** The thirteen packs are **already published**, so their
repairs are **version bumps, not amendments** (Part 3 item 48; Romance 1.1.2→1.1.3 precedent) —
Erotica was correctable in place only because it had not shipped. **One pack per session**, because
each needs its own replay, gate run, ledger row and publish. And **Erotica ships now**, ahead of the
pass: TJ's decision, 2026-09-04, on the grounds that it is the only pack with a current check and
holding it only lets its confirmation dates go stale.

### Files awaiting TJ's publish, final

`packs/reference-erotica.json` · `packs/reference-romance.json` · `manifest.json` ·
`CHANGE-LEDGER.md` · `tools/validate_pack.py` · **`tools/living_census.py`** ·
**`tools/break_living_census.py`** · **`HANDOFF-v29-library-living-recheck.md`**

**Claude performs no git operations, ever — T-12.**

---

# The V-29 consolidation — four patches merged, 2026-09-04

**This is the only session permitted to edit `CHANGE-LEDGER.md` and `manifest.json`**, and it is
the session that finished War & Military's second pass. Everything below merges the patch files the
pack sessions wrote and never applied themselves.

## Which packs had patches, and which did not

| pack | patch on disk | state |
|---|---|---|
| **comedy** | `V29-LEDGER-PATCH.md` + `V29-MANIFEST-PATCH.json` | merged here |
| **literary** | both | merged here |
| **superhero** | both + a `-NOTE.md` | merged here |
| **war-military** | both + a `-NOTE.md` | merged here, at **1.2.4** after the second pass |
| **erotica** | **none, and none is owed** | its V-29 was written straight into this ledger on 2026-09-04, before the patch protocol existed, and its manifest row already matches disk exactly. Nothing to merge |
| **horror** | none | **ran and stopped on purpose.** No replayable batch markdown and no `rebuild.sh`. `_build/horror/audits/V29-BLOCKED-no-replay-chain-2026-09-04.md`. Census measured: 140 authors, 67 living claims with no check date |
| **scifi** | none, deliberately | **ran, censused, and stopped at step zero on purpose.** 782 of 1,201 cards have no batch markdown; 91 of 131 living claims are unrepairable by the sanctioned route. `_build/scifi/audits/V29-NO-PATCH-README.md`. Pack untouched at 2.2.0 |
| **manga** | none | interim record only, `v29-living-recheck-RECORD-INTERIM.md`. **Did not finish** |
| **western** | none | `_build/western/v29-work/` exists and holds only empty `out/` and `tools/` folders, and there is no `audits/` folder at all. **Started and left nothing.** Its census-defect finding survives only as second-hand reports in other packs' patches |
| fantasy · historical · mystery-crime-thriller · romance · tv-formats | none | **never ran** |

**Five packs are being published. Nine are not.** Of the nine, two stopped for a stated and good
reason, one did not finish, one left nothing, and five were never started.

## The renumbering, because four patches claimed the same ids

The highest standing-rule id in this file was **V-38**, and each session numbered from there
independently. Comedy claimed V-39 to V-43, War & Military claimed V-39 and V-40, Literary claimed
T-36, V-41 and V-42, Superhero claimed V-41. **`T-36` was not free either** — this file numbers `V-`
and `T-` rows in one sequence, and 36 is `V-36`.

| final id | section | proposed as | subject |
|---|---|---|---|
| **V-39** | 1E | WAR `V-39` | prove a replay reproduces the SHIPPED pack before repairing |
| **V-40** | 1C | WAR `V-40` | institutional activity in a person's name is not evidence of life |
| **V-41** | 1E | COM `V-39` | an enumerated category set goes stale when a category is renamed |
| **V-42** | 1E | COM `V-40` | a clock-stamped date makes replay impossible by construction |
| **V-43** | 1E | COM `V-41` | a one-off script's serialisation and insertion defeat replay proof |
| **V-44** | 1C | COM `V-42` | a key-based equality check is blind to order |
| **V-45** | 1E | COM `V-43` | a break fixture's hard-coded bad value stops testing when it becomes legal |
| **T-46** | 1E | LIT `T-36` | a delimiter-split parser cannot read its own empty optional field |
| **V-47** | 1C | LIT `V-42` | a nationality is a routing instruction and it decays |
| **V-48** | 1E | LIT `V-41` **+** SUP `V-41` **+** WAR second pass | **the census defect — three findings, ONE row** |

**V-48 is the de-duplication the task asked for.** Literary, Superhero and War & Military each found
the same defect in the same shared tool on the same day, independently, and each proposed it as a
new rule. It is one row with all fourteen columns, `A` for those three packs, and the row names all
three measurements — because three independent findings is the strongest thing about it and merging
them into one row is what makes that visible.

**Rows are inserted into the Part 1 `1C` and `1E` tables**, with all fourteen pack columns, on the
standard this file set for itself on 2026-09-04 ("in the Part 1E table with all fourteen pack
columns... not appended as a separate table"). Every new row was checked for **19 unescaped pipes**
before insertion; Literary's `T-36` as written carried eight unescaped literal pipes inside its
rule text and would have broken the table silently. They are escaped now.

## The cell moves

**35 cell moves applied**, every one checked against the value actually in the file before it was
changed — no move was applied on the patch's word alone, and none disagreed.

* **LIT** — V-11 `P`→`A`, V-20 `?`→`–`, V-29 `?`→`A`, V-32/34/35/36/37 `?`→`A`, V-38 `?`→`–`
* **WAR** — V-11 `P`→`A`, V-20 `?`→`A`, V-29 `?`→`A`, V-32/34/35/36/37 `?`→`A`, V-38 `?`→`–`
* **COM** — V-29/32/34/35/36/37 `?`→`A`, V-38 `?`→`–`
* **SUP** — V-11 `P`→`A`, V-25 `?`→`A`, V-29 `?`→`A`, V-32/33/34/35/36/37 `?`→`A`, V-38 `?`→`–`

**A correction to all four patches' own filing.** Each describes V-32 and V-34 to V-38 as living in
table `1E`, and Literary also files V-32 there while War & Military files it in `1C`. **None of them
is in either table.** V-30 to V-38 and T-32 to T-35 sit in the "New standing rows" table inside the
**Science Fiction 2.0.0 section of Part 2**, even though the Erotica step-9 section of 2026-09-04
states they are "in the Part 1E table with all fourteen pack columns". The rows were located by id
and the moves are correct; **the ledger's own account of where its rules live is not.** Not fixed
here — moving nineteen rows between tables is its own task, and this session had two jobs already.

---

## Comedy 1.2.1 — the V-29 living re-check, 2026-09-04

**45 of 130 author cards asserted a living person and not one said when that had been checked.**
Seven independent readers, one per block, blind to each other; **seven planted falsehoods, seven
caught**, so no block was re-run.

**Result: 42 ALIVE-CONFIRMED · 0 DEAD · 3 NO-EVIDENCE · 0 CONTESTED.** No card in this pack is wrong
about a death. `author-122` Gary Larson, `author-120` Bill Watterson and `author-117` Bo Burnham are
now carried as unconfirmed, each stating on the card what it previously asserted and why that is
withdrawn. Nine confirmations are thin and each names the evidence it rests on.

**Unlike Erotica, no Comedy card claimed a check that had not happened.** Both cards asserting a
verification — `author-63` Chris Morris and `author-122` Gary Larson — were re-checked independently
and **both stood**. Morris's claim was true but undated, which V-34 forbids, so it now names when the
check happened and what it found.

**One factual error the re-check turned up**, verified independently before being applied:
`author-109` Billy Connolly's card dated his retirement announcement to 2020 and tied it to a
Parkinson's diagnosis. He announced the end of his touring career in **December 2018**; the diagnosis
was **2013**.

**Step zero found the batch markdown badly drifted from the shipped pack** — 71 cards differing in at
least one field and 2 absent entirely, from the F-20 medium retag, the retro-pass award disclosure,
and two reciprocal hand-off cards. A plain replay would have silently regressed a published pack.
Reconciled from the shipped file verbatim, then proved: **614 of 614 cards identical as data, header
and collections identical, entry order identical.** Residue: 129 bytes, being the key order of two
fields inside one works entry on `author-45`, which JSON gives no meaning to.

**Gates, all unpiped:** replay 0 · 16 screens 0 errors · promoted file `cmp`-equal to replay output ·
`smoke_test` 0 (32 checks) · `reuse_check` 0 · `living_census` **0** (45 of 45 carrying a check date,
0 without) · `break_living_census` 0 (15 cases, 15 behaved as claimed) · `validate_pack.py` in the
session container **PASS — 0 errors** (T-11, jsonschema 4.26.0).

`packVersion` **1.2.0 → 1.2.1** — a version bump, not an amendment, on the Romance 1.1.2 → 1.1.3
precedent.

---

## Literary Fiction 1.1.3 — V-29, the pre-release living re-check, 2026-09-04

**Pack version 1.1.2 → 1.1.3.** A correction pass on a live pack, so a version bump rather than an
amendment (Romance 1.1.2 → 1.1.3 precedent). Full record and every source:
`_build/literary/audits/v29-living-recheck-RECORD.md` and `-EVIDENCE.md`.

### The census

⟨measured: `python3 tools/living_census.py packs/reference-literary.json` — exit 1⟩
**130 author cards · 99 stating a death · 0 exempt · 0 unresolved · 31 living claims, and 0 of the
31 naming a check date.**

**Erotica's finding was not repeated here, and could not be.** That run found three cards claiming
`living, checked in September 2026` when no check had happened. Literary asserts no check on any
card, so there was no false claim to catch. Its defect is the other one: the pack never claimed to
have looked. 31 of 31 living claims were unre-checkable, as War & Military was 24 of 24.

### The result — 31 people, four blind readers, four plants, four returned

**28 ALIVE-CONFIRMED · 0 DEAD · 3 NO-EVIDENCE · 0 CONTESTED.**

**No card in this pack is wrong about a death.** All four planted falsehoods were returned (Soyinka's
Nobel year, Rushdie's birthplace, Ishiguro's birthplace, Zadie Smith's first-novel date), so no block
was re-run. Unlike War & Military's run the plants did **not** double as a check on real card claims:
Literary's author metadata carries nationality and birth year only, so there was nothing for them to
corroborate. That is the weaker outcome and it is a property of how thin this pack's metadata is.

### The three, and what they have in common

`author-105` Thomas Pynchon · `author-120` Patrick Modiano · `author-125` Elena Ferrante. **None is
a claim that the person has died**; each card states the withdrawal in its own words (V-35).

**All three were produced by V-36 alone** — a novel's publication, a publisher's catalogue entry, a
publisher's remark. And two of the three are reclusive, which is the trap: reticence is a sufficient
explanation for the silence, and that is exactly why it is not evidence. Ferrante is unresolvable in
a different way — living status cannot be established for a writer who cannot be named — and the
card now says which kind of unresolvable it is.

### Also changed

`author-76` J.M. Coetzee — "South African, born 1940" → Australian citizen since 2006, resident in
Adelaide, South African by formation. A nationality is where the next re-check sends its enquiry, and
this one pointed at the wrong country. **V-47.**

### The finding that is not about living status at all

**The pack had no toolchain and no batch markdown on disk** — both only inside a 2026-08-19 snapshot
— and a replay of that snapshot would have **regressed the published pack by 118 cards**. Two causes,
and they are different in kind. Eighteen were ordinary drift: F-20's 15 medium retags, an awards
hedge, a robustness tier, two meta rewrites, two lead-work year corrections and the `subgenre-31`
Western hand-off card, all applied to the JSON and never written back. **The other hundred were a
tool defect**: `merge.py` split works bullets on `" | "`, which cannot read the empty-note form that
`BATCH-FORMAT.md` documents, so 100 of 390 bullets lost their lead-work flag silently. It had never
fired on another pack because no other pack writes an empty note slot — and the same code is live in
two other packs' toolchains today. **T-46.** Reconciled from the shipped file verbatim and proven —
613 of 613 cards identical — **before** any repair was written.

### Gates, all unpiped

`rebuild.sh` 10 batches → **613/613** · 12 assembly screens **0 errors** · `smoke_test` **exit 0,
ALL GUARDS OK** (container) · `living_census` **exit 0** · `break_living_census` **15 cases, 15
behaved as claimed** · `validate_pack.py` in the session container (T-11) **PASS — 0 error(s)** ·
desktop replay and container replay **byte-identical**, sha256 `4c56f578…` · promoted file
**byte-equal** to the replay output. Whole-pass diff: **31 cards, one field each, plus the two
header fields.**

### A mistake of mine, recorded, because it made a gate lie

Six of the repaired cards were first written with hyphenated day ranges — `8-9 April 2026` — which
`living_census.py` reads as a life-date range. All six classified as *stating a death*, dropped out
of the living set, and **the census exited 0 by hiding them**. Caught by the bucket arithmetic
alone: `dated` had moved 99 → 105 while `w/date` read 25 where it had to be 31. **V-48**, and the
shared instrument still cannot tell a day range from a year range for any pack.

**Claude performed no git operations. TJ publishes.**

---

## Superhero 1.2.1 — V-29, the pre-release living re-check, 2026-09-04

**Pack version 1.2.0 → 1.2.1.** A correction pass on a live pack, so a version bump rather than an
amendment (Romance 1.1.2 → 1.1.3 precedent). Full record and every source:
`_build/superhero/audits/v29-living-recheck-RECORD.md` and `-EVIDENCE.md`.

### Step zero: the batch markdown had drifted, for the second pack running

⟨measured: a replay of the batches as found produced **612** entries against a shipped **614**⟩ —
**a pure replay would have regressed the published pack.** Four drifts, none previously recorded:
the diacritic restoration of 2026-08-31 (11 cards: `Go Nagai` → `Gō Nagai`, `Shotaro Ishinomori` →
`Shōtarō Ishinomori`, `Kohei Horikoshi` → `Kōhei Horikoshi`); the two reciprocal hand-off cards
`subgenre-41` and `subgenre-42` from the 1.1.0 and 1.2.0 bumps; two works-list attribution
corrections; and — the one that matters — **`history-18`'s post-ship rewrite, which had removed an
adjudicating final sentence from a card whose own title calls the credit contested.** A replay would
have put the adjudication back. That is C-06 undone by a rebuild.

**The pack's own `rebuild.sh` could not run at all**: it reads `order.txt`'s two columns in the wrong
order, and it names Western's file paths. Left as found; the working replay is `v29-work/rebuild.sh`.

⟨measured after reconciliation, before any V-29 repair: **614 entries, 0 added, 0 removed, 0
changed — 614 of 614 cards identical** to the shipped 1.2.0, the whole-file difference being
`packVersion` and `lastUpdated` alone.⟩ This is V-39's second independent confirmation.

### The census was short by seven, and that is a defect in the instrument

⟨measured: `living_census.py` — exit 1 — **120 author cards · 63 stating a death · 1 exempt ·
0 unresolved · 56 living claims, and 0 of the 56 naming a check date**⟩

**But the true roster was 63.** Seven cards say `living` and never reach the worklist, because the
tool reads any year range as a death — run spans, an issue range `26–50`, and, on `author-36`,
**another man's life dates carried on the card as a do-not-confuse warning.** New standing row V-48.
The shared tool was **not** edited: concurrent sessions were running it, and that is War & Military's
§7.1 mistake, avoided rather than repeated.

### The result — 63 people, eight blind readers, and the discard rule firing for the first time

**51 ALIVE-CONFIRMED · 0 DEAD · 12 NO-EVIDENCE · 0 CONTESTED.**

**No card in this pack is wrong about a death.**

**Two of the eight readers missed their planted falsehood, and both blocks were re-run rather than
reconciled** (V-33) — the first time the discard rule has actually fired in this library. Fresh
readers with new plants returned both. Both failed readers had reported exhausting their web-search
allowance partway through the block, which says something useful about when this control breaks. A
narrow third pass (V-17) settled three further cases; it **overturned** `author-111` Bruce Timm from
confirmed to unconfirmed, on the ground that a showrunner credit is not the person acting — the 2026
season's press was given by two other named showrunners referring to him in the past tense.

### What the twelve unconfirmed have in common, and one correction the other way

Four of the twelve are unresolved because the environment could not reach the record, not because it
is empty. The other eight are genuine gaps. `author-59` Bill Mantlo is the hard case and the card
says so: he cannot make public statements, so the ordinary evidence of a person acting is unavailable
to him by definition.

**`author-116` Richard Reynolds is a correction in the opposite direction.** The card said *"The
person cannot be documented."* That was too strong: he holds a named course-leader post at a London
art school. **A pack can be wrong by claiming too little**, and the card now says what is genuinely
absent — a birth year and any dated activity after 2022 — instead.

**`author-90` Naif Al-Mutawa** called 2015 its last hard documentation and named itself the weakest
currency in its block; a Kuwaiti press interview of 9 August 2026 retired that. **The eleven-year gap
was the pack's reach, not his silence.**

### Four build-tool defects fixed in this pack's own tree

`config.py`'s palette sweep compared this pack's hues against **its own shipped file** and could
never pass again once Superhero shipped; the same function then resolved the repo root by counting
fixed directory levels, so from a new location it printed **"SKIPPED"** and passed without running.
`drift_check.py` ignored `PACK_WIP` and died on a path — **the one tool whose whole job is catching a
WIP that has drifted from its batch files, unable to run.** `smoke_test.py` asserted the literal
string `"25 screens"` against `assemble.py`'s `N_SCREENS = 27`. All four fixed in
`_build/superhero/v29-work/tools/`.

### Gates, all unpiped

`rebuild.sh` **614/614** · 27 assembly screens **0 errors** · `screens_test` **24/24** ·
`drift_check` **614 of 614 match** · `cat_check` clean on all 25 batches ·
`smoke_test` in the container **39 checks, ALL GUARDS OK** · `living_census` **exit 0** ·
`break_living_census` **15 of 15 behaved as claimed** · `validate_pack.py` in the container
**PASS — 0 errors** · desktop and container replays **byte-identical**, sha256 `4f5298c4…` ·
promoted file `cmp`-equal to the replay output.

### Files awaiting TJ's publish

`packs/reference-superhero.json` (1.2.1, 614 entries, 836,245 bytes) and everything under
`_build/superhero/`. `CHANGE-LEDGER.md` and `manifest.json` are **not** edited by this session; the
patches are `_build/superhero/audits/V29-LEDGER-PATCH.md` and `V29-MANIFEST-PATCH.json`.

---

## War & Military 1.2.3 — V-29, the pre-release living re-check, 2026-09-04

**Pack version 1.2.2 → 1.2.3.** A correction pass on a live pack, so a version bump rather than an
amendment (Romance 1.1.2 → 1.1.3 precedent). Full record and every source:
`_build/war-military/audits/v29-living-recheck-RECORD.md` and `-EVIDENCE.md`.

### The census, and the shape of what it found

⟨measured: `python3 tools/living_census.py packs/reference-war-military.json` — exit 1⟩
**130 author cards · 105 stating a death · 1 exempt (Ambrose Bierce) · 0 unresolved ·
24 living claims, and 0 of the 24 naming a check date.**

Erotica's run found 11 cards carrying a bare `born YYYY` with no status. **This pack was 24 of 24.**
Not one living claim in War & Military was re-checkable. That is V-34's defect in its complete form.

One of the 24 was not a person to check: `author-1` **Homer**, whose card reads *"traditionally
dated to the eighth century BCE"* — which the census, blunt by design, cannot read as a death. He is
repaired, not researched, and now carries the exact phrase `life dates unresolved`.

### The result — 23 people, three blind readers, three plants, three returned

**18 ALIVE-CONFIRMED · 0 DEAD · 5 NO-EVIDENCE · 0 CONTESTED.**

**No card in this pack is wrong about a death.** The pack had already caught Deighton, Malouf and
Caputo, all three of whom died in 2026, and the re-check adds none.

All three planted falsehoods were returned (Adichie's Booker, O'Brien's Pulitzer, Cornwell's 1971),
so no block was re-run. All three happened to contradict claims the pack already had **right**, so
the control doubled as an independent check on three real card claims. That was luck.

### The five, and the rule they produced

`author-99` Ha Jin · `author-105` Tim O'Brien · `author-129` Jonathan Shay · `author-111` James Webb ·
`author-94` Scholastique Mukasonga. **None is a claim that the person has died**; each card now states
the withdrawal in its own words (V-35).

Four of the five were surrounded by activity that looks exactly like a living person's footprint and
is not the person acting — a lecture series carrying the name, a certificate programme named in
honour, a biography's publicity tour, a retirement processed by an employer, a fellowship an
institution closed. **V-40**, and it is the institutional twin of V-36.

### Also changed

`author-86` Adania Shibli — the card said the LiBeraturpreis ceremony "was postponed" and stopped.
**A hedge decays (V-20):** it never took place, and Litprom **suspended the prize itself in 2024**,
by its own statements of 16 October 2023 and 29 July 2024. The card now carries both, and that the
award to her was never in question.
`author-82` David Grossman — "the International Booker Prize in 2017" → **the Man Booker International
Prize**, as the award was styled that year. V-04, one instance.

### The finding that is not about living status at all

**The batch markdown had stopped reproducing the pack, and a pure replay would have regressed it by
two entries and eleven cards.** F-20's medium retag and the two reciprocal hand-off cards were
applied to the JSON and never written back; `craft-51`'s rewrite lived only in the build snapshot;
and the pack had no build toolchain on disk at all. Reconciled from the shipped file verbatim and
proven — replay equals shipped, 0 changed entries — **before** any repair was written. **V-39.**

### Gates, all unpiped

`rebuild.sh` 24 batches → **614/614** · 13 assembly screens **0 errors** · `smoke_test` **exit 0,
ALL GUARDS OK** (container; on the desktop it exits 1 for T-11 reasons, see below) · `reuse_check`
**0 over cap** · `living_census` **exit 0** · `break_living_census` **15 cases, 15 behaved as
claimed** · `validate_pack.py` in the session container (T-11) **PASS — 0 error(s)** · desktop
replay and container replay **byte-identical** · promoted file **cmp-equal** to the replay output.

### Three mistakes of mine, recorded

**I nearly edited a shared file.** Homer's false positive looked like an `EXEMPT` entry in
`tools/living_census.py` — a file three other sessions are reading right now. Caught before acting.
The fix belonged on the card, and is better there: an exemption would have hidden the judgement
inside a tool.

**`rebuild.sh` starts `rm -rf wip` and the pack folder does not permit deletion**, so the first
replay after reconciliation exited 1 and looked like a build failure. The WIP file now builds
outside the mount via `PACK_WIP`. The next session on a mounted pack will hit this immediately.

**`smoke_test.py` exited 1 on the desktop with every guard passing.** Its last step runs the disk
validator, and the desktop's jsonschema is 3.2.0 — **T-11, inside a tool whose name does not say
"validator"**, reported as an `IndexError` on empty stdout rather than as the real cause. T-11's
note should say it applies to anything that embeds the validator.

### And one thing this pass did not do

**It ran no library-wide screens beyond the census, because there are none.** `blueprint_parity`,
`palette_check`, `name_cross_check`, `two_statements` and `sensitive_audit` live in
`_build/erotica/tools/` and are written against Erotica's prose. **V-37 forbids merely copying
them.** This pack therefore has a thinner gate set than Erotica did, and that is a gap, not a clean
bill.


## War & Military 1.2.4 — the two cards 1.2.3 never checked, 2026-09-04

**⟨The section above is the 1.2.3 pass's own account and is merged unaltered. Two of its figures were
produced by a defective instrument: it reports "105 stating a death" and "24 living claims" where the
true figures are 103 and 26. This section is why.⟩**

**Pack version 1.2.3 to 1.2.4, the same day. 1.2.3 was reported complete and it was not.** Two author
cards were never sent to a reader, because a defect in `tools/living_census.py` read the span of a
tour of duty as a death date and filed them as people with a recorded death: `author-113`
**Kevin Powers**, *"in Iraq in 2004-05"*, and `author-114` **Phil Klay**, *"in Anbar province in
2007-08"*. The 1.2.3 gate table records the census exiting **0** over both of them. That exit code
was true and worthless — **the tool answered a question about 128 cards while reporting on 130.**
Both men are alive and both are young, so the practical risk was small. **The defect is the claim,
not the risk**, and the pack claimed a completed re-check it had not performed.

**The instrument was broken before it was trusted this time.** `tools/break_living_census.py`,
**32 cases, exit 0, 32 of 32 behaved as claimed**, on the desktop and again in the container — five
prose spans that must read as living and twelve real life ranges that must still read as deaths,
because an earlier attempt at this same fix rejected 49 genuinely dead authors. **V-48.**

**Step zero was re-run in full before anything was touched.** A replay of the canonical batch
markdown was proved byte-identical to the shipped 1.2.3: `cmp` **exit 0**, and **614 of 614 cards
identical in order**, reported as two separate facts rather than one. **V-39, V-44.**

**One blind reader took both people, with a planted falsehood** — a fictitious 2013 Pulitzer for
*The Yellow Birds* — **which the reader returned unprompted**, citing the Pulitzer board's own 2013
winners page against it. No re-run was needed. Both verdicts were then re-checked by me against the
primary sources, independently of the reader. **Both are ALIVE-CONFIRMED**: Powers on a WUSF
*Florida Matters* interview transcript of **13 June 2026** in which he speaks and is quoted, Klay on
*Manifesto!* episode 91 of **27 August 2026**, which he co-hosted in conversation. Powers' new novel
and two scheduled bookstore events were correctly refused as evidence (V-36); Fairfield University's
announcement of a Klay colloquium was correctly refused as institutional (**V-40**).

**Each card now says on its face that it was missed**, naming the defect that missed it — V-35's
principle, that a withdrawal is stated on the card in the card's own words, applied to a claim the
pack made and could not support. **Both cards also had their tour-of-duty span rewritten in words**,
`between 2004 and 2005` and `between 2007 and 2008`. That is a change to published card text that no
finding required, made because that text is the direct cause of the failure, and it is recorded here
so it can be reversed rather than discovered.

⟨measured after: **130 authors = 103 dated + 1 unresolved + 1 exempt + 25 carrying a check date + 0
with none**; the buckets sum to the roster and the two repaired cards moved by exactly two. The
replay differs from 1.2.3 in **exactly two cards and `packVersion`**, nothing else. All gates re-run
unpiped: break harness 32/32 · replay 614/614 · 13 screens 0 errors · promoted file `cmp`-equal to
the replay · `reuse_check` 0 over cap · `smoke_test` **ALL GUARDS OK** in the container · census
**exit 0** on desktop and in the container · `validate_pack.py` in the container **PASS — 0
error(s)** · 693,025 bytes, sha256 `d7c41f26…`, identical on both sides.⟩

**What this pass got wrong, and what it chose not to do.** Nothing had to be re-run — a short list
only because this was a two-person block. The span rewrite is a judgement call and is flagged above
rather than buried. `V29-MANIFEST-PATCH-NOTE.md` carried a stale byte count for the 1.2.3 file
(692,281 against a true 692,304; both divide to 676 KB, so no shipped number was wrong) and is
corrected. And **Kevin Powers' works list is out of date** — *A Line in the Sand* (2023) and
*Children of the Wild* (2026) are missing. Nothing on the card is false; the curated entry route is
simply older than the author. **Deliberately not fixed**, because extending a curated list is a
curatorial pass and not a living re-check.


---

## The V-29 consolidation — what was measured, what is owed, and what to publish

### The manifest, verified against disk rather than against the patches

Four rows changed. **Every row in `manifest.json` was then re-measured against the file on disk** —
version, entry count, size, last-updated, schema version, file path, collection labels and medium
coverage — not copied from any patch.

| row | packVersion | entryCount | approxSizeKB | lastUpdated |
|---|---|---|---|---|
| comedy-reference | 1.2.0 → **1.2.1** | 614 | 744 → **749** | → **2026-09-04** |
| literary-reference | 1.1.2 → **1.1.3** | 613 | 615 → **621** | → **2026-09-04** |
| superhero-reference | 1.2.0 → **1.2.1** | 614 | 840 → **817** | → **2026-09-04** |
| war-military-reference | 1.2.2 → **1.2.4** | 614 | 671 → **677** | → **2026-09-04** |

**Every patch value agreed with the disk**, with one exception that is not a disagreement:
`_build/V29-FINISH-AND-PUBLISH.md` predicted **676 KB** for war-military and the measured figure is
**677**, because the second pass added two sentences to two cards after that prediction was written.
693,025 ÷ 1024 = 676.78, and this manifest **rounds** — its previous row carried 671 against 686,657
bytes, and 686657 ÷ 1024 = 670.56. Superhero's row **shrank**, 840 → 817, which the finish note did
not list among the expected stale rows; it is correct, measured, and it is the stray-card move
described in V-43.

**One row corrected beyond the patches:** `war-military-reference.mediumCoverage` listed **8** media
where the pack contains **9**. `stage` has been missing since the F-20 retag of 2026-08-28.
`_build/war-military/audits/V29-MANIFEST-PATCH-NOTE.md` asked the merging session to add it; added,
between `short-fiction` and `tv`.

**One row left wrong, on purpose, and it should be read as an open item:**
`sf-reference.mediumCoverage` lists **3** media — `nonfiction`, `novel`, `short-fiction` — where
`packs/reference-scifi.json` contains **7**: also `comic`, `film`, `game`, `tv`. Science Fiction is
not one of the five packs being published, its pack file is untouched at 2.2.0, and it is mid
chain-reconstruction. **This session did not touch it. It is wrong today and it was wrong before
today.** After that exception, **every one of the fourteen rows agrees with its file on disk.**

### The census across all fourteen packs

⟨measured 2026-09-04 with the fixed tool, `python3 tools/living_census.py packs/*.json`, exit 1⟩

**Living claims naming no check date: 732, against the starting baseline of 885. A reduction of
153.** The exit code is 1 and it should be — nine packs have not run V-29.

| pack | authors | no check date |
|---|---|---|
| comedy · erotica · literary · superhero · war-military | 130 · 110 · 130 · 120 · 130 | **0 · 0 · 0 · 0 · 0** |
| scifi | 200 | 131 |
| tv-formats | 120 | 113 |
| romance | 130 | 90 |
| manga | 120 | 87 |
| fantasy | 140 | 85 |
| horror | 140 | 67 |
| mystery-crime-thriller | 141 | 66 |
| historical | 130 | 50 |
| western | 120 | 43 |

**Each of the five repaired packs exits 0 individually.** That answers the worry Superhero's patch
raised as its first open debt — that packs re-checked against the defective census might be hiding
cards. **They are not: the census was re-run over all five with the fixed tool and every one of them
is clean.** Erotica included, whose V-29 ran earliest of all.

### The gates, re-run here on all five packs

⟨measured 2026-09-04 by this session, every command unpiped. Exit 2 would mean DID NOT RUN; none
reported it.⟩

| gate | war-military | comedy | superhero | literary | erotica |
|---|---|---|---|---|---|
| full replay | **exit 0**, 614/614 | **exit 0**, 614/614 | **exit 0**, 614/614 | **exit 0**, 613/613 | not re-run — no repair this pass |
| assembly screens | 13, **0 errors** | 16, **0 errors** | 27, **0 errors** | 12, **0 errors** | — |
| shipped file vs replay | **`cmp` exit 0** | **`cmp` exit 0** | **`cmp` exit 0** | equal **except one trailing newline** — see below | — |
| `smoke_test.py`, container | **exit 0**, ALL GUARDS OK | **exit 0**, 32 checks | **exit 0**, 39 checks | **exit 0**, ALL GUARDS OK | — |
| `living_census.py` | **exit 0** | **exit 0** | **exit 0** | **exit 0** | **exit 0** |
| `validate_pack.py`, container | **PASS — 0 errors** | **PASS — 0 errors** | **PASS — 0 errors** | **PASS — 0 errors** | **PASS — 0 errors** |

`tools/break_living_census.py`: **exit 0, 32 cases, 32 behaved as claimed**, on the desktop and again
in the container. `tools/reuse_check.py` on war-military: exit 0, 300 examples, 185 distinct, 0 over
cap; the other packs run their reuse screen inside assembly.

**Two small things found by re-running gates somebody else had already run.**

* **Literary's replay is not byte-identical to its shipped file** — it is identical for all 636,066
  bytes and the shipped file carries **one further trailing newline**. 613 of 613 cards identical,
  all metadata identical. **This is known and correct**: that pack's own record says "byte-equal,
  modulo the single trailing newline this pack has always shipped with". The caveat is in the
  record and was **dropped from the ledger patch**, which says only "promoted file byte-equal to the
  replay output". Nothing was changed; the shipped file is the one that was gated and validated.
* **Superhero's `v29-work/smoke_test.py` cannot run from a clean copy of `v29-work/`** — it looks for
  `v29-work/fixtures/` and the fixtures live one level up at `_build/superhero/fixtures/`. Copied
  into place in the container to run the gate; **not fixed in the tree**.

### The three findings recorded here and deliberately NOT acted on

1. **The stray subgenre card is inconsistent across four packs.** `_build/tv-formats/reciprocal_cards.py`
   appended a card to the end of `entries` in comedy, manga, superhero and scifi instead of placing
   it in its block. **Superhero moved its card into place; Comedy deliberately kept the append order
   so its replay stayed byte-identical.** Both were right locally and the two decisions disagree.
   Normalising all four is its own task. **Neither pack was changed today. V-43.**
2. **`assemble.py` stamps `lastUpdated` from the system clock**, which makes byte-identical replay
   impossible by construction. Fixed inside Comedy's `v29-work/` only; the canonical copy in that
   pack's tree still has it. **Not fixed today. V-42.**
3. **The census defect is the fourth instance in this build of a screen that was too loose and a
   result that looked clean** — after the `re.escape` substring match, the award trap matching
   `RITA` inside `Britain`, and V-37's convention-blind predicate. It exited 0 while hiding cards.
   **The fix itself was wrong twice before it was right, once rejecting 49 genuinely dead authors**,
   which is why the harness now pins it in both directions. **V-48** is the standing rule.

### Part 3 — open debts, merged and de-duplicated

**Instruments and toolchain**

* **`living_census.py` cannot tell a day range from a year range** was the shared defect; **it is
  fixed and pinned by 32 break cases.** What remains: the fix landed on 4 September, after four
  V-29 passes had already run against the broken tool. All five finished packs have been re-censused
  and are clean. **Nothing has re-verified the worklists those passes used**, only their outputs.
* **`merge.py`'s empty-optional-field defect (T-46) is fixed for Literary only.** The same padded
  split is live in `_build/western/tools/merge.py` and `_build/war-military/v29-work/tools/merge.py`.
  Latent only because those packs never write an empty note slot. **Nobody has swept the library.**
* **`assemble.py`'s clock stamp (V-42) is fixed in one working copy.**
* **The indent split is library-wide** — four packs at indent 2, ten at indent 1, from the one
  script in V-43 — and the stray-card placement now disagrees between comedy and superhero.
* **`_build/superhero/rebuild.sh` and `check.sh` are still broken** and were left as found.
* **Science Fiction owes a toolchain before it can owe a V-29 pass.** 782 of 1,201 cards have no
  batch markdown. And `merge.py --init` seeding from the shipped pack means **V-39's proof is
  worthless there unless the merge output is read as well as the comparison**.
* **Horror, Fantasy, MCT, Romance and Historical have no replayable batch markdown**, which is why
  Horror stopped. They cannot be repaired by the sanctioned route as things stand.
* **Erotica's five pack-local screens have not been promoted to library instruments** under V-37.

**Cards and content**

* **Unconfirmed and awaiting a direct enquiry: 23 people.** Five in War & Military (Ha Jin,
  O'Brien, Shay, Webb, Mukasonga), three in Comedy (Larson, Watterson, Burnham — genuine recluses,
  not research failures), three in Literary (Pynchon, Modiano, Ferrante), twelve in Superhero (four
  of them blocked by connectivity, not by an empty record).
* **Thin confirmations resting on 2025 with nothing in 2026**, flagged on the cards as first to
  re-run: three in War & Military, nine in Comedy, six plus one advance listing in Literary, seven
  in Superhero.
* **Disputed dates left as the cards have them, deliberately, on one reader's word being
  insufficient (V-17):** Hanna Krall's 1935/1937 birth year; Don McGregor's 1942/1945; Bảo Ninh's
  own arithmetic in a dated 2025 interview, which a 1952 birth year does not give.
* **A forged death announcement is on the record for Literary's `author-119` Annie Ernaux**
  (22 June 2026, an account impersonating the Swedish Academy's permanent secretary, believed by
  several public figures before exposure). **Any future death report on that card must be traced to
  the Swedish Academy or a French outlet of record.**
* **129 of Literary's 130 author cards have never had nationality or residence checked** (V-47), and
  that pack's V-14 cell reads `A`.
* **Kevin Powers' works list is stale** — two books published since it was written. Every pack's
  author works lists are exposed to this and none has been swept.
* **Six reader-found Comedy card corrections were not applied**, being judgement rather than fact.
* **V-04 remains `?` for War & Military**, one instance corrected and the rest unaudited.

**This file**

* **V-30 to V-38 and T-32 to T-35 are not in the Part 1 tables**, despite this file stating on
  2026-09-04 that they are. They sit in a table inside the Science Fiction 2.0.0 section of Part 2.
* **T-18, T-19 and T-20 sit after a `---` rule at the end of 1E**, which ends the table, so they
  render as a headerless table of their own. Both are formatting debts, neither was fixed today.
* **V-29 still fires once and nothing re-fires it.** The check dates are now on the cards, which
  makes staleness visible without acting on it.

### Files awaiting TJ's publish

Five pack files, the two library files this session merged, and the build paperwork:

```
packs/reference-war-military.json     1.2.4   614 entries   693,025 bytes
packs/reference-comedy.json           1.2.1   614 entries   767,320 bytes
packs/reference-superhero.json        1.2.1   614 entries   836,245 bytes
packs/reference-literary.json         1.1.3   613 entries   636,067 bytes
packs/reference-erotica.json          1.0.0   612 entries   812,200 bytes   (unchanged; already current)
manifest.json                         four rows updated, one mediumCoverage corrected
CHANGE-LEDGER.md                      this section, 10 new standing rows, 35 cell moves
_build/war-military/   _build/comedy/   _build/superhero/   _build/literary/
```

**`packs/reference-erotica.json` is listed because it is one of the five packs being released and
should go out with them; it was not modified by this session and its manifest row already matched.**

**Claude performed no git operations, ever — T-12. TJ publishes.**

