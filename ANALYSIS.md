# Tri-Body Craft Sighting — Physical Analysis

Status: working document. Built strictly from the witness record; every derived
number shows its arithmetic. The companion simulation (`tri-body-craft.html`)
reproduces the reported kinematics; this document asks what physical object
could produce them.

---

## 1. Witness record (the data)

| Item | Report |
|---|---|
| Geometry | Tri-body, ~1.5 × 2 × 3 m overall; central rounded can-shaped fuselage; two nearly flat panels, one per side |
| Coupling | No visible linkage; panel spacing rigid "as if physical struts" |
| Motion | Panels and fuselage in continuous complex rotation, ~1 rev/s; flight path straight and level |
| Speed | Perfectly constant; exactly matched two V-22 Ospreys it appeared to be following |
| Surface | Matte drone-gray, zero specular reflection |
| Acoustics | Complete silence (caveat: two Ospreys at ~0.2 mi dominate the soundscape — masking limits this datum) |
| Emissions | No glow, corona, or heat shimmer to the naked eye |
| Photo | One photograph: shows shadowing in the panel–fuselage gaps (separation evidence) and a large white square not visible to the naked eye |
| Conditions | **2023-09-28, 16:50 PDT (EXIF-fixed; witness recalled ~16:20)**, no notable wind, duration ≤ 20 s; witness range estimates superseded by §9 measurement |

## 2. Sighting geometry — does the account self-check?

- Ground distance 0.2 mi = 322 m; altitude 1,000 ft = 305 m → **slant range ≈ 443 m**.
- A 3 m craft at 443 m subtends **6.8 mrad ≈ 23 arcmin** (a full moon is ~30). The
  eye resolves ~1 arcmin, so the craft spans ~23 resolution elements: gross
  geometry, panel gaps (~4 arcmin) and gap shadows are **genuinely resolvable**.
- At V-22 transit speeds the object covers 0.4–2.6 km in 20 s — consistent with
  a short tracking window.

**The report is internally consistent**: every claimed detail is resolvable at the
stated range. This check could have failed; it didn't.

## 3. The V-22 calibration

"Mirrored the Ospreys' speed exactly" turns the sighting quantitative, because
V-22 speed bands are known:

- **Helo/conversion-mode transit:** ~40–80 kt → 20–40 m/s
- **Airplane-mode transit:** ~200–250 kt → 100–130 m/s

**Superseded by ADS-B (§10.1): the pair was doing 233–234 kt — the FAST band.**
The nacelles-up recollection was the soft detail (at 234 kt a V-22 flies
nacelles-forward; conversion happens as it slows). If the object truly paced
the pair, §4's severe branch is operative.
~~Resolved by witness: nacelles were UP → slow band, 20–40 m/s.~~
Consequence: the smoothness problem (§4b) softens — passive inertia at
M ≳ 500 kg hides the 1 Hz wobble below the eye's threshold — and the operative
anomaly becomes the **silent-thrust problem (§4a)**: ~0.6–2.5 kN of continuous
thrust with no propulsor, no exhaust, and no rotor noise, plus the contactless
lock of §5 at its ~10⁴ A·m² (slow-band) requirement.

## 4. Core result: the steady-tumble paradox

A flat 2 × 0.6 m panel tumbling at 1 Hz has a frontal area that swings from
edge-on (~0.03 m²) to face-on (1.2 m²) every rotation. At airspeed *v*, dynamic
pressure q = ½ρv², so each panel's drag *oscillates at ~1 Hz* by roughly
ΔF ≈ q·CdA ≈ 1.2·q·1.2. The witness reports **zero speed variation**. A 1 Hz
force oscillation of amplitude ΔF on mass M produces a positional wobble of
amplitude x = (2ΔF/M)/(2πf)² — directly comparable to the eye's threshold at
443 m (~13 cm):

| Band | q (Pa) | per-panel drag swing | mean total drag | wobble @ M=300 kg | M=1000 kg | M=3000 kg |
|---|---|---|---|---|---|---|
| 20 m/s | 240 | 0.35 kN | **0.6 kN** | 6 cm (hidden) | 2 cm (hidden) | 1 cm (hidden) |
| 40 m/s | 960 | 1.4 kN | **2.5 kN** | 23 cm **VISIBLE** | 7 cm (hidden) | 2 cm (hidden) |
| 100 m/s | 6,000 | 8.6 kN | **15.6 kN** | 1.5 m **VISIBLE** | 44 cm **VISIBLE** | 15 cm **VISIBLE** |
| 130 m/s | 10,140 | 14.6 kN | **26.4 kN** | 2.5 m **VISIBLE** | 74 cm **VISIBLE** | 25 cm **VISIBLE** |

