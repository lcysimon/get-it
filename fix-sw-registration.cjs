// Fix service worker registration path and manifest link for GitHub Pages subdirectory deployment
// This script runs after vite build to correct paths for GitHub Pages

const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const registerSWPath = path.join(distDir, 'registerSW.js');
const indexHtmlPath = path.join(distDir, 'index.html');

// Fix registerSW.js
let registerSWContent = fs.readFileSync(registerSWPath, 'utf-8');
registerSWContent = registerSWContent.replace(
  /navigator\.serviceWorker\.register\(\s*'\/get-it\/sw\.js'/g,
  "navigator.serviceWorker.register('./sw.js'"
);
fs.writeFileSync(registerSWPath, registerSWContent);

// Fix index.html - make all asset paths relative for GitHub Pages
let indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf-8');

// Fix manifest link from absolute to relative
indexHtmlContent = indexHtmlContent.replace(
  /href="\/get-it\/manifest\.webmanifest"/g,
  'href="./manifest.webmanifest"'
);

// Fix registerSW.js script src from absolute to relative
indexHtmlContent = indexHtmlContent.replace(
  /src="\/get-it\/registerSW\.js"/g,
  'src="./registerSW.js"'
);

// Fix all other asset paths (js, css, png, etc.) from /get-it/ to ./
indexHtmlContent = indexHtmlContent.replace(
  /(src|href)="\/get-it\/assets\//g,
  '$1="./assets/'
);

// Also fix image paths
indexHtmlContent = indexHtmlContent.replace(
  /(src|href)="\/get-it\/(android-chrome-[0-9]+x[0-9]+\.png)"/g,
  '$1="./$2"'
);

fs.writeFileSync(indexHtmlPath, indexHtmlContent);

console.log('Fixed service worker registration path, manifest link, and all asset paths for GitHub Pages deployment');
