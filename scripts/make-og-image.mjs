// Renders public/og.png, the 1200×630 image shown when a link to this site is shared.
// Run it again after changing the text: node scripts/make-og-image.mjs
import sharp from 'sharp';

const blues = ['#1d4ed8', '#2563eb', '#3b82f6', '#60a5fa'];
const font = "font-family='Helvetica Neue, Helvetica, Arial, sans-serif'";

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="#0b1220"/>
  ${blues.map((color, i) => `<rect x="${80 + i * 70}" y="96" width="56" height="8" rx="4" fill="${color}"/>`).join('')}
  <text x="80" y="300" ${font} font-size="84" font-weight="700" fill="#ffffff">Saverio Cirillo</text>
  <text x="80" y="370" ${font} font-size="40" fill="#cbd5e1">Senior Technical Writer</text>
  <text x="80" y="440" ${font} font-size="30" fill="#60a5fa">API docs · Docs as code · Docs for AI agents</text>
  <text x="80" y="570" ${font} font-size="28" fill="#94a3b8">saverio-cirillo.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('Wrote public/og.png');
