---
layout: project
title: FMusic
permalink: /es/projects/fmusic/
lang: es
alternate_url: /projects/fmusic/
theme: fmusic
kind: Aplicación de escritorio Electron
status: App de música multiplataforma
summary: Descarga música de YouTube, organiza una biblioteca local SQLite, edita metadatos y audio, reproduce en local, emite a Sonos y controla todo desde un teléfono o desde un asistente de IA vía MCP.
github: https://github.com/dgarana/fmusic
primary_cta_label: Descargar app
primary_cta_url: https://github.com/dgarana/fmusic/releases
visual: '<div class="fmusic-logo-art"><img src="/assets/fmusic/logo.png" alt="Logo de FMusic"><span>Descarga - Gestiona - Edita - Emite - IA integrada.</span></div>'
nav:
  - label: Historia
    id: story
  - label: IA/MCP
    id: ai-control
  - label: Demostración
    id: showcase
  - label: Problemas
    id: problems
  - label: Especificaciones
    id: specs
  - label: Instalar
    id: install
  - label: Desarrollo
    id: development
---

<section class="landing-section landing-section--intro" id="story">
  <p class="eyebrow">La estación de música local-first</p>
  <h2>Tu música, tus archivos, tu biblioteca.</h2>
  <p class="landing-copy">FMusic convierte descubrimiento, descargas, gestión de biblioteca, edición, reproducción, emisión y control asistido por IA en un único flujo de escritorio. Es para quien quiere el control de los archivos locales sin perder la comodidad de herramientas musicales modernas.</p>
  <div class="metric-row">
    <div><strong>Escritorio</strong><span>Windows, macOS, Linux</span></div>
    <div><strong>Sin conexión</strong><span>Biblioteca local con SQLite</span></div>
    <div><strong>Conectado</strong><span>Sonos, sincronización QR, control remoto, MCP</span></div>
  </div>
</section>

