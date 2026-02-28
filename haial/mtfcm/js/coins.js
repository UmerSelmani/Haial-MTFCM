/**
 * MTFCM - Coins Configuration (Haial Bridge Edition)
 * v4.9.5-haial
 *
 * This is the MASTER coin database.
 * When running inside the Haial bridge, only coins present in
 * /shared/halal-pairs.json will be shown — all others are stripped
 * before initApp() fires.
 *
 * Add new coins here, then add them to halal-pairs.json if approved.
 */

const COINS_CONFIG_MASTER = [
    // ── Halal-Approved Coins ──────────────────────────
    {
        symbol: "BTCUSDT",
        name: "Bitcoin",
        shortName: "BTC",
        icon: "https://assets.coingecko.com/coins/images/1/small/bitcoin.png",
        decimals: 2,
        sector: "Layer 1"
    },
    {
        symbol: "ETHUSDT",
        name: "Ethereum",
        shortName: "ETH",
        icon: "https://assets.coingecko.com/coins/images/279/small/ethereum.png",
        decimals: 2,
        sector: "Layer 1"
    },
    {
        symbol: "ADAUSDT",
        name: "Cardano",
        shortName: "ADA",
        icon: "https://assets.coingecko.com/coins/images/975/small/cardano.png",
        decimals: 4,
        sector: "Layer 1"
    },
    {
        symbol: "SOLUSDT",
        name: "Solana",
        shortName: "SOL",
        icon: "https://assets.coingecko.com/coins/images/4128/small/solana.png",
        decimals: 2,
        sector: "Layer 1"
    },
    {
        symbol: "XRPUSDT",
        name: "XRP",
        shortName: "XRP",
        icon: "https://assets.coingecko.com/coins/images/44/small/xrp-symbol-white-128.png",
        decimals: 4,
        sector: "Layer 1"
    },
    {
        symbol: "DOTUSDT",
        name: "Polkadot",
        shortName: "DOT",
        icon: "https://assets.coingecko.com/coins/images/12171/small/polkadot.png",
        decimals: 3,
        sector: "Layer 1"
    },
    {
        symbol: "AVAXUSDT",
        name: "Avalanche",
        shortName: "AVAX",
        icon: "https://assets.coingecko.com/coins/images/12559/small/Avalanche_Circle_RedWhite_Trans.png",
        decimals: 2,
        sector: "Layer 1"
    },
    {
        symbol: "MATICUSDT",
        name: "Polygon",
        shortName: "MATIC",
        icon: "https://assets.coingecko.com/coins/images/4713/small/polygon.png",
        decimals: 4,
        sector: "Layer 2"
    },
    {
        symbol: "LINKUSDT",
        name: "Chainlink",
        shortName: "LINK",
        icon: "https://assets.coingecko.com/coins/images/877/small/chainlink-new-logo.png",
        decimals: 3,
        sector: "Infrastructure"
    },
    {
        symbol: "ATOMUSDT",
        name: "Cosmos",
        shortName: "ATOM",
        icon: "https://assets.coingecko.com/coins/images/1481/small/cosmos_hub.png",
        decimals: 3,
        sector: "Layer 1"
    },
    {
        symbol: "LTCUSDT",
        name: "Litecoin",
        shortName: "LTC",
        icon: "https://assets.coingecko.com/coins/images/2/small/litecoin.png",
        decimals: 2,
        sector: "Payments"
    },
    {
        symbol: "TONUSDT",
        name: "Toncoin",
        shortName: "TON",
        icon: "https://assets.coingecko.com/coins/images/17980/small/ton_symbol.png",
        decimals: 3,
        sector: "Layer 1"
    },
    {
        symbol: "XLMUSDT",
        name: "Stellar",
        shortName: "XLM",
        icon: "https://assets.coingecko.com/coins/images/100/small/Stellar_symbol_black_RGB.png",
        decimals: 5,
        sector: "Payments"
    },
    {
        symbol: "ALGOUSDT",
        name: "Algorand",
        shortName: "ALGO",
        icon: "https://assets.coingecko.com/coins/images/4380/small/download.png",
        decimals: 4,
        sector: "Layer 1"
    },
    {
        symbol: "VETUSDT",
        name: "VeChain",
        shortName: "VET",
        icon: "https://assets.coingecko.com/coins/images/1167/small/VeChain-Logo-768x725.png",
        decimals: 5,
        sector: "Infrastructure"
    },
    {
        symbol: "FILUSDT",
        name: "Filecoin",
        shortName: "FIL",
        icon: "https://assets.coingecko.com/coins/images/12817/small/filecoin.png",
        decimals: 3,
        sector: "Infrastructure"
    },
    {
        symbol: "HBARUSDT",
        name: "Hedera",
        shortName: "HBAR",
        icon: "https://assets.coingecko.com/coins/images/3688/small/hbar.png",
        decimals: 5,
        sector: "Layer 1"
    },
    {
        symbol: "NEARUSDT",
        name: "Near Protocol",
        shortName: "NEAR",
        icon: "https://assets.coingecko.com/coins/images/10365/small/near.jpg",
        decimals: 3,
        sector: "Layer 1"
    },
    {
        symbol: "SUIUSDT",
        name: "Sui",
        shortName: "SUI",
        icon: "https://assets.coingecko.com/coins/images/26375/small/sui_asset.jpeg",
        decimals: 4,
        sector: "Layer 1"
    },
    {
        symbol: "APTUSDT",
        name: "Aptos",
        shortName: "APT",
        icon: "https://assets.coingecko.com/coins/images/26455/small/aptos_round.png",
        decimals: 3,
        sector: "Layer 1"
    },
    {
        symbol: "RENDERUSDT",
        name: "Render",
        shortName: "RENDER",
        icon: "https://assets.coingecko.com/coins/images/11636/small/rndr.png",
        decimals: 3,
        sector: "Infrastructure"
    },
    {
        symbol: "FETUSDT",
        name: "Fetch.ai",
        shortName: "FET",
        icon: "https://assets.coingecko.com/coins/images/5681/small/Fetch.jpg",
        decimals: 4,
        sector: "Infrastructure"
    },
    {
        symbol: "ARUSDT",
        name: "Arweave",
        shortName: "AR",
        icon: "https://assets.coingecko.com/coins/images/4343/small/oRt6SiEN_400x400.jpg",
        decimals: 3,
        sector: "Infrastructure"
    },
    {
        symbol: "XTZUSDT",
        name: "Tezos",
        shortName: "XTZ",
        icon: "https://assets.coingecko.com/coins/images/976/small/Tezos-logo.png",
        decimals: 4,
        sector: "Layer 1"
    },
    {
        symbol: "ARBUSDT",
        name: "Arbitrum",
        shortName: "ARB",
        icon: "https://assets.coingecko.com/coins/images/16547/small/photo_2023-03-29_21.47.00.jpeg",
        decimals: 4,
        sector: "Layer 2"
    },
    {
        symbol: "OPUSDT",
        name: "Optimism",
        shortName: "OP",
        icon: "https://assets.coingecko.com/coins/images/25244/small/Optimism.png",
        decimals: 4,
        sector: "Layer 2"
    },
    // ── Caution Coins ──────────────────────────
    {
        symbol: "ICPUSDT",
        name: "Internet Computer",
        shortName: "ICP",
        icon: "https://assets.coingecko.com/coins/images/14495/small/Internet_Computer_logo.png",
        decimals: 3,
        sector: "Layer 1"
    },
    {
        symbol: "BNBUSDT",
        name: "BNB",
        shortName: "BNB",
        icon: "https://assets.coingecko.com/coins/images/825/small/bnb-icon2_2x.png",
        decimals: 2,
        sector: "Exchange"
    },
    {
        symbol: "UNIUSDT",
        name: "Uniswap",
        shortName: "UNI",
        icon: "https://assets.coingecko.com/coins/images/12504/small/uni.jpg",
        decimals: 3,
        sector: "DeFi"
    },
    {
        symbol: "INJUSDT",
        name: "Injective",
        shortName: "INJ",
        icon: "https://assets.coingecko.com/coins/images/12882/small/Secondary_Symbol.png",
        decimals: 3,
        sector: "DeFi"
    },

    // ── New Halal-Approved (v9.5 update) ─────────────
    {
        symbol: "TIAUSDT",
        name: "Celestia",
        shortName: "TIA",
        icon: "https://assets.coingecko.com/coins/images/31967/small/tia.jpg",
        decimals: 3,
        sector: "Infrastructure"
    },
    {
        symbol: "STRKUSDT",
        name: "Starknet",
        shortName: "STRK",
        icon: "https://assets.coingecko.com/coins/images/26433/small/starknet.png",
        decimals: 4,
        sector: "Layer 2"
    },
    {
        symbol: "MANTAUSDT",
        name: "Manta Network",
        shortName: "MANTA",
        icon: "https://assets.coingecko.com/coins/images/34007/small/manta.png",
        decimals: 4,
        sector: "Layer 2"
    },
    {
        symbol: "ROSEUSDT",
        name: "Oasis Network",
        shortName: "ROSE",
        icon: "https://assets.coingecko.com/coins/images/13162/small/rose.png",
        decimals: 5,
        sector: "Layer 1"
    },
    {
        symbol: "SKLUSDT",
        name: "SKALE",
        shortName: "SKL",
        icon: "https://assets.coingecko.com/coins/images/13245/small/SKALE_token_300x300.png",
        decimals: 5,
        sector: "Layer 2"
    },
    {
        symbol: "SAGAUSDT",
        name: "Saga",
        shortName: "SAGA",
        icon: "https://assets.coingecko.com/coins/images/35024/small/saga.jpg",
        decimals: 4,
        sector: "Infrastructure"
    },
    {
        symbol: "CTSIUSDT",
        name: "Cartesi",
        shortName: "CTSI",
        icon: "https://assets.coingecko.com/coins/images/11038/small/Cartesi_Logo.png",
        decimals: 4,
        sector: "Infrastructure"
    },
    {
        symbol: "AXLUSDT",
        name: "Axelar",
        shortName: "AXL",
        icon: "https://assets.coingecko.com/coins/images/27277/small/V-65_xQ1_400x400.jpeg",
        decimals: 4,
        sector: "Infrastructure"
    },
    {
        symbol: "KAIAUSDT",
        name: "Kaia",
        shortName: "KAIA",
        icon: "https://assets.coingecko.com/coins/images/34958/small/kaia.png",
        decimals: 4,
        sector: "Layer 1"
    },
    {
        symbol: "PYTHUSDT",
        name: "Pyth Network",
        shortName: "PYTH",
        icon: "https://assets.coingecko.com/coins/images/31924/small/pyth.png",
        decimals: 4,
        sector: "Oracle"
    },
    {
        symbol: "DASHUSDT",
        name: "Dash",
        shortName: "DASH",
        icon: "https://assets.coingecko.com/coins/images/19/small/dash-logo.png",
        decimals: 2,
        sector: "Payment"
    },
    {
        symbol: "BATUSDT",
        name: "Basic Attention Token",
        shortName: "BAT",
        icon: "https://assets.coingecko.com/coins/images/677/small/basic-attention-token.png",
        decimals: 4,
        sector: "Utility"
    },
    {
        symbol: "DCRUSDT",
        name: "Decred",
        shortName: "DCR",
        icon: "https://assets.coingecko.com/coins/images/329/small/decred.png",
        decimals: 3,
        sector: "Layer 1"
    },
    {
        symbol: "COTIUSDT",
        name: "COTI",
        shortName: "COTI",
        icon: "https://assets.coingecko.com/coins/images/2962/small/Coti.png",
        decimals: 5,
        sector: "Payment"
    },
    {
        symbol: "FLOWUSDT",
        name: "Flow",
        shortName: "FLOW",
        icon: "https://assets.coingecko.com/coins/images/13446/small/5f6294c0c7a8cda55cb1c936_Flow_Wordmark.png",
        decimals: 4,
        sector: "Layer 1"
    },
    {
        symbol: "UTKUSDT",
        name: "xMoney",
        shortName: "UTK",
        icon: "https://assets.coingecko.com/coins/images/1170/small/utrust.png",
        decimals: 5,
        sector: "Payment"
    },
    {
        symbol: "ENSUSDT",
        name: "Ethereum Name Service",
        shortName: "ENS",
        icon: "https://assets.coingecko.com/coins/images/19785/small/acatxTm8_400x400.jpg",
        decimals: 3,
        sector: "Utility"
    },
    {
        symbol: "TWTUSDT",
        name: "Trust Wallet Token",
        shortName: "TWT",
        icon: "https://assets.coingecko.com/coins/images/11085/small/Trust.png",
        decimals: 4,
        sector: "Utility"
    },
    {
        symbol: "SFPUSDT",
        name: "SafePal",
        shortName: "SFP",
        icon: "https://assets.coingecko.com/coins/images/13905/small/sfp.png",
        decimals: 4,
        sector: "Utility"
    },
    {
        symbol: "HOOKUSDT",
        name: "Hooked Protocol",
        shortName: "HOOK",
        icon: "https://assets.coingecko.com/coins/images/28283/small/hooked.png",
        decimals: 4,
        sector: "Education"
    },

    // ── Caution-Rated (v9.5 update) ──────────────────
    {
        symbol: "SANDUSDT",
        name: "The Sandbox",
        shortName: "SAND",
        icon: "https://assets.coingecko.com/coins/images/12129/small/sandbox_logo.jpg",
        decimals: 4,
        sector: "Gaming"
    },
    {
        symbol: "GALAUSDT",
        name: "Gala Games",
        shortName: "GALA",
        icon: "https://assets.coingecko.com/coins/images/12493/small/GALA_token_image.png",
        decimals: 5,
        sector: "Gaming"
    },
    {
        symbol: "ILVUSDT",
        name: "Illuvium",
        shortName: "ILV",
        icon: "https://assets.coingecko.com/coins/images/14468/small/logo-200x200.png",
        decimals: 2,
        sector: "Gaming"
    },
    {
        symbol: "PYRUSDT",
        name: "Vulcan Forged",
        shortName: "PYR",
        icon: "https://assets.coingecko.com/coins/images/14770/small/1617088937196.png",
        decimals: 3,
        sector: "Gaming"
    },
    {
        symbol: "PIXELUSDT",
        name: "Pixels",
        shortName: "PIXEL",
        icon: "https://assets.coingecko.com/coins/images/35063/small/pixel.png",
        decimals: 5,
        sector: "Gaming"
    },
    {
        symbol: "SUPERUSDT",
        name: "SuperVerse",
        shortName: "SUPER",
        icon: "https://assets.coingecko.com/coins/images/14040/small/SuperVerse.png",
        decimals: 4,
        sector: "Gaming"
    },
    {
        symbol: "XAIUSDT",
        name: "Xai",
        shortName: "XAI",
        icon: "https://assets.coingecko.com/coins/images/34039/small/xai.png",
        decimals: 4,
        sector: "Gaming"
    },
    {
        symbol: "CHZUSDT",
        name: "Chiliz",
        shortName: "CHZ",
        icon: "https://assets.coingecko.com/coins/images/8834/small/CHZ_Token_updated.png",
        decimals: 5,
        sector: "Sports"
    },
    {
        symbol: "ZECUSDT",
        name: "Zcash",
        shortName: "ZEC",
        icon: "https://assets.coingecko.com/coins/images/486/small/circle-zcash-color.png",
        decimals: 2,
        sector: "Privacy"
    },
    {
        symbol: "XVGUSDT",
        name: "Verge",
        shortName: "XVG",
        icon: "https://assets.coingecko.com/coins/images/203/small/verge-symbol-color-rgb.png",
        decimals: 6,
        sector: "Privacy"
    },
    {
        symbol: "ZENUSDT",
        name: "Horizen",
        shortName: "ZEN",
        icon: "https://assets.coingecko.com/coins/images/691/small/horizen.png",
        decimals: 3,
        sector: "Privacy"
    },
    {
        symbol: "RSRUSDT",
        name: "Reserve Rights",
        shortName: "RSR",
        icon: "https://assets.coingecko.com/coins/images/8365/small/rsr.png",
        decimals: 6,
        sector: "DeFi"
    },
    {
        symbol: "GTCUSDT",
        name: "Gitcoin",
        shortName: "GTC",
        icon: "https://assets.coingecko.com/coins/images/15810/small/gitcoin.png",
        decimals: 4,
        sector: "Governance"
    }
];

