<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>ROKPAK — Rock/Pop Coverband für eure Party &amp; Hochzeit</title>
  <meta name="description" content="Rokpak ist eine Rock- und Popband, die aktuelle und zeitlose Hits auf Partys, Hochzeiten und Firmenfeiern spielt. Jetzt anfragen." />

  <meta property="og:type" content="website" />
  <meta property="og:title" content="ROKPAK — Rock/Pop Coverband" />
  <meta property="og:description" content="Aktuelle und zeitlose Hits für Partys, Hochzeiten und Firmenfeiern." />
  <meta property="og:image" content="assets/og-image.jpg" />
  <meta name="twitter:card" content="summary_large_image" />

  <link rel="icon" href="assets/logo.svg" type="image/svg+xml" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="css/styles.css" />
</head>
<body>

<header class="nav" data-nav>
  <div class="nav__inner">
    <a class="nav__brand" href="#top" aria-label="Rokpak Startseite">
      <svg viewBox="0 0 600 260" aria-hidden="true" style="height:28px;width:auto">
        <rect x="12" y="12" width="576" height="236" fill="none" stroke="currentColor" stroke-width="8"/>
        <text x="300" y="185" text-anchor="middle" font-family="'Anton','Bebas Neue',Impact,sans-serif" font-size="190" fill="currentColor" letter-spacing="6">ROKPAK</text>
      </svg>
    </a>

    <button class="nav__toggle" type="button" data-menu-toggle aria-label="Menü" aria-expanded="false" aria-controls="menu">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg>
    </button>

    <ul class="nav__menu" id="menu" data-menu>
      <li><a href="#band">Band</a></li>
      <li><a href="#repertoire">Repertoire</a></li>
      <li><a href="#gigs">Gigs</a></li>
      <li><a href="#social">Social</a></li>
      <li><a href="#kontakt">Kontakt</a></li>
    </ul>
  </div>
</header>

