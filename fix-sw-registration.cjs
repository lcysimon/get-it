// Fix service worker registration path for GitHub Pages subdirectory deployment
// This script runs after vite build to correct the service worker registration path

const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const registerSWPath = path.join(distDir, 'registerSW.js');

// Read the generated registerSW.js
let content = fs.readFileSync(registerSWPath, 'utf-8');

// Fix the service worker registration path
// From: navigator.serviceWorker.register('/get-it/sw.js', { scope: '/get-it/' })
// To:   navigator.serviceWorker.register('./sw.js', { scope: '/get-it/' })
content = content.replace(
  /navigator\.serviceWorker\.register\(\s*'\/get-it\/sw\.js'/g,
  "navigator.serviceWorker.register('./sw.js'"
);

// Write the fixed file
fs.writeFileSync(registerSWPath, content);

console.log('Fixed service worker registration path for GitHub Pages deployment');