<section class="landing-section ai-console-section" id="ai-control">
  <div class="ai-console-copy">
    <p class="eyebrow">IA integrada vía MCP</p>
    <h2>Dos agentes. Una biblioteca musical.</h2>
    <p class="landing-copy">FMusic expone un servidor MCP local para que Claude controle la reproducción y Codex investigue, busque y encole descargas usando las mismas herramientas locales.</p>
  </div>

  <div class="ai-console-tabs">
    <input class="ai-tab-input" type="radio" name="ai-console-es" id="ai-tab-claude-es" checked>
    <input class="ai-tab-input" type="radio" name="ai-console-es" id="ai-tab-codex-es">
    <div class="ai-tab-list" role="tablist" aria-label="Ejemplos de consola con IA">
      <label for="ai-tab-claude-es">Claude reproduce</label>
      <label for="ai-tab-codex-es">Codex descarga</label>
    </div>
    <div class="ai-tab-panels">
      <div class="ai-tab-panel ai-tab-panel--claude">
        <div class="ai-terminal" aria-label="Consola simulada de Claude Code controlando FMusic">
          <div class="ai-terminal__chrome">
            <span>Claude Code</span>
            <small>FMusic MCP conectado</small>
          </div>
          <div class="ai-terminal__body">
            <p class="ai-terminal__prompt">qué se está reproduciendo?</p>
            <p class="ai-terminal__call">called fmusic_player_state</p>
            <p class="ai-terminal__answer">No hay nada reproduciéndose ahora mismo. El reproductor está parado y la cola está vacía.</p>
            <p class="ai-terminal__prompt">reproduce algo aleatorio</p>
            <p class="ai-terminal__call">called fmusic_search_library</p>
            <p class="ai-terminal__call">called fmusic_play_track</p>
            <p class="ai-terminal__answer">Reproduciendo <strong>Strobe</strong> de deadmau5. Un clásico.</p>
            <p class="ai-terminal__cursor">&gt; <span></span></p>
          </div>
        </div>
      </div>

      <div class="ai-tab-panel ai-tab-panel--codex">
        <div class="ai-terminal ai-terminal--codex" aria-label="Consola simulada de OpenAI Codex controlando FMusic">
          <div class="ai-terminal__chrome">
            <span>&gt;_ OpenAI Codex</span>
            <small>agente + FMusic MCP</small>
          </div>
          <div class="ai-terminal__body">
            <p class="ai-terminal__prompt">descarga las 2 canciones techno top de 2026</p>
            <p class="ai-terminal__answer">Voy a verificar primero una lista actual de techno y luego usar FMusic para encontrar y encolar las canciones.</p>
            <p class="ai-terminal__call">searched web: 2026 techno top tracks chart</p>
            <p class="ai-terminal__call">called fmusic.download_search_youtube</p>
            <p class="ai-terminal__call">called fmusic.download_enqueue_url</p>
            <p class="ai-terminal__answer">He encolado dos coincidencias como descargas MP3 a 320kbps y revisado el estado del descargador.</p>
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
      <p class="eyebrow">01 - Captura</p>
      <h2>Captura música.</h2>
    </div>
    <div class="showcase-detail">
      <p>Encola canciones desde YouTube, importa listas, sigue el progreso en vivo, reanuda trabajos cancelados y evita duplicados antes de que ensucien la biblioteca.</p>
      <figure class="showcase-visual">
        <img src="{{ "/assets/fmusic/downloads.png" | prepend: site.baseurl }}" alt="Pantalla de descargas de FMusic">
      </figure>
    </div>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">02 - Organiza</p>
      <h2>Organiza.</h2>
    </div>
    <div class="showcase-detail">
      <p>Ordena, busca, filtra por género, edita metadatos en línea, sincroniza etiquetas en MP3 y usa MusicBrainz cuando la fuente original llega desordenada.</p>
      <figure class="showcase-visual">
        <img src="{{ "/assets/fmusic/library.png" | prepend: site.baseurl }}" alt="Pantalla de biblioteca de FMusic">
      </figure>
    </div>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">03 - Crea listas</p>
      <h2>Crea listas.</h2>
    </div>
    <div class="showcase-detail">
      <p>Crea listas, reordena canciones, protege favoritos y genera listas inteligentes desde filtros guardados para que la biblioteca se reorganice según cómo escuchas.</p>
      <figure class="showcase-visual">
        <img src="{{ "/assets/fmusic/playlists.png" | prepend: site.baseurl }}" alt="Pantalla de playlists de FMusic">
      </figure>
    </div>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">04 - Ajusta</p>
      <h2>Ajusta audio.</h2>
    </div>
    <div class="showcase-detail">
      <p>El banco de trabajo de audio hace que las ediciones rápidas se sientan nativas: recortar silencios, añadir fundidos, ajustar volumen, exportar una copia o guardar puntos de referencia para volver después.</p>
      <figure class="showcase-visual">
        <img src="{{ "/assets/fmusic/edit.png" | prepend: site.baseurl }}" alt="Editor de audio de FMusic">
      </figure>
    </div>
  </div>

  <div class="showcase-panel">
    <div class="showcase-copy">
      <p class="eyebrow">05 - Reproduce cerca de ti</p>
      <h2>Reproduce.</h2>
    </div>
    <div class="showcase-detail">
      <p>Escucha desde el reproductor integrado, reproduce en Sonos con soporte de seek, descarga canciones al teléfono por QR, controla la app de escritorio desde un navegador en la misma Wi-Fi o deja que un asistente de IA inspeccione y controle la reproducción vía MCP.</p>
      <figure class="showcase-visual showcase-visual--pair">
        <img src="{{ "/assets/fmusic/sonos.png" | prepend: site.baseurl }}" alt="Pantalla de Sonos de FMusic">
        <img src="{{ "/assets/fmusic/remote-controller-mobile.png" | prepend: site.baseurl }}" alt="Control remoto móvil de FMusic">
      </figure>
    </div>
  </div>
</section>

<section class="landing-section" id="problems">
  <p class="eyebrow">Problemas que resuelve</p>
  <h2>Construido alrededor de flujos reales de escucha.</h2>
  <div class="problem-grid">
    <div><span>Caso 01</span><h3>Quiero música sin conexión.</h3><p>yt-dlp y FFmpeg se preparan como binarios incluidos sin requerir Python en la máquina del usuario.</p></div>
    <div><span>Caso 02</span><h3>Quiero una biblioteca limpia.</h3><p>SQLite, edición de metadatos, filtros de género, carátulas, listas y favoritos mantienen los archivos comprensibles.</p></div>
    <div><span>Caso 03</span><h3>Quiero arreglar el audio.</h3><p>Recortes, fundidos, volumen, vista previa, exportaciones y marcadores resuelven las tareas habituales después de descargar.</p></div>
    <div><span>Caso 04</span><h3>Quiero llevarlo más allá del portátil.</h3><p>Sonos, sincronización móvil por QR, control remoto, MCP, controles de bandeja y mini reproductor extienden la reproducción por la casa y hacia flujos con IA.</p></div>
  </div>
