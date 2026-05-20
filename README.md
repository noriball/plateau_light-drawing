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

## 構成

- `intersection_locus.html` — メインアプリ
- `site-config.js` — GA4 測定 ID などサイト設定
- `site-analytics.js` — gtag 読み込み
- `presets/` — グローバルプリセット（JSON / JS）
- `vendor/` — 外部ライブラリ（math.js, ffmpeg, mp4-muxer など）
