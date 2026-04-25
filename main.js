const characters = {
  cinnamoroll: {
    emoji: '🐰', name: 'Cinnamoroll',
    desc1: 'Cinnamoroll is a white puppy with a plump round body, blue eyes, pink cheeks, and a curly tail that resembles a cinnamon roll. He was born on a cloud and floated down to earth.',
    desc2: 'Cinnamoroll loves to daydream and float through the sky. His gentle, quiet nature makes him a source of comfort.',
    tags: ['Dreamy', 'Animal', 'Classic'],
    vibes: ['quiet moments', 'daydreaming', 'soft comfort', 'rainy days'],
    mood: 'Dreamy', debut: '2001', type: 'Animal'
  },
  hellokitty: {
    emoji: '🎀', name: 'Hello Kitty',
    desc1: 'Hello Kitty, also known as Kitty White, is a cheerful white cat who lives in London with her family. She loves baking cookies and spending time with friends.',
    desc2: 'Debuting in 1974, Hello Kitty is one of the most recognizable characters in the world and a symbol of kawaii culture.',
    tags: ['Cheerful', 'Animal', 'Classic'],
    vibes: ['friendship', 'celebration', 'everyday joy', 'sharing'],
    mood: 'Cheerful', debut: '1974', type: 'Animal'
  },
  mymelody: {
    emoji: '🌸', name: 'My Melody',
    desc1: 'My Melody is a sweet white rabbit who lives in Mariland forest. She is always seen wearing her signature pink hood, made by her grandmother.',
    desc2: 'Kind, gentle, and a little clumsy, My Melody loves baking and quiet time. She represents warmth and the comfort of home.',
    tags: ['Calm', 'Animal', 'Modern'],
    vibes: ['gentle care', 'home warmth', 'baking', 'cozy afternoons'],
    mood: 'Calm', debut: '1975', type: 'Animal'
  },
  ttwinstars: {
    emoji: '⭐', name: 'Little Twin Stars',
    desc1: 'Kiki and Lala are twin star children who came from the Milky Way. Kiki has blue hair and Lala has pink hair — they travel together on a cloud.',
    desc2: 'The Little Twin Stars represent dreams, magic, and the bond between kindred spirits. Their pastel celestial aesthetic is iconic.',
    tags: ['Dreamy', 'Fantasy', 'Modern'],
    vibes: ['dreaming big', 'stargazing', 'kindred spirits', 'magic'],
    mood: 'Dreamy', debut: '1975', type: 'Fantasy'
  },
  pompompurin: {
    emoji: '🍮', name: 'Pompompurin',
    desc1: 'Pompompurin is a golden retriever who loves pudding so much he wears a beret that looks like one. He lives with his owner and spends most of his time napping.',
    desc2: 'Laid-back and cheerful, Pompompurin finds joy in simple pleasures: pudding, sleeping, and hanging out with friends.',
    tags: ['Cheerful', 'Food', 'Modern'],
    vibes: ['slow mornings', 'treating yourself', 'nap time', 'simple joys'],
    mood: 'Cheerful', debut: '1996', type: 'Food'
  },
  keroppi: {
    emoji: '🐸', name: 'Keroppi',
    desc1: 'Keroppi is a cheerful frog with big eyes and a wide smile who lives in Donut Pond. He loves adventure, singing, and spending time with his large family.',
    desc2: 'One of Sanrio\'s earliest characters, Keroppi represents curiosity and the joy of exploration.',
    tags: ['Calm', 'Animal', 'Classic'],
    vibes: ['adventure', 'curiosity', 'outdoor fun', 'singing'],
    mood: 'Calm', debut: '1987', type: 'Animal'
  },
  gudetama: {
    emoji: '🥚', name: 'Gudetama',
    desc1: 'Gudetama is a lazy egg yolk with little arms and legs. He was born from a broken eggshell and has a perpetually tired expression.',
    desc2: 'Gudetama loves to sleep, eat, and avoid work. His relatable laziness has made him a favorite among people who appreciate taking it easy.',
    tags: ['Calm', 'Food', 'Modern'],
    vibes: ['lazy days', 'self-care', 'comfort food', 'relaxation'],
    mood: 'Calm', debut: '2013', type: 'Food'
  },
  aggretsuko: {
    emoji: '🦊', name: 'Aggretsuko',
    desc1: 'Aggretsuko is a 25-year-old red panda who works as an accountant in Tokyo. She appears cute and mild-mannered at work, but has a secret passion for death metal.',
    desc2: 'Aggretsuko uses death metal karaoke to relieve the stress of her office job. Her character resonates with anyone who has ever felt overwhelmed by modern life.',
    tags: ['Cheerful', 'Animal', 'Modern'],
    vibes: ['stress relief', 'self-expression', 'work-life balance', 'hidden talents'],
    mood: 'Cheerful', debut: '2016', type: 'Animal'
  },
  chococat: {
    emoji: '🐱', name: 'Chococat',
    desc1: 'Chococat is a black cat with chocolate-colored paws, ears, and tail. He has big round eyes and a constant look of wonder on his face.',
    desc2: 'Chococat loves to explore and discover new things. He has a special ability to sense when something exciting is about to happen.',
    tags: ['Dreamy', 'Animal', 'Modern'],
    vibes: ['playfulness', 'curiosity', 'chocolatey treats', 'magical moments'],
    mood: 'Dreamy', debut: '1996', type: 'Animal'
  },
  badtzmaru: {
    emoji: '🐧', name: 'Badtz-Maru',
    desc1: 'Badtz-Maru is a mischievous penguin with spiky hair and a permanent scowl. He lives in Gorgeoustown and loves causing trouble.',
    desc2: 'Despite his bad attitude, Badtz-Maru has a soft spot for his friends and family. He dreams of becoming the leader of his own gang someday.',
    tags: ['Cheerful', 'Animal', 'Classic'],
    vibes: ['mischief', 'confidence', 'coolness', 'friendship'],
    mood: 'Cheerful', debut: '1993', type: 'Animal'
  }
};

