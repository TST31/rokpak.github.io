(() => {
  const nav = document.querySelector('[data-nav]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-menu]');

  if (menuToggle && menu) {
    menuToggle.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      menuToggle.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('is-open');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  if (nav) {
    const onScroll = () => {
      nav.classList.toggle('is-scrolled', window.scrollY > 40);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  const gigList = document.querySelector('[data-gigs]');
  const gigEmpty = document.querySelector('[data-gigs-empty]');
  if (gigList) {
    const gigs = (window.ROKPAK_GIGS || []).slice();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const upcoming = gigs
      .filter(g => g && g.date && new Date(g.date) >= today)
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    if (upcoming.length === 0) {
      if (gigEmpty) gigEmpty.hidden = false;
      gigList.hidden = true;
    } else {
      const fmt = new Intl.DateTimeFormat('de-DE', {
        weekday: 'short', day: '2-digit', month: 'short', year: 'numeric',
      });
      gigList.innerHTML = upcoming.map(g => {
        const dateLabel = fmt.format(new Date(g.date));
        const link = g.url
          ? `<a class="gig__link" href="${g.url}" target="_blank" rel="noopener">Tickets &rarr;</a>`
          : '';
        return `
          <li class="gig">
            <time class="gig__date" datetime="${g.date}">${dateLabel}</time>
            <span class="gig__venue">${g.venue}</span>
            <span class="gig__city">${g.city}</span>
            ${link}
          </li>`;
      }).join('');
    }
  }
  // Audio preview player
  let currentAudio = null;
  let currentItem = null;
  let currentTimer = null;
  let progressRaf = null;
  const PREVIEW_DURATION = 30;

  function stopAudio() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio = null;
    }
    if (currentItem) {
      currentItem.classList.remove('is-playing');
      currentItem.querySelector('.song__play').classList.remove('is-playing');
      const prog = currentItem.querySelector('.song__progress');
      if (prog) prog.style.width = '0%';
      currentItem = null;
    }
    clearTimeout(currentTimer);
    cancelAnimationFrame(progressRaf);
    currentTimer = null;
  }

  function animateProgress(audio, progEl, startTime) {
    const elapsed = audio.currentTime - startTime;
    const pct = Math.min(elapsed / PREVIEW_DURATION * 100, 100);
    progEl.style.width = pct + '%';
    if (elapsed < PREVIEW_DURATION && !audio.paused) {
      progressRaf = requestAnimationFrame(() => animateProgress(audio, progEl, startTime));
    }
  }

  document.querySelectorAll('.song__play').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.song-item');
      const src = btn.dataset.audio;

      if (currentItem === item) {
        stopAudio();
        return;
      }

      stopAudio();

      const audio = new Audio(src);
      currentAudio = audio;
      currentItem = item;

      const progEl = item.querySelector('.song__progress');

      audio.play().then(() => {
        item.classList.add('is-playing');
        btn.classList.add('is-playing');
        animateProgress(audio, progEl, audio.currentTime);
        currentTimer = setTimeout(stopAudio, PREVIEW_DURATION * 1000);
      }).catch(err => {
        console.error('Audio konnte nicht abgespielt werden:', err, src);
        currentAudio = null;
        currentItem = null;
      });
    });
  });
})();
