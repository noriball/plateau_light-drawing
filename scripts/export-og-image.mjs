#!/usr/bin/env node
/**
 * Export assets/og-image.png from the real simulator (4 global presets).
 * Usage: node scripts/export-og-image.mjs
 */
import { spawn } from 'node:child_process';
import { createWriteStream } from 'node:fs';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outPath = path.join(root, 'assets', 'og-image.png');
const port = 8765;
const url = `http://127.0.0.1:${port}/intersection_locus.html?exportOg=1`;

let server;
function startServer() {
  return new Promise((resolve, reject) => {
    server = spawn('python3', ['-m', 'http.server', String(port)], {
      cwd: root,
      stdio: 'ignore',
    });
    server.on('error', reject);
    setTimeout(resolve, 600);
  });
}

async function main() {
  let playwright;
  try {
    playwright = await import('playwright');
  } catch {
    console.error('Install Playwright first: npx playwright install chromium');
    process.exit(1);
  }

  await mkdir(path.dirname(outPath), { recursive: true });
  await startServer();

  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  const downloadPromise = page.waitForEvent('download', { timeout: 180000 });
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 180000 });
  const download = await downloadPromise;
  await download.saveAs(outPath);
  await browser.close();
  server?.kill();
  console.log('Wrote', outPath);
}

main().catch((err) => {
  server?.kill();
  console.error(err);
  process.exit(1);
});
