<script setup>
import Example from "../../.vitepress/theme/app/components/Example.vue"
import Baseline from "../../.vitepress/theme/app/components/Baseline.vue"
</script>

# Dotted list

<Example>
<template #example>
<ul class="dotted-list">
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

```html
<ul class="dotted-list">
  <li>
    <span class="term">Price</span>
    <hr />
    <span class="description">6 950 000</span>
  </li>
</ul>
```

</template>
</Example>
