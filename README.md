# 交点の軌跡 (plateau_light-drawing)

PLATEAU風の図形交点・軌跡ビジュアライザー。単一 HTML アプリ（`intersection_locus.html`）で動作します。

## 使い方

ブラウザで `intersection_locus.html` を開くか、ローカルサーバーで配信してください。

```bash
python3 -m http.server 8765
# http://localhost:8765/intersection_locus.html
```

## 構成

- `intersection_locus.html` — メインアプリ
- `presets/` — グローバルプリセット（JSON / JS）
- `vendor/` — 外部ライブラリ（math.js, ffmpeg, mp4-muxer など）