let saved = new Set();
let currentDetailKey = null;

function openDetail(key) {
  const d = characters[key];
  currentDetailKey = key;
  document.getElementById('d-emoji').textContent = d.emoji;
  document.getElementById('d-name').textContent = d.name;
  document.getElementById('d-desc1').textContent = d.desc1;
  document.getElementById('d-desc2').textContent = d.desc2;
  document.getElementById('d-mood').textContent = d.mood;
  document.getElementById('d-debut').textContent = d.debut;
  document.getElementById('d-type').textContent = d.type;
  document.getElementById('d-mood-tags').innerHTML = d.tags.map(t => `<span class="detail-mood-tag">${t}</span>`).join('');
  document.getElementById('d-vibe-tags').innerHTML = d.vibes.map(v => `<span class="detail-vibe-tag">${v}</span>`).join('');
  const saveBtn = document.getElementById('d-save-btn');
  saveBtn.textContent = saved.has(key) ? '♥ Saved' : '♡ Save';
  saveBtn.classList.toggle('saved', saved.has(key));
  document.getElementById('detail-overlay').classList.add('visible');
}

function closeDetail(e) {
  if (!e || e.target === document.getElementById('detail-overlay')) {
    document.getElementById('detail-overlay').classList.remove('visible');
  }
}

function toggleSave(key, e) {
  e.stopPropagation();
  if (saved.has(key)) { saved.delete(key); } else { saved.add(key); }
  updateSaveUI(key);
  updateSavedCount();
}

function toggleSaveFromDetail() {
  const key = currentDetailKey;
  if (saved.has(key)) { saved.delete(key); } else { saved.add(key); }
  updateSaveUI(key);
  updateSavedCount();
  const saveBtn = document.getElementById('d-save-btn');
  saveBtn.textContent = saved.has(key) ? '♥ Saved' : '♡ Save';
  saveBtn.classList.toggle('saved', saved.has(key));
}

function updateSaveUI(key) {
  const btn = document.getElementById('save-' + key);
  if (btn) {
    btn.textContent = saved.has(key) ? '♥' : '♡';
    btn.classList.toggle('saved', saved.has(key));
  }
}

function updateSavedCount() {
  const el = document.getElementById('saved-count');
  el.textContent = saved.size > 0 ? `(${saved.size})` : '';
  renderSavedPage();
}

function renderSavedPage() {
  const grid = document.getElementById('saved-grid');
  if (saved.size === 0) {
    grid.innerHTML = '<div class="empty-saved"><div class="empty-saved-emoji">♡</div><div>No characters saved yet.<br>Browse the archive and save your favourites.</div></div>';
    return;
  }
  grid.innerHTML = [...saved].map(key => {
    const d = characters[key];
    return `<div class="saved-card">
      <div class="saved-card-emoji">${d.emoji}</div>
      <div>
        <div class="saved-card-name">${d.name}</div>
        <div class="saved-card-mood">${d.mood}</div>
      </div>
      <button class="remove-btn" onclick="removeSaved('${key}')">✕</button>
    </div>`;
  }).join('');
}

function removeSaved(key) {
  saved.delete(key);
  updateSaveUI(key);
  updateSavedCount();
}

function filterCards(btn, tag) {
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.card').forEach(card => {
    card.style.display = (tag === 'all' || card.dataset.tags.includes(tag)) ? '' : 'none';
  });
}

function showPage(page, e) {
  e.preventDefault();
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  document.getElementById('main-content').classList.add('hidden');
  document.getElementById('saved-page').classList.remove('visible');
  document.getElementById('about-page').classList.remove('visible');
  if (page === 'home') {
    document.getElementById('nav-home').classList.add('active');
    document.getElementById('main-content').classList.remove('hidden');
  } else if (page === 'saved') {
    document.getElementById('nav-saved').classList.add('active');
    document.getElementById('saved-page').classList.add('visible');
  } else if (page === 'about') {
    document.getElementById('nav-about').classList.add('active');
    document.getElementById('about-page').classList.add('visible');
  }
}
