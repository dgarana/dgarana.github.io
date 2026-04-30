---
layout: project
title: FMusic
permalink: /es/projects/fmusic/
lang: es
alternate_url: /projects/fmusic/
theme: fmusic
kind: Aplicacion desktop Electron
status: App de musica multiplataforma
summary: Descarga musica de YouTube, organiza una biblioteca local SQLite, edita metadatos y audio, reproduce en local, emite a Sonos y controla todo desde un telefono o desde un asistente de IA via MCP.
github: https://github.com/dgarana/fmusic
primary_cta_label: Leer README
primary_cta_url: https://github.com/dgarana/fmusic#readme
visual: '<div class="fmusic-logo-art"><img src="/assets/fmusic/logo.png" alt="Logo de FMusic"><span>Download - Manage - Edit - Stream - AI integrated.</span></div>'
nav:
  - label: Historia
    id: story
  - label: Showcase
    id: showcase
  - label: Problemas
    id: problems
  - label: Specs
    id: specs
  - label: Desarrollo
    id: development
---

<section class="landing-section landing-section--intro" id="story">
  <p class="eyebrow">La estacion de musica local-first</p>
  <h2>Tu musica, tus archivos, tu biblioteca.</h2>
  <p class="landing-copy">FMusic convierte descubrimiento, descargas, gestion de biblioteca, edicion, reproduccion, casting y control asistido por IA en un unico flujo desktop. Es para quien quiere el control de los archivos locales sin perder la comodidad de herramientas musicales modernas.</p>
  <div class="metric-row">
    <div><strong>Desktop</strong><span>Windows, macOS, Linux</span></div>
    <div><strong>Offline</strong><span>Biblioteca local con SQLite</span></div>
    <div><strong>Conectado</strong><span>Sonos, QR sync, control remoto, MCP</span></div>
  </div>
</section>

<section class="scroll-showcase" id="showcase">
  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">01 - Captura</p>
      <h2>Busca, previsualiza, descarga y sigue adelante.</h2>
      <p>Encola canciones desde YouTube, importa playlists, sigue el progreso en vivo, reanuda trabajos cancelados y evita duplicados antes de que ensucien la biblioteca.</p>
    </div>
    <figure class="showcase-visual">
      <img src="{{ "/assets/fmusic/downloads.png" | prepend: site.baseurl }}" alt="Pantalla de descargas de FMusic">
    </figure>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">02 - Organiza</p>
      <h2>Una biblioteca real, no solo una carpeta llena de archivos.</h2>
      <p>Ordena, busca, filtra por genero, edita metadatos en linea, sincroniza etiquetas en MP3 y usa MusicBrainz cuando la fuente original llega desordenada.</p>
    </div>
    <figure class="showcase-visual">
      <img src="{{ "/assets/fmusic/library.png" | prepend: site.baseurl }}" alt="Pantalla de biblioteca de FMusic">
    </figure>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">03 - Cura</p>
      <h2>Playlists que se sienten parte del producto.</h2>
      <p>Crea playlists, reordena canciones, protege favoritos y crea smart playlists desde filtros guardados para que la biblioteca se reorganice segun como escuchas.</p>
    </div>
    <figure class="showcase-visual">
      <img src="{{ "/assets/fmusic/playlists.png" | prepend: site.baseurl }}" alt="Pantalla de playlists de FMusic">
    </figure>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">04 - Ajusta</p>
      <h2>Recorta, funde, sube volumen y marca puntos.</h2>
      <p>El workbench de audio hace nativas las ediciones rapidas: recortar silencios, anadir fades, ajustar volumen, exportar una copia o guardar cue points para volver despues.</p>
    </div>
    <figure class="showcase-visual">
      <img src="{{ "/assets/fmusic/edit.png" | prepend: site.baseurl }}" alt="Editor de audio de FMusic">
    </figure>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">05 - Reproduce cerca de cualquier sitio</p>
      <h2>Reproduccion local, Sonos y control desde telefono o IA.</h2>
      <p>Escucha desde el reproductor integrado, emite a Sonos con soporte de seek, descarga canciones al telefono por QR, controla la app desktop desde un navegador en la misma Wi-Fi o deja que un asistente de IA inspeccione y controle la reproduccion via MCP.</p>
    </div>
    <figure class="showcase-visual showcase-visual--pair">
      <img src="{{ "/assets/fmusic/sonos.png" | prepend: site.baseurl }}" alt="Pantalla de Sonos de FMusic">
      <img src="{{ "/assets/fmusic/remote-controller-mobile.png" | prepend: site.baseurl }}" alt="Control remoto movil de FMusic">
    </figure>
  </div>