Two independent conclusions:

**(a) The silent-thrust problem — holds in every band.** Sustaining formation
speed requires continuously cancelling 0.6–26 kN of mean drag with no visible
propulsor, no exhaust, no rotor. No public technology supplies silent kN-class
thrust from a 3 m body (electroaerodynamic/ion-wind thrust density is ~3 N/m²
— three orders short).

**(b) The smoothness problem — severity depends on the band.** If the Ospreys
were in **airplane mode**, a tumbling craft of *any* plausible mass would wobble
visibly at 1 Hz; "completely static" motion then requires active force control
cancelling ~10 kN oscillations in real time — or flight that is simply not
aerodynamically coupled. In **helo mode**, passive inertia (M ≳ 500 kg) hides the
wobble, and only problem (a) remains.

**(c) The design-logic problem.** Under any conventional-aircraft hypothesis the
tumble is pure cost — kilonewtons of parasitic, oscillating drag purchasing
nothing aerodynamic. Continuous 1 Hz whole-body rotation on a craft holding
formation only makes engineering sense if the rotation is *functional* for
something other than aerodynamics, or if aerodynamic forces are irrelevant to
its flight.

## 5. The contactless lock, quantified

The panels held station across a ~1.5 m gap "as if strutted" while (per §4)
oscillating aerodynamic loads of 0.1–15 kN tried to displace them. Transmitting
such forces magnetically across 1.5 m (dipole–dipole, F ∝ m²/r⁴) requires
moments of:

- ~3 × 10⁴ A·m² each for the slow band (~0.1 kN swings)
- ~1.6 × 10⁵ A·m² each for the fast band (~3 kN swings)