/**
 * COINS_CONFIG — the runtime list.
 * Starts as full master; the Haial bridge filters it before initApp().
 * In standalone mode (no bridge), all coins are available.
 */
var COINS_CONFIG = COINS_CONFIG_MASTER.slice();

/**
 * HALAL_VERDICT_MAP — populated by bridge, maps ticker → verdict info.
 * Used by sidebar to show halal/caution badges.
 */
var HALAL_VERDICT_MAP = {};

/**
 * applyHalalFilter(pairs)
 * Called by the bridge when halal-pairs.json is loaded.
 * Filters COINS_CONFIG to only include approved tickers.
 * Populates HALAL_VERDICT_MAP for UI badges.
 *
 * @param {Array} pairs - Array from halal-pairs.json [{ticker, name, verdict, pair, source}]
 */
function applyHalalFilter(pairs) {
    if (!pairs || pairs.length === 0) return; // No filter = keep all

    // Build lookup: "BTCUSDT" → pair object
    var pairLookup = {};
    pairs.forEach(function(p) {
        pairLookup[p.pair] = p;
        HALAL_VERDICT_MAP[p.ticker] = { verdict: p.verdict, source: p.source };
    });

    // Filter master list to only halal/caution pairs
    COINS_CONFIG = COINS_CONFIG_MASTER.filter(function(coin) {
        return pairLookup.hasOwnProperty(coin.symbol);
    });

    // Sort: halal first, then caution, preserving order within each group
    COINS_CONFIG.sort(function(a, b) {
        var vA = pairLookup[a.symbol];
        var vB = pairLookup[b.symbol];
        var orderA = vA && vA.verdict === 'halal' ? 0 : 1;
        var orderB = vB && vB.verdict === 'halal' ? 0 : 1;
        return orderA - orderB;
    });

    console.log('[MTFCM] Halal filter applied: ' + COINS_CONFIG.length + ' coins active');
}

