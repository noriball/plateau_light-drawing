/* global window, document */
(function () {
  'use strict';
  const cfg = window.PLATEAU_SITE_CONFIG;
  const id = cfg && cfg.ga4MeasurementId;
  if (!id || !/^G-[A-Z0-9]+$/i.test(id) || /X{3,}/i.test(id)) return;

  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', id);

  const s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.appendChild(s);
})();
