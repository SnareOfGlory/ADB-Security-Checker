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
| Conditions | ~16:20 local, no notable wind, duration ≤ 20 s, ground distance ~0.2 mi, altitude ~1,000 ft AGL |

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

Open question that selects the band: **were the Osprey nacelles up (helicopter) or
forward (airplane)?**

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
2. **Osprey nacelle position** (up vs. forward) — selects the speed band and
   sets the anomaly's severity (§4b).
3. **Trailing geometry** — distance behind the Ospreys; did it depart with them?
4. **Date/location** (witness's discretion) — V-22 squadrons are few; pairs at
   1,000 ft AGL fly known corridors. The sighting is *checkable* against
   military traffic in a way most sightings are not.

## 9. Epistemic status

The witness record is taken as given and passes its internal consistency
checks (§2). Derived anomalies (§4–5) are order-of-magnitude aerodynamics and
magnetostatics — robust to factor-of-a-few quibbles, not to changes in the
record itself. Hypothesis B's mechanism is speculative physics whose required
couplings are quantified, not established. No conclusion here should outrun
the photograph.
