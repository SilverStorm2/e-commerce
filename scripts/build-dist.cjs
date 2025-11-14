#!/usr/bin/env node

/**
 * Simple static build helper for Vercel deployments.
 * 1. Cleans the dist directory.
 * 2. Copies every HTML file from the project root.
 * 3. Copies asset directories (css, images, js, public) when they exist.
 */

const path = require('path');
const fs = require('fs/promises');

const rootDir = path.join(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const assetDirs = ['css', 'images', 'js', 'public'];

async function ensureEmptyDist() {
  await fs.rm(distDir, { recursive: true, force: true });
  await fs.mkdir(distDir, { recursive: true });
}

async function copyFile(src, dest) {
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.copyFile(src, dest);
}

async function copyDirectory(src, dest) {
  await fs.mkdir(dest, { recursive: true });
  const entries = await fs.readdir(src, { withFileTypes: true });
  await Promise.all(
    entries.map(async (entry) => {
      const srcPath = path.join(src, entry.name);
      const destPath = path.join(dest, entry.name);
      if (entry.isDirectory()) {
        await copyDirectory(srcPath, destPath);
      } else if (entry.isFile()) {
        await copyFile(srcPath, destPath);
      }
    })
  );
}

async function copyHtmlFiles() {
  const entries = await fs.readdir(rootDir, { withFileTypes: true });
  const htmlFiles = entries.filter(
    (entry) => entry.isFile() && entry.name.toLowerCase().endsWith('.html')
  );

  await Promise.all(
    htmlFiles.map((entry) => {
      const src = path.join(rootDir, entry.name);
      const dest = path.join(distDir, entry.name);
      return copyFile(src, dest);
    })
  );
}

async function copyAssets() {
  await Promise.all(
    assetDirs.map(async (dirName) => {
      const src = path.join(rootDir, dirName);
      try {
        const stats = await fs.stat(src);
        if (!stats.isDirectory()) return;
        const dest = path.join(distDir, dirName);
        await copyDirectory(src, dest);
      } catch (error) {
        if (error.code !== 'ENOENT') {
          throw error;
        }
        // Directory does not exist – silently skip it.
      }
    })
  );
}

async function main() {
  await ensureEmptyDist();
  await copyHtmlFiles();
  await copyAssets();
  console.log('Static assets copied to dist/.');
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

