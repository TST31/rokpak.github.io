# Rokpak Website

Statischer One-Pager für die Band Rokpak. Kein Build-Step, kein Backend.
Gehostet auf GitHub Pages aus dem Repo [TST31/ropak_draft](https://github.com/TST31/ropak_draft).

## Lokal ansehen

```bash
python -m http.server 8000
```

Dann `http://localhost:8000` im Browser öffnen.

## Inhalte pflegen

### Nächste Gigs
Datei: [`data/gigs.js`](data/gigs.js)

```js
window.ROKPAK_GIGS = [
  { date: "2026-06-14", venue: "Sommerfest Musterstadt", city: "Musterstadt", url: "https://..." },
  { date: "2026-07-20", venue: "Weingut Beispiel", city: "Mainz" },
];
```

Vergangene Termine (Datum liegt vor heute) werden automatisch ausgeblendet.
Format: `YYYY-MM-DD`. `url` ist optional.

### Songliste
In [`index.html`](index.html) im Block `<ul class="songs">` einzelne `<li>`-Einträge ergänzen.

### Band-Mitglieder
In [`index.html`](index.html) im Block `<ul class="members">`:
- Namen und Rollen eintragen (ersetzen von `TODO Name` / `TODO Rolle`)
- Fotos: sind schon in `images/` hinterlegt. Für neue Fotos: in `images/` ablegen und `src`-Attribut anpassen.

### Instagram-Feed
Drei Platzhalter-Slots in der Sektion `#social`. Ersetzen durch offizielle Instagram-Embeds:
1. Auf dem Post in Instagram: `... → Einbetten → Einbettungscode kopieren`
2. Den gesamten `<blockquote class="instagram-media">…</blockquote>`-Block plus das `<script>`-Tag von `embed.js` ins HTML einsetzen.

### Impressum
Datei: [`impressum.html`](impressum.html). Alle `TODO`-Felder ausfüllen:
- Name, Anschrift, E-Mail
- Verantwortlich i.S.d. § 18 Abs. 2 MStV

**Vor Go-Live zwingend erforderlich** (Pflichtangaben in Deutschland).

### Booking-E-Mail
In [`index.html`](index.html) den `mailto:TODO@rokpak.de`-Link auf die echte Adresse ändern (Suche nach `mailto:TODO`).

## Deploy

```bash
git add .
git commit -m "Inhalte aktualisiert"
git push
```

GitHub Pages deployt automatisch. Live-URL: `https://tst31.github.io/ropak_draft/`

**Repo-Name-Hinweis:** Das Repo heißt aktuell `ropak_draft` (ohne das zweite „k"). Vor Go-Live empfiehlt sich eine Umbenennung in `rokpak` oder `rokpak-website` unter *GitHub → Settings → General → Repository name*. Danach ändert sich die URL auf `https://tst31.github.io/rokpak/`.

## GitHub Pages einrichten (einmalig)

1. Repo auf github.com öffnen
2. `Settings → Pages`
3. Source: `Deploy from a branch`, Branch: `main`, Folder: `/ (root)`
4. Save. Nach ~30 Sekunden ist die Seite unter der angezeigten URL erreichbar.

## Custom Domain (später)

Wenn eine Domain registriert wird (z. B. `rokpak.de`):
1. DNS beim Domain-Registrar: `CNAME` auf `tst31.github.io` (bzw. A-Records für Apex-Domain, siehe GitHub-Docs)
2. Datei `CNAME` im Repo-Root anlegen mit Inhalt: `rokpak.de`
3. In `Settings → Pages` als Custom Domain eintragen, HTTPS aktivieren.

## Technik-Notizen

- **Keine Abhängigkeiten.** Plain HTML/CSS/JS.
- **Fonts:** Google Fonts via CDN. Für GDPR-konforme Version: Fonts selbst hosten (siehe [google-webfonts-helper](https://gwfh.mranftl.com/fonts)) und den `<link>`-Tag in `index.html`/`impressum.html` ersetzen.
- **Bilder:** aktuell nur JPG. Vor Go-Live optional als WebP komprimieren.
- **Barrierefreiheit:** semantische Struktur, Tastaturnavigation, Kontraste OK. `prefers-reduced-motion` wird respektiert.
- **Browsertest:** Chrome, Safari, Firefox, Edge, iOS Safari, Android Chrome.

## Offene TODOs (vor Go-Live)

- [ ] Impressum-Felder füllen (`impressum.html`)
- [ ] Namen und Rollen der sechs Mitglieder (`index.html`)
- [ ] Booking-Mail-Adresse (`index.html`, Suche `mailto:TODO`)
- [ ] Social-Media-Links (Instagram, Facebook) auf echte URLs setzen
- [ ] Drei Instagram-Posts einbetten
- [ ] Mindestens einen kommenden Gig in `data/gigs.js` eintragen
- [ ] Repertoire mit ~20 echten Songs erweitern
- [ ] `assets/og-image.jpg` erstellen (1200×630 px, z. B. Logo auf Schwarz) für Link-Previews
