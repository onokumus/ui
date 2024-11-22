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

Only one Snackbar may be displayed at a time.

## Usage

::: tip Javascript is required
In order to toggle a Snackbar you will need to use Javascript.
:::

### Basics

<Example>
<template #example>
<div class="row">
<button class="button" popovertarget="snackbar1">Show snackbar 1</button>
<button class="button" popovertarget="snackbar2" @click="showSnackbar2 = true;">Show snackbar 2</button>
</div>

<article popover="manual" id="snackbar1" class="snackbar" role="status">
	<div class="content">
		<p>All your base are belong to us</p>
	</div>
	<div class="actions">
		<button class="button" popovertarget="snackbar1">Undo</button>
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

```html
<div class="snackbar">
  <div class="content">
    <p>Content</p>
  </div>

  <div class="actions">
    <button class="button">Undo</button>

    <button class="button">
      <span class="sr-only">Close</span>
      <svg><!--  --></svg>
    </button>
  </div>
</div>
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
<div class="snackbar anatomy" style="opacity: 1; position: relative; margin: 0; width: 100%; inset: revert; z-index: 1;">
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

## Browser compatibility

<Baseline :ids="['starting-style', 'overlay', 'transition-behavior', 'light-dark', 'color-mix', 'has']" />