</section>

<section class="landing-section" id="specs">
  <p class="eyebrow">Especificaciones técnicas</p>
  <h2>Arquitectura interna de una app de escritorio.</h2>

  <table>
    <thead><tr><th>Capa</th><th>Tecnología</th></tr></thead>
    <tbody>
      <tr><td>Shell</td><td>Electron con aislamiento de contexto</td></tr>
      <tr><td>Frontend</td><td>React, Vite, TypeScript</td></tr>
      <tr><td>Estado</td><td>Zustand</td></tr>
      <tr><td>Audio local</td><td>Howler.js y un protocolo de medios propio con peticiones Range</td></tr>
      <tr><td>Base de datos</td><td>better-sqlite3 con migraciones versionadas</td></tr>
      <tr><td>Metadatos</td><td>music-metadata y node-id3</td></tr>
      <tr><td>Descargas</td><td>yt-dlp y FFmpeg</td></tr>
      <tr><td>Sonos</td><td>UPnP / AVTransport vía <code>@svrooij/sonos</code></td></tr>
      <tr><td>Control IA</td><td>Servidor MCP local para controlar reproducción y biblioteca desde asistentes</td></tr>
      <tr><td>Distribución</td><td>electron-builder para Windows, macOS y Linux</td></tr>
    </tbody>
  </table>
</section>

<section class="landing-section" id="install">
  <p class="eyebrow">Instalar FMusic</p>
  <h2>Descarga la versión para tu sistema operativo.</h2>
  <p class="landing-copy">La app se distribuye desde GitHub Releases. Abre la última versión, descarga el instalador o paquete para tu plataforma y lanza FMusic como cualquier otra aplicación de escritorio.</p>

  <div class="install-grid">
    <div><span>macOS</span><h3>Descarga el DMG.</h3><p>Abre el <code>.dmg</code>, arrastra FMusic a Aplicaciones y lánzala desde Aplicaciones o Spotlight.</p></div>
    <div><span>Windows</span><h3>Descarga el instalador.</h3><p>Ejecuta el instalador <code>.exe</code> de los archivos de la versión y sigue el flujo de instalación.</p></div>
    <div><span>Linux</span><h3>Descarga AppImage o deb.</h3><p>Usa el <code>.AppImage</code> como versión autocontenida, o instala el paquete <code>.deb</code> en sistemas basados en Debian/Ubuntu.</p></div>
  </div>

  <div class="project-actions">
    <a class="button button-primary" href="https://github.com/dgarana/fmusic/releases">Abrir versiones</a>
    <a class="button button-secondary" href="https://github.com/dgarana/fmusic#readme">Leer README</a>
  </div>
</section>

<section class="landing-section" id="development">
  <p class="eyebrow">Ruta de desarrollo</p>
  <h2>Ejecuta, prueba y empaqueta.</h2>

  <pre><code>npm install
npm run dev</code></pre>

  <p>Comandos útiles:</p>

  <pre><code>npm run typecheck
npm run test
npm run build
npm run screenshots:readme
npm run dist:mac
npm run dist:linux
npm run dist:win</code></pre>

  <p><code>npm install</code> ejecuta el flujo postinstall que prepara <code>yt-dlp</code> y FFmpeg en <code>resources/bin/</code>. Para CI o entornos solo de typecheck, puedes omitir las descargas de binarios:</p>

  <pre><code>FMUSIC_SKIP_BINARIES=1 npm install</code></pre>

  <div class="architecture-list">
    <div><strong>Main process</strong><span>Ventanas, bandeja del sistema, actualizador, descargas, servidores locales, MCP, streaming Sonos, repositorios SQLite, migraciones e IPC.</span></div>
    <div><strong>Preload</strong><span>Un puente de contexto tipado expone capacidades seguras al renderer.</span></div>
    <div><strong>Renderer</strong><span>Vistas React para descargas, biblioteca, listas, editor, ajustes, mini reproductor y estado del control remoto.</span></div>
    <div><strong>Shared</strong><span>Definiciones de canales IPC, tipos de dominio y paquetes i18n viven en una frontera compartida.</span></div>
  </div>
</section>