</section>

<section class="landing-section" id="problems">
  <p class="eyebrow">Problem specs</p>
  <h2>Construido alrededor de flujos reales de escucha.</h2>
  <div class="problem-grid">
    <div><span>Spec 01</span><h3>Quiero musica offline.</h3><p>yt-dlp y FFmpeg se preparan como binarios incluidos sin requerir Python en la maquina del usuario.</p></div>
    <div><span>Spec 02</span><h3>Quiero una biblioteca limpia.</h3><p>SQLite, edicion de metadatos, filtros de genero, caratulas, playlists y favoritos mantienen los archivos entendibles.</p></div>
    <div><span>Spec 03</span><h3>Quiero arreglar el audio.</h3><p>Recortes, fades, volumen, preview, exportaciones y bookmarks resuelven las tareas comunes despues de descargar.</p></div>
    <div><span>Spec 04</span><h3>Quiero llevarlo mas alla del portatil.</h3><p>Sonos, QR mobile sync, control remoto, MCP, tray controls y mini player extienden la reproduccion por la casa y hacia flujos con IA.</p></div>
  </div>
</section>

<section class="landing-section" id="specs">
  <p class="eyebrow">Technical specs</p>
  <h2>Internals de una app desktop, documentados.</h2>

  <table>
    <thead><tr><th>Capa</th><th>Tecnologia</th></tr></thead>
    <tbody>
      <tr><td>Shell</td><td>Electron con context isolation</td></tr>
      <tr><td>Frontend</td><td>React, Vite, TypeScript</td></tr>
      <tr><td>Estado</td><td>Zustand</td></tr>
      <tr><td>Audio local</td><td>Howler.js y un protocolo media propio con Range requests</td></tr>
      <tr><td>Base de datos</td><td>better-sqlite3 con migraciones versionadas</td></tr>
      <tr><td>Metadatos</td><td>music-metadata y node-id3</td></tr>
      <tr><td>Descargas</td><td>yt-dlp y FFmpeg</td></tr>
      <tr><td>Sonos</td><td>UPnP / AVTransport via <code>@svrooij/sonos</code></td></tr>
      <tr><td>Control IA</td><td>Servidor MCP local para control de reproduccion y biblioteca desde asistentes</td></tr>
      <tr><td>Distribucion</td><td>electron-builder para Windows, macOS y Linux</td></tr>
    </tbody>
  </table>
</section>

<section class="landing-section" id="development">
  <p class="eyebrow">Ruta de desarrollo</p>
  <h2>Ejecuta, prueba y empaqueta.</h2>

  <pre><code>npm install
npm run dev</code></pre>

  <p>Comandos utiles:</p>

  <pre><code>npm run typecheck
npm run test
npm run build
npm run screenshots:readme
npm run dist:mac
npm run dist:linux
npm run dist:win</code></pre>

  <p><code>npm install</code> ejecuta el flujo postinstall que prepara <code>yt-dlp</code> y FFmpeg en <code>resources/bin/</code>. Para CI o entornos solo de typecheck, puedes saltar las descargas de binarios:</p>

  <pre><code>FMUSIC_SKIP_BINARIES=1 npm install</code></pre>

  <div class="architecture-list">
    <div><strong>Main process</strong><span>Ventanas, tray, updater, descargas, servidores locales, MCP, streaming Sonos, repositorios SQLite, migraciones e IPC.</span></div>
    <div><strong>Preload</strong><span>Un context bridge tipado expone capacidades seguras al renderer.</span></div>
    <div><strong>Renderer</strong><span>Vistas React para descargas, biblioteca, playlists, editor, ajustes, mini player y estado del control remoto.</span></div>
    <div><strong>Shared</strong><span>Definiciones de canales IPC, tipos de dominio y bundles i18n viven en una frontera compartida.</span></div>
  </div>
</section>
