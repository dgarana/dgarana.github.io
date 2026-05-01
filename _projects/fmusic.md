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
summary: Download music from YouTube, manage a local SQLite library, edit metadata and audio, play locally, cast to Sonos, and control playback from a phone or AI assistant through MCP.
github: https://github.com/dgarana/fmusic
primary_cta_label: Download app
primary_cta_url: https://github.com/dgarana/fmusic/releases
visual: '<div class="fmusic-logo-art"><img src="/assets/fmusic/logo.png" alt="FMusic logo"><span>Download - Manage - Edit - Stream - AI integrated.</span></div>'
nav:
  - label: Story
    id: story
  - label: AI control
    id: ai-control
  - label: Showcase
    id: showcase
  - label: Problems
    id: problems
  - label: Specs
    id: specs
  - label: Install
    id: install
  - label: Development
    id: development
---

<section class="landing-section landing-section--intro" id="story">
  <p class="eyebrow">The local-first music workstation</p>
  <h2>Your music, your files, your library.</h2>
  <p class="landing-copy">FMusic turns discovery, downloading, library management, editing, playback, casting, and AI-assisted control into one desktop flow. It is for people who want the control of local files without giving up the convenience of modern music tooling.</p>
  <div class="metric-row">
    <div><strong>Desktop</strong><span>Windows, macOS, Linux</span></div>
    <div><strong>Offline</strong><span>SQLite-backed local library</span></div>
    <div><strong>Connected</strong><span>Sonos, QR sync, remote control, MCP</span></div>
  </div>
</section>

<section class="landing-section ai-console-section" id="ai-control">
  <div class="ai-console-copy">
    <p class="eyebrow">AI integrated through MCP</p>
    <h2>Two agents. One music library.</h2>
    <p class="landing-copy">FMusic exposes a local MCP server so Claude can control playback and Codex can research, search, and queue downloads through the same local tools.</p>
  </div>

  <div class="ai-console-tabs">
    <input class="ai-tab-input" type="radio" name="ai-console-en" id="ai-tab-claude-en" checked>
    <input class="ai-tab-input" type="radio" name="ai-console-en" id="ai-tab-codex-en">
    <div class="ai-tab-list" role="tablist" aria-label="AI console examples">
      <label for="ai-tab-claude-en">Claude playback</label>
      <label for="ai-tab-codex-en">Codex downloads</label>
    </div>
    <div class="ai-tab-panels">
      <div class="ai-tab-panel ai-tab-panel--claude">
        <div class="ai-terminal" aria-label="Simulated Claude Code console controlling FMusic">
          <div class="ai-terminal__chrome">
            <span>Claude Code</span>
            <small>FMusic MCP connected</small>
          </div>
          <div class="ai-terminal__body">
            <p class="ai-terminal__prompt">what is playing?</p>
            <p class="ai-terminal__call">called fmusic_player_state</p>
            <p class="ai-terminal__answer">Nothing is playing right now. The player is stopped and the queue is empty.</p>
            <p class="ai-terminal__prompt">play something random</p>
            <p class="ai-terminal__call">called fmusic_search_library</p>
            <p class="ai-terminal__call">called fmusic_play_track</p>
            <p class="ai-terminal__answer">Playing <strong>Strobe</strong> by deadmau5. A classic.</p>
            <p class="ai-terminal__cursor">&gt; <span></span></p>
          </div>
        </div>
      </div>

      <div class="ai-tab-panel ai-tab-panel--codex">
        <div class="ai-terminal ai-terminal--codex" aria-label="Simulated OpenAI Codex console controlling FMusic">
          <div class="ai-terminal__chrome">
            <span>&gt;_ OpenAI Codex</span>
            <small>agent + FMusic MCP</small>
          </div>
          <div class="ai-terminal__body">
            <p class="ai-terminal__prompt">download the top 2 techno songs for 2026</p>
            <p class="ai-terminal__answer">I’ll verify a current techno chart first, then use FMusic to find and queue matching tracks.</p>
            <p class="ai-terminal__call">searched web: 2026 techno top tracks chart</p>
            <p class="ai-terminal__call">called fmusic.download_search_youtube</p>
            <p class="ai-terminal__call">called fmusic.download_enqueue_url</p>
            <p class="ai-terminal__answer">Queued two matching tracks as 320kbps MP3 downloads and checked the downloader state.</p>
            <p class="ai-terminal__cursor">&gt; <span></span></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="scroll-showcase" id="showcase">
  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">01 - Capture</p>
      <h2>Capture music.</h2>
    </div>
    <div class="showcase-detail">
      <p>Queue tracks from YouTube, import playlists, follow live progress, resume cancelled jobs, and avoid duplicate downloads before they clutter the library.</p>
      <figure class="showcase-visual">
        <img src="{{ "/assets/fmusic/downloads.png" | prepend: site.baseurl }}" alt="FMusic downloads screen">
      </figure>
    </div>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">02 - Organize</p>
      <h2>Organize it.</h2>
    </div>
    <div class="showcase-detail">
      <p>Sort, search, filter by genre, edit metadata inline, sync tags back to MP3 files, and use MusicBrainz lookup when the original source is messy.</p>
      <figure class="showcase-visual">
        <img src="{{ "/assets/fmusic/library.png" | prepend: site.baseurl }}" alt="FMusic library screen">
      </figure>
    </div>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">03 - Curate</p>
      <h2>Curate playlists.</h2>
    </div>
    <div class="showcase-detail">
      <p>Create playlists, reorder tracks, keep favorites protected, and build smart playlists from saved filters so the library reshapes itself around how you listen.</p>
      <figure class="showcase-visual">
        <img src="{{ "/assets/fmusic/playlists.png" | prepend: site.baseurl }}" alt="FMusic playlists screen">
      </figure>
    </div>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">04 - Shape</p>
      <h2>Shape audio.</h2>
    </div>
    <div class="showcase-detail">
      <p>The audio workbench makes quick edits feel native: trim silence, add fades, adjust volume, export a copy, or mark cue points you can jump to later.</p>
      <figure class="showcase-visual">
        <img src="{{ "/assets/fmusic/edit.png" | prepend: site.baseurl }}" alt="FMusic audio editor screen">
      </figure>
    </div>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">05 - Play everywhere nearby</p>
      <h2>Play anywhere.</h2>
    </div>
    <div class="showcase-detail">
      <p>Listen through the integrated player, cast to Sonos with seek support, download tracks to a phone via QR, control the desktop app from a browser on the same Wi-Fi, or let an AI assistant inspect and control playback through MCP.</p>
      <figure class="showcase-visual showcase-visual--pair">
        <img src="{{ "/assets/fmusic/sonos.png" | prepend: site.baseurl }}" alt="FMusic Sonos screen">
        <img src="{{ "/assets/fmusic/remote-controller-mobile.png" | prepend: site.baseurl }}" alt="FMusic remote controller mobile screen">
      </figure>
    </div>
  </div>
