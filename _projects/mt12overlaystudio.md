---
layout: project
title: MT12OverlayStudio
path: mt12overlaystudio
lang: en
alternate_url: /es/projects/mt12overlaystudio/
order: 3
theme: mt12overlaystudio
kind: Electron telemetry overlay app
status: TopeRC / RadioMaster MT12 tooling
summary: Build frame-accurate transparent video overlays from RadioMaster MT12 telemetry logs with a visual editor, Lua logger installer, and ProRes or PNG export.
github: https://github.com/toperc/MT12OverlayStudio
primary_cta_label: Download app
primary_cta_url: https://github.com/toperc/MT12OverlayStudio/releases/latest
visual: '<div class="mt12-overlay-art"><img src="/assets/mt12overlaystudio/toperc-logo.png" alt="TopeRC logo"><div><span>EdgeTX logs</span><span>Live widgets</span><span>Transparent export</span></div></div>'
nav:
  - label: Story
    id: story
  - label: Workflow
    id: workflow
  - label: Showcase
    id: showcase
  - label: Logger
    id: logger
  - label: Specs
    id: specs
  - label: Install
    id: install
  - label: Development
    id: development
---

<section class="landing-section landing-section--intro" id="story">
  <p class="eyebrow">Telemetry overlays for RC footage</p>
  <h2>Turn MT12 radio logs into video-ready telemetry.</h2>
  <p class="landing-copy">MT12OverlayStudio is a TopeRC desktop tool for RC crawling and trail driving videos. It installs EdgeTX logger scripts on a RadioMaster MT12, reads the resulting CSV telemetry, lets you design animated widgets on a frame preview, and exports a transparent overlay that can be composited in an editor.</p>
  <div class="metric-row">
    <div><strong>Radio</strong><span>RadioMaster MT12 with EdgeTX Lua logging</span></div>
    <div><strong>Editor</strong><span>Drag, resize, style, transform, and preview widgets</span></div>
    <div><strong>Export</strong><span>Transparent ProRes 4444 MOV or PNG sequence</span></div>
  </div>
</section>

<section class="landing-section" id="workflow">
  <p class="eyebrow">Workflow</p>
  <h2>From radio SD card to timeline overlay.</h2>
  <div class="problem-grid">
    <div><span>Step 01</span><h3>Install the logger.</h3><p>Connect the MT12 by USB and let the app copy the Lua scripts into the correct EdgeTX folders, or copy them manually from the repository.</p></div>
    <div><span>Step 02</span><h3>Load a session.</h3><p>Pick a CSV directly, or let the app scan connected EdgeTX drives and list logs by model and recording date.</p></div>
    <div><span>Step 03</span><h3>Design the overlay.</h3><p>Place gauges, bars, graphs, and text widgets over a live preview. Scrub through the session to see real values animate.</p></div>
    <div><span>Step 04</span><h3>Render for editing.</h3><p>Export a transparent MOV through ffmpeg or a PNG frame sequence for compositing in DaVinci Resolve, Premiere, Final Cut, or similar tools.</p></div>
  </div>
</section>

<section class="scroll-showcase" id="showcase">
  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">01 - Install</p>
      <h2>Set up the radio.</h2>
    </div>
    <div class="showcase-detail">
      <p>The install view detects the MT12 SD card when possible and copies the bundled Lua logger scripts to the right EdgeTX locations.</p>
      <figure class="showcase-visual">
        <img src="{{ "/assets/mt12overlaystudio/install.png" | prepend: site.baseurl }}" alt="MT12OverlayStudio install screen">
      </figure>
    </div>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">02 - Load</p>
      <h2>Pick telemetry.</h2>
    </div>
    <div class="showcase-detail">
      <p>The source view loads manual CSV files or scans connected EdgeTX units so the right driving session is easy to find.</p>
      <figure class="showcase-visual">
        <img src="{{ "/assets/mt12overlaystudio/source.png" | prepend: site.baseurl }}" alt="MT12OverlayStudio source screen">
      </figure>
    </div>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">03 - Design</p>
      <h2>Build the overlay.</h2>
    </div>
    <div class="showcase-detail">
      <p>Widgets are edited directly on the preview with precise position, size, rotation, color, shadow, source, and type controls in the inspector.</p>
      <figure class="showcase-visual">
        <img src="{{ "/assets/mt12overlaystudio/layout.png" | prepend: site.baseurl }}" alt="MT12OverlayStudio layout editor">
      </figure>
    </div>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">04 - Transform</p>
      <h2>Shape raw signals.</h2>
    </div>
    <div class="showcase-detail">
      <p>Per-widget data pipelines can chain running minimum, maximum, average, and percentage range transforms so raw EdgeTX values become readable overlay motion.</p>
      <figure class="showcase-visual showcase-visual--inspector">
        <img src="{{ "/assets/mt12overlaystudio/transforms.png" | prepend: site.baseurl }}" alt="MT12OverlayStudio transform inspector">
      </figure>
    </div>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">05 - Export</p>
      <h2>Render transparent video.</h2>
    </div>
    <div class="showcase-detail">
      <p>Configure FPS, output size, ffmpeg, MOV output, or PNG sequences and watch progress frame by frame while the overlay is rendered.</p>
      <figure class="showcase-visual">
        <img src="{{ "/assets/mt12overlaystudio/export.png" | prepend: site.baseurl }}" alt="MT12OverlayStudio export screen">
      </figure>
    </div>
  </div>
