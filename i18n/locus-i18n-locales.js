/* Extends LocusI18n with nl, es, pt, zh, ko, fr, de (English fallback for missing keys). */
(function (global) {
  'use strict';
  const OVERRIDES = {
    nl: {
      'modal.languageLabel': 'Taal',
      'modal.effectLabel': 'Effecten',
      'modal.effectDesc': 'Intersectie-effecten (beeld en geluid) inschakelen?',
      'modal.intro1': 'Een simulator die experimenten uit ca. 1820–1830 nabootst waarin Joseph Plateau beelden maakte uit lichtbanen.',
      'modal.intro2': 'Het reproduceert de combinatie van vier vormen die Plateau achterliet en laat andere combinaties proberen. Plateau noteerde geen spleetcombinaties, posities, draairichting of snelheid—andere combinaties blijven mogelijk.',
      'globalPresets.platoTitle': 'Joseph Plateaus mysterieuze schijf',
      'ui.on': 'AAN', 'ui.off': 'UIT',
    },
    es: {
      'modal.languageLabel': 'Idioma',
      'modal.effectLabel': 'Efectos',
      'modal.effectDesc': '¿Activar efectos en intersecciones (imagen y sonido)?',
      'modal.intro1': 'Un simulador que recrea experimentos de alrededor de 1820–1830 en los que Joseph Plateau generaba imágenes a partir de trayectorias de luz.',
      'modal.intro2': 'Reproduce la combinación de cuatro figuras que Plateau documentó y permite probar otras combinaciones. No registró rendijas, posiciones, sentido de giro ni velocidad; otras combinaciones siguen siendo posibles.',
      'globalPresets.platoTitle': 'El disco misterioso de Joseph Plateau',
      'ui.on': 'ON', 'ui.off': 'OFF',
    },
    pt: {
      'modal.languageLabel': 'Idioma',
      'modal.effectLabel': 'Efeitos',
      'modal.effectDesc': 'Ativar efeitos nas interseções (imagem e som)?',
      'modal.intro1': 'Um simulador que recria experiências por volta de 1820–1830 em que Joseph Plateau gerava imagens a partir de trajetórias de luz.',
      'modal.intro2': 'Reproduz a combinação de quatro figuras que Plateau registrou e permite outras combinações. Ele não registrou fendas, posições, sentido de rotação nem velocidade—outras combinações permanecem possíveis.',
      'globalPresets.platoTitle': 'O disco misterioso de Joseph Plateau',
      'ui.on': 'ON', 'ui.off': 'OFF',
    },
    zh: {
      'modal.languageLabel': '语言',
      'modal.effectLabel': '效果',
      'modal.effectDesc': '是否启用交点效果（画面与声音）？',
      'modal.intro1': '本模拟器再现十九世纪二十至三十年代约瑟夫·普拉托利用光迹生成图像的实验。',
      'modal.intro2': '它再现普拉托留下的四种图形组合，并可尝试其他组合。普拉托未记录狭缝组合、位置、旋转方向与速度，因此其他组合仍有可能。',
      'globalPresets.platoTitle': '约瑟夫·普拉托的神秘圆盘',
      'ui.on': '开', 'ui.off': '关',
    },
    ko: {
      'modal.languageLabel': '언어',
      'modal.effectLabel': '이펙트',
      'modal.effectDesc': '교점 이펙트(영상·소리)를 켜시겠습니까?',
      'modal.intro1': '1820~30년대 조지프 플라토가 빛의 궤적으로 형상을 만들던 실험을 재현하는 시뮬레이터입니다.',
      'modal.intro2': '플라토가 남긴 네 가지 도형의 조합을 재현하고 다른 조합 실험도 할 수 있습니다. 슬릿 배치·위치·회전 방향·속도는 기록되지 않아 다른 조합의 가능성도 남아 있습니다.',
      'globalPresets.platoTitle': '조지프 플라토의 신비한 원반',
      'ui.on': '켜기', 'ui.off': '끄기',
    },
    fr: {
      'modal.languageLabel': 'Langue',
      'modal.effectLabel': 'Effets',
      'modal.effectDesc': 'Activer les effets aux intersections (image et son) ?',
      'modal.intro1': 'Un simulateur qui reconstitue les expériences des années 1820–1830 où Joseph Plateau produisait des images à partir de trajectoires lumineuses.',
      'modal.intro2': 'Il reconstitue la combinaison de quatre figures laissées par Plateau et permet d\'essayer d\'autres combinaisons. Plateau n\'a pas consigné fentes, positions, sens de rotation ni vitesse—d\'autres combinaisons restent possibles.',
      'globalPresets.platoTitle': 'Le disque mystérieux de Joseph Plateau',
      'ui.on': 'OUI', 'ui.off': 'NON',
    },
    de: {
      'modal.languageLabel': 'Sprache',
      'modal.effectLabel': 'Effekte',
      'modal.effectDesc': 'Effekte an Schnittpunkten (Bild & Ton) aktivieren?',
      'modal.intro1': 'Ein Simulator, der Experimente aus den 1820er–30er Jahren nachstellt, in denen Joseph Plateau Bilder aus Lichtbahnen erzeugte.',
      'modal.intro2': 'Er stellt die von Plateau überlieferte Kombination von vier Figuren nach und ermöglicht weitere Kombinationen. Plateau hinterließ keine Spaltanordnung, Position, Drehrichtung oder Geschwindigkeit—andere Kombinationen sind möglich.',
      'globalPresets.platoTitle': 'Joseph Plateaus mysteriöse Scheibe',
      'ui.on': 'EIN', 'ui.off': 'AUS',
    },
  };
  if (global.LocusI18n && global.LocusI18n.registerLocales) {
    global.LocusI18n.registerLocales(OVERRIDES);
  }
})(typeof window !== 'undefined' ? window : global);
