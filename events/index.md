---
author: admin
comments: false
date: 2013-12-08 23:55:02+00:00
layout: blog
slug: events
title: Events
---

<div class="row blog-main-row">
  {% for post in site.categories.Events limit: 1 %}
  <div class="col-md-12 col-lg-8">
    <a href="{{ post.url }}">
      {% if post.media_type == 'video' %}
      <div class="blog-image-wrapper blog-image-wrapper-main">
        <iframe
          style="width:100%;"
          height="315"
          src="{{ post.media_link }}"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
      {% elsif post.media_type == 'image' %}
      <div
        class="blog-image-wrapper blog-image-wrapper-main real-image"
        style="background-image: url('{{ post.media_link }}');"
      ></div>
      {% else %}
      <div class="blog-image-wrapper blog-image-wrapper-main">
        <img src="/assets/images/main/default-image.jpg" style="width:100%;" />
      </div>
      {% endif %}
    </a>
  </div>
  <div class="col-md-12 col-lg-4 blog-align-center">
    <a href="{{ post.url }}">
      <div class="blog-text-wrapper">
        <span class="blog-date">
          {{ post.date | date: "%B %d, %Y" }}
        </span>
        <h3>
          {{ post.title }}
        </h3>
        <p class="dark-text">{{ post.description }}</p>
      </div>
    </a>
  </div>
  {% endfor %}
</div>
<div class="row blog-row">
  {% for post in site.categories.Events offset:1 %}
  <div class="col-sm-12 col-md-6 col-lg-4">
    <div class="blog-single">
      <a href="{{ post.url }}">
        {% if post.media_type == 'video' %}
        <div class="blog-image-wrapper">
          <iframe
            style="width:100%;"
            height="315"
            src="{{ post.media_link }}"
            frameborder="0"
            allowfullscreen
          ></iframe>
        </div>
        {% elsif post.media_type == 'image' %}
        <div
          class="blog-image-wrapper real-image"
          style="background-image: url('{{ post.media_link }}');"
        ></div>
        {% else %}
        <div class="blog-image-wrapper">
          <img
            src="/assets/images/main/default-image.jpg"
            style="width:100%;"
          />
        </div>
        {% endif %}
        <div class="blog-text-wrapper">
          <span class="blog-date">
            {{ post.date | date: "%B %d, %Y" }}
          </span>
          <h3>{{ post.title | truncate: 50 }}</h3>
          <p>{{ post.description | truncate: 156 }}</p>
        </div>
      </a>
    </div>
  </div>
  {% endfor %}
</div>
<div class="row">
  <a href="/feed.xml" class="rss-feed">
    <img src="/assets/images/feed-icon.jpg" />
  </a>
</div>
