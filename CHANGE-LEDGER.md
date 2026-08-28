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

---

# Part 1 — The standing register

Every row here applies to more than one pack. `Level` says what a back-port would actually
cost: **Doc** = a rule in a shared document, no card changes; **Card** = text inside shipped
entries; **Tool** = build tooling, which only affects future packs.

## 1A. Schema and file shape

| ID | Rule | Level | From | SF | MCT | FAN | HOR | ROM | HIS | LIT | WAR | COM | WES | SUP | MNG |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|-----|
| S-01 | `medium` is **mandatory and enum-bound** on every `work_cards` entry. There is no omission path — the validator errors on a missing value. The "omit it and name the form in prose" escape hatch recorded in several handoffs **does not exist**. | Doc + Card | LIT 17.14, COM 17.6 | A | A | A | A | A | A | A | A | A | A | A | A |
| S-02 | Stage plays, classical drama, epic and verse narrative take `medium: novel`, with the true form named in the card's opening clause (`Stage play.`). | Doc | COM 17.6 | – | – | – | – | – | ? | ? | ? | A | – | – | – |
| S-03 | `example_cards.medium` is free text; `work_cards.medium` is a closed enum. Free-text values must be minted deliberately and recorded, never invented mid-build. Current vocabulary: novel · film · tv · play · comic · nonfiction · audio · stand-up · radio · sketch. | Doc + Tool | HOR guard 5, COM 17.13, 17.24 | ? | ? | ? | A | A | A | A | A | A | A | P | A |
| S-04 | `works[].start` is the real field name. It is a typo shared by every live pack and it **stays**. | Doc | FAN | A | A | A | A | A | A | A | A | A | A | A | A |
| S-05 | Years are strings everywhere, negative years included. Collection ids are `work` and `psychology`, never `psych`. Full seven-field collection metadata; `_label`/`_badge`/`_bg`/`_fg` baked on every entry. **Corrected 2026-08-27 (retro-pass, `TOOLS-VERIFIED.md` §"What the port had to change", 2026-08-25): the collection-id clause is contradicted by four packs on disk — Historical, Horror and Romance use `psych`, and Science Fiction's work collection is `book`. Marked A for every pack without being re-read. Not fixed in this pass (a collection-id rename is schema surgery, out of this pass's remit); cells for the four packs below changed to `?`.** | Doc + Card | Audit 2026-08-19, LIT 17.15 | ? | A | A | ? | ? | ? | A | A | A | A | A | A |
| S-06 | `work` badge held at `bg #1a2e33` / `fg #8ac8d8`. The lineage's `#1a2028`/`#90aec0` ships in no pack and is not the standard. **Corrected at B2, 2026-08-27: SF's `book` collection's `_bg`/`_fg` disagreed with this standard (`_label`/`_badge` were fixed under T-25's re-bake; the colour question is Class B, not yet ruled, so cells were changed to `?` rather than to `A` — see "Retro-pass B2 corrections" below).** | Doc | ROM 17.12, LIT 17.16, alignment F | **?** | A | **?** | A | A | A | A | A | A | A | A | A |
| S-07 | Works share **one namespace** per `kind` across all media. Cross-pack duplication of works is intentional and is never deduped. | Doc | HOR | A | A | A | A | A | A | A | A | A | A | A | A |
| S-08 | Adaptation disambiguation `Title (YYYY film\|tv\|game)` is decided at blueprint stage, not at assembly. The bare title stays with the novel. **Corrected 2026-08-27: the vocabulary itself is narrower than the disk — Superhero has shipped a `(YYYY comic)` form 13 times, so Sonnet's B2 use of it for Horror `author-124` was matching existing practice, not extending the rule (R-029). This is the fourth ledger row found narrower than the disk, after S-05, S-06 and T-07 (R-029). Horror closed 2026-08-27 at B3 verification: R-028's `The Terror (1916 novel)` annotation applied to `author-16`'s bibliography, so all nineteen title collisions in the pass are now closed and `two_statements.py` reports Horror TITLE COLLISION 0.** | Doc | ROM 17.13, HIS, alignment G | A | A | A | **A** | A | A | A | A | A | A | A | A |
| S-09 | `Title (YYYY, as Pen Name)` folds pseudonym attribution into the works-list note. No fifth author field, no inline `**` in body text. | Doc | ROM | A | A | A | A | A | A | A | A | A | ? | ? | ? |
| S-10 | **The carded year is the year the work first appeared in the form it was written as.** One rule with three surfaces: a novel is carded by **first book publication** with the serial named where it matters; a short story by **first publication in any form**, normally the magazine; a film by **first public release including a festival premiere**. Western found all three separately and only then noticed they were one rule. | Doc + Card | WES 17.58, 17.62, 17.74 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | A |

## 1B. Scope and structure

