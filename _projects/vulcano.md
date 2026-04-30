---
layout: project
title: Vulcano
path: vulcano
lang: en
alternate_url: /es/projects/vulcano/
order: 1
theme: vulcano
kind: Python CLI framework
status: Active Python project
summary: Turn plain Python functions into interactive command-line applications with autocompletion, help, history, command groups, and minimal boilerplate.
github: https://github.com/dgarana/vulcano
primary_cta_label: Install from PyPI
primary_cta_url: https://pypi.org/project/vulcano/
visual: '<div class="terminal-art"><div class="terminal-bar"><span></span><span></span><span></span></div><div class="terminal-lines"><span>$ help</span><span>Available Commands</span><span>reverse_word   Return the word reversed.</span><span>multiply       Multiply two numbers.</span><span>text.hi        Run grouped commands.</span><span>$ greet name=David role=admin</span><span>Hello, Admin David!</span></div></div>'
nav:
  - label: Story
    id: story
  - label: Problems
    id: problems
  - label: Features
    id: features
  - label: Quickstart
    id: quickstart
  - label: Specs
    id: specs
---

<section class="landing-section landing-section--intro" id="story">
  <p class="eyebrow">Command interfaces without ceremony</p>
  <h2>Turn Python functions into a polished CLI.</h2>
  <p class="landing-copy">Vulcano is for the moment when a script becomes a tool. Keep your functions plain, register them with the app, and get an interactive REPL, one-shot argument mode, autocomplete, inline help, history, syntax highlighting, and nested command groups.</p>
  <div class="metric-row">
    <div><strong>Python 3.10+</strong><span>Built for modern Python</span></div>
    <div><strong>prompt_toolkit</strong><span>Interactive shell foundation</span></div>
    <div><strong>Rich + Pygments</strong><span>Readable command output</span></div>
  </div>
</section>

<section class="landing-section" id="problems">
  <p class="eyebrow">Problem specs</p>
  <h2>The command surface you usually postpone.</h2>
  <div class="problem-grid">
    <div><span>Spec 01</span><h3>I have useful functions.</h3><p>Register existing Python callables without rewriting them into a heavy command framework.</p></div>
    <div><span>Spec 02</span><h3>I need discoverability.</h3><p>Help tables, command descriptions, argument inspection, and suggestions make the tool self-explaining.</p></div>
    <div><span>Spec 03</span><h3>I need an interactive mode.</h3><p>History, completions, themes, and nested groups make repeated command work comfortable.</p></div>
    <div><span>Spec 04</span><h3>I still need shell mode.</h3><p>Run commands directly from arguments, chain actions with <code>and</code>, and use dot paths for grouped commands.</p></div>
  </div>
</section>

<section class="landing-section landing-section--lava" id="features">
  <p class="eyebrow">Get to know Vulcano</p>
  <h2>A framework that stays close to your code.</h2>
  <div class="feature-orbit">
    <div><h3>Autocomplete</h3><p>Command names and argument names are inferred from registered functions.</p></div>
    <div><h3>Inline help</h3><p>Docstrings and descriptions become readable help screens.</p></div>
    <div><h3>Argument options</h3><p><code>arg_opts</code> suggests predefined values and quotes values with spaces.</p></div>
    <div><h3>Command chaining</h3><p>Run multiple actions with <code>and</code> in REPL or argument mode.</p></div>
    <div><h3>Groups</h3><p>Organize commands into nested sub-contexts with dot-path execution.</p></div>
    <div><h3>Source inspection</h3><p>Append <code>?</code> to a command to view highlighted source.</p></div>
  </div>
</section>

<section class="landing-section" id="quickstart">
  <p class="eyebrow">Quickstart</p>
  <h2>One file is enough to start.</h2>

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
  <p class="eyebrow">Technical specs</p>
  <h2>Small surface, useful defaults.</h2>
  <table>
    <thead><tr><th>Area</th><th>Capability</th></tr></thead>
    <tbody>
      <tr><td>Runtime</td><td>Python 3.10, 3.11, 3.12, and 3.13</td></tr>
      <tr><td>Interface</td><td>Interactive REPL and one-shot argument execution</td></tr>
      <tr><td>Parsing</td><td>Function argument inspection and command parsing</td></tr>
      <tr><td>UX</td><td>Autocomplete, history, suggestions, help, syntax highlighting</td></tr>
      <tr><td>Organization</td><td>Nested command groups and dot-path execution</td></tr>
      <tr><td>Packaging</td><td>PyPI package with a <code>vulcano</code> script entry point</td></tr>
    </tbody>
  </table>
  <p class="note-card">Vulcano is under active development. Pin a version for production use while the API moves toward a stable 1.x release.</p>
</section>