</section>

<section class="landing-section" id="problems">
  <p class="eyebrow">Problem specs</p>
  <h2>Built around real listening workflows.</h2>
  <div class="problem-grid">
    <div><span>Spec 01</span><h3>I want music offline.</h3><p>Bundled yt-dlp and FFmpeg prepare audio without requiring Python on the user's machine.</p></div>
    <div><span>Spec 02</span><h3>I want a clean library.</h3><p>SQLite, metadata editing, genre filters, cover art, playlists, and favorites keep files understandable.</p></div>
    <div><span>Spec 03</span><h3>I want to fix the audio.</h3><p>Trimming, fades, volume changes, preview, exports, and bookmarks solve the common post-download cleanup tasks.</p></div>
    <div><span>Spec 04</span><h3>I want it beyond the laptop.</h3><p>Sonos casting, QR mobile sync, a remote controller, MCP control, tray controls, and a mini player extend playback around the room and into AI workflows.</p></div>
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
      <tr><td>AI control</td><td>Local MCP server for assistant-driven playback and library control</td></tr>
      <tr><td>Distribution</td><td>electron-builder for Windows, macOS, and Linux</td></tr>
    </tbody>
  </table>
</section>

<section class="landing-section" id="install">
  <p class="eyebrow">Install FMusic</p>
  <h2>Download the build for your operating system.</h2>
  <p class="landing-copy">The app is distributed from GitHub Releases. Open the latest release, download the installer or package for your platform, and launch FMusic like any other desktop app.</p>

  <div class="install-grid">
    <div><span>macOS</span><h3>Download the DMG.</h3><p>Open the <code>.dmg</code>, drag FMusic into Applications, then launch it from Applications or Spotlight.</p></div>
    <div><span>Windows</span><h3>Download the installer.</h3><p>Run the Windows <code>.exe</code> installer from the release assets and follow the setup flow.</p></div>
    <div><span>Linux</span><h3>Download AppImage or deb.</h3><p>Use the <code>.AppImage</code> for a portable build, or install the <code>.deb</code> package on Debian/Ubuntu-based systems.</p></div>
  </div>

  <div class="project-actions">
    <a class="button button-primary" href="https://github.com/dgarana/fmusic/releases">Open releases</a>
    <a class="button button-secondary" href="https://github.com/dgarana/fmusic#readme">Read README</a>
  </div>
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
    <div><strong>Main process</strong><span>Windows, tray, updater, downloads, local servers, MCP, Sonos streaming, SQLite repositories, migrations, and IPC.</span></div>
    <div><strong>Preload</strong><span>A typed context bridge exposes safe app capabilities to the renderer.</span></div>
    <div><strong>Renderer</strong><span>React views for downloads, library, playlists, editor, settings, mini player, and remote-control state.</span></div>
    <div><strong>Shared</strong><span>IPC channel definitions, domain types, and i18n bundles live in a shared package boundary.</span></div>
  </div>
</section>
