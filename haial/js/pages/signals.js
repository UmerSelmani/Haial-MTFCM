/* ═══════════════════════════════════════
   HAIAL v9.4 — Signals Page (MTFCM Gateway)
   Bridge between Haial compliance + MTFCM trading
   ═══════════════════════════════════════ */

function renderSignalsPage(t) {
  var features = [
    { icon: '📈', title: t.sf1, desc: t.sf1d },
    { icon: '🕌', title: t.sf2, desc: t.sf2d },
    { icon: '🎯', title: t.sf3, desc: t.sf3d },
    { icon: '⚡', title: t.sf4, desc: t.sf4d },
  ];

  // Build halal pairs from both Tier 1 + Extended
  var halalFromDb = COINS.filter(function(c) { return c.category === 'Halal'; });
  var cautionFromDb = COINS.filter(function(c) { return c.category === 'Review' || c.category === 'Preliminary'; });

  // Extended halal coins
  var extHalal = (typeof EXTENDED_COINS !== 'undefined') ? EXTENDED_COINS.filter(function(c) {
    return c.verdict === 'halal';
  }) : [];

  var extCaution = (typeof EXTENDED_COINS !== 'undefined') ? EXTENDED_COINS.filter(function(c) {
    return c.verdict === 'caution';
  }) : [];

  // Deduplicate (extended may overlap with main DB)
  var dbTickers = COINS.map(function(c) { return c.ticker; });
  var uniqueExtHalal = extHalal.filter(function(c) { return dbTickers.indexOf(c.ticker) === -1; });
  var uniqueExtCaution = extCaution.filter(function(c) { return dbTickers.indexOf(c.ticker) === -1; });

  var totalHalal = halalFromDb.length + uniqueExtHalal.length;
  var totalCaution = uniqueExtCaution.length;

  // Pair cards — main DB halal
  var halalPairCards = halalFromDb.map(function(c) {
    return '<div class="signal-pair signal-pair-halal">' +
      '<span class="signal-pair-check">' + Icons.check(12) + '</span>' +
      '<span class="signal-pair-ticker">' + c.ticker + '/USDT</span>' +
      '<span class="signal-pair-score">' + c.proof.score + '</span>' +
    '</div>';
  }).join('');

  // Extended halal pairs
  var extPairCards = uniqueExtHalal.map(function(c) {
    return '<div class="signal-pair signal-pair-halal">' +
      '<span class="signal-pair-check">' + Icons.check(12) + '</span>' +
      '<span class="signal-pair-ticker">' + c.ticker + '/USDT</span>' +
      '<span class="signal-pair-src">' + c.source + '</span>' +
    '</div>';
  }).join('');

  // Caution pairs
  var cautionPairCards = uniqueExtCaution.map(function(c) {
    return '<div class="signal-pair signal-pair-caution">' +
      '<span class="signal-pair-warn">' + Icons.alert(12) + '</span>' +
      '<span class="signal-pair-ticker">' + c.ticker + '/USDT</span>' +
      '<span class="signal-pair-src">' + c.source + '</span>' +
    '</div>';
  }).join('');

  return '\
    <div class="page-container">\
      <div class="card animate-fade-up" style="padding:24px">\
        <div class="text-center mb-20">\
          <h1 class="section-title">\uD83D\uDCCA ' + t.signalsTitle + '</h1>\
          <p class="section-subtitle">' + t.signalsDesc + '</p>\
        </div>\
\
        <div class="grid-features mb-16">\
          ' + features.map(function(f, i) { return '\
            <div class="card-accent glow-card animate-fade-up stagger-' + (i+1) + '">\
              <div class="feature-emoji">' + f.icon + '</div>\
              <h3 class="feature-title">' + f.title + '</h3>\
              <p class="feature-desc">' + f.desc + '</p>\
            </div>';
          }).join('') + '\
        </div>\
\
        <!-- MTFCM Launch Button -->\
        <div class="mtfcm-launch-box mb-20">\
          <div class="mtfcm-launch-inner">\
            <div class="mtfcm-launch-info">\
              <h3>' + t.openMtfcm + '</h3>\
              <p>' + t.mtfcmDesc + '</p>\
            </div>\
            <a href="./mtfcm/" class="mtfcm-launch-btn">\
              ' + Icons.zap(16) + ' ' + t.launchMtfcm + '\
            </a>\
          </div>\
          <div class="mtfcm-launch-stats">\
            <span>\u2705 ' + totalHalal + ' ' + t.halalPairsCount + '</span>\
            <span>\u26A0\uFE0F ' + totalCaution + ' ' + t.cautionPairsCount + '</span>\
          </div>\
        </div>\
\
        <!-- Halal Approved Pairs -->\
        <div class="halal-pairs-box mb-12">\
          <h3 style="font-weight:700;font-size:13px;margin-bottom:10px;color:var(--text-accent-dark)">\
            \u2705 ' + t.halalPairs + ' (' + totalHalal + ')\
          </h3>\
          <div class="signal-pairs-grid">\
            ' + halalPairCards + extPairCards + '\
          </div>\
        </div>\
\
        <!-- Caution Pairs -->\
        ' + (cautionPairCards ? '\
        <div class="halal-pairs-box mb-12" style="border-color:rgba(245,158,11,0.2)">\
          <h3 style="font-weight:700;font-size:13px;margin-bottom:10px;color:#f59e0b">\
            \u26A0\uFE0F ' + t.cautionPairsLabel + ' (' + totalCaution + ')\
          </h3>\
          <div class="signal-pairs-grid">\
            ' + cautionPairCards + '\
          </div>\
        </div>' : '') + '\
\
        <div class="warn-box">\
          <p class="warn-sub">' + t.signalsNote + '</p>\
        </div>\
      </div>\
    </div>';
}