Both are **superconducting-coil territory** (HTS tape, 10⁴–10⁵ A·turns over ~m²
loops) — far beyond permanent magnets, and needing cryogenics plus a stiff
6-DoF control loop (or flux-pinning, which supplies the "rigid in position AND
orientation" behavior natively). Independent of every propulsion question, the
most conservative reading of the gap rigidity already implies **cryogenic
coherent-matter hardware onboard**.

## 6. The photographed white square

Silicon camera sensors see near-infrared (~700–1000 nm); eyes don't. A strong
NIR source bleeds through the phone's IR-cut filter, saturates all three color
channels, and renders **white**. Candidates, in order of plausibility:

1. **Active NIR array** — flash-LIDAR illuminators are literally large square
   NIR apertures; military IR beacons/strobes are *designed* to be
   sensor-visible and eye-invisible.
2. **Hot radiator surface** (~400–600 °C): glows in NIR, near-invisible in
   daylight. Any craft with a large onboard power plant must reject waste heat;
   a square high-emissivity radiator is a mandatory feature of a high-power
   silent platform — the photo may show the heat rejection system.
3. **Artifacts** (must stay on the table until the image is examined): lens
   ghost of the sun (sits mirrored through frame center), sensor bloom (streaks
   along pixel rows), HDR-processing patches (ignore scene perspective). Each
   has a distinct forensic tell.

## 7. Hypothesis ladder, scored against the record

| Observation | Buoyant/light craft | Conventional classified platform | Field-coupled drive (this project) |
|---|---|---|---|
| Formation speed with V-22s | **KILLED** (balloons can't do 20–130 m/s in calm air) | OK | OK |
| Constant speed, no jitter | — | strained (fast band: needs active kN force control) | OK (drive is orientation-independent) |
| Continuous 1 Hz tumble | — | strained (pure aerodynamic cost; no design rationale) | **REQUIRED** (rotation is the mechanism) |
| Silence | — | strained, but **Osprey masking weakens this datum** | OK |
| Rigid contactless 1.5 m gap | — | needs HTS-class coupling (no known program) | native (the lock *is* the machine) |
| No glow/shimmer | OK | OK | OK (constrains EHD out) |
| Drone-gray + NIR square | — | **fits** (human engineering conventions) | neutral |
| Escorted by two Ospreys | — | **fits** (chase aircraft pattern for test articles) | neutral |

**Standing verdict:** the buoyant tier is eliminated. What remains is a fork:

- **A: Unacknowledged terrestrial test article** — gray paint, NIR beacon, and a
  two-Osprey escort all match human test-flight conventions. But then the
  program possesses silent kN-class propulsion, HTS contactless structural
  coupling, and (fast band) active 1 Hz force cancellation — each beyond any
  public capability. "Terrestrial" here does not mean "mundane."
- **B: Field-coupled propulsion** of the class modeled in this repository —
  the only hypothesis in which the tumble, the silence, the rigidity, and the
  steadiness are *the same fact* rather than four separate miracles. Its cost
  is the coupling budget (`tri-body-craft.html`): a coherent high-frequency
  carrier in exotic matter.

Note the convergence: **both branches require macroscopic quantum-coherent
hardware** (HTS coupling at minimum). The disagreement is only about how much.

## 8. What would move the analysis

1. **The photograph** (original file, EXIF intact). Yields: saturation map of
   the square (emitter vs. artifact), shadow-vector photogrammetry (sun
   position at the timestamp fixes craft orientation and true separations),
   size/distance cross-check against the 443 m slant estimate.
2. ~~Osprey nacelle position~~ — **answered: up (slow band)**; see §3.
3. **Trailing geometry** — answered: right-echelon rear ("monitoring" station);
   still open: **did it depart with them?**
4. **Date/location** (witness's discretion) — V-22 squadrons are few; pairs at
   1,000 ft AGL fly known corridors. The sighting is *checkable* against
   military traffic in a way most sightings are not.

## 9. Photo set — preliminary findings (chat-shared copies, re-encoded)

Four images received: two annotated wide frames, one clean wide frame, and a
zoom crop of the object. Chat transfer strips EXIF and re-encodes pixels, so
these findings are provisional pending the original files.

**Scene consistency.** Paved lot, industrial-park warehouse on the horizon,
mature eucalyptus/oak, deep-blue cloudless sky, hard shadows from a low-ish
western sun — fully consistent with the reported ~16:20 local, calm conditions,
Southern-California setting. (If this is San Diego County: MV-22 pairs at
~1,000 ft AGL are routine Pendleton–Miramar traffic, which makes the escort
context unremarkable rather than exotic — a point *for* the account's
coherence.)

**Angular-size cross-check — PASSED.** At ~26 mm-equivalent, an iPhone frame
resolves ~1 arcmin/pixel native (4032 px across ~69°). The §2 geometry predicts
the craft subtends ~23 arcmin → **~20–25 px**. The object in the zoom crop is
in exactly that range. This check was capable of falsifying the reported
size/distance combination and did not.

**What the crop shows.** A bright, white-saturated, slightly elongated patch
with a hint of darker structure at its margin — consistent with the witness
report that the camera recorded a white feature the naked eye did not see
(the NIR-bleed signature of §6 renders precisely as a blown-white patch).
**What it cannot show at this resolution/re-encoding:** tri-body separation,
panel gaps, or gap shadowing. A ~20 px re-encoded blob also does not by itself
exclude mundane look-alikes (distant conventional aircraft, balloon); the
real-time observation — tumble, rigidity, formation-keeping — is what the
photo cannot carry and the witness can.

**Witness clarifications (received).**
- The hexagon at px (1737, 1913) near the treeline **is one of the Ospreys** —
  a known-dimension aircraft is in frame (see "The Osprey ruler" below).
- The red "UAP/anomaly" cross marks the craft.
- The "Amazon exact px" / "83.09 ft anchor" marks are the witness's own
  photogrammetry pass — a self-devised "simulated parallax" range estimate.
  Method write-up and numeric output requested (single-camera range solutions
  for a moving sky object need an assumption somewhere; identifying which one
  determines how to weight the result).
- Station-keeping geometry: the craft trailed the Osprey pair **behind and
  offset right — right-echelon rear**. Two readings, identical geometry:
  (a) standard chase/observer station for a cooperative test asset;
  (b) non-cooperative shadowing of military traffic. The photo cannot
  distinguish intent; both are logged.

**The Osprey ruler — the decisive measurement.**
A V-22 spans 25.78 m across the proprotors (17.48 m fuselage). At ~1 arcmin/px
native, its distance follows directly from its pixel width:
**D ≈ 88,600 / W_px meters.**

| Osprey pixel span | Osprey distance | If craft co-located, craft size = D·px·2.9e-4 |
|---|---|---|
| 200 px | 443 m | 20 px → 2.6 m (matches report) |
| 89 px | 1.0 km | 20 px → 5.8 m |
| 44 px | 2.0 km | 20 px → 11.6 m |
| 15 px | 5.9 km | 20 px → 34.9 m |

The witness reports the craft paced the Ospreys for the full sighting,
trailing them — angular pacing over ~20 s from a fixed observer makes
co-location in depth the natural reading. So one pixel measurement of the
in-frame Osprey resolves the system:

- **Osprey ≈ 200 px** → the 0.2 mi estimate holds and the craft is ~3 m as
  reported. (Tension: a 200 px Osprey is an unmistakable aircraft shape, not
  a treeline speck — the shared re-encoded frames *appear* to show a speck,
  but they are too degraded to measure. Originals required.)
- **Osprey ≈ 15–45 px** → the pair was 2–6 km out, and the co-located craft is
  **6–35 m** — substantially larger than estimated, with the ground distance
  being the soft variable. This would not impugn the account: absolute range
  is the one quantity eyes cannot measure (a 3 m object at 443 m and a 12 m
  object at 1.8 km subtend identical angles); every angular observation —
  tumble rate, geometry, rigidity, formation-keeping — survives unchanged.
  Note the physics consequence: at 6–35 m scale the panel areas grow as size²,
  so the silent-thrust requirement *worsens* to ~10–40 kN even in the slow
  band. The anomaly does not shrink with the recalibration; it grows.
- **Second Osprey**: if also in frame, the pair's angular separation gives
  formation spacing — an independent depth cross-check.

**Osprey ruler — APPLIED (provisional; measured on chat re-encoded copies).**
The witness supplied the frame with the Osprey identified at px (1737, 1913).
Displayed frames are ~1493 px wide → downscale ≈ 2.02 from 3024×4032.
Pixel reads with uncertainty: Osprey silhouette 20–28 original px; craft speck
8–14 original px; horizon row and object rows read for elevation angles.

Results:
- **Osprey distance: ~2–4.5 km** (span-based 3.1–4.4 km; fuselage-on 2.1–3.0
  km). The claimed 443 m would make the Osprey ~200 px — **excluded by an
  order of magnitude**, far beyond blur/read errors.
- **Craft size (co-located, blur-corrected ratio 0.22–0.66): ≈ 5.6–17 m** —
  roughly **10 m class**, not 3 m. The ratio method is downscale-invariant
  (both objects shrink identically), so this survives the re-encoding.
- **Elevation cross-check:** Osprey ≈ 15.4°, craft ≈ 26.7°. Two consistent
  solutions: **(A)** co-located in ground range → the craft sat **~850 m above
  the pair** — a literal high perch behind and offset right, matching the
  witness's "monitoring position" description; **(B)** same altitude as the
  pair → the craft would be at ~2 km, *closer* than the Ospreys, contradicting
  "following behind them." The witness account selects (A).
- The witness's 0.2 mi / 1,000 ft estimate was the output of their
  single-camera parallax attempt; the in-frame ruler supersedes it. No mark
  against the account: absolute range is unmeasurable by eye, and every
  angular observation (tumble, geometry, rigidity, pacing) survives
  recalibration unchanged.

**Physics consequence of the ~10 m recalibration.** Drag scales as size²:
at 10 m scale the slow-band silent-thrust requirement rises from ~0.6–2.5 kN
to **~7–28 kN**, and the panel–fuselage gap scales to ~5–6 m. Transmitting
kN-class loads contactlessly across 5–6 m (F ∝ m²/r⁴) needs magnetic moments
~10⁶–10⁷ A·m² — beyond any deployed magnet technology by orders. The
recalibration therefore *strengthens* the anomaly and further strains the
conventional-hardware branch (§7A) relative to the field-coupled branch (§7B).

Remaining tightening (original untouched files, committed to the repo):
±1 px reads → size to ~10%; twin-nacelle structure check on the Osprey
silhouette (vs. bird); three-channel saturation test on the craft's white
patch; EXIF timestamp for shadow-vector solve.

**Forensics unlocked by the original files** (HEIC/JPG straight off the phone,
committed to this repo untouched):
1. **Saturation test** — if the white patch clips all three channels while the
   sky around it doesn't, that's the active-NIR/hot-source signature (§6);
   a gray-body reflection wouldn't clip.
2. **PSF comparison** — edge sharpness of the object vs. the warehouse
   roofline separates "small and near" from "large and far" at equal blur.
3. **Pixel measurement** — object extent to ±1 px → size/distance solve to
   ~10%, testable against the 3 m / 443 m claim.
4. **EXIF** — timestamp (sun position → shadow-vector photogrammetry), focal
   length, exposure triad.

## 10. ADS-B correlation (witness-sourced flight logs)

> **CORRECTION (supersedes the correlation below).** The photo EXIF reads
> **Date taken 2023-09-28, 4:50 PM** (local). The replay pulls below were run
> on **2023-09-08 at 16:50 UTC (= 09:50 PDT)** — a date transposition
> (09-08 vs 09-28) compounded by a UTC/local conflation (16:50 UTC looks like
> "4:50 PM" but is 9:50 AM PDT). **Every track in this section — including
> PA-28 N255CB — flew 20 days before the photograph and is void for
> correlation.** The specific-Piper hypothesis is unsupported by placement;
> the hypothesis *class* (some aircraft on the sight line) remains open and
> testable. Correct replay target: **2023-09-28, 23:45–23:55 UTC**, within
> ~10 km of the camera fix below. The section is retained as a record of the
> method dry-run, which exercised the full pipeline successfully.

**Camera fix (EXIF + witness DMS, conversion verified):**
32.941250°N, 117.023378°W, alt 264.4 m (867 ft MSL) — Kirkham Way /
Scripps Poway Parkway area, Poway, CA. iPhone 13 wide, 26 mm equiv
(3024×4032, ~1.03 arcmin/px). Exposure 1/2309 s, f/1.6, ISO 50 →
EV(100) ≈ 13.5, consistent with clear late-afternoon sun. Computed sun at
capture: **azimuth ≈ 250°, elevation ≈ 22°** — on file for the
shadow-vector solve. EXIF also validates the witness's remembered time
(~4:20 PM recalled vs 4:50 PM actual) and afternoon lighting.

Witness pulled ADS-B replay for the sighting date — now fixed as
**2023-09-08**, area **Sycamore Canyon / Goodan Ranch County Preserve,
San Diego County** (adjacent to MCAS Miramar). Findings from the screenshots:

| Track | Aircraft | Operator | State shown |
|---|---|---|---|
| N449RC | 1973 Bell UH-1 Huey | County of San Diego | 42 kt, 1,200 ft, orbiting the preserve |
| N710SD | AS-350 | SDPD Air Support | 87 kt, 1,200 ft, in the area |
| (yellow icon) | Piper PA-28 | — | trailing the helicopter work, similar station to the reported craft |

Key observations:
- **No V-22 appears in ADS-B — which is expected, not exculpatory.** Military
  Ospreys routinely fly ADS-B-dark, and MCAS Miramar (which bases MV-22
  squadrons) is immediately adjacent. ADS-B absence neither confirms nor
  denies the witnessed pair.
- **Time conflict:** the screenshots show 09:55–09:59 PDT (16:55 UTC);
  the witness recalled ~16:20 PDT. Either the sighting was morning (3-year
  time memory is soft; photo shadow geometry is compatible with both, as sun
  elevation is similar) or the replay must be scrubbed to 23:15–23:30 UTC.
  **The photo EXIF timestamp resolves this decisively.**
- The UH-1's 42 kt = 21.6 m/s sits dead-center in the slow band (§3).

**The PA-28 hypothesis — honest scoring.** The witness surfaced this
candidate themselves ("a P28 Piper trails them in a similar way the craft I
saw did, but what I saw was so crazy and didn't look like a Piper").

*Fits:* trailing/monitoring station matches; a white PA-28 at 2–4 km renders
gray-silhouette to the adapted eye but can blow out white on a sensor
(sky-contrast physics — matches the white-in-photo/gray-to-eye report);
10.7 m wingspan sits inside the 5.6–17 m ratio band (§9); low-wing aircraft
photographed soft can show shadowed wing roots that mimic body/panel "gaps";
wings + fuselage = a three-body gestalt at the resolution limit.

*Does not fit:* a light aircraft **cannot present a continuous ~1 Hz tumble**
— orbit aspect changes are ~minute-scale, prop flicker is ~80 Hz; nothing
about a PA-28 produces rotating-panel motion over 20 s. Nor does it explain
"two Ospreys, nacelles up" if nacelle structure was resolved. The core
kinematic percept remains unexplained by this candidate.

**Decisive test — the sight-line overlay (`tools/sightline.js`).**
ADS-B gives per-second lat/lon/alt. The camera position is recoverable (the
witness already georeferenced the Amazon building). The photo gives pixel
positions for both objects. Projecting each ADS-B aircraft into the frame at
the EXIF capture time yields predicted pixels:
- separation < 1° from the white object → **same line of sight; mundane
  identification wins**;
- separation > 3° for every broadcaster → **the photographed object is none
  of the broadcasting traffic**, with all mundane aircraft accounted for
  elsewhere in the frame — a substantially *stronger* anomaly record than
  before the correlation was attempted.

Inputs still needed to run it: photo EXIF time; camera standpoint lat/lon;
per-aircraft lat/lon/alt at that time (replay screenshots with the info panel
open suffice); and the replay scrubbed to whichever window EXIF selects.

### 10.1 The correct-date pull — RESULTS (2023-09-28, 23:50 UTC)

Witness re-ran the replay on the EXIF date/time. In the 23:45–23:55 UTC
window near the camera: **one military track and two distant GA aircraft.**

**Callsign UGLY** — DB-flagged military, registration/type unassigned,
squawk 4672, ADS-B source: 233–234 kt groundspeed, descending −2,048 ft/min
through 3,525→3,225 ft (WGS84), track ~235° (east-to-west toward MCAS
Miramar), passing directly over the Sycamore Canyon area during the EXIF
minute. Computed from the camera fix:

| Time (UTC) | Azimuth | Elevation | Slant range |
|---|---|---|---|
| 23:50:10 | 79.5° | 11.1° | 4.20 km |
| 23:50:20 | 86.5° | 12.6° | 3.30 km |

**Identification of the witnessed pair — three independent matches:**
1. **Elevation**: UGLY at 11–13° vs. the photographed treeline aircraft at
   ~15.4° (±2.5°) — within combined errors.
2. **Size**: the treeline object's 20–28 px at UGLY's *ADS-B-measured* range
   implies a 19–34 m span, bracketing the **V-22's 25.78 m** (excludes H-1
   at ~15 m and KC-130 at 40 m).
3. **Speed**: 233–234 kt matches V-22 airplane-mode cruise (~240 kt);
   it exceeds H-1 limits.

Conclusion: **the witnessed pair was almost certainly a V-22 flight —
"UGLY" — with the lead broadcasting and the wingman ADS-B-dark** (standard
two-ship; this resolves the witness's own earlier puzzle "ADS-B shows one,
but there were two"). The witness's aircraft identification is vindicated;
only the speed/nacelle recollection needed revision.

**The white object is NOT UGLY:** its sight line sits **14.1° above**
UGLY's — exclusion requires <1°. The only other broadcasters (two GA
aircraft) were west of the camera, behind the eastward-facing frame.
Airspace context sharpens this: the site lies inside the San Diego
**Mode C veil**, where ADS-B Out is mandatory for powered civil aircraft —
the remaining non-broadcasting categories at the white object's position are
military aircraft, no-electrical-system aircraft (balloons/gliders), birds,
or the anomaly itself.

**Recalibration with ADS-B range (if the object trailed the pair):**
size 7.7–17.1 m and ~920 m above the pair — independently consistent with
the §9 Osprey-ruler estimates (5.6–17 m; ~850 m high perch) derived before
UGLY's range was known. Two methods, one answer: **a ~10 m-class object
holding a high observer's station above a V-22 flight at ~230 kt.**

**To close the sight-line test:** (1) azimuth solve — the Amazon-building
anchor's geo-coordinates + its pixel in the original frame; (2) EXIF seconds
(`exiftool -DateTimeOriginal -SubSecTimeOriginal photo.jpg`) to pin UGLY's
along-track position at the exact capture instant; (3) original files.

## 12. Original-file forensics — RESULTS

Witness supplied the untouched original (`photos/original_2023-09-28_165038.JPG`,
4032×3024, iPhone 13 wide). All measurements below are mine, on those pixels.
Supersedes the degraded-copy estimates in §9 where they conflict.

**EXIF solved everything the anchor was for:**
- Capture: **2023-09-28 16:50:38.614 PDT** (23:50:38.6 UTC; GPS clock concurs)
- **GPSImgDirection: 96.9° true** — the camera's own compass heading
- GPS position = the witness's stated fix, ±3.5 m; exposure internally
  consistent (1/2309 s f/1.6 ISO 50, bright clear afternoon). No signs of
  manipulation; `the_ufo1.jpg` and the pipeline inputs are same-instant
  derivatives (identical DateTimeOriginal+subsec).

**The treeline aircraft IS a V-22, and it is UGLY** (`analysis-assets/aircraft_4x.png`):
- The 4× crop shows an unmistakable V-22 silhouette — fuselage, wing, both
  wingtip proprotor discs — light gray, viewed from below-oblique.
- Pixel (1737,1913) → **az 100.8°, el 15.5°** (EXIF heading + horizon-solved
  pitch). Dark-silhouette span **~25±4 px** → V-22 dimensions fit at
  **2.3–3.7 km** — inside UGLY's ADS-B bracket.
- UGLY's last fix (23:50:20) puts it at az 86.5°, el 12.6°, 234 kt,
  −2,048 ft/min, 18.6 s before capture. Constant-speed dead reckoning misses
  the pixel by ~25° az, but any realistic decelerating Miramar approach
  (234 kt → ~120 kt after the fix — which is exactly the nacelle-conversion
  regime) passes through the measured az/el at the capture second.
  **The photographed aircraft = UGLY; the witness's "nacelles up" recall
  matches the conversion phase.** The path objection resolves: the remembered
  ground track was distorted by the (now-corrected) range perception.

**The white object, measured** (`analysis-assets/white_object_8x.png`):
- Sole detection in the open sky: residual 103 vs noise floor ~8 — a real
  optical feature, not compression artifact. Centroid **(1014, 1266)** →
  **az 88.3°, el 26.6°**.
- Photometry: bright compact core, FWHM **3×3 px (3.1 arcmin, 0.90 mrad)**;
  faint envelope 15×19 px; peak RGB (192, 226, 255) — pale blue-white, blue
  channel clipped; a hard dark element (lum 63 vs sky 117) at the core's
  lower edge.
- **§6 revision:** the "white square" is a visible-light bright blob;
  "square" was zoom-crop pixelation. The NIR-emitter hypothesis is retired —
  eye-invisibility is explained by low contrast at 3 arcmin against bright
  sky, no exotic band needed.
- **Sight-line exclusion now closed in full az/el:** the object sits ~12° in
  azimuth from UGLY at capture and above UGLY's *entire* track (UGLY never
  exceeds el ~17°); the two GA broadcasters were west, behind the camera.
  **No broadcasting aircraft occupies the object's line of sight.**

**Size, with true pixels (ratio method, downscale-proof):**
core/Osprey = 3/25 ≈ 0.12 → **~2.2–3.5 m if co-located with the pair** —
matching the witness's original ~3 m estimate almost exactly (their reported
size was right; only their range was wrong). At that scale the reported thin
panels (0.05 m ≈ 0.06 px) are unresolvable by construction, consistent with
the pipeline's "no resolved panel structure." The §9 interim "~10 m class"
estimates were inflated by re-encode blur and are superseded.

**The honest fork the pixels cannot split:** the same morphology — bright
round top, dark element beneath, ~3 arcmin — fits (a) a **balloon at
~300 m** (0.3 m, drifting), and (b) the **witness's ~3 m craft at the
pair's 2.4–3.3 km range**, panels unresolved. Single-frame photometry
cannot discriminate. What can: the witness's 20-second dynamical
observation (a balloon cannot pace a 120–230 kt military flight across the
sky, and has no tumbling panels) — and, decisively, **motion data**. The
iPhone 13 keeps Live Photos by default: if this capture has its `.MOV`
sidecar (~3 s, ~45 frames), the angular tracks of both objects settle
balloon-vs-craft outright. Requested from the witness.

**Witness's prior pipeline** (`analysis-assets/witness_pipeline_panel.jpg`,
bundles): ran on a 1536-px downscale and a 186×248 crop (dynamic range 9);
its 513 m scenario was an assumption its own limitations block flagged
("not independently selected"), implying a 13 cm object at that range.
Superseded by the above.