<main id="top">

  <section class="hero" aria-label="Intro">
    <div class="hero__inner">
      <h1 class="display hero__mark">
        <span class="hero__frame">ROKPAK</span>
      </h1>
      <p class="hero__tagline">Laut genug für die Party. Leise genug fürs Brautpaar. Rock- und Pop-Hits, live und in Schwarz-Weiß.</p>
      <div class="hero__cta">
        <a class="btn btn--primary" href="#kontakt">Jetzt anfragen</a>
        <a class="btn btn--ghost" href="#gigs">Nächste Gigs</a>
      </div>
    </div>
    <div class="hero__scroll" aria-hidden="true">Scroll ↓</div>
  </section>

  <section class="section" id="band" aria-labelledby="band-title">
    <div class="wrap">
      <div class="section__head">
        <span class="section__kicker">01 — Band</span>
      </div>
      <h2 class="display section__title" id="band-title">Sechs auf der Bühne.</h2>

      <ul class="members" role="list">
        <li class="member">
          <img src="images/portrait_phil_vocals.png" alt="Phil, Gesang" loading="lazy" decoding="async" />
          <div class="member__meta">
            <p class="member__name">Phil</p>
            <p class="member__role">Vocals</p>
          </div>
        </li>
        <li class="member">
          <img src="images/portrait_denis_vocals.jpg" alt="Denis, Gesang" loading="lazy" decoding="async" />
          <div class="member__meta">
            <p class="member__name">Denis</p>
            <p class="member__role">Vocals</p>
          </div>
        </li>
        <li class="member">
          <img src="images/portrait_nils_guitar.jpg" alt="Nils, Gitarre" loading="lazy" decoding="async" />
          <div class="member__meta">
            <p class="member__name">Nils</p>
            <p class="member__role">Guitar</p>
          </div>
        </li>
        <li class="member">
          <img src="images/portrait_johann_guitar.jpg" alt="Johann, Gitarre" loading="lazy" decoding="async" />
          <div class="member__meta">
            <p class="member__name">Johann</p>
            <p class="member__role">Guitar</p>
          </div>
        </li>
        <li class="member">
          <img src="images/portrait_tobi_bass.jpg" alt="Tobi, Bass" loading="lazy" decoding="async" />
          <div class="member__meta">
            <p class="member__name">Tobi</p>
            <p class="member__role">Bass</p>
          </div>
        </li>
        <li class="member">
          <img src="images/portrait_mirko_drums.jpg" alt="Mirko, Schlagzeug" loading="lazy" decoding="async" />
          <div class="member__meta">
            <p class="member__name">Mirko</p>
            <p class="member__role">Drums</p>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <section class="section" id="repertoire" aria-labelledby="rep-title">
    <div class="wrap">
      <div class="section__head">
        <span class="section__kicker">02 — Was wir spielen</span>
      </div>
      <h2 class="display section__title" id="rep-title">Hits, die jeder mitsingt.</h2>
      <p class="songs__hint">Ein Auszug aus unserem Repertoire — von Dua Lipa bis Tina Turner. Vollständige Songliste auf Anfrage.</p>
      <ul class="songs" role="list">
        <li>Simply the Best — Tina Turner</li>
        <li>Break My Heart — Dua Lipa</li>
        <li>Flowers — Miley Cyrus</li>
        <li>TODO — weitere Songs</li>
        <li>TODO — weitere Songs</li>
        <li>TODO — weitere Songs</li>
      </ul>
    </div>
  </section>

  <section class="section" id="gigs" aria-labelledby="gigs-title">
    <div class="wrap">
      <div class="section__head">
        <span class="section__kicker">03 — Nächste Gigs</span>
      </div>
      <h2 class="display section__title" id="gigs-title">Wo ihr uns seht.</h2>

      <ul class="gigs" data-gigs role="list"></ul>
      <div class="gigs__empty" data-gigs-empty hidden>
        <p>Aktuell keine öffentlichen Termine. Für private Feiern und Hochzeiten nehmen wir jederzeit Anfragen entgegen.</p>
        <p style="margin-top:1rem;"><a class="btn btn--ghost" href="#kontakt">Termin anfragen</a></p>
      </div>
    </div>
  </section>

  <section class="section" id="social" aria-labelledby="social-title">
    <div class="wrap">
      <div class="section__head">
        <span class="section__kicker">04 — Social &amp; Feed</span>
      </div>
      <h2 class="display section__title" id="social-title">Folgt uns.</h2>

      <ul class="socials" role="list">
        <li>
          <a href="https://www.instagram.com/rokpakmusic/" target="_blank" rel="noopener" aria-label="Rokpak auf Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            @rokpakmusic
          </a>
        </li>
      </ul>

      <div class="feed" aria-label="Instagram Beiträge">
        <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DXEQXAWjKHt/" data-instgrm-version="14"></blockquote>
        <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DW3YhAxGScK/" data-instgrm-version="14"></blockquote>
        <blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/DWjmi2MikH6/" data-instgrm-version="14"></blockquote>
      </div>
    </div>
  </section>

  <section class="section contact" id="kontakt" aria-labelledby="kontakt-title">
    <div class="wrap">
      <div class="section__head" style="justify-content:center;">
        <span class="section__kicker">05 — Kontakt</span>
      </div>
      <h2 class="display section__title" id="kontakt-title" style="text-align:center;">Bucht uns.</h2>
      <p class="contact__lead">Hochzeit, Geburtstag, Firmenfeier — schreibt uns, was ihr plant. Wir melden uns mit Angebot und freien Terminen.</p>
      <a class="btn btn--primary" href="mailto:TODO@rokpak.de?subject=Booking-Anfrage">Booking-Anfrage schreiben</a>
    </div>
  </section>

</main>

<footer class="footer">
  <div class="wrap footer__inner">
    <p>&copy; <span id="year">2026</span> Rokpak</p>
    <p><a href="impressum.html">Impressum</a></p>
  </div>
</footer>

<script>document.getElementById('year').textContent = new Date().getFullYear();</script>
<script src="data/gigs.js"></script>
<script src="js/main.js"></script>
<script async src="https://www.instagram.com/embed.js"></script>
</body>
</html>
