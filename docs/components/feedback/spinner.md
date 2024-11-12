<script setup>
import Example from "../../.vitepress/theme/app/components/Example.vue"
</script>

# Spinner

Add it to an element with `aria-busy="true"`. Spinnners are always indeterminate.

<Example>
<template #example>
<div aria-busy="true"></div>
</template>

<template #code>

```html
<div aria-busy="true"></div>
```

</template>
</Example>

## Size

The spinner's size is set to `1em`, which means it will adjust to its current font size.

<Example direction="stack">
<template #example>
<h2 aria-busy="true">h2</h2>
<h4 aria-busy="true">h4</h4>
<p aria-busy="true">Paragraph</p>
<span aria-busy="true">Span</span>
<a aria-busy="true" class="link">Link</a>
</template>

<template #code>

```html
<h2 aria-busy="true">h2</h2>
<h4 aria-busy="true">h4</h4>
<p aria-busy="true">Paragraph</p>
<span aria-busy="true">Span</span>
```

</template>
</Example>

## Buttons

Simply add `aria-busy="true"` to a `<button>`.

<Example direction="stack">
<template #example>
<div class="row">
	<button aria-busy="true" class="button">Text</button>
	<button aria-busy="true" disabled class="button outlined">Outlined</button>
	<button aria-busy="true" class="button filled">Filled</button>
</div>

<div class="row">
	<button aria-busy="true" class="button"><span class="sr-only">Text</span></button>
	<button aria-busy="true" disabled class="button outlined"><span class="sr-only">Outlined</span></button>
	<button aria-busy="true" class="button filled"><span class="sr-only">Filled</span></button>
</div>

</template>

<template #code>

```html
<!-- Text buttons -->
<button aria-busy="true" class="button">Text</button>
<button aria-busy="true" disabled class="button outlined">Outlined</button>
<button aria-busy="true" class="button filled">Filled</button>

<!-- Icon buttons -->
<button aria-busy="true" class="button">
  <span class="sr-only">Text</span>
</button>
<button aria-busy="true" disabled class="button outlined">
  <span class="sr-only">Outlined</span>
</button>
<button aria-busy="true" class="button filled">
  <span class="sr-only">Filled</span>
</button>
```

</template>
</Example>

## Linear progress

Check out the documentation for the [progress bar](/components/feedback/progress).
