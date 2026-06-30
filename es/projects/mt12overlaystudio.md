---
layout: project
title: MT12OverlayStudio
permalink: /es/projects/mt12overlaystudio/
lang: es
alternate_url: /projects/mt12overlaystudio/
theme: mt12overlaystudio
kind: App Electron de overlays de telemetría
status: Herramienta TopeRC / RadioMaster MT12
summary: Crea overlays de vídeo transparentes y precisos desde logs de telemetría de RadioMaster MT12 con editor visual, instalador de scripts Lua y exportación ProRes o PNG.
github: https://github.com/toperc/MT12OverlayStudio
primary_cta_label: Descargar app
primary_cta_url: https://github.com/toperc/MT12OverlayStudio/releases/latest
visual: '<div class="mt12-overlay-art"><img src="/assets/mt12overlaystudio/toperc-logo.png" alt="Logo de TopeRC"><div><span>Logs EdgeTX</span><span>Widgets en vivo</span><span>Exportación transparente</span></div></div>'
nav:
  - label: Historia
    id: story
  - label: Flujo
    id: workflow
  - label: Demostración
    id: showcase
  - label: Logger
    id: logger
  - label: Especificaciones
    id: specs
  - label: Instalar
    id: install
  - label: Desarrollo
    id: development
---

<section class="landing-section landing-section--intro" id="story">
  <p class="eyebrow">Overlays de telemetría para vídeos RC</p>
  <h2>Convierte logs de la MT12 en telemetría lista para vídeo.</h2>
  <p class="landing-copy">MT12OverlayStudio es una herramienta de escritorio de TopeRC para vídeos de RC crawling y trail. Instala scripts logger de EdgeTX en una RadioMaster MT12, lee los CSV de telemetría resultantes, permite diseñar widgets animados sobre una previsualización y exporta un overlay transparente para componerlo en un editor.</p>
  <div class="metric-row">
    <div><strong>Radio</strong><span>RadioMaster MT12 con logging Lua en EdgeTX</span></div>
    <div><strong>Editor</strong><span>Arrastra, redimensiona, estiliza, transforma y previsualiza widgets</span></div>
    <div><strong>Exportación</strong><span>MOV transparente ProRes 4444 o secuencia PNG</span></div>
  </div>
</section>

<section class="landing-section" id="workflow">
  <p class="eyebrow">Flujo de trabajo</p>
  <h2>De la SD de la radio al overlay en la línea de tiempo.</h2>
  <div class="problem-grid">
    <div><span>Paso 01</span><h3>Instala el logger.</h3><p>Conecta la MT12 por USB y deja que la app copie los scripts Lua en las carpetas correctas de EdgeTX, o cópialos manualmente desde el repositorio.</p></div>
    <div><span>Paso 02</span><h3>Carga una sesión.</h3><p>Selecciona un CSV directamente o deja que la app escanee unidades EdgeTX conectadas y liste logs por modelo y fecha.</p></div>
    <div><span>Paso 03</span><h3>Diseña el overlay.</h3><p>Coloca gauges, barras, gráficas y textos sobre una previsualización en vivo. Recorre la sesión para ver cómo animan los valores reales.</p></div>
    <div><span>Paso 04</span><h3>Renderiza para editar.</h3><p>Exporta un MOV transparente con ffmpeg o una secuencia PNG para componer en DaVinci Resolve, Premiere, Final Cut o herramientas similares.</p></div>
  </div>
</section>

<section class="scroll-showcase" id="showcase">
  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">01 - Instalar</p>
      <h2>Prepara la radio.</h2>
    </div>
    <div class="showcase-detail">
      <p>La vista de instalación detecta la SD de la MT12 cuando puede y copia los scripts Lua incluidos a las ubicaciones correctas de EdgeTX.</p>
      <figure class="showcase-visual">
        <img src="{{ "/assets/mt12overlaystudio/install.png" | prepend: site.baseurl }}" alt="Pantalla de instalación de MT12OverlayStudio">
      </figure>
    </div>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">02 - Cargar</p>
      <h2>Elige telemetría.</h2>
    </div>
    <div class="showcase-detail">
      <p>La vista de origen carga CSV manuales o escanea unidades EdgeTX conectadas para encontrar la sesión de conducción correcta.</p>
      <figure class="showcase-visual">
        <img src="{{ "/assets/mt12overlaystudio/source.png" | prepend: site.baseurl }}" alt="Pantalla de origen de MT12OverlayStudio">
      </figure>
    </div>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">03 - Diseñar</p>
      <h2>Construye el overlay.</h2>
    </div>
    <div class="showcase-detail">
      <p>Los widgets se editan directamente sobre la previsualización con controles precisos de posición, tamaño, rotación, color, sombra, fuente y tipo.</p>
      <figure class="showcase-visual">
        <img src="{{ "/assets/mt12overlaystudio/layout.png" | prepend: site.baseurl }}" alt="Editor de layout de MT12OverlayStudio">
      </figure>
    </div>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">04 - Transformar</p>
      <h2>Moldea señales raw.</h2>
    </div>
    <div class="showcase-detail">
      <p>Los pipelines por widget pueden encadenar mínimo, máximo, media acumulada y transformaciones porcentuales para convertir valores EdgeTX raw en movimiento legible.</p>
      <figure class="showcase-visual showcase-visual--inspector">
        <img src="{{ "/assets/mt12overlaystudio/transforms.png" | prepend: site.baseurl }}" alt="Inspector de transformaciones de MT12OverlayStudio">
      </figure>
    </div>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">05 - Exportar</p>
      <h2>Renderiza vídeo transparente.</h2>
    </div>
    <div class="showcase-detail">
      <p>Configura FPS, tamaño de salida, ffmpeg, salida MOV o secuencias PNG y sigue el progreso fotograma a fotograma durante el render.</p>
      <figure class="showcase-visual">
        <img src="{{ "/assets/mt12overlaystudio/export.png" | prepend: site.baseurl }}" alt="Pantalla de exportación de MT12OverlayStudio">
      </figure>
    </div>
  </div>
