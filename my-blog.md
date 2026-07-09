---
layout: page
title: 所有文章
permalink: /blog/
---

<ul class="post-list">
{% for post in site.posts %}
  <li>
    <a class="post-card-link" href="{{ post.url }}">
      {% if post.image %}
      <div class="post-card-bg" style="background-image: url('{{ post.image }}');">
      {% else %}
      <div class="post-card-bg post-card-no-image">
      {% endif %}
        <div class="post-card-overlay">
          <span class="post-card-date">{{ post.date | date: "%Y-%m-%d" }}</span>
          <h3 class="post-card-title">{{ post.title | escape }}</h3>
        </div>
      </div>
    </a>
  </li>
{% endfor %}
</ul>