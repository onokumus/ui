<script setup>
	import { watch, ref } from "vue"
		import { useTimeoutFn } from '@vueuse/core'

	import Example from "../../.vitepress/theme/app/components/Example.vue"
	import Baseline from "../../.vitepress/theme/app/components/Baseline.vue"

const snackbar2 = ref()
const showSnackbar2 = ref(false)

watch(showSnackbar2, () => useTimeoutFn(() => {
	showSnackbar2.value = false
	snackbar2.value?.hidePopover()
}, 5000))


// Position
const positionSnackbar = ref()
const showPositionSnackbar = ref(false)
const positionClass = ref("")

const { start, stop } = useTimeoutFn(() => {
  showPositionSnackbar.value = false
  positionSnackbar.value?.hidePopover()
}, 2000)

function positionClick(direction) {
  if (showPositionSnackbar.value) {
    showPositionSnackbar.value = false
    positionSnackbar.value?.hidePopover()
  }

  stop()

  positionClass.value = direction
  showPositionSnackbar.value = true

  start()
}

// Watch for when the snackbar is hidden
watch(showPositionSnackbar, (newValue) => {
  if (!newValue) {
    stop()
    positionSnackbar.value?.hidePopover()
  }
})

// Absolute Snackbar
const showAbsoluteSnackbar = ref(false)
watch(showAbsoluteSnackbar, () => useTimeoutFn(() => {
	showAbsoluteSnackbar.value = false
}, 3000))

</script>

<style>
  .anatomy {
    outline: var(--_anatomy-border-gray);
    outline-offset: 2px;

    .content, button {
			outline: var(--_anatomy-border-red);
    }

  }
</style>

# Snackbar

Snackbars inform users of a process that has or will be preformed. They shouldn't interrupt the user and you should be able to keep browsing without having to interact with it.

