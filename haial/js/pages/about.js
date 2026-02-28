/* ═══════════════════════════════════════
   HAIAL v9.4 — About Page
   ═══════════════════════════════════════ */

function renderAboutPage(t) {
  const values = [
    { emoji: '🔍', label: t.transparency },
    { emoji: '👥', label: t.userCentric },
    { emoji: '🕌', label: t.faithFocused },
    { emoji: '📊', label: t.dataDriven },
  ];

  const diffs = [
    { icon: Icons.shield(18), title: t.verifiedSourcesTitle, desc: t.verifiedSourcesDescA },
    { icon: Icons.zap(18), title: t.aiIntelligence, desc: t.aiIntelligenceDesc },
    { icon: Icons.eye(18), title: t.transparentLogic, desc: t.transparentLogicDesc },
  ];

  const tiers = [
    { num: '1', icon: '🗄️', title: t.tier1Title, desc: t.tier1Desc },
    { num: '2', icon: '📚', title: t.tier2Title, desc: t.tier2Desc },
    { num: '3', icon: '🤖', title: t.tier3Title, desc: t.tier3Desc },
  ];

  const screenings = [
    { icon: '🔐', name: t.scrLegitimacy, desc: t.scrLegitDesc },
    { icon: '🎯', name: t.scrProject, desc: t.scrProjectDesc },
    { icon: '💰', name: t.scrFinancial, desc: t.scrFinancialDesc },
    { icon: '🪙', name: t.scrToken, desc: t.scrTokenDesc },
    { icon: '📌', name: t.scrStaking, desc: t.scrStakingDesc },
    { icon: '🔗', name: t.scrDefi, desc: t.scrDefiDesc },
  ];

  return `
    <div class="page-container">
      <div class="card animate-fade-up" style="padding:24px">
        <div class="text-center mb-20" style="margin-bottom:24px">
          <h1 class="page-title">Haial</h1>
          <p class="page-tagline">${t.tagline}</p>
          <p class="page-version">${t.version} — ${t.versionDesc}</p>
        </div>

        <h2 class="section-heading mb-8">${t.ourMission}</h2>
        <p class="section-text mb-20">${t.missionDesc}</p>

        <h2 class="section-heading mb-12">${t.ethos}</h2>
        <div class="grid-values mb-20">
          ${values.map(v => `
            <div class="card-accent glow-card text-center" style="padding:14px">
              <div style="font-size:28px;margin-bottom:6px">${v.emoji}</div>
              <h3 style="font-weight:700;font-size:12px;color:var(--text-primary)">${v.label}</h3>
            </div>
          `).join('')}
        </div>

        <h2 class="section-heading mb-12">${t.whatMakesUsDifferent}</h2>
        <div class="grid-diff mb-20">
          ${diffs.map(f => `
            <div class="card-inner glow-card">
              <div style="margin-bottom:8px;color:var(--text-accent)">${f.icon}</div>
              <h3 class="feature-title">${f.title}</h3>
              <p class="feature-desc">${f.desc}</p>
            </div>
          `).join('')}
        </div>

        <!-- How AI Checker Works -->
        <div class="about-ai-section" style="margin-top:28px">
          <h2 class="section-heading mb-8" style="display:flex;align-items:center;gap:8px">
            <span style="color:#a855f7">${Icons.shield(20)}</span> ${t.howAiWorks}
          </h2>
          <p class="section-text mb-16">${t.howAiIntro}</p>

          <!-- 3 Tiers -->
          <h3 style="font-size:14px;font-weight:700;color:var(--text-primary);margin-bottom:12px">${t.threeTiers}</h3>
          <div class="about-tiers mb-20">
            ${tiers.map(tier => `
              <div class="about-tier-card">
                <div class="about-tier-num">${tier.num}</div>
                <div class="about-tier-icon">${tier.icon}</div>
                <h4 class="about-tier-title">${tier.title}</h4>
                <p class="about-tier-desc">${tier.desc}</p>
              </div>
            `).join('<div class="about-tier-arrow">→</div>')}
          </div>

          <!-- 6 Screenings -->
          <h3 style="font-size:14px;font-weight:700;color:var(--text-primary);margin-bottom:6px">${t.sixScreenings}</h3>
          <p class="section-text mb-12">${t.sixScreeningsIntro}</p>
          <div class="about-screenings-grid mb-16">
            ${screenings.map(s => `
              <div class="about-scr-card">
                <div style="font-size:20px;margin-bottom:4px">${s.icon}</div>
                <h4 style="font-size:12px;font-weight:700;color:var(--text-primary);margin-bottom:3px">${s.name}</h4>
                <p style="font-size:11px;line-height:1.5;color:var(--text-muted)">${s.desc}</p>
              </div>
            `).join('')}
          </div>

          <!-- 3 Prohibitions -->
          <h3 style="font-size:14px;font-weight:700;color:var(--text-primary);margin-bottom:6px">${t.threeProhibitions}</h3>
          <p class="section-text mb-12">${t.crossCutExplain}</p>
          <div class="about-prohibitions mb-16">
            <div class="about-proh-card about-proh-riba">
              <strong>⛔ ${t.riba}</strong>
              <p>${t.ribaShort}</p>
            </div>
            <div class="about-proh-card about-proh-gharar">
              <strong>⛔ ${t.gharar}</strong>
              <p>${t.ghararShort}</p>
            </div>
            <div class="about-proh-card about-proh-maysir">
              <strong>⛔ ${t.maisir}</strong>
              <p>${t.maysirShort}</p>
            </div>
          </div>

          <!-- Methodology note -->
          <div class="about-method-note">
            <p>${Icons.info(14)} ${t.methodNote}</p>
          </div>

          <!-- Whitepaper -->
          <h3 style="font-size:14px;font-weight:700;color:var(--text-primary);margin:16px 0 6px">${t.wpFeature}</h3>
          <p class="section-text mb-12">${t.wpFeatureDesc}</p>

          <!-- Limits -->
          <div class="about-limits">
            <span>⏱️ ${t.limitsNote}</span>
          </div>
        </div>
      </div>
    </div>`;
}
