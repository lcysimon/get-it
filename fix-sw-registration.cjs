// Fix service worker registration path and manifest link for GitHub Pages subdirectory deployment
// This script runs after vite build to correct paths for GitHub Pages

const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const registerSWPath = path.join(distDir, 'registerSW.js');
const indexHtmlPath = path.join(distDir, 'index.html');

// Fix registerSW.js
let registerSWContent = fs.readFileSync(registerSWPath, 'utf-8');
// Fix service worker path from absolute to relative
registerSWContent = registerSWContent.replace(
  /navigator\.serviceWorker\.register\(\s*'\/get-it\/sw\.js'/g,
  "navigator.serviceWorker.register('./sw.js'"
);
// Fix scope to match manifest's absolute scope (/get-it/)
// For GitHub Pages subdirectory, scope must be absolute to match manifest
registerSWContent = registerSWContent.replace(
  /\{ scope: '(?:\.\/|\/get-it\/)' \}/g,
  "{ scope: '/get-it/' }"
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

// Keep manifest.webmanifest with absolute paths for scope and start_url
// (Chrome PWA detection requires absolute paths from origin for subdirectory deployments)
// The HTML paths are relative, but manifest scope/start_url must be absolute

console.log('Fixed service worker registration path, manifest link, and all asset paths for GitHub Pages deployment');
