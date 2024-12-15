<script setup>
	import Example from "../../.vitepress/theme/app/components/Example.vue"
	import Baseline from "../../.vitepress/theme/app/components/Baseline.vue"
</script>

# Textarea

## Variants

<Example row>
<template #example>
<div class="field">
    <textarea  placeholder="Default"></textarea>
  </div>

  <div class="field filled">
    <textarea placeholder="Filled"></textarea>
  </div>
</template>
<template #code>

```html
<div class="field">
  <textarea placeholder="Default"></textarea>
</div>

<div class="field filled">
  <textarea placeholder="Filled"></textarea>
</div>
```

</template>
</Example>

## Auto-fit

When enabled the Textarea changes size depending on its content.

<Example row>
<template #example>
<div class="field auto-fit">
	<textarea placeholder="Auto-fit"></textarea>
</div>
</template>
<template #code>

```html{1}
<div class="field auto-fit">
  <!--  -->
</div>
```

</template>
</Example>

## Disabled

<Example row>
<template #example>
<div class="field">
    <textarea  placeholder="Default" disabled></textarea>
  </div>

  <div class="field filled">
    <textarea placeholder="Filled" disabled></textarea>
  </div>
</template>
<template #code>

```html
<div class="field">
  <textarea placeholder="Disabled" disabled></textarea>
</div>
```

</template>
</Example>

## Anatomy

## API

## Browser compatibility

## Installation