| ID | Rule | Level | From | SF | MCT | FAN | HOR | ROM | HIS | LIT | WAR | COM | WES | SUP | MNG |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|-----|
| B-01 | Total inside **580–650**, target **612**. | Doc | Grok 2026-08-10 | – | A | A | A | A | A | A | A | A | A | A | A |
| B-02 | Eight core collections; specialists capped at **two**. Spending one is the norm (HIS, WAR, COM); spending both is exceptional (ROM, LIT). | Doc | Grok 2026-08-10 | ? | A | A | A | A | A | A | A | A | A | A | A |
| B-03 | Authors + Works ~300–320 is a **ceiling, not a floor**. Packs land under it deliberately when the verification burden is heavy (ROM 280, LIT 280, COM 282). | Doc | ROM, alignment J | – | – | – | – | A | A | A | A | A | A | A | A |
| B-04 | The blueprint count table must **sum to the number the pack ships**, with no unallocated slack. A table that does not sum is a target, not a control — the assembly count screen can only be a hard assertion if it checks the shipped figure. | Doc | COM 17.3 | – | – | – | – | – | – | – | – | A | A | A | A |
| B-05 | Specialist collections are weighted toward **rules, not catalogues**, and are never named "Primers" — the catalogue-flavoured naming both Historical and War rejected on inspection. | Doc | Grok on HOR, HIS 17.1, WAR 17.4 | – | – | A | A | A | A | A | A | A | A | A | A |
| B-06 | Genre overlap is handled as explicit **hand-off cards naming the owning pack**, decided at blueprint stage. Apparatus size has grown with the library: LIT 6, WAR 7, COM 9. | Doc | HIS 17.5, LIT 17.4 | – | – | – | – | – | A | A | A | A | A | A | A |
| B-07 | Hand-off card names are checked against the destination pack's shipped card names before locking. §4 asserting "these names are distinct" is not a check. | Doc | COM 17.23 | – | – | – | – | – | – | – | – | A | A | A | A |
| B-08 | Authors are grouped **by tradition or position, not by era**, wherever a countable content floor keys on `category`. | Doc | WAR 17.31, COM 17.12 | – | – | – | – | – | – | – | A | A | A | A | A |
| B-09 | Media weighting is permitted where a medium is **constitutive of the genre's craft conversation**, never as a courtesy. Ratified precedents: HOR (film + games), WAR (45/150 screen and games), COM (screen-majority-adjacent). | Doc | HOR 17.3, WAR 17.8, COM 17.4 | A | A | A | A | – | A | A | A | A | A | A | A |
| B-10 | An organising claim may **concede a named exception class** rather than claim universality. A claim rescued from every counter-example is unfalsifiable. | Doc | COM 17.8 | – | – | – | – | – | – | – | – | A | A | A | A |
| B-11 | The boundary rule is stated **with its own failure cases and its admitted costs on the card**. A stated cost is cheaper than a rule quietly bent at Batch 12. | Doc | HIS 17.8, COM 17.22 | – | – | – | – | – | A | A | A | A | A | A | A |
| B-12 | **A pack can state a rule in its blueprint and break it in its cards, and nothing catches it.** The screens test structure, the research passes test facts, and neither tests whether cards obey the pack's own rulings. Western wrote an explicit §0 ruling on its flagship award trap and then broke it, in the same direction, on six cards. **Every ruling that constrains card prose needs either a screen or a named hand-check in the verification brief.** | Doc | WES 17.75 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | A |
| B-13 | **A roster stops being freely editable the moment another collection points at it, and the number of degrees of freedom a build has falls with every batch merged.** Superhero's pass-D addendum was handed an approved payment plan naming four blocks to fund a new category; **two of them could not pay**, because every one of their works was already cited by merged Continuity cards under the citation screen. The constraint did not exist when the plan was written. **Sequence roster-editing decisions before the collections that cite them, or price the citation lock into the plan.** | Doc | SUP 17.96 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A |
| B-14 | **Every prose list in a governance document needs a machine-readable twin or it diverges from the build.** Manga's blueprint named sixteen checklists in prose and a different sixteen were built; its §6 named a sensitive subject the Creators roster omitted entirely. The data-form lists — rulings, category tables, the debt set — did not drift once. **Prose is documentation; only a table is a control.** | Scope | MNG 17.42 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |
| B-15 | **When one side of a territory split is already locked, the split is an adjacency rule and needs a different instrument.** Reservation requires declaring before either side is drafted. Manga's second specialist was scoped against a Craft collection closed eight batches earlier, so the fence ran the other way: the specialist card must NAME the craft card whose claim it touches. | Scope | MNG 17.32 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |
| B-16 | **A creator carded in two packs must be read differently in the second, and only a screen makes that true.** Thirteen of Manga's 120 creators are carded elsewhere in the library — seven by debt obligation, six by coincidence of subject. The debt screen checks that a debt was collected, never that the collection added anything. | Scope | MNG 17.39 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |
| B-17 | **A normalisation that lets a debt discharge can let a DECLINE discharge too.** Manga's key-stripping made a bare manga card satisfy both the suffixed manga subject it should and the declined television subject it must not. The decline reported as carded and the only symptom was a count falling. | Scope | MNG 17.48 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |

## 1C. Verification standards

These are the rows most likely to carry real debt, because they change card text.

