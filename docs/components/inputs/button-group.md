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

Groups related buttons by wrapping them with `<yourElement class="button-group" role="group">`.

- Button groups should consist of 2-5 buttons.
- Don't allow them to wrap onto a new line.
- If an icon is used without label text make sure the button communicates clearly what it does.

::: tip Button group or Toggle button group?
Make sure you pick the right tool for the job. [Toggle button group](/components/inputs/toggle-button-group).
:::

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

## Size

<Example direction="column" centered>
<template #example>

<div role="group" class="button-group">
  <button class="button small outlined">Small</button>
  <button class="button small outlined">Small</button>
  <button class="button small outlined">Small</button>
</div>

<div role="group" class="button-group">
  <button class="button outlined">Default</button>
  <button class="button outlined">Default</button>
  <button class="button outlined">Default</button>
</div>

<div role="group" class="button-group">
  <button class="button large outlined">Large</button>
  <button class="button large outlined">Large</button>
  <button class="button large outlined">Large</button>
</div>

</template>
</Example>

## Stacked

<Example direction="row">
<template #example>

<div role="group" class="button-group stack">
  <button class="button">Text</button>
  <button class="button">Text</button>
  <button class="button">Text</button>
</div>

<div role="group" class="button-group stack">
  <button class="button outlined">Outlined</button>
  <button class="button outlined">Outlined</button>
  <button class="button outlined">Outlined</button>
</div>

<div role="group" class="button-group stack">
  <button class="button tonal">Tonal</button>
  <button class="button tonal">Tonal</button>
  <button class="button tonal">Tonal</button>
</div>

<div role="group" class="button-group stack">
  <button class="button filled">Filled</button>
  <button class="button filled">Filled</button>
  <button class="button filled">Filled</button>
</div>

<div role="group" class="button-group stack">
  <button class="button elevated">Elevated</button>
  <button class="button elevated">Elevated</button>
  <button class="button elevated">Elevated</button>
</div>

</template>
</Example>
