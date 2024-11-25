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

::: tip Javascript is required
In order to toggle a Snackbar you will need to use Javascript.
:::

## Basics

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

```html
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

</template>
</Example>

## Position

### Fixed

Position relative to the browser window. Default is bottom-left.

<Example direction="stack">
<template #example>
	<div class="row">
		<button popovertarget="position-snackbar" @click="positionClick('top-left')" class="button small">Top-left</button>
		<button popovertarget="position-snackbar" @click="positionClick('top-center')" class="button small">Top-center</button>
		<button popovertarget="position-snackbar" @click="positionClick('top-right')" class="button small">Top-right</button>
	</div>
	<div class="row">
		<button popovertarget="position-snackbar" @click="positionClick('bottom-left')" class="button small">Bottom-left</button>
		<button popovertarget="position-snackbar" @click="positionClick('bottom-center')" class="button small">Bottom-center</button>
		<button popovertarget="position-snackbar" @click="positionClick('bottom-right')" class="button small">Bottom-right</button>
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
		anchor-name: --position-parent;
		height: 300px;
		position: relative;
		width: 100%;

		.snackbar {
			align-self: start;
			position-anchor: --position-parent;
			position-area: bottom center;
		}
	}
</style>

### Anchored

Position relative to an element. Leverages anchor positioning.

::: info Note
This will require some custom code depending on use-case.

See CSS example below.
:::

<Example direction="row">
<template #example>

<div class="position-parent">
<button class="button" popovertarget="absolute-snackbar">Toggle snackbar</button>
	<article id="absolute-snackbar" popover="manual" class="snackbar absolute" role="status">
<div class="content">
	<p>All changes saved</p>
</div>
</article>
</div>

</template>

<template #code>

::: code-group

```html{8} [html]
<button class="button" popovertarget="absolute-snackbar">
  Toggle snackbar
</button>

<article
  id="absolute-snackbar"
  popover="manual"
  class="snackbar absolute"
  role="status"
>
  <div class="content">
    <p>All changes saved</p>
  </div>
</article>
```

```css [css]
.position-parent {
  anchor-name: --position-parent;
  height: 300px;
  position: relative;
  width: 100%;

  .snackbar {
    align-self: start;
    position-anchor: --position-parent;
    position-area: bottom center;
  }
}
```

:::

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

<Baseline :ids="['anchor-positioning','popover','starting-style', 'overlay', 'transition-behavior', 'light-dark', 'color-mix', 'has']" />
