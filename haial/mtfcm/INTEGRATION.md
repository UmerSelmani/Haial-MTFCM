# MTFCM ↔ Haial Integration Guide

## Project Structure

```
haial.com/                  ← Haial Platform (compliance checker)
├── index.html
├── css/styles.css
├── js/
│   ├── app.js
│   ├── data.js
│   ├── data-extended.js
│   ├── i18n.js
│   ├── icons.js
│   └── pages/
│       ├── home.js         ← 3-tier AI checker
│       ├── signals.js      ← Gateway to MTFCM (with launch button)
│       ├── streams.js
│       ├── learn.js
│       └── about.js        ← How AI works section
├── shared/
│   └── halal-pairs.json    ← THE BRIDGE FILE (both apps read this)
├── mtfcm/                  ← MTFCM lives here
│   ├── index.html          ← Shell with bridge bar + pair loader
│   ├── css/
│   │   └── mtfcm.css       ← Your existing MTFCM styles
│   └── js/
│       ├── coins.js        ← Your existing coins (now filtered by bridge)
│       └── app.js          ← Your existing MTFCM app
└── worker/
    ├── worker.js            ← Cloudflare Worker (AI checker)
    ├── wrangler.toml
    └── DEPLOY.md
```

## How the Bridge Works

```
User searches "AAVE" on Haial
  → Tier 2 returns: "Haram — lending protocol, riba (IFG)"
  → User never sees AAVE in MTFCM trading view

User clicks "Open MTFCM" on Signals page
  → /mtfcm/index.html loads
  → Bridge script fetches /shared/halal-pairs.json
  → Only 26 halal + 4 caution pairs available for trading
  → AAVE, MKR, PEPE etc. completely absent
```

## Step-by-Step Integration

### Step 1: Copy your MTFCM files

Take your existing MTFCM project files and place them inside `/mtfcm/`:

```
mtfcm/
├── index.html      ← Already created (bridge shell)
├── css/
│   └── mtfcm.css   ← Copy your existing CSS here
└── js/
    ├── coins.js    ← Copy your existing coins.js
    └── app.js      ← Copy your existing app.js
```

### Step 2: Add script tags to mtfcm/index.html

At the bottom of `mtfcm/index.html`, where it says "YOUR EXISTING MTFCM CODE GOES HERE", add:

```html
<link rel="stylesheet" href="css/mtfcm.css">
<script src="js/coins.js"></script>
<script src="js/app.js"></script>
```

### Step 3: Wire up the halal filter

In your MTFCM's coin loading code (wherever you build the pair list), replace the hard-coded array with the bridge:

```javascript
// BEFORE (hard-coded):
var TRADING_PAIRS = ["BTCUSDT", "ETHUSDT", "AAVEUSDT", ...];

// AFTER (halal-filtered):
window.addEventListener('haial-pairs-loaded', function(e) {
  var TRADING_PAIRS = window.getHalalPairStrings();
  // Returns only: ["BTCUSDT", "ETHUSDT", "ADAUSDT", ...]
  // AAVE, MKR, PEPE etc. are automatically excluded

  // Start your MTFCM app with these pairs
  initMTFCM(TRADING_PAIRS);
});
```

### Step 4: Show halal badge in coin selector (optional)

```javascript
// When rendering coin dropdown, show verdict:
var pair = window.HALAL_PAIRS.find(p => p.ticker === 'ETH');
if (pair) {
  // pair.verdict = "halal"
  // pair.source = "IFG+PIF"
  coinLabel.innerHTML = 'ETH/USDT <span class="halal-badge">✅ Halal</span>';
}
```

### Step 5: Deploy

Both apps deploy together as one site:

**Cloudflare Pages:**
```bash
# Point to the haial/ root directory
# Both / and /mtfcm/ served from same deployment
```

**Netlify:**
```bash
# Build directory: haial/
# Same — /mtfcm/index.html auto-served at /mtfcm/
```

## API Reference

The bridge script (`mtfcm/index.html`) exposes:

| API | Returns | Description |
|-----|---------|-------------|
| `window.HALAL_PAIRS` | Array | All approved pairs `[{ticker, name, verdict, pair, source}]` |
| `window.BLOCKED_COINS` | Array | Blocked tickers `["AAVE", "MKR", ...]` |
| `window.isHalalPair(ticker)` | Boolean | Check if a ticker is approved |
| `window.getHalalPairStrings()` | Array | Binance pair strings `["BTCUSDT", ...]` |
| `haial-pairs-loaded` event | CustomEvent | Fires when pairs are ready, `e.detail.pairs` |

## Updating Pairs

When you add coins to Haial's database or extended sources:

1. Update `data.js` or `data-extended.js`
2. Update `shared/halal-pairs.json` to match
3. MTFCM automatically picks up the changes on next load

The JSON is the single source of truth that both apps read.