</section>

<section class="landing-section" id="logger">
  <p class="eyebrow">Logger EdgeTX</p>
  <h2>La app incluye los scripts que corren en la radio.</h2>
  <p class="landing-copy">El repositorio incluye los scripts Lua que se ejecutan en la MT12 y escriben filas CSV desde las fuentes detectadas en la radio. La app empaqueta esos scripts como recursos extra, así que instalarlos en la radio no necesita internet.</p>
  <table>
    <thead><tr><th>Archivo del repo</th><th>Destino en la SD</th></tr></thead>
    <tbody>
      <tr><td><code>RCLOG/RCLOGC.lua</code></td><td><code>SCRIPTS/RCLOG/RCLOGC.lua</code></td></tr>
      <tr><td><code>TELEMETRY/RCLOG.lua</code></td><td><code>SCRIPTS/TELEMETRY/RCLOG.lua</code></td></tr>
      <tr><td><code>TOOLS/RCLOG.lua</code></td><td><code>SCRIPTS/TOOLS/RCLOG.lua</code></td></tr>
    </tbody>
  </table>
  <p class="note-card">Las columnas CSV se descubren desde la radio. Los valores analógicos suelen llegar como rangos raw de EdgeTX, normalmente <code>-1024..1024</code>, y se transforman dentro del editor de overlays.</p>
</section>

<section class="landing-section" id="specs">
  <p class="eyebrow">Especificaciones técnicas</p>
  <h2>Arquitectura interna de una app Electron.</h2>
  <table>
    <thead><tr><th>Capa</th><th>Tecnología</th></tr></thead>
    <tbody>
      <tr><td>Shell</td><td>Electron con puente preload y enrutado de comandos IPC</td></tr>
      <tr><td>Frontend</td><td>React, Vite, TypeScript, i18next y lucide-react</td></tr>
      <tr><td>Canvas</td><td>Código compartido de dibujo de widgets para previsualización y exportación</td></tr>
      <tr><td>Exportación</td><td><code>@napi-rs/canvas</code> en el proceso principal y ffmpeg para salida MOV transparente</td></tr>
      <tr><td>Integración radio</td><td>Detección de SD EdgeTX, instalación de scripts Lua y listado de logs</td></tr>
      <tr><td>Widgets</td><td>Gauge, barra, gráfica y texto con pipelines de datos por widget</td></tr>
      <tr><td>Idiomas</td><td>Inglés, español, alemán y francés seleccionables en runtime</td></tr>
      <tr><td>Distribución</td><td>electron-builder para Windows, macOS y Linux con electron-updater</td></tr>
    </tbody>
  </table>
</section>

<section class="landing-section" id="install">
  <p class="eyebrow">Instalar MT12OverlayStudio</p>
  <h2>Descarga la versión para tu sistema operativo.</h2>
  <p class="landing-copy">La app se publica desde la organización TopeRC en GitHub porque pertenece al mundo de herramientas y contenido RC, pero la mantiene dgarana.</p>
  <div class="install-grid">
    <div><span>Windows</span><h3>Descarga el setup.</h3><p>Usa el archivo <code>MT12OverlayStudio-x.x.x-setup.exe</code> de la última release.</p></div>
    <div><span>macOS</span><h3>Descarga el DMG.</h3><p>Elige Apple Silicon <code>arm64</code> o Intel <code>x64</code> según tu Mac.</p></div>
    <div><span>Linux</span><h3>Descarga AppImage o deb.</h3><p>Usa la AppImage portable o instala el paquete Debian en distribuciones compatibles.</p></div>
  </div>
  <div class="project-actions">
    <a class="button button-primary" href="https://github.com/toperc/MT12OverlayStudio/releases/latest">Abrir última release</a>
    <a class="button button-secondary" href="https://www.youtube.com/@TopeRC-es">Visitar TopeRC</a>
  </div>
</section>

<section class="landing-section" id="development">
  <p class="eyebrow">Desarrollo</p>
  <h2>Construida como una herramienta de producción de escritorio.</h2>
  <pre><code>npm install
npm run start:dev
npm run typecheck
npm run build
npm run smoke</code></pre>
  <div class="architecture-list">
    <div><strong>Renderer</strong><span>Las vistas React gestionan origen, edición de layout, exportación, instalación, interacción con la previsualización y localización.</span></div>
    <div><strong>Proceso principal</strong><span>Electron maneja ventanas, diálogos, comandos nativos, detección/descarga de ffmpeg, render de frames, screenshots y eventos de actualización.</span></div>
    <div><strong>Capa compartida</strong><span>Tipos, utilidades y dibujo de widgets compartidos mantienen alineadas la previsualización y los fotogramas exportados.</span></div>
  </div>
</section>
