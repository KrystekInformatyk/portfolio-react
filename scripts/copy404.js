// scripts/copy404.js
const fs = require('fs');
const path = require('path');

const dist = path.resolve('dist');
const src = path.join(dist, 'index.html');
const dst = path.join(dist, '404.html');

try {
  fs.copyFileSync(src, dst);
  console.log('✔ SPA fallback: index.html -> 404.html');
} catch (e) {
  console.error('✖ Nie skopiowano 404.html:', e.message);
}
