---
layout: project
title: FMusic
path: fmusic
lang: en
alternate_url: /es/projects/fmusic/
order: 2
theme: fmusic
kind: Electron desktop app
status: Cross-platform music app
summary: Download music from YouTube, manage a local SQLite library, edit metadata and audio, play locally, cast to Sonos, and control playback from a phone.
github: https://github.com/dgarana/fmusic
primary_cta_label: Read README
primary_cta_url: https://github.com/dgarana/fmusic#readme
visual: '<div class="player-art"><div class="cover-disc"></div><div class="player-art__body"><strong>FMusic</strong><span>Local library - Downloads - Sonos</span><div class="wave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div></div></div>'
nav:
  - label: Story
    id: story
  - label: Showcase
    id: showcase
  - label: Problems
    id: problems
  - label: Specs
    id: specs
  - label: Development
    id: development
---

<section class="landing-section landing-section--intro" id="story">
  <p class="eyebrow">The local-first music workstation</p>
  <h2>Your music, your files, your library.</h2>
  <p class="landing-copy">FMusic turns discovery, downloading, library management, editing, playback, and casting into one desktop flow. It is for people who want the control of local files without giving up the convenience of modern music tooling.</p>
  <div class="metric-row">
    <div><strong>Desktop</strong><span>Windows, macOS, Linux</span></div>
    <div><strong>Offline</strong><span>SQLite-backed local library</span></div>
    <div><strong>Connected</strong><span>Sonos, QR sync, remote control</span></div>
  </div>
</section>

<section class="scroll-showcase" id="showcase">
  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">01 - Capture</p>
      <h2>Search, preview, download, keep moving.</h2>
      <p>Queue tracks from YouTube, import playlists, follow live progress, resume cancelled jobs, and avoid duplicate downloads before they clutter the library.</p>
    </div>
    <figure class="showcase-visual">
      <img src="{{ "/assets/fmusic/downloads.png" | prepend: site.baseurl }}" alt="FMusic downloads screen">
    </figure>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">02 - Organize</p>
      <h2>A proper library instead of a folder full of files.</h2>
      <p>Sort, search, filter by genre, edit metadata inline, sync tags back to MP3 files, and use MusicBrainz lookup when the original source is messy.</p>
    </div>
    <figure class="showcase-visual">
      <img src="{{ "/assets/fmusic/library.png" | prepend: site.baseurl }}" alt="FMusic library screen">
    </figure>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">03 - Curate</p>
      <h2>Playlists that behave like part of the product.</h2>
      <p>Create playlists, reorder tracks, keep favorites protected, and build smart playlists from saved filters so the library reshapes itself around how you listen.</p>
    </div>
    <figure class="showcase-visual">
      <img src="{{ "/assets/fmusic/playlists.png" | prepend: site.baseurl }}" alt="FMusic playlists screen">
    </figure>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">04 - Shape</p>
      <h2>Trim, fade, boost, bookmark.</h2>
      <p>The audio workbench makes quick edits feel native: trim silence, add fades, adjust volume, export a copy, or mark cue points you can jump to later.</p>
    </div>
    <figure class="showcase-visual">
      <img src="{{ "/assets/fmusic/edit.png" | prepend: site.baseurl }}" alt="FMusic audio editor screen">
    </figure>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">05 - Play everywhere nearby</p>
      <h2>Local playback, Sonos casting, phone control.</h2>
      <p>Listen through the integrated player, cast to Sonos with seek support, download tracks to a phone via QR, or control the desktop app from a browser on the same Wi-Fi.</p>
    </div>
    <figure class="showcase-visual showcase-visual--pair">
      <img src="{{ "/assets/fmusic/sonos.png" | prepend: site.baseurl }}" alt="FMusic Sonos screen">
      <img src="{{ "/assets/fmusic/remote-controller-mobile.png" | prepend: site.baseurl }}" alt="FMusic remote controller mobile screen">
    </figure>
  </div>
</section>

<section class="landing-section" id="problems">
  <p class="eyebrow">Problem specs</p>
  <h2>Built around real listening workflows.</h2>
  <div class="problem-grid">
    <div><span>Spec 01</span><h3>I want music offline.</h3><p>Bundled yt-dlp and FFmpeg prepare audio without requiring Python on the user's machine.</p></div>
    <div><span>Spec 02</span><h3>I want a clean library.</h3><p>SQLite, metadata editing, genre filters, cover art, playlists, and favorites keep files understandable.</p></div>
    <div><span>Spec 03</span><h3>I want to fix the audio.</h3><p>Trimming, fades, volume changes, preview, exports, and bookmarks solve the common post-download cleanup tasks.</p></div>
    <div><span>Spec 04</span><h3>I want it beyond the laptop.</h3><p>Sonos casting, QR mobile sync, a remote controller, tray controls, and a mini player extend playback around the room.</p></div>
  </div>
</section>

<section class="landing-section" id="specs">
  <p class="eyebrow">Technical specs</p>
  <h2>Desktop app internals, documented.</h2>

  <table>
    <thead><tr><th>Layer</th><th>Technology</th></tr></thead>
    <tbody>
      <tr><td>Shell</td><td>Electron with context isolation</td></tr>
      <tr><td>Frontend</td><td>React, Vite, TypeScript</td></tr>
      <tr><td>State</td><td>Zustand</td></tr>
      <tr><td>Local audio</td><td>Howler.js and a custom media protocol with Range requests</td></tr>
      <tr><td>Database</td><td>better-sqlite3 with versioned migrations</td></tr>
      <tr><td>Metadata</td><td>music-metadata and node-id3</td></tr>
      <tr><td>Downloads</td><td>yt-dlp and FFmpeg</td></tr>
      <tr><td>Sonos</td><td>UPnP / AVTransport via <code>@svrooij/sonos</code></td></tr>
      <tr><td>Distribution</td><td>electron-builder for Windows, macOS, and Linux</td></tr>
    </tbody>
  </table>
</section>

<section class="landing-section" id="development">
  <p class="eyebrow">Developer path</p>
  <h2>Run it, test it, package it.</h2>

  <pre><code>npm install
npm run dev</code></pre>

  Useful commands:

  <pre><code>npm run typecheck
npm run test
npm run build
npm run screenshots:readme
npm run dist:mac
npm run dist:linux
npm run dist:win</code></pre>

  <p><code>npm install</code> runs the postinstall workflow that prepares <code>yt-dlp</code> and FFmpeg under <code>resources/bin/</code>. For CI or typecheck-only environments, skip binary downloads:</p>

  <pre><code>FMUSIC_SKIP_BINARIES=1 npm install</code></pre>

  <div class="architecture-list">
    <div><strong>Main process</strong><span>Windows, tray, updater, downloads, local servers, Sonos streaming, SQLite repositories, migrations, and IPC.</span></div>
    <div><strong>Preload</strong><span>A typed context bridge exposes safe app capabilities to the renderer.</span></div>
    <div><strong>Renderer</strong><span>React views for downloads, library, playlists, editor, settings, mini player, and remote-control state.</span></div>
    <div><strong>Shared</strong><span>IPC channel definitions, domain types, and i18n bundles live in a shared package boundary.</span></div>
  </div>
</section>