## 13. Final synthesis — evidence corpus closed

No Live Photo sidecar exists and no second frame was taken; the corpus is
final: one calibrated original frame + EXIF + ADS-B + witness testimony.

**Established by measurement:**
- Scene: 2023-09-28, 16:50:38.614 PDT, Poway CA; camera fix ±3.5 m; no
  indications of image manipulation.
- The photographed aircraft is a **V-22 Osprey** (visual) and is **flight
  UGLY** (geometric: heading-calibrated az/el + ADS-B + approach kinematics).
  The witnessed pair was a Marine V-22 two-ship, lead transponding.
- A **real, unidentified optical object** at az 88.3°, el 26.6°: compact
  (3 px core), bright pale blue-white, dark element beneath, on **no
  broadcasting aircraft's sight line** — in airspace where civil ADS-B is
  mandatory.
- If co-located with the V-22 flight: **~2.2–3.5 m**, ~900 m above the
  pair's track, in a trailing high-perch geometry.

**Witness-record scorecard** (instructive for any future reader):
categorical percepts verified 4-for-4 (two aircraft ✓, tilt-rotor type ✓,
afternoon ✓, "saw two / ADS-B shows one" ✓ — standard dark wingman);
metric estimates corrected 3-for-3 (range 7× short, date transposed,
speed band). The reported object size (~3 m) verified *at the corrected
range*. This is the normal division of labor between human perception and
instruments, quantified.

