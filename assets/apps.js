// TDevelopers — apps catalog & rendering
// Icons stored locally at assets/icons/ for reliability.

const apps = [
  {
    name: "MeFace AI",
    tagline: "Face Shape Detector",
    blurb: "Analyze your face shape and find hairstyles, beard styles & glasses that suit you.",
    rating: 4.2,
    downloads: "New",
    category: "Beauty",
    icon: "assets/icons/meface.png",
    play: "https://play.google.com/store/apps/details?id=com.ai.face.shape.detector.meface"
  },
  {
    name: "Tattoi",
    tagline: "AI Tattoo Generator",
    blurb: "Design your next tattoo in seconds. Type any idea and AI generates tattoo art and stencils — see your ink before you commit.",
    downloads: "New",
    category: "Lifestyle",
    icon: "assets/icons/tattoi.png",
    play: "https://play.google.com/store/apps/details?id=com.tdevs.ai.tattoo.generator",
    appstore: "https://apps.apple.com/us/app/ai-tattoo-generator-tattoi/id6775187493"
  },
  {
    name: "FactJano",
    tagline: "Did you know facts",
    blurb: "Fuel your curiosity with a fascinating fact every day.",
    rating: 4.4,
    downloads: "10K+",
    category: "Books & Reference",
    icon: "assets/icons/factjano.png",
    play: "https://play.google.com/store/apps/details?id=com.tdevelopers.factjano",
    appstore: "https://apps.apple.com/us/app/factjano-daily-micro-learning/id6664073325"
  },
  {
    name: "Cat Games for Cats",
    tagline: "Interactive cat toy",
    blurb: "Turn your phone into an interactive toy your cat will actually love.",
    rating: 4.4,
    downloads: "100+",
    category: "Casual game",
    icon: "assets/icons/catgames.png",
    play: "https://play.google.com/store/apps/details?id=com.pet.cats.games.kittens"
  },
  {
    name: "PocketMind",
    tagline: "Smart Study AI",
    blurb: "Turn any topic into flashcards, quizzes & study roadmaps with AI.",
    rating: 4.6,
    downloads: "1K+",
    category: "Education",
    icon: "assets/icons/pocketmind.png",
    play: "https://play.google.com/store/apps/details?id=com.tdevelopers.pocket_mind_app",
    appstore: "https://apps.apple.com/us/app/quiz-maker-ai-pocketmind/id6740739787"
  },
  {
    name: "Sooz",
    tagline: "Breathing Exercises",
    blurb: "A simple breathing app for stress, sleep and focus. No clutter — just breath.",
    rating: 4.3,
    downloads: "50+",
    category: "Health & Fitness",
    icon: "assets/icons/breava.png",
    play: "https://play.google.com/store/apps/details?id=com.tdevs.respira.breathing",
    appstore: "https://apps.apple.com/us/app/breava-breathwork-calm/id6762538253"
  },
  {
    name: "Appixa",
    tagline: "AI Photo Enhancer",
    blurb: "Enhance, restore and transform photos with template-based AI editing.",
    rating: 3.5,
    downloads: "1K+",
    category: "Photography",
    icon: "assets/icons/appixa.png",
    play: "https://play.google.com/store/apps/details?id=ai.photo.editor.appixa.photoenhancer",
    appstore: "https://apps.apple.com/us/app/ai-photo-enhancer-appixa/id6759392881"
  },
  {
    name: "Imate",
    tagline: "AI boyfriend who cares",
    blurb: "A caring AI companion — chat, flirt, vent, unwind. Always there, always warm.",
    rating: 4.7,
    downloads: "10K+",
    category: "Entertainment",
    icon: "assets/icons/imate.png",
    play: "https://play.google.com/store/apps/details?id=ai.boyfriend.imate.virtual.companion",
    appstore: "https://apps.apple.com/us/app/ai-boyfriend-chat-imate/id6754762584"
  },
  {
    name: "Imiss",
    tagline: "Caring AI Girlfriend",
    blurb: "A warm, playful AI girlfriend who chats, calls and makes moments feel real.",
    rating: 4.6,
    downloads: "New",
    category: "Entertainment",
    icon: "assets/icons/imiss.png",
    play: "https://play.google.com/store/apps/details?id=com.imiss.ai.girlfriend.simulator"
  },
  {
    name: "Body Metrics",
    tagline: "AI Body Scanner",
    blurb: "AI-powered body scan — posture, symmetry and fitness insights from one photo.",
    rating: 4.3,
    downloads: "500+",
    category: "Health & Fitness",
    icon: "assets/icons/bmatrix.png",
    play: "https://play.google.com/store/apps/details?id=com.tdevelopers.bmatrix_ai",
    appstore: "https://apps.apple.com/us/app/fitness-check-ai-bmatrix/id6748861833"
  }
];

function star(filled) {
  const cls = filled ? '#f59e0b' : 'rgba(255,255,255,0.15)';
  return `<svg style="color:${cls}" class="w-3.5 h-3.5" viewBox="0 0 20 20" fill="currentColor"><path d="M10 1.5l2.7 5.5 6 .9-4.4 4.2 1 6-5.3-2.8L4.7 18.1l1-6L1.3 7.9l6-.9L10 1.5z"/></svg>`;
}