/**
 * TIMEFRAMES CONFIGURATION
 */
const TIMEFRAMES_CONFIG = [
    { id: "1m",  label: "1m",  minutes: 1,   enabled: false },
    { id: "5m",  label: "5m",  minutes: 5,   enabled: true  },
    { id: "15m", label: "15m", minutes: 15,  enabled: true  },
    { id: "30m", label: "30m", minutes: 30,  enabled: false },
    { id: "1h",  label: "1h",  minutes: 60,  enabled: true  },
    { id: "4h",  label: "4h",  minutes: 240, enabled: false }
];

/**
 * SECTOR CONFIGURATION
 */
const SECTOR_CONFIG = {
    "Layer 1":        { icon: "🔗", description: "Base layer blockchains" },
    "Layer 2":        { icon: "⚡", description: "Scaling solutions" },
    "DeFi":           { icon: "🏦", description: "Decentralized finance" },
    "Gaming":         { icon: "🎮", description: "Gaming & Metaverse" },
    "Infrastructure": { icon: "🛠️", description: "Oracles, indexing & tools" },
    "Exchange":       { icon: "🪙", description: "Exchange & wallet tokens" },
    "Privacy":        { icon: "🔒", description: "Privacy-focused coins" },
    "Payments":       { icon: "💸", description: "Payment & transfer coins" }
};