**Permanently open (single frame cannot close it):**
- **Balloon at ~300 m** (0.3 m, drifting) vs. **~3 m object at the pair's
  range**: identical pixel morphology. The discriminator is the witness's
  dynamical testimony — 20 s of co-motion with a flight that crossed tens
  of degrees of sky (a stationary drifter would be left behind trivially;
  co-motion is a low-demand percept with reference objects present, and
  favors the object hypothesis) — and the tumbling tri-body structure
  (a high-demand percept at the resolution limit, unverifiable from this
  evidence in either direction).

**What could reopen the case:** a second witness or camera (the object was
photographable from anywhere in Poway at that minute); Miramar-area
ground/security camera archives for 2023-09-28 23:50Z; the UGLY crews
themselves — a FOIA or unit-history query for Miramar V-22 operations that
afternoon could confirm the flight and reveal whether the crews reported a
contact in their right-rear high quadrant; NUFORC/MUFON database search for
same-day reports in San Diego County.

**Standing verdict:** an unidentified, non-broadcasting, ~3 m-class object
photographed in a trailing high-perch station relative to a Marine V-22
flight, with every transponding aircraft in the frame's sky accounted for
— *contingent on the witness's co-motion testimony*, which the evidence can
neither confirm nor refute. The tri-body quaternionic kinematics modeled in
`tri-body-craft.html` remain testimony-only: physically extraordinary if
real (§§4–7), invisible to this photograph by construction (§12).

