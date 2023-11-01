---
layout: "page"
title: "CaSkade Publications"
excerpt: "A list of our scientific publications in the research field of capability- and skill-based manufacturing."
sitemap: true
permalink: /publications.html
---

A list of our scientific publications in the research field of capability- and skill-based manufacturing.


<h1 class="mt-4">Publications</h1>
{% assign publications = site.publications | sort: "year" | reverse %}
{% for pub in publications %}
<div class="pubitem">
  <div class="pubtitle">{{ pub.title }}</div>
  <div class="pubauthors">{{ pub.authors }}</div>
  <div class="pubinfo">{{ pub.publication }}, {{ pub.year}}</div>
</div>
{% endfor %}

