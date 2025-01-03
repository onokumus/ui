<script setup>
import Example from "../../.vitepress/theme/app/components/Example.vue"
import Baseline from "../../.vitepress/theme/app/components/Baseline.vue"
</script>

# Definition list

<Example>
<template #example>
<ul class="definition-list">
  <li>
    <span class="term">Price</span>
    <span class="description">6 950 000</span>
  </li>
  <li>
    <span class="term">Size</span>
    <span class="description">64 m²</span>
  </li>
  <li>
    <span class="term">Rooms</span>
    <span class="description">3</span>
  </li>
</ul>
</template>
<template #code>

```html
<ul class="definition-list">
  <li>
    <span class="term">Price</span>
    <span class="description">6 950 000</span>
  </li>
</ul>
```

</template>
</Example>

## Bordered

<Example column exampleClass="gap-l">
<template #example>
<ul class="definition-list">
  <li>
    <span class="term">Price</span>
    <hr>
    <span class="description">6 950 000</span>
  </li>
  <li>
    <span class="term">Size</span>
    <hr>
    <span class="description">64 m²</span>
  </li>
  <li>
    <span class="term">Rooms</span>
    <hr>
    <span class="description">3</span>
  </li>
</ul>

<ul class="definition-list dotted">
  <li>
    <span class="term">Price</span>
    <hr>
    <span class="description">6 950 000</span>
  </li>
  <li>
    <span class="term">Size</span>
    <hr>
    <span class="description">64 m²</span>
  </li>
  <li>
    <span class="term">Rooms</span>
    <hr>
    <span class="description">3</span>
  </li>
</ul>
</template>
<template #code>

```html{4,9}
<ul class="definition-list">
  <li>
    <span class="term">Price</span>
    <hr />
    <span class="description">6 950 000</span>
  </li>
</ul>

<ul class="definition-list dotted">
  <li>
    <span class="term">Price</span>
    <hr />
    <span class="description">6 950 000</span>
  </li>
</ul>
```

</template>
</Example>

## Anatomy

## API

## Browser compatibility

<Baseline :ids="['container-queries']" />

## Installation

::: code-group
<<< @/../src/data-display/definition-list.css [definition-list.css]
:::
