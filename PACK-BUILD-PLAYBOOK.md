# Reference Pack Build Playbook v2.0

**This file supersedes `claude/pack-build-playbook-v1.md` (v1.9) in the claude.ai project.
That version was written at pack four and describes a process four packs out of date. Where
the two disagree, this one wins.** The project copy has been marked superseded and points here.

**v2.0 is the nine-pack revision**, written 2026-08-21 at the close of Comedy. It corrects
five things v1.9 got actively wrong (routing, `medium`, the assembly screen count, the parser
guard count, and Historical's specialist name), folds in everything Romance, Historical,
Literary, War and Comedy learned, and hands the accumulated-change problem to the new
`CHANGE-LEDGER.md`.

*Lineage: v1.1 award-body table · v1.2 no-gate variant, merge standard, parser bugs · v1.3
mandatory write-back · v1.4 artefact routing · v1.5 product/archive split · v1.6 published-works
screen moved into assembly, step 10 added · v1.7 scope budget, alignment policy, delta logs ·
v1.8 global reuse guard · v1.9 the Horror completion revision · **v2.0 the nine-pack revision.***

---

## ⚠️ READ THIS FIRST

### The three files every build reads before it starts

1. **`PACK-SPEC.md`** — the schema contract. The canonical floor.
2. **`schema/pack.schema.json`** — what the validator actually enforces.
3. **`CHANGE-LEDGER.md`** — every standing rule, and where each pack stands on it.

All three live at the top of `C:\Projects\writers-codex-reference-packs-staging\`.
**Never rebuild the template from memory or from a prose blueprint.** That is exactly how the
2026-08-19 drift happened.

### Disk is canonical. Paperwork lives on disk, not in the project. (TJ, 2026-08-21)

v1.9's routing table is **withdrawn**. It sent blueprints, build logs, batch documents,
changelog entries and handoffs into the claude.ai project. They now all live on disk:

| Artefact | Goes to |
|---|---|
| Finished pack JSON | `packs/reference-<genre>.json` |
| Manifest and README | `manifest.json`, `README.md` |
| Blueprint | `_build/<genre>/blueprint-LOCKED.md` |
| Batch documents | `_build/<genre>/batches/` |
| Research reports | `_build/<genre>/research/` |
| Build tooling | `_build/<genre>/tools/` |
| Build log | `_build/<genre>/<genre>-pack-build-log.md` |
| Changelog entry | `_build/<genre>/reference-packs-changelog.md` |
| Handoff for the next pack | `_build/<genre>/HANDOFF-<next>-pack-build.md` |
| **Every library-wide change** | **`CHANGE-LEDGER.md`** at the top level |

The claude.ai project holds the historical archive of packs one to seven and is not written to
by new builds. **Never write a pack JSON into the project** — that rule survives from v1.4 and
is now moot, because nothing goes into the project.

### Claude performs no git operations, ever. TJ publishes.

### The product and the archive are still two different things

**The Writer's Codex is the product:** the current live pack JSONs plus `manifest.json` and
`README.md`. No previous versions, no build notes. **The build archive is the record of how
each pack was made.** It lives under `_build/`. Do not merge them.

---

## The scope budget — applies from Horror onward

**What this controls.** Not the design, which is expected to keep improving. It controls
*uncontrolled scope inflation* — the kind that quietly doubles pack density three packs from
now and forces an expensive retrofit of everything built before it.

| Rule | Limit |
|---|---|
| Total entries | **580–650, target 612** |
| Required core collections | **8** — Subgenres, Tropes, Authors, Works, Craft, Checklist, History, Psychology |
| Specialist collections | **Maximum 2**, and only on genuine structural need. One is the norm. |
| Authors + Works combined | ~300–320, **a ceiling and not a floor** |
| New media categories in Works | Only where constitutive of that genre's craft conversation — never a courtesy inclusion |
| Card schemas, markdown formats, quality tiers, assembly gates | **Stable.** Genre content lives inside these shapes. |

Quality tiers stay as they are: `excellent` 1–3%, `terrible` reserved for structural or
inherited failures, several `terrible` teaching examples on high-traffic cards.

**The count table must sum to the number the pack ships.** No unallocated slack, no "ten spare
entries." A table that does not sum is a target rather than a control, and the assembly count
screen can only be a hard assertion if it checks the shipped figure. (Comedy 17.3.)

**Default stance on improvements.** Anything that looks like a good idea mid-build goes into
the shared documents first — this playbook, `CHANGE-LEDGER.md`, the verification brief. Only
when a change is clearly valuable *and* stable does it get scheduled for back-porting into
built packs. This keeps iteration cheap and stops early packs becoming permanent liabilities.

### Every blueprint carries §17 and §18

**§17, the delta log** — what this pack changes relative to the library standard, each row
typed, with its rationale and its status. Rows are added **as they occur, not
retrospectively.** **§18, what is not changing** — so a later reader can tell a deliberate
hold from an oversight. `_build/comedy/blueprint-LOCKED.md` §17–18 is the current template
(34 rows). The blueprint also carries §19, the Grok review and its rulings.

### The library alignment pass

Run once at pack seven (`_build/literary/alignment-pass.md`, candidates A–K). It is **not**
re-run per pack. Its job is now done continuously by `CHANGE-LEDGER.md`, which is appended at
every step 9. The three sanctioned outcomes still apply when a debt is paid:

- **Full alignment** — bring the pack up to current density and rules.
- **Light additive patch** — insert the key sentences and shared house-rule language, nothing more.
- **Leave as historical baseline**, with a note saying so.

Prefer additive changes and shared documents over rewriting cards. **Do not require every early
pack to match the densest later pack.** Coherence matters more than uniformity.

---

## The process, in order

**0. Seed harvest.** Read every source document touching the genre, and those of the nearest
adjacent pack. Never start from blank. **Delegate the reading** — an adjacent pack's four
source docs run 120–150K tokens and will not fit alongside a build. Agents briefed to report
what transfers, what must be re-argued, and the verbatim card formats. **Do not trim the later
verification stage on the assumption the adjacent pack covers the ground** — Horror's harvest
found Fantasy carried no card for Poe, Machen, Blackwood, Jackson, Aickman, Barker, Straub or
King. Check what the harvest actually returned before sizing the verification load.

**1. Blueprint (one document, TJ approves before any content).** Collections with schemas and
entry targets, category taxonomy, build order, conventions (ID scheme, badge palette), boundary
rule with its admitted costs, hand-off cards, award bodies, medium spread with a fallback table,
contested-canon method, assembly screens, **scope-budget compliance check, §17 delta log and
§18 what-is-not-changing**. IDs are permanent — lock structure first.

Write §17 **from `CHANGE-LEDGER.md` Part 1**: every `A` in the previous pack's column is a rule
this pack builds under. Add the new pack's column to the ledger before Batch 1.

**Decide at blueprint stage, not at assembly:** adaptation disambiguation, the medium spread and
its fallback table for forms the closed enum cannot name, any countable content floors, hand-off
card names **checked against the destination packs' shipped card names**, and the Authors
grouping (by tradition or position, not era, wherever a floor keys on `category`).

**2. Grok cross-check the blueprint.** Has paid off on every pack. Give it *specific questions*,
including the contested slots and the one thing you suspect is missing — a blueprint sent
without questions gets a weaker review. Reconcile, record the rulings in §0 and §19, then lock.
**Locked until evidence:** a change after this point is a §17 delta row with a stated cause, not
a revision.

**3. Build in review batches of ~24–30 cards.** Order: Subgenres first (defines vocabulary) →
Craft → Checklist → Tropes → specialist → History/Psychology → Authors → Works. Each batch = one
markdown review document in the parseable format → **`reuse_check.py` before merging** →
regex-merge into the WIP JSON → validate (0 errors required every merge). The markdown documents
are the review layer; the JSON is the pack. ~24 batches.

**3a. Two approval modes.** No-gate is the default and is materially faster — TJ: *"We don't do
A/B, if you've done the work include it all, then at the end I'll have Grok look at the whole
reference pack."* Batch markdown is written either way. Confirm at step 1; do not change mid-build.

**4. Verification agents for factual collections.** Two per Authors/Works batch, ~14 subjects
each, pipelined one batch ahead. **Verify to file, condense to brief** — see Tooling below.

**Instruct agents to flag, not just confirm.** The prompt must explicitly ask for *"any award
commonly but WRONGLY attributed to them"* and *"any notable controversy, disputed attribution,
or factual landmine,"* and require **UNCONFIRMED** rather than a guess. Confirmation-only
prompts return correct data and miss every error. Carry the research files' UNCONFIRMED items
into the brief as explicit targets.

**Contradiction between two passes → a narrow third pass, never a judgement call.** Where the
third pass cannot settle it, label the contradiction on the card rather than adjudicating.
**An agent reporting a source as unreachable is itself a claim to verify** — Comedy's Pass H
reported three awarding-body sites unreachable and Pass I reached all three.

**5. House rules enforced during drafting.** These are the standing library rules. The
authoritative list with per-pack status is `CHANGE-LEDGER.md` Part 1; the load-bearing ones:

- **Analysis only.** No plot-summary-substitutes, no quotation. This is what keeps the CC BY licensing clean.
- **Published or released works only** — every cited work and every worked example.
- **No unnamed placeholders and no tradition-level exemplars.** A named published work every time; the assembly screen fails the build on the placeholder vocabulary.
- example_cards: 2–4 examples, all topped to ≥3 before 1.0.0. Four tiers from birth.
- **Work-reuse cap 2, keyed on `(work, medium)`**, enforced per batch and globally at merge time, wired to the exit code. A useful side effect: forcing a substitution almost always improves the card, because the constraint pushes the search past the first obvious example.
- **Original-language years for translated works**, never translation years.
- Sequels/series: category matches the series predecessor. YA/MG are audience brackets — craft guidance and card notes, never collections; landmark YA works do get Works cards.
- True crime, and any work drawn from a real crime: analyse **the published work's craft only**, never the real case, victims or accused.

**5a. Sensitive material is handled, not omitted.** State it factually at the level the record
supports and mark disputes as disputed rather than adjudicating them. Silent omission is worse
than careful inclusion — a reference work a reader can catch out has no authority.

**5b. Content the genre is sought out or avoided for is named plainly** in the card's opening
clause, then analysed as craft. Neither censored nor relished. Schema v2 has no
content-warning field and one is not being added mid-library, so this lives in prose.

**5c. Living religions and cultures are not monsters.** Where a tradition is living, state it
accurately at the level the ethnographic record supports, state the appropriation history and
any objections from within the culture plainly, and let the card function as a craft warning
rather than a stat-block. The test: a writer should finish the card better informed about why
the standard genre treatment fails, not better equipped to repeat it.

**5d. The contested-canon method, four points plus two tests.** Name the contest · state both
positions at full strength · take no side · record who contests what. **A contested card with
only one side sourced does not ship** — one-sided sourcing is side-taking that claims not to
be. **The last-sentence test:** a card's final sentence is where adjudication hides; read it
separately. Contested findings in a specialist's own substrate are carded *as contested*, with
the CONTESTED list produced before Batch 1.

**6. Grok cross-check the full pack.** Send blueprint + all batch documents + the pack JSON.
**Known failure: Grok audits the JSON and under-reads late unmerged batch markdown.** Always
verify findings against actual pack state before acting. Grok has also been observed reading
off a stale review document and reporting defects already closed — check before patching.

**7. Patch batch.** Fold all accepted items into one final batch.

**8. Final assembly — scripted, one pass.**

> **The published-works screen runs HERE, on the finished file.** It was a step-5 drafting rule
> for two packs and was violated in both. **A written rule is not a control.** The same logic
> applies to every content objective: an objective that cannot be counted is not a floor.

`assemble.py` runs **sixteen screens** and prints the count at run time. v1.9 listed about
thirteen and War's §18 said "ten" — **a miscounted screen list is how a screen goes missing.**
The screens: published-works placeholder → decade-year → no card under three examples →
within-collection dedupe keyed on `(kind, name)` → ID uniqueness → schema validation → quality
distribution (excellent 1–3%) → work-reuse including clustering → `work_cards.medium` enum
assertion → `category` present on every entry → **any collection-specific anti-duplication test
the blueprint states** → string-year assertion → collection counts against the blueprint table
→ **total against the shipped number, as a hard assertion** → **each countable content floor,
one screen each**. Then: header to 1.0.0 + date → write `packs/reference-<genre>.json` →
manifest entry with real counts and size → README row → **re-validate all live packs together**
→ reciprocal hand-off patches to any pack owed one.

**Any anti-duplication or content test the blueprint states in prose gets wired into
assembly.** Comedy's screen 10b was added mid-build after a hand check found two specialist
cards failing a test §5a had stated and nobody enforced.

**Version semantics** (PACK-SPEC §1): **patch = corrections, minor = new entries.** A
reciprocal hand-off card added to a shipped pack is a **minor** bump. Comedy's blueprint said
1.0.1 for the War patch; the spec won and it shipped as 1.1.0.

**9. Archive the build, and append to the ledger.** Write the build log. Append a changelog
entry covering what shipped, the numbers, what was corrected, and a **content angle** where the
build produced something worth writing about. All on disk under `_build/<genre>/`.

> **Then append to `CHANGE-LEDGER.md`.** Add the pack's column to every Part 1 table; add a row
> for each §17 delta that applies to more than one pack; add the pack-local rows to Part 2; move
> anything that became a debt into Part 3. **A change that is not in the ledger does not exist.**

Run step 9 again after any patch release.

**10. Write the handoff for the next pack.** A single self-contained document,
`_build/<genre>/HANDOFF-<next>-pack-build.md`, that TJ can paste into a fresh Cowork session and
have it start cold. Template: `_build/comedy/HANDOFF-western-pack-build.md`. It must contain the
reading list in order (**PACK-SPEC, the schema and CHANGE-LEDGER first**), current library state,
the disk-canonical rule, the scope budget, a draft blueprint with entry targets and category
taxonomy, the genre's award bodies and their specific traps, the ID scheme and badge palette,
the toolchain, the assembly screens as runnable code, the parser guard list, the benchmark
table, and the open questions to put to TJ before starting. **This step closes every finalised pack.**

> **Deliver it, do not just write it.** TJ's standing instruction of 2026-08-22: **the handoff
> document is sent as a file, with `SendUserFile`, at the end of the session that produces it** —
> and again at the end of any later session that touches it. He should never have to go looking for
> it on disk or ask where it is. The disk copy under `_build/<genre>/` remains canonical; the
> delivered file is the copy he actually receives.
>
> **The same applies to every document a session finishes.** If a session produces or materially
> updates a handoff, a Grok review brief, a build log, a changelog entry or a verification report,
> **those files go out with `SendUserFile` before the session's closing message**, and the closing
> message names them. A finished document sitting on disk that TJ has to hunt for has not been
> delivered. Batch them into as few calls as the tool allows and caption them in one line.
>
> Two rules that make this automatic rather than remembered:
> 1. **Any session that ends with a handoff on disk ends with that handoff sent.** No exceptions,
>    including sessions that only edited it.
> 2. **Send at the moment a document is finished, not only at the end.** A verification report is
>    delivered when the pass returns, not banked until the pack ships.

---

## Award bodies by genre

- **SF** → sfadb.com, Hugo, Nebula, Clarke, BSFA, Locus, Campbell Memorial
- **Crime/Mystery/Thriller** → Edgars (incl. Grand Master), CWA Daggers, Anthony, Macavity, Shamus, Agatha, ITW Thriller, Glass Key, Grand Prix de Littérature Policière, Ned Kelly, Arthur Ellis
- **Horror** → Bram Stoker (HWA), Shirley Jackson, World Fantasy, British Fantasy **August Derleth**, International Horror Guild (**defunct 2008**), Splatterpunk, This Is Horror, Saturn and Fangoria for film
- **Fantasy** → World Fantasy (incl. Life Achievement/Special), Hugo/Nebula, Locus Fantasy, Mythopoeic, British Fantasy (Holdstock / Derleth / Bounds Newcomer — three distinct awards, routinely conflated), Gemmell Legend/Morningstar, Crawford, Astounding, Ignyte
- **Romance** → RITA (to 2019) and the successor Vivian; note the 2020 RWA rupture and the post-collapse succession
- **Historical** → Walter Scott Prize; CWA Historical (Ellis Peters) for hist-crime
- **Literary** → Booker, Pulitzer, National Book Award, Women's Prize, Costa (ended 2022)
- **War/Military** → **Boyd Award (established 1997**, not 1995; eligibility strictly "best fiction set in a period when the United States was at war" — a **verified-negative machine** for most of any non-American canon); Pritzker (lifetime achievement, with a 2022 and 2024–26 documentation gap); the two confusable RUSI medals
- **Comedy** → **there is no Academy Award category for comedy**; the silent pantheon holds honorary awards only. Thurber Prize, Bollinger Everyman Wodehouse, Edinburgh Comedy Award (formerly Perrier), Emmy and BAFTA comedy categories, Grammy Best Comedy Album, Mark Twain Prize
- **Western** → **Spur (WWA)** — category strings have **discontinuous lives** (*Best Western Historical Novel* valid 1972–1987 and again from 2014, invalid across the 26 years between), and a Spur is dated to the honoured book's year and presented at the following convention, which is why two years appear for one award; **Western Heritage Award (National Cowboy Museum)**, whose statuette is the *Bronze Wrangler* and which has **never** used an "Outstanding X" category string — that form is press phrasing — and whose year is the *ceremony* year honouring the previous year's work; **Owen Wister Award (WWA)**, first presented under that name in **1991**, successor to the **Saddleman** from 1961 — the WWA's own page lists pre-1991 Saddleman recipients under the Wister heading, so this is the body asserting continuity rather than a reference-work error, and a card names what the award was called in the year concerned without picking a framing; **Golden Boot — DO NOT ASSERT**, ever: MPTF publishes nothing, the recipient list Wikipedia attributes to MPTF resolves to an archived fan site under a false attribution and contains impossibilities, and it was a career honour to a person and so can never occupy a work card's `Awards` field
- **Comics/Superhero/Manga** → Eisner, Harvey, Ignatz; manga: Tezuka, Kodansha, Shogakukan (rival publishers' awards — a title is only eligible for its own publisher's)
- **Games** → The Game Awards, Game Developers Choice, BAFTA Games, DICE (four separate "Game of the Year" awards that frequently disagree — never collapse them)
- **TV** → Emmy, BAFTA, Peabody, Annie
- **Children's/YA** → Newbery, Printz, Alex, Carnegie, Guardian Children's Fiction Prize, Costa/Whitbread children's, Boston Globe–Horn Book, Astrid Lindgren Memorial, Hans Christian Andersen (IBBY)

### The standing award traps

**The named-prize trap — the single most reliable source of false attribution in this work.**
Prizes named after a person are routinely attributed *to* that person. David Gemmell never won
the David Gemmell Legend Award. Astrid Lindgren never won the Astrid Lindgren Memorial Award.
Hans Christian Andersen could not have won the IBBY award named for him. Shirley Jackson won no
genre award; the award bearing her name was founded in 2007. Separately, the Hans Christian
Andersen Award (IBBY, children's, 1956–) and the Hans Christian Andersen Literature Award
(Odense, adult, 2010–) are different prizes.

- **"None" is a verified negative,** not an unresearched blank. Where nothing is found, the card says "None" and the body says why the misattribution arises. Where a fact cannot be established, write **UNCONFIRMED** and omit the claim.
- **Three-way distinction:** a verified negative · a **documentation gap** (nothing located, stated as such) · **a nomination that did not win**, which is neither. Collapsing a gap into "None" is a false claim.
- **Submission ≠ nomination.** A country's submission to the international-feature category is not a nomination.
- **Every award claim states its type in the awarding body's own vocabulary.** AMPAS: *Awards of Merit* (annual, member-voted) vs *Special Awards* (Board of Governors, discretionary). Television Academy: *Category* / *Juried* / *Area* — the last explicitly non-competitive. Recording Academy: *Special Merit Awards* and *honorees*. Where a screen award went to producers rather than to a person, say so.
- **Three years attach to every Academy Award**: award year (eligibility, how AMPAS indexes), ceremony year (how the ceremony pages headline it), release year (a third, irrelevant figure). Use the form "the 1968 Academy Award, presented at the 41st ceremony in 1969". **BAFTA dates by ceremony year** for both Film and Television, and its category names overlap rather than succeeding one another — name the category as BAFTA named it in the year concerned.
- **The four television credits are four distinct claims** — creator, writer, showrunner, "developed by". The most common factual error in writing about series television.
- **For screen work, director, writer and "based on" are three separate claims.**
- **Preservation designations and polls are not awards.** National Film Registry, Sight & Sound, AFI, BFI, MoMA acquisition, public-domain status, "best of" lists. Registry eligibility is US-only, so a Registry year on a foreign film is a fabrication, not an error.
- **Awards on translated works index the translation, not the work.**
- **A defunct body cannot have awarded anything after it closed** (IHG, 2008).
- **Do not source award results from aggregator summary pages** that render without winner marks.
- **Ceremony year and work year differ** and the Stoker naming convention hides it.
- **Game awards:** BAFTA's public GAME Award ≠ BAFTA Best Game; GDCA Audience ≠ Choice; D.I.C.E.-awards ≠ DICE-studio.

### The standing biography traps

- **Living-status check on every author.** Post-cutoff deaths look known and are wrong — that is the trap, not ignorance. Confirmed catches across the library: Caputo, Satrapi, Malouf, Deighton, Forsyth, Lodge, O'Hara, Newhart, Kinsella, Ngũgĩ, Vargas Llosa. **This decays; it is a recurring check.**
- **Pseudonym taxonomy, four types:** personal · publisher-owned · rotating house-stable · **character persona** (Dame Edna, Alan Partridge — the performer is the author, the persona is not).
- **Anything the boundary deliberately excludes must not re-enter via biography.** War's instance: service and veteran status is a verification target, because jacket copy is unreliable in both directions.
- **Domain claims are verified like dates** — period claims (Historical), technique attributions (Literary), unit/operation/formation/casualty figures (War). And birth years: Comedy caught one off by a single day across a year boundary.

---

## Tooling

Keep one parser per card shape, or a single `merge.py` with a shape argument — the Horror form,
and easier to keep guarded. It parses the standard batch markdown, auto-generates the truncated
`description`, omits optional fields when the source has an em dash, appends to the WIP JSON,
and reports added count, duplicate IDs, schema errors, out-of-enum values, placeholder hits,
decade years and per-batch work clustering in one line.

**`config.py` is the single source of the count table**, the badge palette and every floor.
Nothing else hard-codes a number.

**`reuse_check.py` runs before every merge, and must load the WIP pack** — not only the batch
handed to it. The cap is pack-wide. Ported blind from War into Comedy, it counted only the batch
under review and was blind to exactly the breach it exists to catch; rewritten at Batch 06 it
immediately caught 6 breaches in batch 08, 10 in batch 09 and 22 in batch 12.

**`rebuild.sh` replays the whole build** from batch markdown to a byte-identical pack file, driven
by `batches/order.txt`. Run it clean before shipping. This is what makes a late fix inside an
already-merged batch a one-command operation rather than a surgical JSON edit.

**Validator:** run `tools/validate_pack.py` against staged copies in the session container, not
on TJ's desktop — the desktop workspace's `jsonschema` predates `Draft202012Validator` and has
no network to upgrade. Same script, same schema, same bytes. Acceptance is `PASS — 0 error(s)`,
in addition to the assembly screens.

### Six parser guards — break each one against a fixture before Batch 1

1. **Trailing-period truncation.** A works-list regex anchored on `$` after the closing paren drops the final item whenever the list ends in a full stop. This silently removed one book from 33 of 56 Fantasy author cards. Always `rstrip('.')` each segment, and **assert parsed-item count against source-delimiter count** rather than trusting the parse. Same assertion on example bullets.
2. **`start`, not `star`.** The published schema names the per-work highlight flag `start` — a typo shared by all live packs. Do not "fix" it without versioning every pack.
3. **`work_cards.medium` is mandatory and enum-bound.** ⚠️ **v1.9 said `medium` is optional with an omit-and-name-it-in-prose escape hatch. That is FALSE and it nearly failed the Comedy build.** The validator errors on any missing value and zero entries across all nine live packs omit it. The enum is exactly nine values: `novel · film · tv · comic · manga · graphic-novel · game · audio · nonfiction`. **Stage plays, classical drama, epic and verse narrative take `novel`, with the true form named in the card's opening clause** (`Stage play.`). Assert after every merge.
4. **The em-dash strip set.** Cleaning a parenthetical note with `.strip(' ,–-')` omits the **em dash** (—), which is the character the source documents actually use. `The Lottery (1948 — short story)` parses its note as `— short story`. Strip `' ,–—-'`.
5. **Free-text vs enum medium fields.** `example_cards.medium` is free text and `work_cards.medium` is a closed enum. The looseness is correct — it carries richer values — but a wrong value passes silently. Horror shipped a web video series tagged `audio` through two merges. **Mint new free-text values deliberately and record them in §17**; the alternative is inventing them at Batch 6. Current vocabulary: novel · film · tv · play · comic · nonfiction · audio · stand-up · radio · sketch.
6. **Long work-notes.** Guard 1 fails loudly on prose after a bare `(YYYY).`, but prose after an *existing* note parses cleanly and silently produces a bloated note. Soft-warn over 150 characters; do not fail the build.

### Verification agents: write to file, return a brief

The single largest process gain of the Horror build, and it is a context-management pattern
rather than a quality one. Early agents returned 60–90 KB reports into build context and
exhausted it. The standard shape:

1. **Brief the agent to `Write` its full report to a workspace file** and return **only a summary of ≤400 words**, containing *nothing but* the errors found and the items marked UNCONFIRMED. Explicitly instruct: *do not restate facts I already had right.*
2. Where several large reports feed one batch, **run a separate condenser agent** producing a compact drafting brief.
3. **Draft the cards from the brief**, and `grep` the full report only for the specific fields you are about to write.

Eight agents on Horror's Works collection produced roughly 50,000 words of checked record;
under 3,000 words of it entered build context. Two agents per Authors/Works batch remains the
rate, pipelined one batch ahead, with a narrow third pass where the error lives.

### The Works collection shares one namespace

The within-collection duplicate screen keys on `(kind, name)`, so all works share a namespace
regardless of medium. Horror's final build failed on `work: frankenstein` — Shelley's novel and
Whale's film. **Keep it that way.** Disambiguate the later entry (`Frankenstein (1931 film)`),
and use the constraint editorially: it forces a film collection to cover films that are the
primary text rather than duplicating adaptations already carded as novels.

---

## Benchmarks — all nine packs

| Pack | Version | Entries | Excellent | Size | Notes |
|---|---|---|---|---|---|
| Science Fiction | 1.0.0 | 809 | — | — | Converted, not built to this process. The library's outlier. |
| Mystery, Crime & Thriller | 1.0.0 | 617 | 2.30% | 678 KB | Proof pack. 24 batches, per-batch gate. |
| Fantasy | 1.0.2 | 612 | 2.78% | 792 KB | First no-gate build. Grok: *"the strongest of the three proof packs."* |
| Horror | 1.0.1 | 612 | 2.04% | 853 KB | **First pack to pass Grok's full-pack review with no patch batch.** |
| Romance | 1.0.2 | 612 | — | — | First pack to spend both specialist slots. A+W 280. |
| Historical | 1.1.1 | 612 | — | — | Craft 56, Checklist 16 — the heaviest sensitive-material load. |
| Literary | 1.0.0 | 612 | — | — | Both specialists. Disk-first delivery begins here. |
| War & Military | 1.1.0 | 613 | — | — | First countable content floor. 613 after Comedy's reciprocal card. |
| Comedy | 1.0.0 | 612 | 2.66% | 685 KB | 527 examples. Two content floors. First screen-majority-adjacent Works. |

Every built pack sits within 1% of 612 and within half a point on excellent-rate. The process is
repeatable rather than improvised.

## Specialist collections by pack

Full-depth packs take History + Psychology alongside their named specialist, and no more than
two specialists in total.

| Pack | Specialist(s) | Slots spent |
|---|---|---|
| Fantasy | Worldbuilding Systems | 1 |
| Horror | Folklore & Monster Traditions (Psychology of Fear is the standard eighth core collection) | 1 |
| Romance | Relationship & Emotional Craft · Market & Category Conventions | 2 |
| Historical | **The Record and Its Silences** *(renamed from "Period Research Primers")* | 1 |
| Literary | Style, Voice & Form · Movements & Poetics | 2 |
| War & Military | **Combat, Command and Friction** *(renamed from "Combat & Logistics Primers")* | 1 |
| Comedy | Structure & Timing | 1 |
| MCT | Forensics | 1 |

**Weight specialist collections toward rules, not catalogues** (Grok's standing ruling). A
reference pack is read by someone trying to build a plot, and it is the rules — what invites the
thing in, what keeps it out, what must not be said — that generate scenes. A regional catalogue
is interesting; a rule set is usable. **Do not name a specialist "Primers"** — both Historical
and War rejected that naming on inspection, and it is the catalogue flavour that gives it away.

**Every period-bound rule in a specialist names its period and its army or tradition.** A rule
that silently generalises across five centuries is a defect — night fighting literally reverses
across the 1980s.

## Session mechanics

- Batch documents are the source of truth. Keep them and the WIP JSON under `_build/<genre>/`, log to the build log every few batches, and **run steps 8, 9 and 10 before the session ends**.
- **Bash working directory does not persist between calls.** Use absolute paths or prefix every command with `cd <workdir> &&`. This cost time twice on Fantasy.
- Regenerate the validation and assembly scripts per build; keep them runnable from the first batch, not written at the end.
- **Explain to TJ in plain language, step by step.** No jargon, no dense paragraphs of build vocabulary. If an explanation would need a glossary, rewrite it.

---

## Next build: Western — see `_build/comedy/HANDOFF-western-pack-build.md`.

Remaining planned packs: Western · Superhero · Manga · TV Formats · Erotica ·
Religious & Inspirational. All currently `entryCount: 0` in the manifest.
