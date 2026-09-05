# HANDOFF — the library-wide V-29 living re-check

**Written 2026-09-04, at the end of the Erotica build.** One pack has had a living re-check.
Thirteen have not. This is what the next session needs and nothing else; **disk is canonical**
(T-12) and everything named here is on disk.

---

## §1 What this is, in one paragraph

Every author card that gives no death date is asserting that a person is alive. That assertion is
the only claim in this library that **turns false while sitting on disk**. V-29 is the rule that
those claims are re-checked against the world **immediately before a pack is released**. It was
written during the Erotica build, it has run exactly once, and on that single run it found that
**three of the fifteen cards which said they had been checked could not be confirmed** — the phrase
had been carried forward from drafting.

---

## §2 The size of it, measured

⟨measured: `python3 tools/living_census.py` — exit **1**, output kept at
`_build/erotica/audits/v29-library-worklist.txt`⟩

| | |
|---|---|
| author cards, all 14 packs | **1,861** |
| state a death — not a living claim | 928 |
| `life dates unresolved` — explicitly handled | 14 |
| exempt: a death with no date, properly stated | 3 |
| **living claims carrying a check date** | **31** — all Erotica, all checked 2026-09-04 |
| **living claims naming NO check date** | **885** — V-29 has never run on these |

**885 across thirteen packs**, and they are **848 distinct people** — 59 people are carded in more
than one pack (Sarah Waters and Alan Moore in four each), so checking the person rather than the
card saves 71 checks. That overlap is also **B-16's missing cross-pack instrument** (Part 3 item
35) doing useful work for the first time.

### Per pack, ranked by age, because age is the risk

| pack | total | 85+ | 75–84 | 65–74 | <65 | no birth year |
|---|---|---|---|---|---|---|
| scifi | 131 | 7 | 20 | 29 | 53 | 22 |
| **tv-formats** | **113** | 0 | 0 | 0 | 0 | **113** |
| romance | 90 | 0 | 21 | 3 | 26 | 40 |
| manga | 87 | 7 | 20 | 16 | 36 | 8 |
| fantasy | 82 | 5 | 13 | 19 | 40 | 5 |
| horror | 67 | 4 | 9 | 15 | 33 | 6 |
| mystery-crime-thriller | 66 | 5 | 10 | 20 | 28 | 3 |
| superhero | 56 | 2 | 11 | 12 | 12 | 19 |
| historical | 50 | 2 | 15 | 14 | 18 | 1 |
| comedy | 45 | 4 | 8 | 5 | 27 | 1 |
| western | 43 | 9 | 10 | 6 | 14 | 4 |
| literary | 31 | 7 | 9 | 7 | 7 | 1 |
| war-military | 24 | 2 | 8 | 6 | 6 | 2 |
| **TOTAL** | **885** | **54** | **154** | **152** | **300** | **225** |

**TV Formats is a different problem from the other twelve.** It states no life dates at all —
*"American writer-producer, television career since 1993."* — so 113 of its 120 author cards assert
a living person **invisibly**, and not one can be risk-ranked. It needs a convention before it
needs a re-check.

**The 225 with no birth year are the second problem.** They cannot be sorted by risk, so they
cannot be triaged; they have to be worked straight through.

---

## §3 How to run it — the procedure that worked

Follow `_build/erotica/audits/v29-living-recheck-RECORD.md`. The parts that carried the result:

1. **`python3 tools/living_census.py packs/reference-<pack>.json`** gives the worklist. It reads
   what the cards *say* and has never checked one against the world; it prints that on every run.
2. **Split the roster into four blocks and give each to an independent reader**, blind to each
   other. Erotica used one reader per ~8 people; that was comfortable.
3. **Every brief carries one deliberately false statement, and the reader is not told.** All four
   Erotica readers found theirs. **A reader who misses the plant has their block re-run, not
   reconciled** — a reader who cannot fail the obvious is not measuring the subtle.
