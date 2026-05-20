/* global window, localStorage, navigator, document */
(function (global) {
  'use strict';

  const LANG_STORAGE_KEY = 'locus_lang';

  const LANG_OPTIONS = [
    { id: 'ja', label: '日本語', prefixes: ['ja'] },
    { id: 'en', label: 'English', prefixes: ['en'] },
    { id: 'nl', label: 'Nederlands', prefixes: ['nl'] },
    { id: 'es', label: 'Español', prefixes: ['es'] },
    { id: 'pt', label: 'Português', prefixes: ['pt'] },
    { id: 'zh', label: '中文', prefixes: ['zh'] },
    { id: 'ko', label: '한국어', prefixes: ['ko'] },
    { id: 'fr', label: 'Français', prefixes: ['fr'] },
    { id: 'de', label: 'Deutsch', prefixes: ['de'] },
  ];
  const SUPPORTED = LANG_OPTIONS.map(o => o.id);

  const I18N = {
    ja: {
      'app.pageTitle': '交点の軌跡',
      'app.h1': '交点の軌跡 — LOCUS OF INTERSECTIONS',
      'modal.languageLabel': '言語',
      'modal.effectLabel': 'エフェクト',
      'modal.effectTitle': 'エフェクト',
      'modal.effectDesc': '交点のエフェクト（映像・音）を有効にしますか？',
      'lang.ja': '日本語',
      'lang.en': 'English',
      'ui.on': 'ON',
      'ui.off': 'OFF',
      'canvas.hintDesktop': 'ホイール:拡大縮小 · Shift+ドラッグ:移動 · ダブルクリック:ビューリセット',
      'canvas.hintMobile': '1本指:移動 · 2本指:拡大縮小 · ダブルタップ:リセット · ドラッグ:図形',
      'demo.banner': 'デモ動作中',
      'globalPresets.platoTitle': 'ジョゼフ・プラトーが書き残した、謎の軌跡図',
      'collapsible.save': '保存',
      'collapsible.batch': 'ω 総当りバッチ',
      'collapsible.sliders': '軌跡・速度',
      'transport.stepBackTitle': 'コマ戻し（全停止中）',
      'transport.stepFwdTitle': 'コマ送り（全停止中）',
      'transport.playAll': '全図形を再生',
      'transport.pauseAll': '全図形を停止',
      'transport.random': 'ランダム',
      'transport.randomTitle': '図形と配置をランダムにして再生（表示エリア内に収める）',
      'transport.axes': '軸表示',
      'transport.grid': 'グリッド表示',
      'transport.timing': 'タイミング',
      'transport.view': 'ビュー',
      'transport.timingReset': 'タイミングリセット',
      'transport.viewReset': 'ビューリセット',
      'transport.axesShow': '座標軸を表示',
      'transport.axesHide': '座標軸を非表示',
      'transport.gridShow': 'グリッドを表示',
      'transport.gridHide': 'グリッドを非表示',
      'transport.reset': 'リセット',
      'transport.timingResetTitle': '全図形の回転角度を0に揃える（軌跡は残す）',
      'transport.viewResetTitle': '拡大・移動を初期状態に戻す',
      'sliders.speed': '再生速度',
      'sliders.trailWidth': '軌跡の太さ',
      'sliders.duration': '表示時間',
      'sliders.sec': '秒',
      'pairs.title': '交点ペア',
      'pairs.hint': 'チェックで軌跡 · 行クリックでエフェクト編集',
      'pairs.selectPair': 'ペアを選択してください',
      'pairs.pairFx': 'ペア {a}∩{b} のエフェクト',
      'pairs.applyAll': 'この設定を全ペアに適用',
      'pairs.effect': 'エフェクト',
      'pairs.fxEnable': '{label}エフェクトを有効',
      'pairs.fxDisable': '{label}エフェクトを無効',
      'pairs.fxTooltip': '{name} — {desc}（音: {sound}）',
      'shape.tab': '図形 {n}',
      'shape.deleteTab': 'このタブを削除',
      'shape.addTab': '図形を追加',
      'shape.resume': '▶ 再開',
      'shape.pause': '⏸ 停止',
      'shape.visible': '表示中',
      'shape.hidden': '非表示',
      'shape.preset': 'プリセット（クリックで適用）',
      'shape.details': '詳細',
      'shape.duplicate': '複製',
      'shape.presetSettings': '{name} の設定',
      'shape.apply': '適用',
      'shape.cardName': '図形 {n}',
      'shape.formulaLbl': '式',
      'shape.tRangeLbl': 't 範囲',
      'shape.centerLbl': '図形の中心 ●',
      'shape.pivotLbl': '回転の軸 ⊕',
      'shape.omegaLbl': '回転速度 ω',
      'shape.dupLbl': '複製',
      'shape.formulaHelp': 'カンマ<b>なし</b> → 極座標 <b>r(t)</b>（数値だけなら<b>半径</b>）&nbsp;／&nbsp;カンマ<b>あり</b> → <b>x(t), y(t)</b> &nbsp;&nbsp;数式の原点 = 図形の中心 (fx, fy)',
      'shape.tHelp': '<b>t</b>: パラメータ範囲 &nbsp;（<b>pi</b>・<b>2*pi</b> 使用可）&nbsp;&nbsp;<b>N</b>: 分割数（多いほど滑らか）',
      'shape.centerHelp': '数式座標の原点（複製時は配置の基準）　キャンバス上でドラッグ可',
      'shape.pivotHelp': 'この点を中心に回転　ドラッグ可 &nbsp;&nbsp;(0,0) = 中心　+x = 右　+y = 上',
      'shape.omegaHelp': '<b>正</b> = 反時計回り &nbsp; <b>負</b> = 時計回り &nbsp; 0 = 停止',
      'shape.dupHelp': '図形の中心の位置',
      'save.snapshot': 'スナップショット',
      'save.name': '保存名',
      'save.placeholder': '（省略可）',
      'save.btn': '📷 保存',
      'save.export': '書き出し',
      'save.png': 'PNG出力',
      'save.pngTitle': '現在のキャンバスを PNG 画像で保存',
      'save.recStart': '● MP4録画',
      'save.recStop': '■ 停止',
      'save.settings': '設定ファイル',
      'save.jsonOut': '設定の保存',
      'save.jsonIn': '設定の読み込み',
      'save.jsonOutTitle': '図形・表示・軌跡・ペアなどの設定をファイルに保存',
      'save.jsonInTitle': '保存した設定ファイルを読み込む',
      'save.savedLabel': '保存済み（クリックで復元 / ★ = 起動時に読込）',
      'save.restore': '復元',
      'save.homeTitle': '起動時にこの状態を読込',
      'batch.title': 'ω 総当りバッチ（図形ごと・軌跡のみ・ZIP）',
      'batch.omegaRange': 'ω 範囲',
      'batch.to': '〜',
      'batch.step': '刻み',
      'batch.seconds': '秒数',
      'batch.perPattern': '秒 / パターン',
      'batch.desc': 'ω −5〜5・刻み0.1 → 101通り/図形。2図形なら 101×101 = 10,201 通り（(通り数)^図形数）',
      'batch.export': 'バッチ ZIP 書き出し',
      'batch.cancel': 'キャンセル',
      'batch.running': '実行中…',
      'batch.fail': 'バッチ書き出し失敗: {msg}',
      'batch.alertInput': 'ω範囲・刻み・秒数を正しく入力してください',
      'batch.alertFormula': '式エラーの図形があるためバッチできません',
      'batch.alertTooMany': '組み合わせが {total} 通りあり多すぎます（上限 20000）',
      'batch.confirmLong': '{est}\n\n数時間かかる場合があります。続行しますか？',
      'batch.confirm': '{est}\n\n続行しますか？',
      'batch.est': '図形 {shapes} 個 × ω {omegaCount} 通り = {total} パターン\n各 {duration} 秒シミュレート（軌跡のみ PNG + 同名 JSON）\nZIP で一括ダウンロードします。',
      'batch.progress.elapsedMin': ' · 経過 {m}分{s}秒',
      'batch.progress.elapsedSec': ' · 経過 {s}秒',
      'batch.progress.core': '処理中 {done} / {total}（{pct}%）{elapsed}',
      'batch.progress.started': '開始しました（全 {total} パターン）',
      'batch.progress.simulating': 'シミュレート中 {i} / {total} · ω: {omegas}',
      'batch.progress.cancelled': 'キャンセルしました',
      'batch.progress.zipping': 'ZIP を作成中…',
      'batch.progress.done': '完了: {total} パターン',
      'batch.progress.error': 'エラー',
      'shape.deleteTabAria': '図形 {n} を削除',
      'save.defaultName': '保存 {n}',
      'preset.freehand': '自由記述',
      'preset.line': '直線',
      'preset.circle': '円',
      'preset.astroid': 'アステロイド',
      'preset.star': '星',
      'preset.poly': '多角形',
      'preset.parabola': '放物線',
      'preset.rose': 'ローズ',
      'preset.field.corners': '角',
      'preset.field.sides': '辺',
      'preset.field.width': '幅',
      'preset.field.height': '高さ',
      'hint.radiusLiteral': 'この値は<b>半径 r</b>です（直径ではありません。直径にしたいときは半分の値を入れてください）。',
      'hint.polyRadius': 'poly の第2引数 <b>{val}</b> は正多角形の<b>半径</b>（外接円の半径）です。',
      'hint.starRadius': 'starX / starY の第3引数 <b>{val}</b> は星形の<b>半径</b>（外接円）です。',
      'hint.cardScale': '係数 <b>{val}</b> はスケール（極座標で先端までの最大距離 ≈ <b>{max}</b>）です。',
      'hint.roseAmp': '係数 <b>{amp}</b> は極座標での<b>最大半径</b>（花弁の長さ）です。',
      'hint.polarDefault': '極座標 <b>r(t)</b>：数値だけのときは<b>半径</b>、式のときは t の関数です。',
      'hint.xyCircleRadius': 'x,y の係数 <b>{r1}</b> は円の<b>半径</b>です。',
      'hint.starRadiusShort': 'starX / starY の第3引数 <b>{val}</b> は<b>半径</b>です。',
      'hint.polyRadiusShort': 'poly の第2引数 <b>{val}</b> は<b>半径</b>です。',
      'hint.astroidRadius': '係数 <b>{val}</b> はアステロイド頂点までの<b>半径</b>です。',
      'hint.lissajousAmp': '各係数（例 <b>{val}</b>）は軸方向の<b>振幅</b>（半幅）です。',
      'hint.lineLength': '直線：長さは <b>t 範囲</b> で決まります（半径の概念はありません）。',
      'rec.h264Encode': 'H.264 変換中…',
      'rec.h264Recording': 'H.264 録画中',
      'rec.mp4Export': 'MP4 書き出し中…',
      'rec.mp4Fail': 'MP4 の書き出しに失敗しました: {msg}',
      'rec.error': '録画中にエラーが発生しました。',
      'rec.webmNote': '録画中（停止後 H.264 変換）',
      'rec.unsupported': 'このブラウザでは録画に対応していません。\nChrome / Firefox / Safari の最新版をお試しください。',
      'import.fail': '設定の読み込みに失敗しました: {msg}',
      'startup.error': '起動エラー: {msg}',
      'fx.0.name': '波紋', 'fx.0.desc': '広がるリングと中心の光',
      'fx.1.name': '十字', 'fx.1.desc': '回転する十字のフラッシュ',
      'fx.2.name': '連波', 'fx.2.desc': '重なる複数の波紋',
      'fx.3.name': '火花', 'fx.3.desc': '放射状に飛ぶ火花',
      'fx.4.name': '彗星', 'fx.4.desc': '横に流れる光の筋',
      'fx.5.name': '脈動', 'fx.5.desc': '中心から広がる光の塊',
      'fx.6.name': '菱形', 'fx.6.desc': 'くり抜いた菱形の閃光',
      'fx.7.name': '渦', 'fx.7.desc': '渦を描くアーク',
      'fx.8.name': '衝撃', 'fx.8.desc': '二重の衝撃波',
      'fx.9.name': '稲妻', 'fx.9.desc': 'ジグザグの稲妻',
      'sound.0': 'カリンバ', 'sound.1': 'ベル', 'sound.2': '木', 'sound.3': 'ポップ',
      'sound.4': 'マリンバ', 'sound.5': 'チャイム', 'sound.6': 'そよ風', 'sound.7': '星',
      'sound.8': 'ノック', 'sound.9': '笛',
    },
    en: {
      'app.pageTitle': 'Locus of Intersections',
      'app.h1': 'Locus of Intersections',
      'modal.languageLabel': 'Language',
      'modal.effectLabel': 'Effects',
      'modal.effectTitle': 'Effects',
      'modal.effectDesc': 'Enable intersection effects (visual and sound)?',
      'modal.intro1': 'A simulator that recreates experiments from around the 1820s–30s in which Joseph Plateau produced images from paths of light.',
      'modal.intro2': 'It reproduces the combination of four figures Plateau documented, and lets you try other combinations. He did not record slit arrangements, positions, rotation direction, or speed—so other combinations remain possible.',
      'lang.ja': '日本語',
      'lang.en': 'English',
      'ui.on': 'ON',
      'ui.off': 'OFF',
      'canvas.hintDesktop': 'Wheel: zoom · Shift+drag: pan · Double-click: reset view',
      'canvas.hintMobile': '1 finger: pan · 2 fingers: zoom · Double-tap: reset · Drag: shapes',
      'demo.banner': 'Demo running',
      'globalPresets.platoTitle': 'The mysterious locus diagram left behind by Joseph Phaetau',
      'collapsible.save': 'Save',
      'collapsible.batch': 'ω batch sweep',
      'collapsible.sliders': 'Trail & speed',
      'transport.stepBackTitle': 'Step back (while all paused)',
      'transport.stepFwdTitle': 'Step forward (while all paused)',
      'transport.playAll': 'Play all shapes',
      'transport.pauseAll': 'Pause all shapes',
      'transport.random': 'Random',
      'transport.randomTitle': 'Randomize shapes and layout (fit in view)',
      'transport.axes': 'Axes',
      'transport.grid': 'Grid',
      'transport.timing': 'Timing',
      'transport.view': 'View',
      'transport.timingReset': 'Timing Reset',
      'transport.viewReset': 'View Reset',
      'transport.axesShow': 'Show axes',
      'transport.axesHide': 'Hide axes',
      'transport.gridShow': 'Show grid',
      'transport.gridHide': 'Hide grid',
      'transport.reset': 'Reset',
      'transport.timingResetTitle': 'Reset all rotation angles to 0 (keep trails)',
      'transport.viewResetTitle': 'Reset zoom and pan',
      'sliders.speed': 'Playback speed',
      'sliders.trailWidth': 'Trail width',
      'sliders.duration': 'Display duration',
      'sliders.sec': 's',
      'pairs.title': 'Intersection pairs',
      'pairs.hint': 'Check for trails · Click row to edit effects',
      'pairs.selectPair': 'Select a pair',
      'pairs.pairFx': 'Effects for pair {a}∩{b}',
      'pairs.applyAll': 'Apply to all pairs',
      'pairs.effect': 'Effects',
      'pairs.fxEnable': 'Enable {label} effects',
      'pairs.fxDisable': 'Disable {label} effects',
      'pairs.fxTooltip': '{name} — {desc} (sound: {sound})',
      'shape.tab': 'Shape {n}',
      'shape.deleteTab': 'Delete this tab',
      'shape.addTab': 'Add shape',
      'shape.resume': '▶ Resume',
      'shape.pause': '⏸ Pause',
      'shape.visible': 'Visible',
      'shape.hidden': 'Hidden',
      'shape.preset': 'Presets (click to apply)',
      'shape.details': 'Details',
      'shape.duplicate': 'Duplicate',
      'shape.presetSettings': '{name} settings',
      'shape.apply': 'Apply',
      'shape.cardName': 'Shape {n}',
      'shape.formulaLbl': 'Formula',
      'shape.tRangeLbl': 't range',
      'shape.centerLbl': 'Shape center ●',
      'shape.pivotLbl': 'Rotation pivot ⊕',
      'shape.omegaLbl': 'Angular speed ω',
      'shape.dupLbl': 'Copies',
      'shape.formulaHelp': 'No comma → polar <b>r(t)</b> (number alone = <b>radius</b>) &nbsp;/&nbsp; With comma → <b>x(t), y(t)</b> &nbsp;&nbsp; Formula origin = shape center (fx, fy)',
      'shape.tHelp': '<b>t</b>: parameter range &nbsp; (<b>pi</b>, <b>2*pi</b> allowed) &nbsp;&nbsp;<b>N</b>: samples (higher = smoother)',
      'shape.centerHelp': 'Formula origin (copy placement reference). Drag on canvas.',
      'shape.pivotHelp': 'Rotate about this point. Drag OK. &nbsp;&nbsp;(0,0) = center, +x = right, +y = up',
      'shape.omegaHelp': '<b>+</b> = counter-clockwise &nbsp; <b>−</b> = clockwise &nbsp; 0 = stopped',
      'shape.dupHelp': 'Position of shape center',
      'save.snapshot': 'Snapshot',
      'save.name': 'Name',
      'save.placeholder': '(optional)',
      'save.btn': '📷 Save',
      'save.export': 'Export',
      'save.png': 'Export PNG',
      'save.pngTitle': 'Save current canvas as PNG',
      'save.recStart': '● Record MP4',
      'save.recStop': '■ Stop',
      'save.settings': 'Settings file',
      'save.jsonOut': 'Export settings',
      'save.jsonIn': 'Import settings',
      'save.jsonOutTitle': 'Save shapes, view, trails, pairs, etc. to a file',
      'save.jsonInTitle': 'Load a saved settings file',
      'save.savedLabel': 'Saved (click to restore / ★ = load on startup)',
      'save.restore': 'Restore',
      'save.homeTitle': 'Load this state on startup',
      'batch.title': 'ω batch sweep (per shape · trails only · ZIP)',
      'batch.omegaRange': 'ω range',
      'batch.to': 'to',
      'batch.step': 'step',
      'batch.seconds': 'Duration',
      'batch.perPattern': 's / pattern',
      'batch.desc': 'ω −5…5 · step 0.1 → 101 combos/shape. With 2 shapes: 101×101 = 10,201 ((combos)^(shapes))',
      'batch.export': 'Export batch ZIP',
      'batch.cancel': 'Cancel',
      'batch.running': 'Running…',
      'batch.fail': 'Batch export failed: {msg}',
      'batch.alertInput': 'Enter valid ω range, step, and duration',
      'batch.alertFormula': 'Cannot batch: a shape has a formula error',
      'batch.alertTooMany': 'Too many combinations: {total} (max 20000)',
      'batch.confirmLong': '{est}\n\nThis may take hours. Continue?',
      'batch.confirm': '{est}\n\nContinue?',
      'batch.est': '{shapes} shapes × ω {omegaCount} combos = {total} patterns\n{duration}s simulation each (trail PNG + JSON)\nDownload as one ZIP.',
      'batch.progress.elapsedMin': ' · Elapsed {m}m{s}s',
      'batch.progress.elapsedSec': ' · Elapsed {s}s',
      'batch.progress.core': 'Processing {done} / {total} ({pct}%){elapsed}',
      'batch.progress.started': 'Started ({total} patterns)',
      'batch.progress.simulating': 'Simulating {i} / {total} · ω: {omegas}',
      'batch.progress.cancelled': 'Cancelled',
      'batch.progress.zipping': 'Creating ZIP…',
      'batch.progress.done': 'Done: {total} patterns',
      'batch.progress.error': 'Error',
      'shape.deleteTabAria': 'Delete shape {n}',
      'save.defaultName': 'Save {n}',
      'preset.freehand': 'Freehand',
      'preset.line': 'Line',
      'preset.circle': 'Circle',
      'preset.astroid': 'Astroid',
      'preset.star': 'Star',
      'preset.poly': 'Polygon',
      'preset.parabola': 'Parabola',
      'preset.rose': 'Rose',
      'preset.field.corners': 'Corners',
      'preset.field.sides': 'Sides',
      'preset.field.width': 'Width',
      'preset.field.height': 'Height',
      'hint.radiusLiteral': 'This value is <b>radius r</b> (not diameter; use half the value for diameter).',
      'hint.polyRadius': 'poly 2nd argument <b>{val}</b> is the polygon <b>radius</b> (circumradius).',
      'hint.starRadius': 'starX / starY 3rd argument <b>{val}</b> is the star <b>radius</b> (circumcircle).',
      'hint.cardScale': 'Coefficient <b>{val}</b> is scale (max distance to tip ≈ <b>{max}</b>).',
      'hint.roseAmp': 'Coefficient <b>{amp}</b> is <b>max radius</b> in polar form (petal length).',
      'hint.polarDefault': 'Polar <b>r(t)</b>: a number alone means <b>radius</b>; otherwise a function of t.',
      'hint.xyCircleRadius': 'Coefficients <b>{r1}</b> in x,y are the circle <b>radius</b>.',
      'hint.starRadiusShort': 'starX / starY 3rd argument <b>{val}</b> is <b>radius</b>.',
      'hint.polyRadiusShort': 'poly 2nd argument <b>{val}</b> is <b>radius</b>.',
      'hint.astroidRadius': 'Coefficient <b>{val}</b> is <b>radius</b> to astroid vertex.',
      'hint.lissajousAmp': 'Each coefficient (e.g. <b>{val}</b>) is axis <b>amplitude</b> (half-width).',
      'hint.lineLength': 'Line: length is set by <b>t range</b> (no radius concept).',
      'rec.h264Encode': 'Encoding H.264…',
      'rec.h264Recording': 'Recording H.264',
      'rec.mp4Export': 'Exporting MP4…',
      'rec.mp4Fail': 'MP4 export failed: {msg}',
      'rec.error': 'An error occurred while recording.',
      'rec.webmNote': 'Recording (H.264 after stop)',
      'rec.unsupported': 'Recording is not supported in this browser.\nTry the latest Chrome, Firefox, or Safari.',
      'import.fail': 'Failed to import settings: {msg}',
      'startup.error': 'Startup error: {msg}',
      'fx.0.name': 'Ripple', 'fx.0.desc': 'Expanding rings and center glow',
      'fx.1.name': 'Cross', 'fx.1.desc': 'Rotating cross flash',
      'fx.2.name': 'Waves', 'fx.2.desc': 'Overlapping ripples',
      'fx.3.name': 'Sparks', 'fx.3.desc': 'Radiating sparks',
      'fx.4.name': 'Comet', 'fx.4.desc': 'Horizontal light streak',
      'fx.5.name': 'Pulse', 'fx.5.desc': 'Pulsing glow from center',
      'fx.6.name': 'Diamond', 'fx.6.desc': 'Hollow diamond flash',
      'fx.7.name': 'Vortex', 'fx.7.desc': 'Swirling arcs',
      'fx.8.name': 'Shock', 'fx.8.desc': 'Double shockwave',
      'fx.9.name': 'Lightning', 'fx.9.desc': 'Zigzag lightning',
      'sound.0': 'Kalimba', 'sound.1': 'Bell', 'sound.2': 'Wood', 'sound.3': 'Pop',
      'sound.4': 'Marimba', 'sound.5': 'Chime', 'sound.6': 'Breeze', 'sound.7': 'Star',
      'sound.8': 'Knock', 'sound.9': 'Flute',
    },
  };

  function registerLocales(overridesById) {
    Object.keys(overridesById || {}).forEach(id => {
      if (!SUPPORTED.includes(id) || id === 'ja' || id === 'en') return;
      I18N[id] = { ...I18N.en, ...overridesById[id] };
    });
  }

  /** @deprecated First-visit default is always ja; kept for API compatibility. */
  function detectBrowserLang() {
    return 'ja';
  }

  function langLabel(langId) {
    const opt = LANG_OPTIONS.find(o => o.id === langId);
    return opt ? opt.label : langId;
  }

  let currentLang = 'ja';
  let langPickerOutsideCloser = null;

  function interpolate(s, vars) {
    if (!vars) return s;
    Object.keys(vars).forEach(k => {
      s = s.replace(new RegExp(`\\{${k}\\}`, 'g'), String(vars[k]));
    });
    return s;
  }

  function t(key, vars) {
    const bag = I18N[currentLang] || I18N.en || I18N.ja;
    let s = bag[key];
    if (s == null) s = I18N.en[key];
    if (s == null) s = I18N.ja[key];
    if (s == null) s = key;
    return interpolate(s, vars);
  }

  /** Panel UI labels — always English regardless of locale */
  function L(key, vars) {
    let s = (I18N.en || {})[key];
    if (s == null) s = key;
    return interpolate(s, vars);
  }

  const MODAL_INTRO_JA = [
    '1820〜30年頃、ジョゼフ・プラトーが実験していた光の軌跡による像を生成する実験を再現するシミュレーターです。',
    'プラトーが書き残した、4つの図形の組み合わせを再現し、他の組み合わせ実験も行えるようにしました。プラトーはスリットの組み合わせや位置関係、回転方向と回転速度を書き残していないので、別の組み合わせの可能性もあります。',
  ];

  function applyModalIntroI18n() {
    const p1 = document.getElementById('startup-intro-1');
    const p2 = document.getElementById('startup-intro-2');
    if (currentLang === 'ja') {
      if (p1) p1.textContent = MODAL_INTRO_JA[0];
      if (p2) p2.textContent = MODAL_INTRO_JA[1];
    } else {
      if (p1) p1.textContent = t('modal.intro1');
      if (p2) p2.textContent = t('modal.intro2');
    }
  }

  function applyStaticI18n() {
    if (!document.documentElement) return;
    document.documentElement.lang = currentLang;
    document.title = "Joseph Plateau's Light Drawing Simulator";
    applyModalIntroI18n();
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const attr = el.getAttribute('data-i18n-attr');
      const text = t(key);
      if (attr) el.setAttribute(attr, text);
      else el.textContent = text;
    });
    document.querySelectorAll('[data-i18n-label]').forEach(el => {
      el.textContent = L(el.getAttribute('data-i18n-label'));
    });
    const saveHdr = document.querySelector('#saveCollapsibleHdr span[data-i18n-label]');
    if (saveHdr) saveHdr.textContent = L('collapsible.save');
    const batchHdr = document.querySelector('#batchCollapsibleHdr span[data-i18n-label]');
    if (batchHdr) batchHdr.textContent = L('collapsible.batch');
    const slidersSpan = document.querySelector('#slidersCollapsibleHdr span:last-child');
    if (slidersSpan) slidersSpan.textContent = L('collapsible.sliders');
    const offBtn = document.getElementById('soundPrefOff');
    const onBtn = document.getElementById('soundPrefOn');
    if (offBtn) offBtn.textContent = t('ui.off');
    if (onBtn) onBtn.textContent = t('ui.on');
  }

  function closeLangPickerMenu() {
    const menu = document.getElementById('langPickerMenu');
    const btn = document.getElementById('langPickerBtn');
    if (menu) menu.hidden = true;
    if (btn) btn.setAttribute('aria-expanded', 'false');
    if (langPickerOutsideCloser) {
      document.removeEventListener('pointerdown', langPickerOutsideCloser, true);
      langPickerOutsideCloser = null;
    }
  }

  function openLangPickerMenu() {
    const menu = document.getElementById('langPickerMenu');
    const btn = document.getElementById('langPickerBtn');
    if (!menu || !btn) return;
    menu.hidden = false;
    btn.setAttribute('aria-expanded', 'true');
    const picker = btn.closest('.lang-picker');
    if (picker) {
      requestAnimationFrame(() => {
        picker.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      });
    }
    if (langPickerOutsideCloser) document.removeEventListener('pointerdown', langPickerOutsideCloser, true);
    langPickerOutsideCloser = e => {
      const t = e.target;
      if (t && typeof t.closest === 'function' && t.closest('.lang-picker')) return;
      closeLangPickerMenu();
    };
    document.addEventListener('pointerdown', langPickerOutsideCloser, true);
  }

  function updateLangPickerUI() {
    const label = document.getElementById('langPickerLabel');
    if (label) label.textContent = langLabel(currentLang);
    const menu = document.getElementById('langPickerMenu');
    if (!menu) return;
    menu.querySelectorAll('.lang-picker-item').forEach(item => {
      const active = item.getAttribute('data-lang') === currentLang;
      item.classList.toggle('active-choice', active);
      item.setAttribute('aria-selected', active ? 'true' : 'false');
    });
  }

  function buildLangPickerMenu(onPick) {
    const menu = document.getElementById('langPickerMenu');
    if (!menu) return;
    menu.innerHTML = '';
    LANG_OPTIONS.forEach(opt => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'lang-picker-item reset-btn';
      btn.setAttribute('role', 'option');
      btn.setAttribute('data-lang', opt.id);
      btn.textContent = opt.label;
      btn.addEventListener('click', () => {
        closeLangPickerMenu();
        if (opt.id !== currentLang) setLang(opt.id, { onChange: onPick });
        else applyStaticI18n();
      });
      li.appendChild(btn);
      menu.appendChild(li);
    });
    updateLangPickerUI();
  }

  function initLangPicker(onPick) {
    const toggleBtn = document.getElementById('langPickerBtn');
    if (!toggleBtn || toggleBtn.dataset.wired === '1') {
      updateLangPickerUI();
      return;
    }
    toggleBtn.dataset.wired = '1';
    buildLangPickerMenu(onPick);
    toggleBtn.addEventListener('click', e => {
      e.stopPropagation();
      const menu = document.getElementById('langPickerMenu');
      if (menu && menu.hidden) openLangPickerMenu();
      else closeLangPickerMenu();
    });
  }

  /** @deprecated use updateLangPickerUI */
  function syncLangPickButtons() {
    updateLangPickerUI();
  }

  function getVisualFxStyles() {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(id => ({
      id,
      name: L(`fx.${id}.name`),
      desc: t(`fx.${id}.desc`),
    }));
  }

  function initLang() {
    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved && SUPPORTED.includes(saved)) currentLang = saved;
      else currentLang = 'ja';
    } catch {
      currentLang = 'ja';
    }
    applyStaticI18n();
  }

  function setLang(lang, opts) {
    if (!SUPPORTED.includes(lang)) {
      updateLangPickerUI();
      return;
    }
    const changed = lang !== currentLang;
    currentLang = lang;
    try { localStorage.setItem(LANG_STORAGE_KEY, lang); } catch { /* ignore */ }
    applyStaticI18n();
    updateLangPickerUI();
    if (changed && opts && opts.onChange) opts.onChange(lang);
  }

  global.LocusI18n = {
    t,
    L,
    setLang,
    initLang,
    applyStaticI18n,
    applyModalIntroI18n,
    syncLangPickButtons,
    updateLangPickerUI,
    initLangPicker,
    closeLangPickerMenu,
    registerLocales,
    getVisualFxStyles,
    detectBrowserLang,
    langLabel,
    LANG_OPTIONS,
    get lang() { return currentLang; },
    LANG_STORAGE_KEY,
  };
})(typeof window !== 'undefined' ? window : global);
