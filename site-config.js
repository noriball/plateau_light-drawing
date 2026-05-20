/* global window */
/**
 * Site-wide settings (edit before deploy).
 * GA4 Measurement ID: Google Analytics → Admin → Data streams → your web stream.
 */
window.PLATEAU_SITE_CONFIG = Object.freeze({
  ga4MeasurementId: 'G-62PGMZR8ND',
  /** 公開 URL のオリジン（末尾スラッシュなし）。デプロイ先に合わせて変更。 */
  siteBaseUrl: 'https://zeroworks.jp/plateau_light-drawing',
  social: Object.freeze({
    siteBaseUrl: 'https://zeroworks.jp/plateau_light-drawing',
    pagePath: '/intersection_locus.html',
    ogImagePath: '/assets/og-image.png',
    title: "Joseph Plateau's Light Drawing Simulator",
    description:
      '図形の交点が描く光の軌跡をブラウザで再現。ジョゼフ・プラトーの謎の軌跡図を体験できるインタラクティブシミュレーター。',
    locale: 'ja_JP',
    twitterCard: 'summary_large_image',
  }),
});
