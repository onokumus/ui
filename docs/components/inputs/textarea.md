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

- Use the `<label>` element with the `.field` class.
- `.label`: label text element
- `.supporting-text`: supporting text element

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

```html{2,4}
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

## Validation

The `.error` class toggles the error styles. Make use of the supporting text to give extra feedback on the error.

<Example row>
<template #example>
<label class="field error">
	<span class="label">Label</span>
  <textarea  placeholder="Default"></textarea>
	<span class="supporting-text">Only double-negatives are allowed.</span>
</label>

<label class="field error filled">
	<span class="label">Label</span>
  <textarea  placeholder="Filled"></textarea>
	<span class="supporting-text">Only letters from the first half of the alphabet are allowed.</span>
</label>
</template>
<template #code>

```html{1}
<label class="field error">
  <span class="label">Label</span>
  <textarea  placeholder="Placeholder"></textarea>
  <span class="supporting-text">Supporting text</span>
</label>
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
