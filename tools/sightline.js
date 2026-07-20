#!/usr/bin/env node
/*
 * sightline.js — project ADS-B aircraft positions into the sighting photo.
 *
 * Test: does any broadcasting aircraft's predicted line of sight coincide with
 * the photographed object? Run with a JSON file:
 *
 *   node tools/sightline.js input.json
 *
 * input.json:
 * {
 *   "camera":  { "lat": 32.9xxx, "lon": -117.0xxx, "altFtMSL": 450 },
 *   "anchor":  { "lat": 32.9xxx, "lon": -117.0xxx, "altFtMSL": 500,
 *                "px": [1450, 2780],
 *                "comment": "Amazon building feature at its exact pixel" },
 *   "imageWidthPx": 3024, "imageHeightPx": 4032,
 *   "arcminPerPx": 1.03,
 *   "objects": [
 *     { "name": "craft/anomaly", "px": [860, 1255] },
 *     { "name": "osprey-mark",   "px": [1737, 1913] }
 *   ],
 *   "aircraft": [
 *     { "name": "PA-28",  "lat": 32.9xx, "lon": -116.9xx, "altFtMSL": 3500 },
 *     { "name": "N449RC", "lat": 32.930, "lon": -116.964, "altFtMSL": 1275 }
 *   ]
 * }
 *
 * Notes:
 * - All aircraft states must be for the photo's EXIF capture time (±2 s).
 * - ADS-B "WGS84 altitude" is what you want (geometric, not baro).
 * - The anchor solves the camera's yaw/pitch/roll=0 orientation; one good
 *   anchor is enough because the pixel scale is known from the lens.
 * - Flat-earth ENU is fine below 10 km ranges (<0.1° error).
 */
const fs = require('fs');

const R = 6378137, D2R = Math.PI / 180, FT = 0.3048;

function enu(cam, p) {                    // east-north-up of p relative to cam (m)
  const dLat = (p.lat - cam.lat) * D2R, dLon = (p.lon - cam.lon) * D2R;
  return {
    e: dLon * R * Math.cos(cam.lat * D2R),
    n: dLat * R,
    u: (p.altFtMSL - cam.altFtMSL) * FT,
  };
}
function azel(v) {                        // azimuth (deg from N, cw), elevation (deg)
  const az = Math.atan2(v.e, v.n) / D2R;
  const el = Math.atan2(v.u, Math.hypot(v.e, v.n)) / D2R;
  return { az: (az + 360) % 360, el, range: Math.hypot(v.e, v.n, v.u) };
}

const inp = JSON.parse(fs.readFileSync(process.argv[2] || 'input.json', 'utf8'));
const degPerPx = inp.arcminPerPx / 60;

// Solve camera orientation from the anchor: its az/el must land on its pixel.
const aGeo = azel(enu(inp.camera, inp.anchor));
const cx = inp.imageWidthPx / 2, cy = inp.imageHeightPx / 2;
const camYaw   = aGeo.az - (inp.anchor.px[0] - cx) * degPerPx;   // az at frame centre
const camPitch = aGeo.el + (inp.anchor.px[1] - cy) * degPerPx;   // el at frame centre
console.log(`camera boresight: az ${camYaw.toFixed(2)}°, el ${camPitch.toFixed(2)}°  (roll assumed 0 — see caveat)`);
console.log(`anchor check: ${inp.anchor.comment || ''}\n`);

// Where does each photographed object point in the sky?
for (const o of inp.objects || []) {
  const az = camYaw + (o.px[0] - cx) * degPerPx;
  const el = camPitch - (o.px[1] - cy) * degPerPx;
  console.log(`object "${o.name}": px(${o.px}) -> az ${az.toFixed(2)}°, el ${el.toFixed(2)}°`);
}
console.log();

// Where should each ADS-B aircraft appear in the frame?
for (const a of inp.aircraft || []) {
  const g = azel(enu(inp.camera, a));
  const px = cx + (g.az - camYaw) / degPerPx;
  const py = cy - (g.el - camPitch) / degPerPx;
  const inFrame = px >= 0 && px < inp.imageWidthPx && py >= 0 && py < inp.imageHeightPx;
  console.log(`aircraft "${a.name}": az ${g.az.toFixed(2)}°, el ${g.el.toFixed(2)}°, range ${(g.range/1000).toFixed(2)} km`
    + ` -> predicted px (${px.toFixed(0)}, ${py.toFixed(0)})${inFrame ? '' : '  [OUT OF FRAME]'}`);
  for (const o of inp.objects || []) {
    const dAz = (camYaw + (o.px[0]-cx)*degPerPx) - g.az;
    const dEl = (camPitch - (o.px[1]-cy)*degPerPx) - g.el;
    const sep = Math.hypot(dAz, dEl);
    console.log(`    vs "${o.name}": angular separation ${sep.toFixed(2)}°  ${sep < 1 ? '<-- MATCH (same line of sight)' : ''}`);
  }
}
console.log(`
Caveats: roll is assumed zero (hold the phone level or measure roll from the
horizon line and rotate pixel coords first). A second anchor turns roll into a
solved quantity. Sub-degree separations = same object; >3° = excluded.`);