/**
 * DEFAULT SETTINGS
 */
const DEFAULT_SETTINGS = {
    theme: "dark",
    viewMode: "advanced",
    candlePopupType: "hover-tab",
    lastCoin: null,
    alertSeconds: 30,
    minConfluence: 2,
    enableSound: true,
    enableSignalSound: true,
    enableSignalPopup: true,
    signalCooldownMs: 60000,
    weightMethod: "linear",
    useStrengthMod: true,
    useVolumeMod: true,
    useIndicatorMod: true,
    showRSI: true,
    showMACD: true,
    showVolume: true,
    showWarnings: true,
    showPatterns: true,
    showPriceInfo: true,
    showTimers: true,
    showIndicatorBadges: true,
    showConfluenceBar: true,
    advancedMode: true,
    chartHeight: 120,
    chartCandles: 15,
    showChartRSI: false,
    showRSIDivergence: true,
    showChartMACD: false,
    showChartVolume: true,
    showChartMA: false,
    showChartEMA: true,
    showChartVWAP: false,
    showChartSR: false,
    showChartMarkers: true,
    showChartPatterns: true,
    showPriceScale: false,
    volumeType: "buysell",
    maLines: [20],
    maColors: ["#3b82f6"],
    emaLines: [21],
    emaColors: ["#f59e0b"],
    rsiLines: [14],
    rsiColors: ["#a855f7"],
    showFVG: true,
    srSupportColor: "#22c55e",
    srResistanceColor: "#ef4444",
    fvgBullColor: "#22c55e",
    fvgBearColor: "#ef4444",
    vwapEnabled: true,
    patterns: {
        doji: true,
        hammer: true,
        invHammer: true,
        hangingMan: true,
        shootStar: true,
        marubozu: true,
        spinTop: true,
        bullEngulf: true,
        bearEngulf: true,
        bullHarami: true,
        bearHarami: true,
        piercing: true,
        darkCloud: true,
        tweezTop: true,
        tweezBot: true,
        morningStar: true,
        eveningStar: true,
        threeSoldiers: true,
        threeCrows: true
    },
    comparisonCoins: []
};

