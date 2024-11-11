<script setup>
	import Example from "../../.vitepress/theme/app/components/Example.vue"
	</script>

<style>
	.anatomy {
    outline: var(--_anatomy-border-gray);
    outline-offset: 3px;
		:is(hgroup, .content, .actions) {
			outline: var(--_anatomy-border-red);
			outline-offset: -2px;
		}
	}
</style>

# Card

The card is extremely versetile and can be used on its own, or as a building block for [accordions](/components/surfaces/accordion), [dialogs](/components/feedback/dialog) and more.

## Variants

<Example direction="stack">
<template #example>
<div class="card"><div class="content">Text</div></div>

<div class="card outlined"><div class="content">Outlined</div></div>

<div class="card tonal"><div class="content">Tonal</div></div>

<div class="card elevated"><div class="content">Elevated</div></div>

</template>

<template #code>

```html
<!-- .text class optional -->
<div class="card text">
  <div class="content">Text</div>
</div>

<div class="card outlined">
  <div class="content">Outlined</div>
</div>

<div class="card tonal">
  <div class="content">Tonal</div>
</div>

<div class="card elevated">
  <div class="content">Elevated</div>
</div>
```

</template>
</Example>

::: info Why does a text variant exist?
It really doesn't make sense to use the text variant unless you really need to.

The [accordion group](/components/surfaces/accordion#accordion-group) is a great example where Open Props UI leverages the text variant of the `.card` component.
:::

## Anatomy

Open Props UI include these complementary utility components to handle various use cases:

1. Container
2. `<hgroup>` (optional): a wrapper for the card header
3. `.content` (optional): a wrapper for the card content
4. `.actions` (optional): a wrapper that groups a set of buttons

<Example direction="stack">
<template #example>
<div class="card elevated anatomy">
		<hgroup>
			<h2 class="h4">Headline</h2>
			<p>Subhead</p>
		</hgroup>
		<div class="content">Explain more about the topic shown in the headline and subhead through supporting text.</div>
		<div class="actions">
			<button class="button">Share</button>
			<button class="button">Learn more</button>
		</div>
	</div>
</template>

<template #code>

```html
<div class="card outlined">
  <hgroup>
    <h2 class="h4">Headline</h2>
    <p>Subhead</p>
  </hgroup>
  <div class="content">
    Explain more about the topic shown in the headline and subhead through
    supporting text.
  </div>
  <div class="actions">
    <button class="button">Share</button>
    <button class="button">Learn more</button>
  </div>
</div>
```

</template>
</Example>

## API

These are the classes and attributes a card can be styled with. As usual, feel free to add your own!

| Type                  | Modifiers                                      | Default | Description                          |
| --------------------- | ---------------------------------------------- | ------- | ------------------------------------ |
| [Children](#anatomy)  | `& > <hgroup>`, `& > .content`, `& > .actions` | -       | Optional wrappers for child content. |
| [Variants](#variants) | `.text`, `.outlined`, `.tonal`, `.elevated`    | `.text` | The variant to use.                  |
