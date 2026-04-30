---
layout: page
title: Projects
subtitle: Documentation entry points for the applications and libraries maintained by dgarana.
permalink: /projects/
lang: en
alternate_url: /es/projects/
---

<div class="project-index-grid">
  {% assign ordered_projects = site.projects | sort: "order" %}
  {% for project in ordered_projects %}
    <a class="project-index-card project-card--{{ project.theme }}" href="{{ project.url | prepend: site.baseurl }}">
      <span>{{ project.kind }}</span>
      <h2>{{ project.title }}</h2>
      <p>{{ project.summary }}</p>
      <strong>Open documentation</strong>
    </a>
  {% endfor %}
</div>
