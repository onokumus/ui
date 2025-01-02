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

## Label & supporting text

<Example row>
<template #example>
<label class="field">
  <span class="label">Label</span>
    <textarea  placeholder="Default"></textarea>
    <span class="supporting-text">Supporting text</span>
  </label>

  <label class="field filled">
    <span class="label">Label</span>
    <textarea placeholder="Filled"></textarea>
    <span class="supporting-text">Supporting text</span>
  </label>
</template>
<template #code>

```html{1,2,4,5}
<label class="field">
  <span class="label">Label</span>
  <textarea placeholder="Placeholder text"></textarea>
  <span class="supporting-text">Supporting text</span>
</label>
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

## API

<!--@include: ./textarea-api.md -->

## Browser compatibility

<Baseline :ids="['field-sizing','datalist','light-dark', 'color-mix']" />

## Installation

::: code-group
<<< @/../src/inputs/field.css [field.css]
<<< @/../src/inputs/textarea.css [textarea.css]
:::
