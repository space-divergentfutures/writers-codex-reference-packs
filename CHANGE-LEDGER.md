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
`COM` Comedy 1.0.1 (612) · `WES` Western 1.0.0 (612)

**Updated 2026-08-22, at the close of the Western build (pack ten).** Four packs were bumped
at Western's publication: `HIS` 1.1.1 → 1.2.0, `WAR` 1.1.0 → 1.2.0 and `LIT` 1.0.0 → 1.1.0,
each gaining one reciprocal Western hand-off card, and `COM` 1.0.0 → 1.0.1, correcting
`subgenre-32` against what Western actually shipped.

---

# Part 1 — The standing register

Every row here applies to more than one pack. `Level` says what a back-port would actually
cost: **Doc** = a rule in a shared document, no card changes; **Card** = text inside shipped
entries; **Tool** = build tooling, which only affects future packs.

## 1A. Schema and file shape

| ID | Rule | Level | From | SF | MCT | FAN | HOR | ROM | HIS | LIT | WAR | COM | WES | SUP |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| S-01 | `medium` is **mandatory and enum-bound** on every `work_cards` entry. There is no omission path — the validator errors on a missing value. The "omit it and name the form in prose" escape hatch recorded in several handoffs **does not exist**. | Doc + Card | LIT 17.14, COM 17.6 | A | A | A | A | A | A | A | A | A | A | A |
| S-02 | Stage plays, classical drama, epic and verse narrative take `medium: novel`, with the true form named in the card's opening clause (`Stage play.`). | Doc | COM 17.6 | – | – | – | – | – | ? | ? | ? | A | – | – |
| S-03 | `example_cards.medium` is free text; `work_cards.medium` is a closed enum. Free-text values must be minted deliberately and recorded, never invented mid-build. Current vocabulary: novel · film · tv · play · comic · nonfiction · audio · stand-up · radio · sketch. | Doc + Tool | HOR guard 5, COM 17.13, 17.24 | ? | ? | ? | A | A | A | A | A | A | A | P |
| S-04 | `works[].start` is the real field name. It is a typo shared by every live pack and it **stays**. | Doc | FAN | A | A | A | A | A | A | A | A | A | A | A |
| S-05 | Years are strings everywhere, negative years included. Collection ids are `work` and `psychology`, never `psych`. Full seven-field collection metadata; `_label`/`_badge`/`_bg`/`_fg` baked on every entry. | Doc + Card | Audit 2026-08-19, LIT 17.15 | A | A | A | A | A | A | A | A | A | A | A |
| S-06 | `work` badge held at `bg #1a2e33` / `fg #8ac8d8`. The lineage's `#1a2028`/`#90aec0` ships in no pack and is not the standard. | Doc | ROM 17.12, LIT 17.16, alignment F | A | A | A | A | A | A | A | A | A | A | A |
| S-07 | Works share **one namespace** per `kind` across all media. Cross-pack duplication of works is intentional and is never deduped. | Doc | HOR | A | A | A | A | A | A | A | A | A | A | A |
| S-08 | Adaptation disambiguation `Title (YYYY film\|tv\|game)` is decided at blueprint stage, not at assembly. The bare title stays with the novel. | Doc | ROM 17.13, HIS, alignment G | A | A | A | A | A | A | A | A | A | A | A |
| S-09 | `Title (YYYY, as Pen Name)` folds pseudonym attribution into the works-list note. No fifth author field, no inline `**` in body text. | Doc | ROM | A | A | A | A | A | A | A | A | A | ? | ? |
| S-10 | **The carded year is the year the work first appeared in the form it was written as.** One rule with three surfaces: a novel is carded by **first book publication** with the serial named where it matters; a short story by **first publication in any form**, normally the magazine; a film by **first public release including a festival premiere**. Western found all three separately and only then noticed they were one rule. | Doc + Card | WES 17.58, 17.62, 17.74 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A |

## 1B. Scope and structure

