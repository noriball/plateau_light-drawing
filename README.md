# 交点の軌跡 (plateau_light-drawing)

PLATEAU風の図形交点・軌跡ビジュアライザー。単一 HTML アプリ（`intersection_locus.html`）で動作します。

## 使い方

ブラウザで `intersection_locus.html` を開くか、ローカルサーバーで配信してください。

```bash
python3 -m http.server 8765
# http://localhost:8765/intersection_locus.html
```

## Google Analytics (GA4)

1. [Google Analytics](https://analytics.google.com/) で Web データストリームを作成し、測定 ID（`G-XXXXXXXXXX`）を取得する
2. `site-config.js` の `ga4MeasurementId` をその ID に書き換える

プレースホルダ（`G-XXXXXXXXXX`）のままではタグは読み込まれません。

## SNS（OGP / X カード）

`intersection_locus.html` の `<head>` に Open Graph / Twitter Card のメタタグがあります。本番は `https://zeroworks.jp/plateau_light-drawing/`。URL を変えるときは次を揃えてください。

- `site-config.js` の `siteBaseUrl` / `social.*`
- `intersection_locus.html` の `canonical`・`og:url`・`og:image`・`twitter:image`

**OG 画像**はアプリの no.1〜4 軌跡サムネから自動合成します（AI 生成画像は使いません）。

```bash
# Playwright が必要: npx playwright install chromium
node scripts/export-og-image.mjs
# → assets/og-image.png をコミット
```

ブラウザだけで行う場合: `intersection_locus.html?exportOg=1` を開くと `og-image.png` がダウンロードされます。

## 構成

- `intersection_locus.html` — メインアプリ
- `site-config.js` — GA4 測定 ID・公開 URL・SNS 文言
- `assets/og-image.png` — SNS プレビュー用（上記スクリプトで更新）
- `site-analytics.js` — gtag 読み込み
- `presets/` — グローバルプリセット（JSON / JS）
- `vendor/` — 外部ライブラリ（math.js, ffmpeg, mp4-muxer など）