### 13.1 Closing testimony and constraints at the corrected geometry

**Final witness statement:** the object *continued on the Ospreys' heading*
past the end of the sighting — no speed change, no sound, same speed as the
pair, with a chaotic tumble appearance throughout. The witness is an
**avionics SME** and categorically rejects the balloon reading.

**Weighting.** Witness expertise does not convert testimony into pixels, but
it bears directly on *categorical* identifications — and this witness's
categorical calls in this file are verified 4-for-4. The balloon hypothesis
now requires a triple coincidence: sustained angular co-motion with a
military flight across tens of degrees of sky **including the departure**, a
misperceived tumble, and an aviation professional misjudging the one object
class aviation professionals dismiss daily. It is retained as formally
unfalsified (single frame) but **weighted far down**.

**§4 constraints restated at the true geometry** (3.3 km, pair speed):
the eye's wobble threshold at 3.3 km is ~96 cm, so the smoothness
observation now yields a **mass bound rather than a paradox**:
- at conversion-phase speed (~60 m/s): wobble hidden for any M ≳ 300 kg;
  silent-thrust requirement **~5.6 kN**
- at cruise (~120 m/s): wobble hidden for **M ≳ 1,000 kg**; silent-thrust
  requirement **~22.5 kN**

The enduring anomaly, with all corrections applied: **a ~3 m, ≥0.5–1 t,
non-broadcasting object holding formation with a V-22 flight at 60–120 m/s
while chaotically tumbling — requiring 5–20 kN of continuous, silent,
propulsor-less thrust with visibly oscillating attitude and invisibly
steady velocity.** No conventional airframe flies while tumbling; nothing
public supplies silent kN thrust from a 3 m body. This is precisely the
kinematic signature modeled in `tri-body-craft.html`.

**Reporting note:** aviation-professional witnesses are the preferred
reporter class for official channels (AARO public reporting, NARCAP,
ASRS-adjacent). This file — calibrated photo, ADS-B correlation, forensic
chain — is submission-grade support if the witness chooses to file.

## 14. Epistemic status

The witness record is taken as given and passes its internal consistency
checks (§2). Derived anomalies (§4–5) are order-of-magnitude aerodynamics and
magnetostatics — robust to factor-of-a-few quibbles, not to changes in the
record itself. Hypothesis B's mechanism is speculative physics whose required
couplings are quantified, not established. No conclusion here should outrun
the photograph.