/**
 * WEIGHT VALUES
 */
const WEIGHT_METHODS = {
    equal: {
        "1m": 1, "5m": 1, "15m": 1, "30m": 1, "1h": 1, "4h": 1,
        description: "All timeframes weighted equally",
        formula: "Score = (Bull TFs × 1) / (Total TFs × 1) × 100%"
    },
    linear: {
        "1m": 1, "5m": 2, "15m": 3, "30m": 4, "1h": 5, "4h": 6,
        description: "Higher timeframes get progressively more weight",
        formula: "Weights: 1m=1, 5m=2, 15m=3, 30m=4, 1h=5, 4h=6"
    },
    exponential: {
        "1m": 1, "5m": 2, "15m": 4, "30m": 8, "1h": 16, "4h": 32,
        description: "Exponentially increasing weight for higher TFs",
        formula: "Weights: 1m=1, 5m=2, 15m=4, 30m=8, 1h=16, 4h=32"
    },
    tiered: {
        "1m": 1, "5m": 3, "15m": 3, "30m": 7, "1h": 7, "4h": 15,
        description: "Grouped tiers: Scalp(1), Intraday(3), Swing(7), Position(15)",
        formula: "Scalp=1 | Intraday=3 | Swing=7 | Position=15"
    }
};

/**
 * RSI THRESHOLDS
 */
const RSI_CONFIG = {
    period: 14,
    overbought: 70,
    oversold: 30,
    extremeOverbought: 80,
    extremeOversold: 20
};

/**
 * VOLUME THRESHOLDS
 */
const VOLUME_CONFIG = {
    avgPeriod: 20,
    highThreshold: 1.5,
    lowThreshold: 0.6,
    spikeThreshold: 2.5
};

/**
 * BODY STRENGTH THRESHOLDS
 */
const BODY_CONFIG = {
    strongThreshold: 70,
    weakThreshold: 40
};
