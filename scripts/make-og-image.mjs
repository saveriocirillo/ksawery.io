// Renders public/og.png, the 1200×630 image shown when a link to this site is shared.
// Run it again after changing the text: node scripts/make-og-image.mjs
import sharp from 'sharp';

const blues = ['#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa'];
const font = "font-family='Helvetica Neue, Helvetica, Arial, sans-serif'";

// The same to-scale tennis court as the home page background, faint on the right.
const court = `
  <g transform="translate(700 150) scale(0.19)" fill="none" stroke="#60a5fa" stroke-opacity="0.35" stroke-width="10">
    <rect x="4" y="4" width="2369" height="1089"/>
    <line x1="4" y1="141" x2="2373" y2="141"/><line x1="4" y1="956" x2="2373" y2="956"/>
    <line x1="548.5" y1="141" x2="548.5" y2="956"/><line x1="1828.5" y1="141" x2="1828.5" y2="956"/>
    <line x1="548.5" y1="548.5" x2="1828.5" y2="548.5"/><line x1="1188.5" y1="-40" x2="1188.5" y2="1137"/>
  </g>`;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0b1220"/>
  ${court}
  ${blues.map((color, i) => `<rect x="${80 + i * 70}" y="96" width="56" height="8" rx="4" fill="${color}"/>`).join('')}
  <text x="80" y="300" ${font} font-size="84" font-weight="700" fill="#ffffff">Saverio Cirillo</text>
  <text x="80" y="370" ${font} font-size="40" fill="#cbd5e1">Senior Technical Writer</text>
  <text x="80" y="440" ${font} font-size="30" fill="#60a5fa">API docs · Docs as code · Docs for AI agents</text>
  <text x="80" y="570" ${font} font-size="28" fill="#94a3b8">saverio-cirillo.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('Wrote public/og.png');