function ratingRow(r) {
  if (r === undefined || r === null) return '';
  const full = Math.round(r);
  let s = '';
  for (let i = 1; i <= 5; i++) s += star(i <= full);
  return `<div class="flex items-center gap-0.5">${s}<span class="ml-2 text-xs font-medium text-white/65">${r.toFixed(1)}</span></div>`;
}

function storeBadges(app) {
  const items = [];
  if (app.play) {
    items.push(`<a href="${app.play}" target="_blank" rel="noopener" aria-label="Get on Google Play"
      class="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 px-3 py-1.5 text-xs font-medium text-white/85 hover:text-white transition" onclick="event.stopPropagation()">
      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" aria-hidden="true">
        <defs>
          <linearGradient id="pa-${Math.random().toString(36).slice(2,7)}" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="#00d4ff"/><stop offset="100%" stop-color="#0067ff"/></linearGradient>
        </defs>
        <path d="M3.6 2.3 C3.2 2.6 3 3.1 3 3.7 V20.3 C3 20.9 3.2 21.4 3.6 21.7 L13.1 12 Z" fill="#00b3ff"/>
        <path d="M16.4 8.4 13.1 12 16.4 15.6 20.6 13.2 C21.3 12.8 21.3 11.2 20.6 10.8 Z" fill="#ffce3a"/>
        <path d="M3.6 21.7 C3.9 21.9 4.3 21.9 4.7 21.7 L16.4 15.6 13.1 12 Z" fill="#00d96b"/>
        <path d="M3.6 2.3 C3.9 2.1 4.3 2.1 4.7 2.3 L16.4 8.4 13.1 12 Z" fill="#ff3a44"/>
      </svg>
      Play
    </a>`);
  }
  if (app.appstore) {
    items.push(`<a href="${app.appstore}" target="_blank" rel="noopener" aria-label="Download on App Store"
      class="inline-flex items-center gap-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.09] border border-white/10 px-3 py-1.5 text-xs font-medium text-white/85 hover:text-white transition" onclick="event.stopPropagation()">
      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor"><path d="M17.6 12.5c0-2.5 2-3.7 2.1-3.8-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.6.9-.8 0-1.9-.9-3.1-.8-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.6.8 1.2 1.8 2.5 3 2.4 1.2-.1 1.7-.8 3.1-.8 1.5 0 1.9.8 3.1.8 1.3 0 2.1-1.2 2.9-2.4.9-1.4 1.3-2.7 1.3-2.8-.1 0-2.5-1-2.6-3.6zM15.4 5c.7-.8 1.1-1.9 1-3-.9 0-2.1.6-2.7 1.4-.6.7-1.2 1.8-1 2.9 1 .1 2-.5 2.7-1.3z"/></svg>
      iOS
    </a>`);
  }
  return items.join('');
}

function appCard(app) {
  const primary = app.play || app.appstore;
  return `
    <div class="app-card reveal group" data-href="${primary}" data-tilt tabindex="0" role="link" aria-label="${app.name}">
      <div class="flex items-start gap-4">
        <img src="${app.icon}" alt="${app.name} icon" loading="lazy" decoding="async" class="app-icon"/>
        <div class="min-w-0 flex-1">
          <div class="flex items-center justify-between gap-2">
            <h3 class="font-display font-bold text-white text-lg sm:text-xl tracking-tight truncate">${app.name}</h3>
            <svg class="w-4 h-4 text-white/30 group-hover:text-brand-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M7 17L17 7M9 7h8v8" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </div>
          <div class="text-xs sm:text-sm text-white/55 truncate mt-0.5">${app.tagline}</div>
          <div class="mt-2 flex items-center gap-2.5 flex-wrap">
            ${ratingRow(app.rating)}
            ${app.downloads ? `<span class="text-[11px] text-white/35">·</span><span class="text-[11px] text-white/55">${app.downloads}</span>` : ''}
          </div>
        </div>
      </div>

      <p class="mt-5 text-sm sm:text-[15px] text-white/65 leading-relaxed flex-1">${app.blurb}</p>

      <div class="mt-5 pt-5 border-t border-white/5 flex items-center justify-between gap-2 flex-wrap">
        <div class="flex items-center gap-1.5 flex-wrap">
          ${storeBadges(app)}
        </div>
        <span class="text-[10px] uppercase tracking-widest text-white/35">${app.category}</span>
      </div>
    </div>
  `;
}

const grid = document.getElementById('apps-grid');
if (grid) {
  grid.innerHTML = apps.map(appCard).join('');
  // make whole card clickable (outer is a div so inner store links still work)
  grid.querySelectorAll('[data-href]').forEach(card => {
    card.style.cursor = 'pointer';
    card.addEventListener('click', (e) => {
      // ignore clicks on inner anchors / their children
      if (e.target.closest('a')) return;
      window.open(card.dataset.href, '_blank', 'noopener');
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        window.open(card.dataset.href, '_blank', 'noopener');
      }
    });
  });
}

// Scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add('is-visible');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.06 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Pointer-tracked glow on cards (desktop only)
if (window.matchMedia('(hover: hover)').matches) {
  document.querySelectorAll('[data-tilt]').forEach(card => {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', ((e.clientX - r.left) / r.width * 100) + '%');
      card.style.setProperty('--my', ((e.clientY - r.top) / r.height * 100) + '%');
    });
  });
}