4. **Each reader creates their output file before searching and appends after each person.** A
   prior session lost an entire research pass to an API error at the end.
5. **The verdict vocabulary is three-way and the third value is the point.** `ALIVE-CONFIRMED`
   needs a dated item from the last two years. `DEAD` needs a source that would know. **`NO-EVIDENCE`
   means no death report AND no dated activity — it is a real answer and must never be recorded as
   alive.** *Do not infer life from the absence of an obituary.* A page with no death date is
   evidence that nobody has edited it.
6. **Repair in the batch markdown, never in the JSON**, then `rebuild.sh`, then every gate unpiped.

### What the sources actually did, measured on the one run

**Best:** a university department's own course list, a national broadcaster's schedule, an awarding
body whose category read *autrice francophone **vivante***, a person's own dated posts.
**Worst: author websites and encyclopaedia pages.** Stale on four of eight people in one block
while those people were conspicuously active elsewhere. Their silence tracks editor attention.
**A publishing announcement is not evidence of life** (V-36) — reissues and anniversary editions are
exactly what keeps appearing after a death, and one Erotica card rested on nothing else.

---

## §4 Standing decisions, already taken

- **The thirteen packs are already published.** This is a correction pass on live packs, not a
  pre-release check, so **each repaired pack takes a version bump**, on the Romance 1.1.2 → 1.1.3
  precedent. Erotica is the only one that could be amended in place.
- **One pack per session.** Not for context reasons — because each pack needs its own replay, its
  own gate run, its own ledger row and its own publish. Thirteen packs in one session is one
  unreviewable diff and thirteen packs simultaneously unpublishable.
- **Erotica ships now**, ahead of this pass. TJ's decision, 2026-09-04. It is the only pack with a
  current check, and holding it only lets its confirmation dates go stale.
- **Claude performs no git operations, ever. TJ publishes.** (T-12)

---

## §5 Suggested order

1. **literary** (31) or **war-military** (24) first — smallest, and both are dense in the 85+ band.
   Use one as the shakedown for the procedure on a pack that is not Erotica.
2. Then by age-risk rather than by size: **western** (9 at 85+), **scifi** and **manga** (7 each).
3. **tv-formats last, and only after a ruling** on whether that pack adopts life dates at all.
   Until it does, a re-check there has nothing to re-check.

---

## §6 What this session did NOT do, and is owed

1. **No card in any of the thirteen has been checked.** The instrument and the worklist exist; the
   research does not. ⟨measured: 848 distinct people; at Erotica's observed rate of roughly 15k
   tokens per person, the research alone is on the order of 12M tokens — it does not fit in one
   session alongside thirteen repair-and-gate cycles.⟩
2. **The `?` column has no plan.** 225 people with no birth year cannot be triaged by risk.
3. **V-29 fires once and nothing re-fires it** (Part 3 item 44). A pack sitting unpublished for six
   months carries a stale check. The check date is now on every Erotica card, which makes staleness
   visible but does not act on it.
4. **The census is trusted on its exemption list**, which is three cards, each read by hand on
   2026-09-04 and each carrying a written reason in `tools/living_census.py`. Nothing re-reads them.

---

## §7 Files

| file | what |
|---|---|
| `tools/living_census.py` | **the instrument** — library-wide, handles all four prose conventions, exit 1 if any living claim names no check date |
| `tools/break_living_census.py` | ⟨measured: **15 cases, 15 behaved as claimed**⟩, including all four conventions pinned and three declared blind spots |
| `_build/erotica/audits/v29-library-worklist.txt` | the 885, oldest first |
| `_build/erotica/audits/v29-living-recheck-RECORD.md` | the procedure, written from the run that worked |
| `_build/erotica/audits/v29-living-recheck-EVIDENCE.md` | all 32 Erotica people, every source and date, plus the four briefs |
| `CHANGE-LEDGER.md` | V-29, V-34, V-35, V-36; Part 3 items 43, 44, 45 |