| ID | Rule | Level | From | SF | MCT | FAN | HOR | ROM | HIS | LIT | WAR | COM | WES | SUP |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| B-01 | Total inside **580–650**, target **612**. | Doc | Grok 2026-08-10 | – | A | A | A | A | A | A | A | A | A | A |
| B-02 | Eight core collections; specialists capped at **two**. Spending one is the norm (HIS, WAR, COM); spending both is exceptional (ROM, LIT). | Doc | Grok 2026-08-10 | ? | A | A | A | A | A | A | A | A | A | A |
| B-03 | Authors + Works ~300–320 is a **ceiling, not a floor**. Packs land under it deliberately when the verification burden is heavy (ROM 280, LIT 280, COM 282). | Doc | ROM, alignment J | – | – | – | – | A | A | A | A | A | A | A |
| B-04 | The blueprint count table must **sum to the number the pack ships**, with no unallocated slack. A table that does not sum is a target, not a control — the assembly count screen can only be a hard assertion if it checks the shipped figure. | Doc | COM 17.3 | – | – | – | – | – | – | – | – | A | A | A |
| B-05 | Specialist collections are weighted toward **rules, not catalogues**, and are never named "Primers" — the catalogue-flavoured naming both Historical and War rejected on inspection. | Doc | Grok on HOR, HIS 17.1, WAR 17.4 | – | – | A | A | A | A | A | A | A | A | A |
| B-06 | Genre overlap is handled as explicit **hand-off cards naming the owning pack**, decided at blueprint stage. Apparatus size has grown with the library: LIT 6, WAR 7, COM 9. | Doc | HIS 17.5, LIT 17.4 | – | – | – | – | – | A | A | A | A | A | A |
| B-07 | Hand-off card names are checked against the destination pack's shipped card names before locking. §4 asserting "these names are distinct" is not a check. | Doc | COM 17.23 | – | – | – | – | – | – | – | – | A | A | A |
| B-08 | Authors are grouped **by tradition or position, not by era**, wherever a countable content floor keys on `category`. | Doc | WAR 17.31, COM 17.12 | – | – | – | – | – | – | – | A | A | A | A |
| B-09 | Media weighting is permitted where a medium is **constitutive of the genre's craft conversation**, never as a courtesy. Ratified precedents: HOR (film + games), WAR (45/150 screen and games), COM (screen-majority-adjacent). | Doc | HOR 17.3, WAR 17.8, COM 17.4 | A | A | A | A | – | A | A | A | A | A | A |
| B-10 | An organising claim may **concede a named exception class** rather than claim universality. A claim rescued from every counter-example is unfalsifiable. | Doc | COM 17.8 | – | – | – | – | – | – | – | – | A | A | A |
| B-11 | The boundary rule is stated **with its own failure cases and its admitted costs on the card**. A stated cost is cheaper than a rule quietly bent at Batch 12. | Doc | HIS 17.8, COM 17.22 | – | – | – | – | – | A | A | A | A | A | A |
| B-12 | **A pack can state a rule in its blueprint and break it in its cards, and nothing catches it.** The screens test structure, the research passes test facts, and neither tests whether cards obey the pack's own rulings. Western wrote an explicit §0 ruling on its flagship award trap and then broke it, in the same direction, on six cards. **Every ruling that constrains card prose needs either a screen or a named hand-check in the verification brief.** | Doc | WES 17.75 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A |
| B-13 | **A roster stops being freely editable the moment another collection points at it, and the number of degrees of freedom a build has falls with every batch merged.** Superhero's pass-D addendum was handed an approved payment plan naming four blocks to fund a new category; **two of them could not pay**, because every one of their works was already cited by merged Continuity cards under the citation screen. The constraint did not exist when the plan was written. **Sequence roster-editing decisions before the collections that cite them, or price the citation lock into the plan.** | Doc | SUP 17.96 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |

## 1C. Verification standards

These are the rows most likely to carry real debt, because they change card text.