</section>

<section class="landing-section" id="logger">
  <p class="eyebrow">EdgeTX logger</p>
  <h2>The app ships with the radio-side scripts.</h2>
  <p class="landing-copy">The repository includes the Lua scripts that run on the MT12 and write CSV rows from discovered radio sources. The app packages those scripts as extra resources, so installing them to the radio does not need internet access.</p>
  <table>
    <thead><tr><th>Repo file</th><th>SD card destination</th></tr></thead>
    <tbody>
      <tr><td><code>RCLOG/RCLOGC.lua</code></td><td><code>SCRIPTS/RCLOG/RCLOGC.lua</code></td></tr>
      <tr><td><code>TELEMETRY/RCLOG.lua</code></td><td><code>SCRIPTS/TELEMETRY/RCLOG.lua</code></td></tr>
      <tr><td><code>TOOLS/RCLOG.lua</code></td><td><code>SCRIPTS/TOOLS/RCLOG.lua</code></td></tr>
    </tbody>
  </table>
  <p class="note-card">CSV columns are discovered from the radio. Typical analog values arrive as raw EdgeTX ranges, usually <code>-1024..1024</code>, and are transformed inside the overlay editor.</p>
</section>

<section class="landing-section" id="specs">
  <p class="eyebrow">Technical specs</p>
  <h2>Electron app internals, documented.</h2>
  <table>
    <thead><tr><th>Layer</th><th>Technology</th></tr></thead>
    <tbody>
      <tr><td>Shell</td><td>Electron with a preload bridge and IPC command routing</td></tr>
      <tr><td>Frontend</td><td>React, Vite, TypeScript, i18next, and lucide-react</td></tr>
      <tr><td>Canvas</td><td>Shared widget drawing code for live preview and export</td></tr>
      <tr><td>Export</td><td><code>@napi-rs/canvas</code> in the main process plus ffmpeg for transparent MOV output</td></tr>
      <tr><td>Radio integration</td><td>EdgeTX SD-card detection, Lua script installation, and log listing</td></tr>
      <tr><td>Widgets</td><td>Gauge, bar, graph, and text widgets with per-widget data pipelines</td></tr>
      <tr><td>Languages</td><td>English, Spanish, German, and French selectable at runtime</td></tr>
      <tr><td>Distribution</td><td>electron-builder for Windows, macOS, and Linux with electron-updater</td></tr>
    </tbody>
  </table>
</section>

<section class="landing-section" id="install">
  <p class="eyebrow">Install MT12OverlayStudio</p>
  <h2>Download the build for your operating system.</h2>
  <p class="landing-copy">The app is published from the TopeRC GitHub organization because it belongs to the RC content/tooling world, but it is maintained by dgarana.</p>
  <div class="install-grid">
    <div><span>Windows</span><h3>Download the setup file.</h3><p>Use the <code>MT12OverlayStudio-x.x.x-setup.exe</code> asset from the latest release.</p></div>
    <div><span>macOS</span><h3>Download the DMG.</h3><p>Pick Apple Silicon <code>arm64</code> or Intel <code>x64</code> depending on your Mac.</p></div>
    <div><span>Linux</span><h3>Download AppImage or deb.</h3><p>Use the portable AppImage or install the Debian package on compatible distributions.</p></div>
  </div>
  <div class="project-actions">
    <a class="button button-primary" href="https://github.com/toperc/MT12OverlayStudio/releases/latest">Open latest release</a>
    <a class="button button-secondary" href="https://www.youtube.com/@TopeRC-es">Visit TopeRC</a>
  </div>
</section>

<section class="landing-section" id="development">
  <p class="eyebrow">Development</p>
  <h2>Built like a focused desktop production tool.</h2>
  <pre><code>npm install
npm run start:dev
npm run typecheck
npm run build
npm run smoke</code></pre>
  <div class="architecture-list">
    <div><strong>Renderer</strong><span>React views manage source selection, layout editing, export settings, installation, preview interaction, and localization.</span></div>
    <div><strong>Main process</strong><span>Electron handles windows, dialogs, native commands, ffmpeg discovery/download, frame rendering, screenshots, and updater events.</span></div>
    <div><strong>Shared layer</strong><span>Common types, utilities, and widget drawing logic keep preview output and exported frames aligned.</span></div>
  </div>
</section>
