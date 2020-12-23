---
title: Projects
layout: default.liquid
pagination:
  data: projects
  size: 100
  alias: projects
---

# Projects

<ul>
{%- for project in projects -%}
  <li><a href="/projects/{{ project.id }}/">{{ project.name }}</a></li>
{%- endfor -%}
</ul>