| ID | Rule | Level | From | SF | MCT | FAN | HOR | ROM | HIS | LIT | WAR | COM | WES | SUP |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| V-01 | **The named-prize trap.** Prizes named after a person are routinely attributed to that person. Search actively for awards *commonly but wrongly attributed*. | Doc + Card | MCT, FAN, HOR | ? | ? | ? | A | A | A | A | A | A | A | A |
| V-02 | **"None" is a verified negative,** not an unresearched blank. Where nothing is found, the card says "None" and the body says why the misattribution arises. **SF, MCT and Fantasy do not implement this** — 258 cards between them carry an empty awards string where a verified negative or a stated gap belongs (SF 91, MCT 85, FAN 82). | Card | HOR, alignment B | **P** | **P** | **P** | A | A | A | A | A | A | A | A |
| V-03 | **Three-way distinction in the Awards field:** a *verified negative* ("None"), a *documentation gap* (nothing located, stated as such), and a *nomination that did not win*, which is neither. Collapsing a gap into "None" is a false claim. | Card | COM 17.31 | **P** | **P** | **P** | **P** | ? | ? | ? | A | A | A | A |
| V-04 | **Every award claim states its type in the awarding body's own vocabulary.** AMPAS: *Awards of Merit* (annual, member-voted) vs *Special Awards* (Board of Governors, discretionary). Television Academy: *Category* / *Juried* / *Area* — the last explicitly non-competitive. Recording Academy: *Special Merit Awards* and *honorees*. Where a screen award went to producers rather than to a person, say so. | Card | COM 17.26 | **P** | **P** | **P** | **P** | ? | ? | ? | ? | A | A | A |
| V-05 | **Three years attach to every Academy Award** and the card names which one it means: *award year* (eligibility, how AMPAS indexes), *ceremony year* (how the ceremony pages headline it), *release year* (a third and irrelevant figure). Card form: "the 1968 Academy Award, presented at the 41st ceremony in 1969". **BAFTA dates by ceremony year** for both Film and Television. | Card | COM 17.30 | **P** | **P** | **P** | **P** | – | ? | – | ? | A | A | A |
| V-06 | **BAFTA has never used the category name "Best Situation Comedy."** Name the category as BAFTA actually named it in the year concerned; the names overlap rather than succeeding one another. | Card | COM 17.29 | – | – | – | – | – | – | – | – | A | – | – |
| V-07 | **The four television credits are four distinct claims** — creator, writer, showrunner, "developed by". The most common factual error in writing about series television. | Card | COM 17.11 | **P** | **P** | **P** | **P** | ? | ? | ? | ? | A | A | A |
| V-08 | **Submission ≠ nomination.** Also: BAFTA's public GAME Award ≠ BAFTA Best Game; GDCA Audience ≠ Choice; D.I.C.E.-awards ≠ DICE-studio; the four "Game of the Year" awards frequently disagree and are never collapsed. | Card | WAR 17.22 | **P** | – | ? | ? | – | – | – | A | A | ? | A |
| V-09 | **Preservation designations and polls are not awards.** National Film Registry, Sight & Sound, AFI, BFI, MoMA acquisition, public-domain status, "best of" lists — none appear in an Awards field. Registry eligibility is US-only, so a Registry year on a foreign film is a fabrication. | Card | HOR | ? | ? | ? | A | A | A | A | A | A | A | A |
| V-10 | **Awards on translated works index the translation, not the work.** A pack that dates by original-language year must say so on the card. | Card | HOR | ? | ? | ? | A | A | A | A | A | A | A | A |
| V-11 | **Living-status check on every author.** Post-cutoff deaths look known and are wrong. Confirmed catches: WAR five (Caputo, Satrapi, Malouf, Deighton, Forsyth); COM three (Lodge, O'Hara, Newhart); ROM (Kinsella); HIS (Ngũgĩ, Vargas Llosa). **This decays — every pack needs re-checking on a schedule, not once.** | Card | alignment K | **P** | **P** | **P** | **P** | **P** | **P** | **P** | **P** | **P** | A | P |
| V-12 | **Three-type pseudonym taxonomy** — personal / publisher-owned / rotating house-stable — asked of every author. Comedy added a fourth: the **character persona** (Dame Edna, Alan Partridge). The performer is the author; the persona is not. | Doc | ROM, COM 17.15, alignment E | ? | ? | ? | ? | A | A | A | A | A | A | A |
| V-13 | **Author biography claims that the boundary deliberately excludes must not re-enter via biography.** War's instance: service and veteran status is a verification target, because jacket copy is unreliable in both directions. | Doc | WAR 17.11 | – | – | – | – | – | ? | – | A | – | – | ? |
| V-14 | **Domain claims are verified like dates.** The genre-specific instance of one rule: HIS period claims, LIT technique attributions, WAR unit/operation/formation/casualty figures. | Doc | HIS, LIT 17.9, WAR 17.10 | ? | ? | ? | ? | ? | A | A | A | A | A | P |
| V-15 | **The ABA "National Book Award" (1936–1942) is a different and earlier prize** from the modern National Book Award (founded 1950). Reconciled wording settled at pack seven and applied. | Card | alignment A | – | – | – | – | A | A | A | – | – | – | – |
| V-16 | **An agent reporting a source as unreachable is itself a claim to verify.** Comedy's Pass H reported three awarding-body sites unreachable; Pass I reached all three via their search and results endpoints. | Doc | COM (Pass H/I) | – | – | – | – | – | – | – | – | A | – | A |
| V-17 | **Contradiction between two verification passes → a narrow third pass, never a judgement call.** Where the third pass cannot settle it, the contradiction is labelled on the card rather than adjudicated. | Doc | ROM 17.17, COM | ? | ? | ? | ? | A | A | A | A | A | A | A |
| V-18 | Research files' **UNCONFIRMED items are carried into the verification brief as explicit targets**, not left in the research file. | Doc | ROM 17.15, alignment I | ? | ? | ? | A | A | A | A | A | A | A | A |
| V-19 | **The hedge is banned.** “The pack does not enumerate” / “could not confirm against the awarding body's own list” on an `Awards` line. Western used it on twelve cards and **it concealed a documented, easily findable award every single time.** A hedge is a claim that the record was checked and found unclear; used in place of checking, it is a false statement about the pack's own process, invisible to every screen and dressed as the most careful thing on the card. **A card states the award or says nothing about awards.** | Doc + Card | WES 17.85 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A |
| V-20 | **Hedges decay, so verification re-tests hedges and not only assertions.** “Living status not independently confirmed” is a claim with a date on it. Western carried three that were simply out of date; left alone, a pack accumulates a sediment of caution that has stopped being true. | Doc | WES 17.71 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A |
| V-21 | **The research roster is verified against nothing.** Verification passes check cards against the world; nobody checks the roster that fed them. Western's Authors roster recorded a “variously reported” ancestry that is not in dispute at all, and the card dutifully repeated a manufactured caution. **A landmine a research pass supplies can itself be an invention.** | Doc | WES 17.78 | ? | ? | ? | ? | ? | ? | ? | ? | ? | **P** | A |
| V-22 | **A category string can have a discontinuous life.** The Spur's *Best Western Historical Novel* was valid 1972–1987 and again from 2014, and invalid across the twenty-six years between. A card built from a current category list silently back-dates the modern string across the gap, and a date-range check does not catch it. Where the era is uncertain, drop the category and state the body and year. | Doc + Card | WES 17.83 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A |
| V-23 | **A contradiction between two passes may be a convention clash rather than an error.** Western's passes A and F disagreed on the Spur's founding year; the narrow third pass found **both correct** — the awarding body's own site gives the award year and its own history gives the presentation year. The third pass's job is to find which convention each side used before it looks for a mistake. | Doc | WES 17.64 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A |
| V-24 | **When the briefing supplies a name or a claim, the briefing is the least reliable link in the chain.** V-21 says the research roster is verified against nothing; this is the narrower and more uncomfortable case — the *brief*, written by Claude, asserting a fact the sources never supplied. Superhero hit it three times: an invented scholar ("Anand Rai"), a real scholar under the wrong forename ("Kenneth Philips" for **Menaka** Philips, and the card was already correct), and a founding claim about the first superhero RPG that the source denies in the same paragraph that praises the game. **Generalised: when a pass reports an absence, check the query before recording the absence; when a brief supplies a name, verify it before the card does.** | Doc | SUP 17.94 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |

## 1D. Content and contested material

| ID | Rule | Level | From | SF | MCT | FAN | HOR | ROM | HIS | LIT | WAR | COM | WES | SUP |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| C-01 | **Sensitive material is handled, not omitted.** State it at the level the record supports; mark disputes as disputed; never adjudicate. Silent omission is worse than careful inclusion. | Doc | pre-HOR | A | A | A | A | A | A | A | A | A | A | A |
| C-02 | **Content the genre is sought out or avoided for is named plainly** in the card's opening clause, then analysed as craft. Neither censored nor relished. Generalised from Horror's extreme-content rule; Romance extended it to sex on the page, consent depiction and heat levels. | Doc | HOR 4, ROM 17.7, alignment C | ? | ? | ? | A | A | A | A | A | A | A | A |
| C-03 | **Living religions and cultures are not monsters.** State the appropriation history and objections from within the culture; the card functions as a craft warning, not a stat-block. Screened by the cultural-borrowing checklist card. | Doc | HOR 5 | ? | ? | ? | A | A | A | A | A | A | A | A |
| C-04 | **The contested-canon four-point method:** name the contest, state both positions at full strength, take no side, record who contests what. | Doc | ROM 17.8, HIS, alignment D | ? | ? | ? | ? | A | A | A | A | A | A | A |
| C-05 | **A contested card with only one side sourced does not ship.** One-sided sourcing is side-taking that claims not to be. | Doc | WAR 17.23, COM 17.16 | ? | ? | ? | ? | ? | ? | ? | A | A | A | A |
| C-06 | **The last-sentence test.** A card's final sentence is where adjudication hides. Read it separately. | Doc | COM 17.10 | – | – | – | – | – | – | – | – | A | A | ? |
| C-07 | **Contested findings in a specialist's own substrate are carded as contested,** with a CONTESTED list produced before Batch 1. A rules collection that states disputed findings as fact is worse than none. | Doc | HIS, WAR 17.12, 17.24 | – | – | – | – | – | A | – | A | A | A | A |
| C-08 | **A robustness tier on every empirical Psychology card** — robust / contested / unreplicated. Without it the collection becomes a replication-crisis museum. **Applies to every pack's Psychology collection; only Comedy implements it.** | Card | COM 17.17 (Grok) | **P** | **P** | **P** | **P** | **P** | **P** | **P** | **P** | A | A | A |
| C-09 | **Every period-bound rule in a specialist names its period and its army/tradition.** A rule that silently generalises across five centuries is a defect. | Doc | WAR 17.25 | – | – | ? | ? | – | ? | – | A | – | ? | A |
| C-10 | **Contested-canon categories** include: removals later partially restored; awards stripped or refused; persona-versus-performer where the persona is the contested object. The second intersects V-02 — "None" must distinguish never-won from won-and-revoked. | Doc | COM 17.21 (Grok) | ? | ? | ? | ? | ? | ? | ? | ? | A | A | A |
| C-11 | **No unnamed placeholders and no tradition-level exemplars** — a named published or released work every time. **SF carries 7 surviving placeholder example works** (`trope-46`, `technology-35`, `trope-scifi-new-19`, `trope-scifi-new-24` and three others). | Card | FAN, HOR 17.7 | **P** | A | A | A | A | A | A | A | A | A | A |
| C-12 | **True crime and any work drawn from a real crime:** analyse the published work's craft only, never the real case, victims or accused. | Doc | MCT | A | A | A | A | A | A | A | A | A | A | – |
| C-13 | **Analysis and opinion only.** No extended quotation, no substitute-for-reading plot summary. This is what keeps the CC BY licensing clean. | Doc | MCT | A | A | A | A | A | A | A | A | A | A | A |
| C-14 | **Where an affiliation cannot be sourced to the subject or an institution, the card states the sourcing rather than asserting the affiliation.** Western's rule failed twice in the same direction — two scholars described in secondary sources as citizens of named nations, with no institutional page saying so — and stating the sourcing is the rule's correct output under a shortage of evidence, not a defeat for it. Its counterpart is the **third identity category: a finding the subject accepted** (Thomas King, 2025), which is neither a live dispute nor a fabrication and which the library had no shape for. | Doc + Card | WES 17.53, 17.72 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A |
| C-15 | **A card that hedges and asserts the same fact is an internal contradiction, and the hedge is the half to keep.** Western asserted a birth year inside the sentence disclaiming any reliable record of the subject's life. | Doc + Card | WES 17.73 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A |
| C-16 | **Where a subject has spoken about a sensitive matter more than twice, the card carries every position.** A claim-and-retraction framing is the default and it is often wrong: Jodorowsky's record has three positions, and the middle one — a 2007 revision rather than a withdrawal — contradicts the retraction the two-position framing implies. | Doc + Card | WES 17.77 | ? | ? | ? | ? | ? | ? | ? | ? | ? | A | A |
| C-17 | **House style for a creator who changed the spelling of their own name: use the creator's own final spelling on every work, whatever its publication date, and state the change once, on the earliest carded work.** The alternative — period-accurate spelling per work — is more faithful to each credit box and produces a pack in which one person appears to be two, which is the error the rule exists to prevent. Superhero's case is Ishimori / Ishinomori, respelled in 1986, carrying four Works cards and one Author card across the boundary. | Doc + Card | SUP 17.95 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |

## 1E. Tooling and assembly

Tool rows are **forward-only** — they change how a pack is built, not what a shipped pack
contains. A `–` in an early column means "built before the tool existed", not a debt.

| ID | Rule | Level | From | SF | MCT | FAN | HOR | ROM | HIS | LIT | WAR | COM | WES | SUP |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| T-01 | **The disk validator is the acceptance gate.** `tools/validate_pack.py` must report `PASS — 0 error(s)`, in addition to the assembly screens. `PACK-SPEC.md` + `schema/pack.schema.json` are the canonical floor — never rebuild the template from memory or from prose blueprints. | Doc | LIT 17.13, redirect | A | A | A | A | A | A | A | A | A | A | A |
| T-02 | **Six parser guards**, each **broken deliberately against a fixture before Batch 1.** (1) trailing-period truncation (2) `start` not `star` (3) silent enum drift on `work_cards.medium` (4) the em-dash strip set `' ,–—-'` (5) free-text vs enum medium fields (6) work-notes over 150 chars, soft warn. | Tool | HOR, ROM 17.14 | – | – | – | A | A | A | A | A | A | A | A |
| T-03 | **Sixteen assembly screens**, printed with their count at run time, all wired to the exit code. A miscounted screen list is how a screen goes missing — War's §18 said "ten" against a real thirteen. Comedy runs sixteen plus screen 10b. | Tool | COM 17.14 | – | – | – | – | – | – | – | – | A | A | A |
| T-04 | **Work-reuse cap 2, keyed on `(work, medium)`, enforced per batch AND globally at merge time**, wired to the exit code. Title-only keys produce false positives on every adaptation. | Tool | FAN, HOR, playbook v1.8 | – | – | A | A | A | A | A | A | A | A | A |
| T-05 | **`reuse_check.py` runs pre-merge and must load the WIP pack**, not only the batch handed to it — the cap is pack-wide. Ported blind from War to Comedy, it was blind to exactly the breach it exists to catch until rewritten at Batch 06. It then caught 6 breaches in batch 08, 10 in batch 09 and 22 in batch 12. | Tool | WAR 17.32, COM 17.25 | – | – | – | – | – | – | – | A | A | A | A |
| T-06 | **Countable content floors, asserted at assembly and wired to the exit code.** An objective that cannot be counted is not a control. WAR: civilian-primary ≥40/150 Works, ≥35/130 Authors. COM: two floors — the unfunny and the non-Anglophone — as screens 15 and 16. | Tool | WAR 17.20, 17.29, COM 17.7 | – | – | – | – | – | – | – | A | A | A | A |
| T-07 | **Dedupe screen keyed on `(kind, name)`, not `name`.** | Tool | LIT (late fix), WAR 17.18 | – | – | – | – | – | – | A | A | A | A | A |
| T-08 | **`rebuild.sh` replays the whole build** from batch markdown to a byte-identical pack file, before shipping. This is what makes a late fix in an already-merged batch a one-command operation. | Tool | COM | – | – | – | – | – | – | – | – | A | A | A |
| T-09 | **Anti-duplication tests inside a collection are wired to assembly, not left as prose.** Comedy's screen 10b was added mid-build after a hand check found two specialist cards failing a test §5a had stated and nobody enforced. | Tool | COM (screen 10b) | – | – | – | – | – | – | – | – | A | A | A |
| T-10 | **Verify-to-file / condense-to-brief.** Agents `Write` the full report to a file and return ≤400 words containing *nothing but* errors and UNCONFIRMED items. Two agents per Authors/Works batch, pipelined one batch ahead; a narrow third pass where the error lives. | Doc | HOR (v1.9) | – | – | – | A | A | A | A | A | A | A | A |
| T-11 | **The validator runs against staged copies in the session container**, not on TJ's desktop — the desktop workspace's `jsonschema` predates `Draft202012Validator` and has no network to upgrade. Same script, same schema, same bytes. | Doc | WAR 17.17 | – | – | – | – | – | – | – | A | A | A | A |
| T-12 | **Disk is canonical.** Claude writes `packs/reference-<genre>.json` and updates `manifest.json` and `README.md` on disk, then shows validator PASS. **Claude performs no git operations, ever — TJ publishes.** | Doc | LIT 17.17, redirect §5 | A | A | A | A | A | A | A | A | A | A | A |
| T-13 | **Build paperwork lives on disk, not in the project** (TJ, 2026-08-21). Blueprint, build log, batch documents, research reports, changelog and handoff all live under `_build/<genre>/`. The project holds the historical archive of packs one to seven only. | Doc | TJ 2026-08-21 | – | – | – | – | – | – | – | – | A | A | A |
| T-14 | **Version semantics:** patch = corrections, minor = new entries. A reciprocal hand-off card added to a shipped pack is a **minor** bump. Comedy's blueprint specified 1.0.1 for the War patch; the spec won and it shipped as 1.1.0. | Doc | COM 17.34, PACK-SPEC §1 | A | A | A | A | A | A | A | A | A | A | A |
| T-15 | **Parser guard 7 — the unknown-field guard.** A `Key:` line outside the card's shape is now a hard error naming the allowed set. Western found `Note:` fields silently discarded from twenty-eight Authors cards, taking the award traps with them: the merge reported success, the count was right, and all seventeen screens passed. **Six packs were built with a parser that had this behaviour and none has ever been checked for it** — the batch markdown is archived and the sweep is cheap. | Tool + Card | WES 17.69 | **P** | **P** | **P** | **P** | **P** | **P** | **P** | **P** | **P** | A | A |
| T-16 | **A screen whose dependency is built last must be dry-runnable against a stub.** Western's specialist anti-duplication screen is FINAL-mode only, so its errors arrived at 612/612 with nothing left to trade. The one dry run that was possible, at Batch 12, is the reason the screen is a citation cap and not the unachievable uniqueness test it started as — which is the whole argument for running the others early. | Tool | WES 17.67, 17.89 | – | – | – | – | – | – | – | – | ? | A | A |
| T-17 | **Documents are delivered, not just written.** Every handoff, Grok review brief, build log, changelog entry and verification report is **sent as a file with `SendUserFile`** — at the moment it is finished, and again in the session's closing message, which names it. TJ should never have to go looking on disk or ask where something is. The disk copy stays canonical; the delivered file is the copy he receives. **Any session that ends with a handoff on disk ends with that handoff sent, including sessions that only edited it.** | Doc | TJ 2026-08-22 | – | – | – | – | – | – | – | – | – | A | A |

---
| T-18 | **A gate that cannot run on incomplete input must name the screens it did not run.** T-16 required screens to be dry-runnable; Superhero found the harder half. `check.sh` ran `assemble.py --partial`, in which screens 11, 18 and 26 are silently skipped, and reported **"0 errors"** for fifteen consecutive batches. Screen 11 was holding two hard errors the whole time; they surfaced only on the first FINAL run, at 612/612. `--partial` now prints *NOT RUN in --partial: 11, 18, 26 — THIS IS NOT A FULL PASS*. **A partial gate that reports like a full one is worse than no gate**, because it retires the suspicion that would have caught the defect. | Tool | SUP 17.91 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |
| T-19 | **Roster integrity is a separate check from drift, and drift cannot substitute for it.** Superhero shipped sixteen work cards with their disambiguating annotations stripped — `Daredevil` for `Daredevil (Waid run)`, `Batman` for `Batman (1966 tv)` — breaking two citations and nearly shipping a work card called simply "Batman" beside `Batman (1989 film)`. **`drift_check.py` could not catch it and was never going to**: it proves the batch files and the merged pack agree, and they agreed, because the batch files carried the same stripped names. It checks internal consistency; nothing checked consistency with the **roster**. `roster_integrity.py` is the three lines that close it: a carded name absent from the roster is a fault at any point in the build. | Tool | SUP 17.92 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |
| T-20 | **A referential-integrity screen over intra-pack cross-references — and an honest statement of what it cannot do.** Screen 27 resolves every `` `kind-N` `` reference against the built pack. It exists because Superhero's Batch 22 drafted ten cross-references from memory and **eight pointed at the wrong card**, with nothing checking `work` cards at all. **It would have caught none of those eight**, because they resolved to real cards saying something else — a semantic error no screen reaches. It catches the case the procedural control misses: the typo, the renumbered id, the reference to a card that was later cut. **Both controls are needed and neither is a substitute for the other.** | Tool | SUP 17.93 | ? | ? | ? | ? | ? | ? | ? | ? | ? | ? | A |

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


# Part 3 — Open debts

**Status 2026-08-21: not scheduled. TJ's decision — "leave for a scheduled pass."**
Nothing below is being applied now. This is the work list for when that pass runs.

| Priority | Item | Packs owed | Size |
|---|---|---|---|---|
| 1 | **V-02** — 258 cards carry an empty awards string where a verified negative or a stated documentation gap belongs. | SF 91, MCT 85, FAN 82 | Large. Real research, not wording. |
| 2 | **C-08** — no robustness tier on empirical Psychology cards. | All eight prior packs, 26 cards each | Medium. Mostly a one-clause addition, but each claim must be classified. |
| 3 | **V-11** — living-status re-check. **Decays continuously; this is a recurring pass, not a one-off.** | All nine | Medium, and due again roughly every six months. |
| 4 | **V-03, V-04, V-05, V-07** — the award-type, award-year and television-credit precision rules, all introduced at Comedy. | SF, MCT, FAN, HOR certainly; ROM, HIS, LIT, WAR unaudited | Medium. Audit first, then patch what fails. |
| 5 | **C-11** — SF's 7 surviving placeholder example works. | SF | Small. Seven substitutions. |
| 6 | **V-08** — submission ≠ nomination, and the four game awards. | SF, and any pack with a screen or game share not yet audited | Small. |
| 7 | **T-15** — the silent-discard sweep. Six packs' batch markdown has never been checked for `Key:` lines outside the card shape. Anything a previous build wrote outside its shape is still missing from the shipped pack, silently, and the markdown that would prove it is archived. | SF, MCT, FAN, HOR, ROM, HIS, LIT, WAR, COM | Small to run, unknown to fix. **Run the sweep before deciding the size.** |
| 8 | **V-19** — the hedge audit. Grep every shipped pack for `Awards` lines that describe the record as unclear rather than stating an award. Western's rate was **twelve for twelve**: every hedge concealed something findable. | All nine | Medium. One grep, then one lookup per hit. |
| 9 | **V-21** — nobody has ever verified a research roster against the world. Sample one block per pack and see whether the landmines are real. | All nine | Small as a sample; unknown as a pass. |
| 10 | **T-18** — every prior pack's `check.sh` equivalent reports a partial run as a pass. Superhero's did so for fifteen batches while screen 11 held two hard errors. **Check what each shipped pack's gate actually ran**, not what it printed. | All ten | Small to check, unknown to fix. |
| 11 | **T-19** — no prior pack has had its carded Works names checked against its own research roster. Superhero found sixteen divergences, two of them breaking citations, in a pack whose drift check was clean. | All ten | Small per pack. One set comparison, if the roster survived. |
| 12 | **T-20** — no prior pack has had its intra-pack cross-references resolved. Dangling `kind-N` ids are silent in every shipped pack. | All ten | Small. One regex and a set membership test. |
| 13 | **C-17** — creator name-change house style. Any pack carrying a creator who respelled their own name may be presenting one person as two. | Unaudited across all ten | Small per instance, unknown in count. |
| 14 | **S-03** — the free-text medium register is **stale**. Superhero uses five values outside it (`run`, `newspaper strip`, `manga`, `graphic-novel`, `game`), three of which were already in use on disk and were never recorded. | Register itself, then all eleven | Small. Update the register to the measured reality. |
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

*Sources: the §17 delta logs of Horror, Romance, Historical, Literary, War & Military, Comedy,
Western and Superhero; `_build/literary/alignment-pass.md` (candidates A–K, run at pack seven);
`_fix-kits/pack-consistency-audit-2026-08-19.md`; `PACK-SPEC.md`; and a direct audit of all
nine shipped pack JSONs run 2026-08-21, which produced the counts in V-02 and C-11.*
