/* FISH ME! Creator Crew weekly board (creator-board.html). Reads DATA from js/creator-board-data.js. */
(function () {
  "use strict";
  const $ = s => document.querySelector(s);
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const fmt = n => n == null ? "–" : n.toLocaleString("en-US");
  const DIA = '<img class="dia" src="img/creator-crew/diamond.svg" alt="Diamonds">';
  const day = (d, o = { weekday: "short", month: "short", day: "numeric" }) => new Date(d + "T12:00:00Z").toLocaleDateString("en-US", { ...o, timeZone: "UTC" });
  const LABEL = { ok: "Approved", wait: "Waiting for a Reviewer", bad: "Missing #FISHME" };
  const chip = s => `<span class="st ${s}">${LABEL[s]}</span>`;
  const img = (src, cls = "", alt = "") => `<img${cls ? ` class="${cls}"` : ""} src="${esc(src)}" alt="${esc(alt)}" loading="lazy">`;
  const byName = Object.fromEntries(DATA.creators.map(c => [c.name, c]));
  const tierOf = n => DATA.tiers[byName[n]?.tier] || DATA.tiers.Bait;
  const platOf = link => link.includes("tiktok") ? "TikTok" : "YouTube";

  const stats = DATA.creators.map(c => {
    const t = DATA.tiers[c.tier], vids = DATA.videos.filter(v => v.creator === c.name);
    const ok = vids.filter(v => v.status === "ok").length, wait = vids.filter(v => v.status === "wait").length;
    return { ...c, vids, posted: vids.length, diamonds: t.monthly ? 0 : ok * t.rate, pending: t.monthly ? 0 : wait * t.rate };
  });

  /* toast + copy */
  const toast = $("#toast"); let tt = 0;
  function say(msg) { toast.textContent = msg; toast.classList.add("on"); clearTimeout(tt); tt = setTimeout(() => toast.classList.remove("on"), 2000); }
  async function copy(text) {
    try { await navigator.clipboard.writeText(text); say("Copied: " + text); }
    catch { say("Copy this: " + text); }
  }
  document.addEventListener("click", e => { const b = e.target.closest("[data-copy]"); if (b) copy(b.dataset.copy); });

  function confetti(x, y, n = 26) {
    if (still) return;
    const cols = ["#ffd23f", "#1e9fe8", "#ff7a1f", "#34b249", "#f515b8", "#fff6e0"];
    for (let i = 0; i < n; i++) {
      const c = document.createElement("i"); c.className = "confetti";
      const a = Math.random() * Math.PI * 2, d = 80 + Math.random() * 160;
      c.style.cssText = `left:${x}px;top:${y}px;background:${cols[i % cols.length]};--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d - 60}px;--r:${Math.random() * 720 - 360}deg`;
      document.body.append(c); setTimeout(() => c.remove(), 1200);
    }
  }

  /* payday card */
  (function () {
    const totalDia = stats.reduce((a, s) => a + s.diamonds, 0), totalPend = stats.reduce((a, s) => a + s.pending, 0);
    const today = new Date(); today.setHours(0, 0, 0, 0);
    const days = Math.round((new Date(DATA.payday + "T00:00:00") - today) / 86400000);
    const when = days > 1 ? `in ${days} days` : days === 1 ? "tomorrow!" : days === 0 ? "today!" : "paid";
    $("#payday").innerHTML = `
      <img class="rays" src="img/creator-crew/fx-rays.webp" alt="" aria-hidden="true">
      <div class="pd-top"><div><div class="pd-k">Next payday</div><div class="pd-day">${day(DATA.payday, { weekday: "long", month: "short", day: "numeric" })}</div></div><span class="pd-when">${when}</span></div>
      <div class="pd-stats">
        <div class="pd-stat"><b class="num">${DATA.videos.length}</b><small>FISH ME! videos this week</small></div>
        <div class="pd-stat"><b class="num">${stats.filter(s => s.posted).length}</b><small>creators posted</small></div>
        <div class="pd-stat wide"><b class="num">${DIA}<span>${fmt(totalDia)}</span></b><small>Diamonds going out Saturday · +${fmt(totalPend)} if Reviewers approve the waiting videos</small></div>
      </div>
      <div class="pd-k pd-note">Videos posted ${day(DATA.weekStart, { month: "short", day: "numeric" })} – ${day(DATA.payday, { month: "short", day: "numeric" })} count. Rewards go out every Saturday.</div>`;
  })();

  /* podiums */
  function podium(el, key, unit) {
    const top = [...DATA.videos].sort((a, b) => (b[key] ?? 0) - (a[key] ?? 0) || b.views - a.views).slice(0, 3);
    const suf = ["st", "nd", "rd"];
    el.innerHTML = top.map((v, i) => {
      const t = tierOf(v.creator), c = byName[v.creator];
      // the whole card opens the creator's channel; the video button inside still opens the video
      const channel = c.link ? `<a class="pcard-link" href="${esc(c.link)}" target="_blank" rel="noopener" aria-label="Open ${esc(c.profile || c.discord)}'s ${platOf(c.link)} channel"></a>` : "";
      return `<article class="place p${i + 1}${c.link ? " has-link" : ""}" aria-label="${i + 1}${suf[i]} place">
        ${channel}
        <div class="pcard">
          ${i === 0 ? '<svg class="crown" viewBox="0 0 64 44" aria-hidden="true"><use href="#crown"/></svg>' : ""}
          <div class="pav">${img(c.avatar)}<span class="tier-dot">${img(t.icon, "", c.tier)}</span></div>
          <div class="pname">${esc(c.discord)}</div><div class="phandle">${esc(c.profile)} <span class="pl ${v.platform.toLowerCase()}">${v.platform}</span></div>
          <div class="pbig num">${fmt(v[key])}<small>${unit}</small></div>
          <p class="ptitle">${esc(v.title)}</p>
          <div class="pfoot"><a class="plat" href="${esc(v.url)}" target="_blank" rel="noopener">▶ ${v.platform}</a>${chip(v.status)}</div>
        </div>
        <div class="block stroke">${i + 1}<sup>${suf[i]}</sup></div>
      </article>`;
    }).join("");
  }
  podium($("#top-views"), "views", "views");
  podium($("#top-likes"), "likes", "likes");
  document.querySelectorAll(".place.p1").forEach(p => p.addEventListener("click", e => { if (!e.target.closest("a:not(.pcard-link)")) confetti(e.clientX, e.clientY); }));

  /* the crew, tier by tier */
  const chev = '<span class="chev" aria-hidden="true"><svg viewBox="0 0 12 12"><path d="M4 2l4 4-4 4" fill="none" stroke="#4a2b16" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>';
  $("#tiers").innerHTML = Object.entries(DATA.tiers).map(([name, t]) => {
    const list = stats.filter(s => s.tier === name).sort((a, b) => b.diamonds - a.diamonds || b.pending - a.pending || b.posted - a.posted || a.name.localeCompare(b.name));
    const rows = list.map(s => {
      const plat = platOf(s.link);
      const vids = s.vids.length ? s.vids.map(v => `<div class="vitem"><span class="pf">${v.platform === "YouTube" ? "YT" : "TT"}</span>
          <a href="${esc(v.url)}" target="_blank" rel="noopener">${esc(v.title)}</a>
          <span class="m num">${day(v.date)} · ${fmt(v.views)} views · ${fmt(v.likes)} likes</span>${chip(v.status)}</div>
          ${v.note ? `<p class="vnote">${esc(v.note)}</p>` : ""}`).join("")
        : `<p class="vnote">No FISH ME! videos with #FISHME found this week yet. Post one before Saturday!</p>`;
      const gems = t.monthly ? `<b>Monthly</b>` : `<b class="num${s.diamonds ? "" : " zero"}">${DIA}${fmt(s.diamonds)}</b>${s.pending ? `<small>+${fmt(s.pending)} if approved</small>` : ""}`;
      return `<details class="row"><summary>
          <span class="who">${img(s.avatar)}<span class="who-t"><b>${esc(s.discord)}</b>${s.link ? `<a href="${esc(s.link)}" target="_blank" rel="noopener"><span class="hd">${esc(s.profile)}</span><span class="pl ${plat.toLowerCase()}">${plat}</span></a>` : `<span class="nolink">No channel link yet</span>`}</span></span>
          <span class="cnt"><b class="num${s.posted ? "" : " zero"}">${s.posted}</b></span>
          <span class="gems">${gems}</span>${chev}</summary>
        <div class="vlist">${vids}</div></details>`;
    }).join("");
    return `<article class="tier ${t.cls}">
      <div class="thead">
        <div class="ticon">${img(t.icon, "", `${name} role icon`)}</div>
        <div class="tid"><span class="tnum">${t.level} · ${list.length} creator${list.length === 1 ? "" : "s"}</span><h3>${name}</h3></div>
        <div class="trate"><span class="amt num">${DIA}${fmt(t.rate)}</span><small>${t.unit}</small></div>
      </div>
      ${list.length ? `<div class="roster"><div class="cols"><span>Creator</span><span>Videos this week</span><span>Saturday Diamonds</span><span></span></div>${rows}</div>`
        : `<p class="empty-tier">No ${name}s yet. Keep posting and you could be the first!</p>`}
    </article>`;
  }).join("");

  /* tier up: Catch Points from approved videos, a striped bar for waiting videos, plus the views shortcut */
  const NEXT = {
    Bait: { to: "Angler", points: 5, short: { n: 2, views: 2000 }, shortText: "2 videos with 2,000+ views", ok: "1 Reviewer says OK" },
    Angler: { to: "Captain", points: 10, short: { n: 3, views: 4000 }, alt: { n: 1, views: 15000 }, shortText: "3 videos with 4,000+ views, or 1 with 15,000+", ok: "2 Reviewers say OK" }
  };
  const pts = v => v.idea ? 2 : 1;
  $("#tu-rules").innerHTML = Object.entries(NEXT).map(([from, r]) => `<span class="tu-rule">${img(DATA.tiers[from].icon)}<b>${from} → ${r.to}:</b> ${r.points} Catch Points, or ${r.shortText}</span>`).join("");
  const climbers = stats.filter(s => NEXT[s.tier]).map(s => {
    const r = NEXT[s.tier];
    const okV = s.vids.filter(v => v.status === "ok"), waitV = s.vids.filter(v => v.status === "wait");
    const have = okV.reduce((a, v) => a + pts(v), 0) + (s.pointsBefore || 0), maybe = waitV.reduce((a, v) => a + pts(v), 0);
    const big = okV.filter(v => v.views >= r.short.views).length, huge = r.alt ? okV.filter(v => v.views >= r.alt.views).length : 0;
    const ready = have >= r.points || big >= r.short.n || (r.alt && huge >= r.alt.n);
    return { ...s, r, have, maybe, big, ready, pct: Math.min(1, have / r.points), pctMaybe: Math.min(1, (have + maybe) / r.points) };
  }).filter(c => c.have || c.maybe).sort((a, b) => b.ready - a.ready || b.pct - a.pct || b.pctMaybe - a.pctMaybe);
  $("#gates").innerHTML = climbers.length ? climbers.map(c => `
    <article class="gate-card${c.ready ? " ready" : ""}">
      <div class="gc-top">${img(c.avatar, "gc-av")}
        <div class="gc-name"><b>${esc(c.discord)}</b><span>${esc(c.profile)} · ${platOf(c.link)}</span>
          <span class="gc-path"><i>${img(DATA.tiers[c.tier].icon)}</i>${c.tier}<em aria-hidden="true">›</em><i>${img(DATA.tiers[c.r.to].icon)}</i>${c.r.to}</span></div></div>
      ${c.ready ? `<span class="gc-ready">Ready to tier up! ${c.r.ok}</span>` : ""}
      <div class="meter"><div class="meter-l"><span>Catch Points</span><span><b class="num">${c.have}</b> / ${c.r.points}</span></div>
        <div class="bar"><span class="ghost" style="width:${(c.pctMaybe * 100).toFixed(1)}%"></span><span class="fill" data-w="${(c.pct * 100).toFixed(1)}" style="width:0"></span></div></div>
      <p class="gc-note">${c.maybe ? `<b>+${c.maybe}</b> more if the waiting videos get approved. ` : ""}${c.ready ? "" : `${Math.max(0, c.r.points - c.have)} to go.`} Shortcut: ${c.big} of ${c.r.short.n} videos with ${fmt(c.r.short.views)}+ views.</p>
    </article>`).join("") : `<p class="tu-empty">No Catch Points yet this round. Post your first approved video to start climbing!</p>`;
  const fillIO = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.querySelectorAll(".fill").forEach(f => f.style.width = f.dataset.w + "%"); fillIO.unobserve(e.target); }
  }), { threshold: .3 });
  document.querySelectorAll(".gate-card").forEach(g => still ? g.querySelectorAll(".fill").forEach(f => f.style.width = f.dataset.w + "%") : fillIO.observe(g));

  /* the dive: rising bubbles you can pop, fish you can catch */
  let caught = 0;
  const seaFish = $("#sea-fish"), bubbles = $("#bubbles");
  function splash(x, y, host) {
    for (let i = 0; i < 10; i++) {
      const s = document.createElement("i"); s.className = "splash";
      const a = Math.random() * Math.PI * 2, d = 30 + Math.random() * 50;
      s.style.cssText = `left:${x}px;top:${y}px;--dx:${Math.cos(a) * d}px;--dy:${Math.sin(a) * d}px`;
      host.append(s); setTimeout(() => s.remove(), 700);
    }
  }
  if (!still) {
    for (let i = 0; i < 22; i++) {
      const b = document.createElement("i");
      b.style.cssText = `left:${Math.random() * 100}%;--s:${10 + Math.random() * 28}px;--t:${12 + Math.random() * 14}s;--d:${-Math.random() * 22}s;--x:${(Math.random() - .5) * 80}px`;
      b.addEventListener("click", () => { b.classList.add("pop"); setTimeout(() => { b.classList.remove("pop"); b.style.animation = "none"; void b.offsetWidth; b.style.animation = ""; }, 320); });
      bubbles.append(b);
    }
    const school = [
      { src: DATA.tiers.Angler.icon, w: 70, top: 14, t: 19, d: 0 },
      { src: DATA.tiers.Admiral.icon, w: 56, top: 38, t: 24, d: -9 },
      { src: DATA.tiers.Angler.icon, w: 48, top: 58, t: 27, d: -15 },
      { src: DATA.tiers.Admiral.icon, w: 64, top: 80, t: 21, d: -4 }
    ];
    const lines = ["Bonk! Nice catch!", "Got one! Don't let it run!", "That fish fought back!", "Into the bucket it goes!", "Secret fish? Nope, just a regular one."];
    school.forEach(f => {
      const b = document.createElement("button"); b.type = "button"; b.title = "Catch me!";
      b.style.cssText = `top:${f.top}%;--w:${f.w}px;--t:${f.t}s;--d:${f.d}s`;
      b.innerHTML = `<img src="${esc(f.src)}" alt="" aria-hidden="true">`;
      b.addEventListener("click", e => {
        if (b.classList.contains("hit")) return;
        const r = seaFish.getBoundingClientRect(); splash(e.clientX - r.left, e.clientY - r.top, seaFish);
        b.classList.add("hit"); caught++;
        $("#catch-count").textContent = `🎣 Fish caught: ${caught}`;
        say(lines[caught % lines.length]);
        setTimeout(() => { b.classList.remove("hit"); b.style.animation = "none"; void b.offsetWidth; b.style.animation = ""; }, 900);
      });
      seaFish.append(b);
    });
  }

  /* idea board */
  const doneBy = {};
  DATA.videos.forEach(v => { if (v.idea && v.status === "ok") (doneBy[v.idea] ||= []).push(v.creator); });
  $("#idea-list").innerHTML = IDEAS.map(([h, p], i) => {
    const n = i + 1, who = doneBy[n];
    return `<li class="idea${who ? " done-by" : ""}" data-n="${n}"><span class="n">#${n}</span><h3>${esc(h)}</h3><p>${esc(p)}</p>
      ${who ? `<span class="made">✓ Made this week by ${who.map(w => esc(byName[w]?.discord || w)).join(", ")}</span>` : ""}
      <button class="copy" type="button" data-copy="Idea #${n} #FISHME discord.gg/fishmevr" aria-label="Copy caption tag for idea ${n}">Copy tag</button></li>`;
  }).join("");
  const ideaEls = [...document.querySelectorAll(".idea")], search = $("#idea-search"), total = ideaEls.length;
  $("#idea-count").textContent = `${total} ideas`;
  search.addEventListener("input", () => {
    const q = search.value.trim().toLowerCase().replace(/^#/, ""); let shown = 0;
    ideaEls.forEach(li => { const hit = !q || li.textContent.toLowerCase().includes(q) || li.dataset.n === q; li.hidden = !hit; if (hit) shown++; });
    $("#idea-count").textContent = shown === total ? `${total} ideas` : `${shown} of ${total} ideas`;
    $("#no-ideas").style.display = shown ? "none" : "block";
  });
  $("#cast").addEventListener("click", () => {
    if (search.value) { search.value = ""; search.dispatchEvent(new Event("input")); }
    ideaEls.forEach(li => li.classList.remove("picked"));
    const li = ideaEls[Math.floor(Math.random() * total)];
    void li.offsetWidth; li.classList.add("picked");
    li.scrollIntoView({ behavior: still ? "auto" : "smooth", block: "center" });
    say(`You caught idea #${li.dataset.n}: ${li.querySelector("h3").textContent}`);
  });

  /* top bar: underline the section in view */
  const navLinks = [...document.querySelectorAll('.topbar ul a[href^="#"]')];
  const spy = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) navLinks.forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id));
  }), { rootMargin: "-45% 0px -50% 0px" });
  navLinks.forEach(a => { const s = document.querySelector(a.getAttribute("href")); if (s) spy.observe(s); });

  /* hero parallax + footer */
  const heroImg = document.querySelector(".hero-art img"); let pt = false;
  if (!still) addEventListener("scroll", () => {
    if (pt) return; pt = true;
    requestAnimationFrame(() => { if (scrollY < innerHeight * 1.2) heroImg.style.translate = "0 " + (scrollY * .3).toFixed(1) + "px"; pt = false; });
  }, { passive: true });
  $("#checked").textContent = `Views and likes checked ${day(DATA.checked, { weekday: "long", month: "short", day: "numeric" })}. Numbers keep growing after that.`;
  document.getElementById("year").textContent = new Date().getFullYear();
})();
