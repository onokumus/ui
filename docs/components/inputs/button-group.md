<script setup>
import Example from "../../.vitepress/theme/app/components/Example.vue";
import Baseline from "../../.vitepress/theme/app/components/Baseline.vue";
</script>

<style>
.example.column {
	justify-items: center;
}
</style>

# Button group

Groups related buttons by wrapping them with `role="group"`.

## Variants

<Example direction="column" centered>
<template #example>

<div role="group" class="button-group">
  <button class="button">Text</button>
  <button class="button">Text</button>
  <button class="button">Text</button>
</div>

<div role="group" class="button-group">
  <button class="button outlined">Outlined</button>
  <button class="button outlined">Outlined</button>
  <button class="button outlined">Outlined</button>
</div>

<div role="group" class="button-group">
  <button class="button tonal">Tonal</button>
  <button class="button tonal">Tonal</button>
  <button class="button tonal">Tonal</button>
</div>

<div role="group" class="button-group">
  <button class="button filled">Filled</button>
  <button class="button filled">Filled</button>
  <button class="button filled">Filled</button>
</div>

<div role="group" class="button-group">
  <button class="button elevated">Elevated</button>
  <button class="button elevated">Elevated</button>
  <button class="button elevated">Elevated</button>
</div>

</template>
</Example>