See [Snackbar guidelines](https://m3.material.io/components/snackbar/guidelines).

## Basics

The most common way to use a Snackbar is to position it in relation to the browser window. This solution leverages [popover](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/popover).

<Example>
<template #example>
<div class="row">
<button class="button" popovertarget="snackbar1">Show snackbar 1</button>
<button class="button" popovertarget="snackbar2" @click="showSnackbar2 = true;">Show snackbar 2</button>
</div>

<article popover="manual" id="snackbar1" class="snackbar" role="status">
	<div class="content">
    <p>Popover text content</p>
	</div>
	<div class="actions">
		<button class="button" popovertarget="snackbar1">Action</button>
		<button class="button" popovertarget="snackbar1">
			<span class="sr-only">Close</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M26.113 4.116a1.25 1.25 0 0 1 1.768 1.768L17.766 15.999l10.115 10.114a1.25 1.25 0 1 1-1.768 1.768L16 17.766L5.884 27.881a1.25 1.25 0 1 1-1.768-1.768L14.231 16L4.116 5.884a1.25 1.25 0 1 1 1.768-1.768l10.115 10.115z"/></svg>
		</button>
	</div>
</article>

<article id="snackbar2" popover="manual" ref="snackbar2"  class="snackbar" role="status">
	<div class="content">
		<p>All changes saved</p>
	</div>
</article>
</template>

<template #code>

::: code-group

```html [snackbar-1.html]
<!-- Button -->
<button class="button" popovertarget="snackbar1">Show snackbar 1</button>

<!-- Snackbar -->
<article popover="manual" id="snackbar1" class="snackbar" role="status">
  <div class="content">
    <p>Popover text content</p>
  </div>

  <div class="actions">
    <button class="button" popovertarget="snackbar1">Action</button>

    <button class="button" popovertarget="snackbar1">
      <span class="sr-only">Close</span>
      <svg><!--  --></svg>
    </button>
  </div>
</article>
```

```html [snackbar-2.html]
<!-- Button -->
<button class="button" popovertarget="snackbar2">Show snackbar 2</button>

<!-- Snackbar -->
<article id="snackbar2" popover="manual" class="snackbar" role="status">
  <div class="content">
    <p>All changes saved</p>
  </div>
</article>
```

:::
</template>
</Example>

## Position

### Fixed

Position relative to the browser window. This is the default positioning behavior.

Use the positional classes in order to place the Snackbar. Default is `.bottom-left`.

<Example direction="stack">
<template #example>
	<div class="row">
		<button popovertarget="position-snackbar" @click="positionClick('top-left')" class="button small">.top-left</button>
		<button popovertarget="position-snackbar" @click="positionClick('top-center')" class="button small">.top-center</button>
		<button popovertarget="position-snackbar" @click="positionClick('top-right')" class="button small">.top-right</button>
	</div>
	<div class="row">
		<button popovertarget="position-snackbar" @click="positionClick('bottom-left')" class="button small">.bottom-left</button>
		<button popovertarget="position-snackbar" @click="positionClick('bottom-center')" class="button small">.bottom-center</button>
		<button popovertarget="position-snackbar" @click="positionClick('bottom-right')" class="button small">.bottom-right</button>
	</div>

<article id="position-snackbar" popover="manual" ref="positionSnackbar"  class="snackbar" :class="positionClass" role="status">
<div class="content">
	<p>All changes saved</p>
</div>
</article>
</template>

</Example>

<style>
	.position-parent {
		container-type: inline-size;
		border: 2px dotted gray;
		height: 300px;
		position: relative;
		width: 100%;
	}
</style>

### Absolute

In some edge-cases where the Snackbar might block or overlap other UI elements such as navigational elements it might be easier to absolute position the Snackbar instead of changing its `inset` values.

#### Differences from fixed Snackbar

- Does not make use of popover.
- Uses `.visible` class for visibility toggling.
- Uses `.absolute` class for absolute positioning.
- Needs Javascript to work.

::: tip Javascript is required
This solution **does not** leverage popover, so the Snackbar must be triggered with Javascript.

That's because when open, popover elements aren't influenced by a parents' `position` styling - popovers exist in the [top layer](https://developer.mozilla.org/en-US/docs/Glossary/Top_layer).

:::

<Example direction="row">
<template #example>

<div class="position-parent">
<button class="button" @click="showAbsoluteSnackbar = true">Toggle snackbar</button>

<article :class="{'visible': showAbsoluteSnackbar}" class="snackbar absolute bottom-center" role="status">
<div class="content">
	<p>All changes saved</p>
</div>
</article>
</div>

</template>

<template #code>

```html
<article class="snackbar absolute visible bottom-center" role="status">
  <div class="content">
    <p>All changes saved</p>
  </div>
</article>
```

</template>
</Example>

## Anatomy

1. Container
2. Content
3. Action button (optional): may only contain a single action button
4. Close button (optional)

<Example>
<template #example>
<div class="snackbar anatomy" style="opacity: 1; position: relative; margin: 0; inset: revert; z-index: 1;">
	<div class="content">
		<p>Content</p>
	</div>
	<div class="actions">
		<button class="button">Action</button>
		<button class="button">
			<span class="sr-only">Action</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M26.113 4.116a1.25 1.25 0 0 1 1.768 1.768L17.766 15.999l10.115 10.114a1.25 1.25 0 1 1-1.768 1.768L16 17.766L5.884 27.881a1.25 1.25 0 1 1-1.768-1.768L14.231 16L4.116 5.884a1.25 1.25 0 1 1 1.768-1.768l10.115 10.115z"/></svg>
		</button>
	</div>
</div>
</template>
</Example>

## API

<!--@include: ./snackbar-api.md -->

## Browser compatibility

<Baseline :ids="['popover','starting-style', 'overlay', 'transition-behavior', 'light-dark', 'color-mix', 'has']" />

## Installation

<<< @/../src/feedback/snackbar.css