| ID | Rule | Level | From | SF | MCT | FAN | HOR | ROM | HIS | LIT | WAR | COM | WES | SUP | MNG |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|-----|
| V-01 | **The named-prize trap.** Prizes named after a person are routinely attributed to that person. Search actively for awards *commonly but wrongly attributed*. | Doc + Card | MCT, FAN, HOR | ? | ? | ? | A | A | A | A | A | A | A | A | A |
| V-02 | **"None" is a verified negative,** not an unresearched blank. Where nothing is found, the card says "None" and the body says why the misattribution arises, **or, where no research was performed at all, the card carries the fourth V-03 state naming that plainly (see V-03).** **Corrected 2026-08-27 (B3, Stage 2, TJ's ruling R-033):** SF, MCT and Fantasy's 258 empty awards strings are now stamped with the fourth-state disclosure token — disclosure discharges this row's requirement (state something, do not stay silent), even though the research itself is deferred to the next pass. | Card | HOR, alignment B; disclosed B3 | A | A | A | A | A | A | A | A | A | A | A | P |
| V-03 | **Four-way distinction in the Awards field**, the fourth added by TJ's ruling 2026-08-27 (R-033): a *verified negative* ("None" plus the body explaining why the misattribution arises), a *documentation gap* (nothing located, stated as such, with a body and a date where one exists), a *nomination that did not win*, and — new — **no research performed at all**, stated as exactly `[no award research performed — retroactive audit 2026-08-27]`, never Superhero's dated `[gap: … consulted DATE]` form, which asserts a consultation that did not happen. **Corrected 2026-08-27 (R-033, and R-032's finding recurring on this row within the hour): Comedy's cell was marked `A` while 46 of its cards shipped a bare `None.` with not one word about the award record — the opposite of what this row requires — while Horror's 18 bare fields showed their working on ten. Same mark, opposite realities.** Applied at B3 Stage 2: 349 fields stamped with the fourth state (SF 91, MCT 85, FAN 82, COM 46, ROM 37, HOR 8); 14 already-correct verified negatives left untouched (HOR 10, ROM 4); 3 Romance cards (`work-23`, `26`, `61`) left flagged, not fitting any of the four states, handed to the next pass. Manga's 97 are out of this pass's scope. | Card | COM 17.31; corrected R-033, applied B3 | A | A | A | A | P | ? | ? | A | A | A | A | P |
| V-04 | **Every award claim states its type in the awarding body's own vocabulary.** AMPAS: *Awards of Merit* (annual, member-voted) vs *Special Awards* (Board of Governors, discretionary). Television Academy: *Category* / *Juried* / *Area* — the last explicitly non-competitive. Recording Academy: *Special Merit Awards* and *honorees*. Where a screen award went to producers rather than to a person, say so. | Card | COM 17.26 | **P** | **P** | **P** | **P** | ? | ? | ? | ? | A | A | A | A |
| V-05 | **Three years attach to every Academy Award** and the card names which one it means: *award year* (eligibility, how AMPAS indexes), *ceremony year* (how the ceremony pages headline it), *release year* (a third and irrelevant figure). Card form: "the 1968 Academy Award, presented at the 41st ceremony in 1969". **BAFTA dates by ceremony year** for both Film and Television. | Card | COM 17.30 | **P** | **P** | **P** | **P** | – | ? | – | ? | A | A | A | – |
| V-06 | **BAFTA has never used the category name "Best Situation Comedy."** Name the category as BAFTA actually named it in the year concerned; the names overlap rather than succeeding one another. | Card | COM 17.29 | – | – | – | – | – | – | – | – | A | – | – | – |
| V-07 | **The four television credits are four distinct claims** — creator, writer, showrunner, "developed by". The most common factual error in writing about series television. | Card | COM 17.11 | **P** | **P** | **P** | **P** | ? | ? | ? | ? | A | A | A | – |
| V-08 | **Submission ≠ nomination.** Also: BAFTA's public GAME Award ≠ BAFTA Best Game; GDCA Audience ≠ Choice; D.I.C.E.-awards ≠ DICE-studio; the four "Game of the Year" awards frequently disagree and are never collapsed. | Card | WAR 17.22 | **P** | – | ? | ? | – | – | – | A | A | ? | A | ? |
| V-09 | **Preservation designations and polls are not awards.** National Film Registry, Sight & Sound, AFI, BFI, MoMA acquisition, public-domain status, "best of" lists — none appear in an Awards field. Registry eligibility is US-only, so a Registry year on a foreign film is a fabrication. | Card | HOR | ? | ? | ? | A | A | A | A | A | A | A | A | ? |
| V-10 | **Awards on translated works index the translation, not the work.** A pack that dates by original-language year must say so on the card. | Card | HOR | ? | ? | ? | A | A | A | A | A | A | A | A | A |
| V-11 | **Living-status check on every author.** Post-cutoff deaths look known and are wrong. Confirmed catches: WAR five (Caputo, Satrapi, Malouf, Deighton, Forsyth); COM three (Lodge, O'Hara, Newhart); ROM (Kinsella); HIS (Ngũgĩ, Vargas Llosa). **This decays — every pack needs re-checking on a schedule, not once.** | Card | alignment K | **P** | **P** | **P** | **P** | **P** | **P** | **P** | **P** | **P** | A | P | A |
| V-12 | **Three-type pseudonym taxonomy** — personal / publisher-owned / rotating house-stable — asked of every author. Comedy added a fourth: the **character persona** (Dame Edna, Alan Partridge). The performer is the author; the persona is not. | Doc | ROM, COM 17.15, alignment E | ? | ? | ? | ? | A | A | A | A | A | A | A | P |
| V-13 | **Author biography claims that the boundary deliberately excludes must not re-enter via biography.** War's instance: service and veteran status is a verification target, because jacket copy is unreliable in both directions. | Doc | WAR 17.11 | – | – | – | – | – | ? | – | A | – | – | ? | A |
| V-14 | **Domain claims are verified like dates.** The genre-specific instance of one rule: HIS period claims, LIT technique attributions, WAR unit/operation/formation/casualty figures. | Doc | HIS, LIT 17.9, WAR 17.10 | ? | ? | ? | ? | ? | A | A | A | A | A | P | A |
| V-15 | **The ABA "National Book Award" (1936–1942) is a different and earlier prize** from the modern National Book Award (founded 1950). Reconciled wording settled at pack seven and applied. | Card | alignment A | – | – | – | – | A | A | A | – | – | – | – | – |
| V-16 | **An agent reporting a source as unreachable is itself a claim to verify.** Comedy's Pass H reported three awarding-body sites unreachable; Pass I reached all three via their search and results endpoints. | Doc | COM (Pass H/I) | – | – | – | – | – | – | – | – | A | – | A | A |
| V-17 | **Contradiction between two verification passes → a narrow third pass, never a judgement call.** Where the third pass cannot settle it, the contradiction is labelled on the card rather than adjudicated. | Doc | ROM 17.17, COM | ? | ? | ? | ? | A | A | A | A | A | A | A | ? |
| V-18 | Research files' **UNCONFIRMED items are carried into the verification brief as explicit targets**, not left in the research file. | Doc | ROM 17.15, alignment I | ? | ? | ? | A | A | A | A | A | A | A | A | A |
| V-19 | **The hedge is banned.** “The pack does not enumerate” / “could not confirm against the awarding body's own list” on an `Awards` line. Western used it on twelve cards and **it concealed a documented, easily findable award every single time.** A hedge is a claim that the record was checked and found unclear; used in place of checking, it is a false statement about the pack's own process, invisible to every screen and dressed as the most careful thing on the card. **A card states the award or says nothing about awards.** **Measured 2026-08-27 by `hedge_check.py` (`TOOLS-VERIFIED.md` §7, retro-pass Stage 7): 38 BARE hedges in two packs — War & Military 37, Comedy 1 — everywhere else 0. Refused as a fix per R-030 (both already disclose a gap; what they lack is a body and a date, which needs research, not wording) and re-priced as the first research item of the pass after this one.** | Doc + Card | WES 17.85; measured Stage 7 | A | A | A | A | A | A | A | **P** | **P** | A | A | A |
| V-20 | **Hedges decay, so verification re-tests hedges and not only assertions.** “Living status not independently confirmed” is a claim with a date on it. Western carried three that were simply out of date; left alone, a pack accumulates a sediment of caution that has stopped being true. | Doc | WES 17.71 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | ? |
| V-21 | **The research roster is verified against nothing.** Verification passes check cards against the world; nobody checks the roster that fed them. Western's Authors roster recorded a “variously reported” ancestry that is not in dispute at all, and the card dutifully repeated a manufactured caution. **A landmine a research pass supplies can itself be an invention.** | Doc | WES 17.78 | ? | ? | ? | ? | ? | ? | ? | ? | ? | **P** | A | P |
| V-22 | **A category string can have a discontinuous life.** The Spur's *Best Western Historical Novel* was valid 1972–1987 and again from 2014, and invalid across the twenty-six years between. A card built from a current category list silently back-dates the modern string across the gap, and a date-range check does not catch it. Where the era is uncertain, drop the category and state the body and year. | Doc + Card | WES 17.83 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | ? |
| V-23 | **A contradiction between two passes may be a convention clash rather than an error.** Western's passes A and F disagreed on the Spur's founding year; the narrow third pass found **both correct** — the awarding body's own site gives the award year and its own history gives the presentation year. The third pass's job is to find which convention each side used before it looks for a mistake. | Doc | WES 17.64 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | ? |
| V-24 | **When the briefing supplies a name or a claim, the briefing is the least reliable link in the chain.** V-21 says the research roster is verified against nothing; this is the narrower and more uncomfortable case — the *brief*, written by Claude, asserting a fact the sources never supplied. Superhero hit it three times: an invented scholar ("Anand Rai"), a real scholar under the wrong forename ("Kenneth Philips" for **Menaka** Philips, and the card was already correct), and a founding claim about the first superhero RPG that the source denies in the same paragraph that praises the game. **Generalised: when a pass reports an absence, check the query before recording the absence; when a brief supplies a name, verify it before the card does.** | Doc | SUP 17.94 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A |
| V-25 | **Where a pack states the same fact twice, a screen must compare the two statements.** Manga's Works roster and its Creator bibliographies both carry work years; nothing compared them and ten disagreed, mostly the *popular* year rather than the sourced one. A drift check cannot see it — both copies were wrong together. **Any pack with a roster and a bibliography inherits this.** | Ver | MNG 17.44 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |
| V-26 | **A half-verified field reads as verified.** Manga's year screen corrected a bibliography year and never compared the attribution beside it, which was wrong. Verifying one property of a record makes the whole record look checked. **Check both properties or say which one you checked.** | Ver | MNG 17.50 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |
| V-27 | **A roster cross-check must compare near-misses, not only matches.** Manga's name cross-check compares by an order-insensitive key; the case it was written for differs by one consonant, so its key differs and it was reported as an ordinary uncarded name. **An instrument that only compares what it has already decided is the same thing is not a cross-check.** | Ver | MNG 17.46 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |
| V-28 | **A research document is not a delivery mechanism.** Three times in Manga a fact was recorded correctly in a pack document and never reached a card — checklists named in prose and not built, a sensitive subject the roster omitted, a recorded dispute the card dropped. **Anything a research pass records as required is checked against what shipped, not against the pass.** | Ver | MNG 17.52 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |
| V-29 | **A pack's instruments prove internal consistency and nothing about the world.** Thirty-three screens, two rosters and five hand-checks reported Manga perfect while it described a creator dead five months as living. **Re-run V-11 immediately before every release, dated, with the method and its limits recorded.** | Ver | MNG 17.51 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |

## 1D. Content and contested material

| ID | Rule | Level | From | SF | MCT | FAN | HOR | ROM | HIS | LIT | WAR | COM | WES | SUP | MNG |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|-----|
| C-01 | **Sensitive material is handled, not omitted.** State it at the level the record supports; mark disputes as disputed; never adjudicate. Silent omission is worse than careful inclusion. | Doc | pre-HOR | A | A | A | A | A | A | A | A | A | A | A | A |
| C-02 | **Content the genre is sought out or avoided for is named plainly** in the card's opening clause, then analysed as craft. Neither censored nor relished. Generalised from Horror's extreme-content rule; Romance extended it to sex on the page, consent depiction and heat levels. | Doc | HOR 4, ROM 17.7, alignment C | ? | ? | ? | A | A | A | A | A | A | A | A | A |
| C-03 | **Living religions and cultures are not monsters.** State the appropriation history and objections from within the culture; the card functions as a craft warning, not a stat-block. Screened by the cultural-borrowing checklist card. | Doc | HOR 5 | ? | ? | ? | A | A | A | A | A | A | A | A | A |
| C-04 | **The contested-canon four-point method:** name the contest, state both positions at full strength, take no side, record who contests what. | Doc | ROM 17.8, HIS, alignment D | ? | ? | ? | ? | A | A | A | A | A | A | A | A |
| C-05 | **A contested card with only one side sourced does not ship.** One-sided sourcing is side-taking that claims not to be. | Doc | WAR 17.23, COM 17.16 | ? | ? | ? | ? | ? | ? | ? | A | A | A | A | A |
| C-06 | **The last-sentence test.** A card's final sentence is where adjudication hides. Read it separately — and read BOTH `principle` and `application` on a principle card; the argument ends at `principle`'s close but a fix there can leave `application` adjudicating the thing `principle` just declined to (R-000, R-024, F-10). | Doc | COM 17.10; SUP fixed B3 | – | – | – | – | – | – | – | – | A | A | A | A |
| C-07 | **Contested findings in a specialist's own substrate are carded as contested,** with a CONTESTED list produced before Batch 1. A rules collection that states disputed findings as fact is worse than none. | Doc | HIS, WAR 17.12, 17.24 | – | – | – | – | – | A | – | A | A | A | A | A |
| C-08 | **A robustness tier on every empirical Psychology card** — robust / contested / unreplicated, or a stated exemption where there is nothing to replicate. **Corrected 2026-08-27 (R-032): the row's own prose contradicted its own cells — it named Comedy as the sole implementer while marking four packs `A`, and Comedy in fact had zero per-card tiers (a collection-level policy card instead) while Western and Superhero were the two packs actually complete at 12/12. Manga's `A` covers cards 1–7 only, nothing on 8–16 — overstated. This is the fifth ledger row found narrower than the disk, after S-05, S-06, T-07 and S-08, and the first whose prose contradicted its own cells.** Applied at B3 (2026-08-27, `stage9-judgement-fixes.md` §5.3): 12 cards tiered and 2 given a stated exemption, drawn from each card's own prose, across COM (3 tiers + its pre-existing policy card), HIS (1), HOR (1), LIT (1), MCT (3), ROM (3 + its pre-existing policy card). **235 psychology cards remain untiered and refused — the research, not the wording, per `remediation-plan.md` §4.2 and R-032.** | Card | COM 17.17 (Grok); corrected R-032, applied B3 | **P** | **P** | **P** | **P** | **P** | **P** | **P** | **P** | **P** | A | A | **P** |
| C-09 | **Every period-bound rule in a specialist names its period and its army/tradition.** A rule that silently generalises across five centuries is a defect. | Doc | WAR 17.25 | – | – | ? | ? | – | ? | – | A | – | ? | A | – |
| C-10 | **Contested-canon categories** include: removals later partially restored; awards stripped or refused; persona-versus-performer where the persona is the contested object. The second intersects V-02 — "None" must distinguish never-won from won-and-revoked. | Doc | COM 17.21 (Grok) | ? | ? | ? | ? | ? | ? | ? | ? | A | A | A | ? |
| C-11 | **No unnamed placeholders and no tradition-level exemplars** — a named published or released work every time. **SF carries 7 surviving placeholder example works** (`trope-46`, `technology-35`, `trope-scifi-new-19`, `trope-scifi-new-24` and three others). | Card | FAN, HOR 17.7 | **P** | A | A | A | A | A | A | A | A | A | A | A |
| C-12 | **True crime and any work drawn from a real crime:** analyse the published work's craft only, never the real case, victims or accused. | Doc | MCT | A | A | A | A | A | A | A | A | A | A | – | – |
| C-13 | **Analysis and opinion only.** No extended quotation, no substitute-for-reading plot summary. This is what keeps the CC BY licensing clean. | Doc | MCT | A | A | A | A | A | A | A | A | A | A | A | A |
| C-14 | **Where an affiliation cannot be sourced to the subject or an institution, the card states the sourcing rather than asserting the affiliation.** Western's rule failed twice in the same direction — two scholars described in secondary sources as citizens of named nations, with no institutional page saying so — and stating the sourcing is the rule's correct output under a shortage of evidence, not a defeat for it. Its counterpart is the **third identity category: a finding the subject accepted** (Thomas King, 2025), which is neither a live dispute nor a fabrication and which the library had no shape for. | Doc + Card | WES 17.53, 17.72 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | ? |
| C-15 | **A card that hedges and asserts the same fact is an internal contradiction, and the hedge is the half to keep.** Western asserted a birth year inside the sentence disclaiming any reliable record of the subject's life. | Doc + Card | WES 17.73 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | A |
| C-16 | **Where a subject has spoken about a sensitive matter more than twice, the card carries every position.** A claim-and-retraction framing is the default and it is often wrong: Jodorowsky's record has three positions, and the middle one — a 2007 revision rather than a withdrawal — contradicts the retraction the two-position framing implies. | Doc + Card | WES 17.77 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A | A |
| C-17 | **House style for a creator who changed the spelling of their own name: use the creator's own final spelling on every work, whatever its publication date, and state the change once, on the earliest carded work.** The alternative — period-accurate spelling per work — is more faithful to each credit box and produces a pack in which one person appears to be two, which is the error the rule exists to prevent. Superhero's case is Ishimori / Ishinomori, respelled in 1986, carrying four Works cards and one Author card across the boundary. | Doc + Card | SUP 17.95 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A |

## 1E. Tooling and assembly

Tool rows are **forward-only** — they change how a pack is built, not what a shipped pack
contains. A `–` in an early column means "built before the tool existed", not a debt.

| ID | Rule | Level | From | SF | MCT | FAN | HOR | ROM | HIS | LIT | WAR | COM | WES | SUP | MNG |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|-----|
| T-01 | **The disk validator is the acceptance gate.** `tools/validate_pack.py` must report `PASS — 0 error(s)`, in addition to the assembly screens. `PACK-SPEC.md` + `schema/pack.schema.json` are the canonical floor — never rebuild the template from memory or from prose blueprints. | Doc | LIT 17.13, redirect | A | A | A | A | A | A | A | A | A | A | A | A |
| T-02 | **Six parser guards**, each **broken deliberately against a fixture before Batch 1.** (1) trailing-period truncation (2) `start` not `star` (3) silent enum drift on `work_cards.medium` (4) the em-dash strip set `' ,–—-'` (5) free-text vs enum medium fields (6) work-notes over 150 chars, soft warn. | Tool | HOR, ROM 17.14 | – | – | – | A | A | A | A | A | A | A | A | A |
| T-03 | **Sixteen assembly screens**, printed with their count at run time, all wired to the exit code. A miscounted screen list is how a screen goes missing — War's §18 said "ten" against a real thirteen. Comedy runs sixteen plus screen 10b. | Tool | COM 17.14 | – | – | – | – | – | – | – | – | A | A | A | A |
| T-04 | **Work-reuse cap 2, keyed on `(work, medium)`, enforced per batch AND globally at merge time**, wired to the exit code. Title-only keys produce false positives on every adaptation. | Tool | FAN, HOR, playbook v1.8 | – | – | A | A | A | A | A | A | A | A | A | A |
| T-05 | **`reuse_check.py` runs pre-merge and must load the WIP pack**, not only the batch handed to it — the cap is pack-wide. Ported blind from War to Comedy, it was blind to exactly the breach it exists to catch until rewritten at Batch 06. It then caught 6 breaches in batch 08, 10 in batch 09 and 22 in batch 12. | Tool | WAR 17.32, COM 17.25 | – | – | – | – | – | – | – | A | A | A | A | A |
| T-06 | **Countable content floors, asserted at assembly and wired to the exit code.** An objective that cannot be counted is not a control. WAR: civilian-primary ≥40/150 Works, ≥35/130 Authors. COM: two floors — the unfunny and the non-Anglophone — as screens 15 and 16. | Tool | WAR 17.20, 17.29, COM 17.7 | – | – | – | – | – | – | – | A | A | A | A | A |
| T-07 | **Dedupe screen keyed on `(kind, name)`, not `name`.** **Corrected 2026-08-27: SF's cell was marked `–` ("built before the tool existed") when SF in fact carried 26 exact duplicate author cards plus a punctuation pair — a real, uncaught debt, not an absence of applicability (R-004). Ruled `P` at R-004; genuinely discharged at B2 Stage 6 (27 removals, `name_cross_check.py` reports 0 duplicates) and marked `A` below, this time correctly.** | Tool | LIT (late fix), WAR 17.18 | **A** | – | – | – | – | – | A | A | A | A | A | A |
| T-08 | **`rebuild.sh` replays the whole build** from batch markdown to a byte-identical pack file, before shipping. This is what makes a late fix in an already-merged batch a one-command operation. | Tool | COM | – | – | – | – | – | – | – | – | A | A | A | A |
| T-09 | **Anti-duplication tests inside a collection are wired to assembly, not left as prose.** Comedy's screen 10b was added mid-build after a hand check found two specialist cards failing a test §5a had stated and nobody enforced. | Tool | COM (screen 10b) | – | – | – | – | – | – | – | – | A | A | A | A |
| T-10 | **Verify-to-file / condense-to-brief.** Agents `Write` the full report to a file and return ≤400 words containing *nothing but* errors and UNCONFIRMED items. Two agents per Authors/Works batch, pipelined one batch ahead; a narrow third pass where the error lives. | Doc | HOR (v1.9) | – | – | – | A | A | A | A | A | A | A | A | P |
| T-11 | **The validator runs against staged copies in the session container**, not on TJ's desktop — the desktop workspace's `jsonschema` predates `Draft202012Validator` and has no network to upgrade. Same script, same schema, same bytes. | Doc | WAR 17.17 | – | – | – | – | – | – | – | A | A | A | A | A |
| T-12 | **Disk is canonical.** Claude writes `packs/reference-<genre>.json` and updates `manifest.json` and `README.md` on disk, then shows validator PASS. **Claude performs no git operations, ever — TJ publishes.** | Doc | LIT 17.17, redirect §5 | A | A | A | A | A | A | A | A | A | A | A | P |
| T-13 | **Build paperwork lives on disk, not in the project** (TJ, 2026-08-21). Blueprint, build log, batch documents, research reports, changelog and handoff all live under `_build/<genre>/`. The project holds the historical archive of packs one to seven only. | Doc | TJ 2026-08-21 | – | – | – | – | – | – | – | – | A | A | A | A |
| T-14 | **Version semantics:** patch = corrections, minor = new entries. A reciprocal hand-off card added to a shipped pack is a **minor** bump. Comedy's blueprint specified 1.0.1 for the War patch; the spec won and it shipped as 1.1.0. | Doc | COM 17.34, PACK-SPEC §1 | A | A | A | A | A | A | A | A | A | A | A | P |
| T-15 | **Parser guard 7 — the unknown-field guard.** A `Key:` line outside the card's shape is now a hard error naming the allowed set. Western found `Note:` fields silently discarded from twenty-eight Authors cards, taking the award traps with them: the merge reported success, the count was right, and all seventeen screens passed. **Six packs were built with a parser that had this behaviour and none has ever been checked for it** — the batch markdown is archived and the sweep is cheap. | Tool + Card | WES 17.69 | **P** | **P** | **P** | **P** | **P** | **P** | **P** | **P** | **P** | A | A | A |
| T-16 | **A screen whose dependency is built last must be dry-runnable against a stub.** Western's specialist anti-duplication screen is FINAL-mode only, so its errors arrived at 612/612 with nothing left to trade. The one dry run that was possible, at Batch 12, is the reason the screen is a citation cap and not the unachievable uniqueness test it started as — which is the whole argument for running the others early. | Tool | WES 17.67, 17.89 | – | – | – | – | – | – | – | – | ? | A | A | A |
| T-17 | **Documents are delivered, not just written.** Every handoff, Grok review brief, build log, changelog entry and verification report is **sent as a file with `SendUserFile`** — at the moment it is finished, and again in the session's closing message, which names it. TJ should never have to go looking on disk or ask where something is. The disk copy stays canonical; the delivered file is the copy he receives. **Any session that ends with a handoff on disk ends with that handoff sent, including sessions that only edited it.** | Doc | TJ 2026-08-22 | – | – | – | – | – | – | – | – | – | A | A | A |
| T-21 | **A screen whose collection is empty must report NOT RUN, not run.** Manga's screens 18 and 31 are scoped to one collection; with it unbuilt neither set its flag, so the gate line counted both as run having examined zero cards — `28 of 31` was true of the loop and false of the pack. **Empty input is not a pass.** Third location of T-18. | Tool | MNG 17.33 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |
| T-22 | **Where a document and a parser disagree about a format, fix the document.** `work_cards` are listed in BATCH-FORMAT.md as taking a `Desc`; the builder generates `description` from `Text` and guard G7 refuses the field, because honouring it would silently discard a hand-written sentence. **The executable contract was right all three times this has arisen.** | Tool | MNG 17.45 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |
| T-23 | **Never renumber card ids that other cards may already reference.** Manga renumbered one batch before merging and five references across four batches silently retargeted, including a contested-authorship card pointing at the wrong person. **All five resolved and the referential-integrity screen reported them healthy.** A reference audit printing every reference beside its actual target now runs in the standing check. | Tool | MNG 17.49 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |
| T-24 | **A clean fixture that would fail a live screen is not a clean fixture.** Twice in Manga a new screen turned the clean test pack red — once because it modelled a pack that could not ship, once because it lacked a data file the shipping configuration has. **When a new screen changes the clean fixture, the fixture is usually what was wrong.** | Tool | MNG 17.40 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |
| T-25 | **The validator compares baked presentation fields against the pack's own `collections[]`, keyed on `kind`.** `_bg`/`_fg`/`_label`/`_badge` must be present and must equal that entry's collection's `badgeBg`/`badgeFg`/`label`/`badge`. This does not assert a library-wide colour standard (S-06 is separate and unresolved for two packs) — it only asserts a pack agrees with itself. Added retro-pass Stage 1, shown RED on Historical (613/613 entries, fields entirely absent) before the Stage 3 re-bake and green after, per `grok-review-response.md` G-05. | Tool | retro-pass Stage 1, 2026-08-27 | A | A | A | A | A | A | A | A | A | A | A | A |

---
| T-18 | **A gate that cannot run on incomplete input must name the screens it did not run.** T-16 required screens to be dry-runnable; Superhero found the harder half. `check.sh` ran `assemble.py --partial`, in which screens 11, 18 and 26 are silently skipped, and reported **"0 errors"** for fifteen consecutive batches. Screen 11 was holding two hard errors the whole time; they surfaced only on the first FINAL run, at 612/612. `--partial` now prints *NOT RUN in --partial: 11, 18, 26 — THIS IS NOT A FULL PASS*. **A partial gate that reports like a full one is worse than no gate**, because it retires the suspicion that would have caught the defect. | Tool | SUP 17.91 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A |
| T-19 | **Roster integrity is a separate check from drift, and drift cannot substitute for it.** Superhero shipped sixteen work cards with their disambiguating annotations stripped — `Daredevil` for `Daredevil (Waid run)`, `Batman` for `Batman (1966 tv)` — breaking two citations and nearly shipping a work card called simply "Batman" beside `Batman (1989 film)`. **`drift_check.py` could not catch it and was never going to**: it proves the batch files and the merged pack agree, and they agreed, because the batch files carried the same stripped names. It checks internal consistency; nothing checked consistency with the **roster**. `roster_integrity.py` is the three lines that close it: a carded name absent from the roster is a fault at any point in the build. | Tool | SUP 17.92 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A |
| T-20 | **A referential-integrity screen over intra-pack cross-references — and an honest statement of what it cannot do.** Screen 27 resolves every `` `kind-N` `` reference against the built pack. It exists because Superhero's Batch 22 drafted ten cross-references from memory and **eight pointed at the wrong card**, with nothing checking `work` cards at all. **It would have caught none of those eight**, because they resolved to real cards saying something else — a semantic error no screen reaches. It catches the case the procedural control misses: the typo, the renumbered id, the reference to a card that was later cut. **Both controls are needed and neither is a substitute for the other.** | Tool | SUP 17.93 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A |

# Part 2 — Pack-local decisions index

Decisions that belong to one pack and are **not** back-port candidates. Recorded so a later
build can look up what a pack did without opening its blueprint. Format: pack · row · decision.

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
| 20 | **T-12 / T-14 for Manga.** `packs/reference-manga.json` and `manifest.json` are not yet updated, and the five reciprocal hand-off cards owed to Superhero, Fantasy, Horror, Romance and Comedy are not yet applied. **TJ publishes; Claude performs no git operations.** | MNG + 5 | Small, and it is the last step. |
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

*Sources: the §17 delta logs of Horror, Romance, Historical, Literary, War & Military, Comedy,
Western and Superhero; `_build/literary/alignment-pass.md` (candidates A–K, run at pack seven);
`_fix-kits/pack-consistency-audit-2026-08-19.md`; `PACK-SPEC.md`; and a direct audit of all
nine shipped pack JSONs run 2026-08-21, which produced the counts in V-02 and C-11.*
