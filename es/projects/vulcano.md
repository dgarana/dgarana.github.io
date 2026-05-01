---
layout: project
title: Vulcano
permalink: /es/projects/vulcano/
lang: es
alternate_url: /projects/vulcano/
theme: vulcano
kind: Framework CLI en Python
status: Proyecto Python activo
summary: Convierte funciones Python en aplicaciones de línea de comandos interactivas con autocompletado, ayuda, historial, grupos y muy poco código repetitivo.
github: https://github.com/dgarana/vulcano
primary_cta_label: Instalar desde PyPI
primary_cta_url: https://pypi.org/project/vulcano/
visual: '<div class="terminal-art"><div class="terminal-bar"><span></span><span></span><span></span></div><div class="terminal-lines"><span>$ help</span><span>Available Commands</span><span>reverse_word   Return the word reversed.</span><span>multiply       Multiply two numbers.</span><span>text.hi        Run grouped commands.</span><span>$ greet name=David role=admin</span><span>Hello, Admin David!</span></div></div>'
nav:
  - label: Historia
    id: story
  - label: Problemas
    id: problems
  - label: Funciones
    id: features
  - label: Inicio rápido
    id: quickstart
  - label: Especificaciones
    id: specs
---

<section class="landing-section landing-section--intro" id="story">
  <p class="eyebrow">Interfaces de comando sin ceremonia</p>
  <h2>Convierte funciones Python en una CLI pulida.</h2>
  <p class="landing-copy">Vulcano sirve para ese momento en el que un script empieza a convertirse en una herramienta. Mantienes tus funciones simples, las registras en la app y obtienes un REPL interactivo, modo de argumentos, autocompletado, ayuda en línea, historial, resaltado de sintaxis y grupos anidados.</p>
  <div class="metric-row">
    <div><strong>Python 3.10+</strong><span>Pensado para Python moderno</span></div>
    <div><strong>prompt_toolkit</strong><span>Base para shells interactivos</span></div>
    <div><strong>Rich + Pygments</strong><span>Salida de comandos más legible</span></div>
  </div>
</section>

<section class="landing-section" id="problems">
  <p class="eyebrow">Problemas que resuelve</p>
  <h2>La superficie de comandos que normalmente dejas para después.</h2>
  <div class="problem-grid">
    <div><span>Caso 01</span><h3>Tengo funciones útiles.</h3><p>Registra callables Python existentes sin reescribirlos dentro de un framework pesado.</p></div>
    <div><span>Caso 02</span><h3>Necesito que sea fácil de descubrir.</h3><p>Tablas de ayuda, descripciones, inspección de argumentos y sugerencias hacen que la herramienta se explique sola.</p></div>
    <div><span>Caso 03</span><h3>Necesito modo interactivo.</h3><p>Historial, autocompletado, temas y grupos anidados hacen cómodo el trabajo repetido con comandos.</p></div>
    <div><span>Caso 04</span><h3>También necesito modo shell.</h3><p>Ejecuta comandos desde argumentos, encadena acciones con <code>and</code> y usa rutas con punto para comandos agrupados.</p></div>
  </div>
</section>

<section class="landing-section landing-section--lava" id="features">
  <p class="eyebrow">Conoce Vulcano</p>
  <h2>Un framework que se mantiene cerca de tu código.</h2>
  <div class="feature-orbit">
    <div><h3>Autocompletado</h3><p>Los nombres de comandos y argumentos se infieren desde las funciones registradas.</p></div>
    <div><h3>Ayuda en línea</h3><p>Docstrings y descripciones se convierten en pantallas de ayuda legibles.</p></div>
    <div><h3>Opciones de argumento</h3><p><code>arg_opts</code> sugiere valores predefinidos y cita valores con espacios.</p></div>
    <div><h3>Encadenado</h3><p>Ejecuta varias acciones con <code>and</code> en modo REPL o modo argumentos.</p></div>
    <div><h3>Grupos</h3><p>Organiza comandos en subcontextos anidados con ejecución por rutas de puntos.</p></div>
    <div><h3>Inspección de código</h3><p>Añade <code>?</code> a un comando para ver su fuente resaltada.</p></div>
  </div>
</section>

<section class="landing-section" id="quickstart">
  <p class="eyebrow">Inicio rápido</p>
  <h2>Un archivo es suficiente para empezar.</h2>

  <pre><code>pip install vulcano</code></pre>

  <pre><code>from vulcano.app import VulcanoApp
from vulcano.themes import MonokaiTheme

app = VulcanoApp()

@app.command("hi", "Greet someone by name")
def salute(name, title="Mr."):
    return "Hi! {} {}.".format(title, name)

@app.command("greet", "Greet someone by role", arg_opts={"role": ["admin", "user", "guest"]})
def greet_by_role(name, role="user"):
    return "Hello, {} {}!".format(role.capitalize(), name)

if __name__ == "__main__":
    app.run(theme=MonokaiTheme)</code></pre>

  <pre><code>python your_app.py hi name=David
python your_app.py greet name=David role=admin</code></pre>
</section>

<section class="landing-section" id="specs">
  <p class="eyebrow">Especificaciones técnicas</p>
  <h2>Superficie pequeña, valores por defecto útiles.</h2>
  <table>
    <thead><tr><th>Área</th><th>Capacidad</th></tr></thead>
    <tbody>
      <tr><td>Entorno</td><td>Python 3.10, 3.11, 3.12 y 3.13</td></tr>
      <tr><td>Interfaz</td><td>REPL interactivo y ejecución por argumentos</td></tr>
      <tr><td>Parsing</td><td>Inspección de argumentos de funciones y parseo de comandos</td></tr>
      <tr><td>UX</td><td>Autocompletado, historial, sugerencias, ayuda y resaltado de sintaxis</td></tr>
      <tr><td>Organización</td><td>Grupos anidados y ejecución con rutas de puntos</td></tr>
      <tr><td>Empaquetado</td><td>Paquete PyPI con punto de entrada <code>vulcano</code></td></tr>
    </tbody>
  </table>
  <p class="note-card">Vulcano está en desarrollo activo. Para producción, fija una versión mientras la API avanza hacia una versión 1.x estable.</p>
</section>
