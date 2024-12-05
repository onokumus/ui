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

::: details Button group or Toggle button group?
If you just need to group a bunch of "dumb" (uncontrolled) buttons - use Button group.

If your buttons depend on state (controlled) - use [Toggle button group](/components/inputs/toggle-button-group).
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

<template #code>

```html
<div role="group" class="button-group">
  <button class="button">Text</button>
  <button class="button">Text</button>
  <button class="button">Text</button>
</div>
```

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

<template #code>

```html
<div role="group" class="button-group">
  <button class="button small">Small</button>
  <button class="button">Default</button>
  <button class="button large">Large</button>
</div>
```

</template>
</Example>

## Vertical orientation

Vertical button groups are largely a legacy design pattern that can be better handled through:

- Responsive design
- Selects/Dropdown menus
- More concise label writing
- Other UI patterns that better match what you're actually trying to solve

Horizontal groups or alternative patterns altogether usually provide better UX.

::: info Am I wrong?
Create an [issue or a PR](https://github.com/felix-bohlin/ui) and let me know!
:::

## Disabled

<Example direction="column" centered exampleClass="gap-l">
<template #example>

<div role="group" class="button-group">
  <button class="button filled">Enabled</button>
  <button class="button filled" disabled>Disabled</button>
  <button class="button filled">Enabled</button>
</div>
</template>

<template #code>

```html
<div role="group" class="button-group">
  <button class="button">Enabled</button>
  <button class="button" disabled>Disabled</button>
  <button class="button">Enabled</button>
</div>
```

</template>
</Example>

## Anatomy

1. Container: `<element role="group" class="button-group">`
2. Buttons: [Button](/components/inputs/button)

<style>
	.anatomy {
    outline: var(--_anatomy-border-gray);
    outline-offset: 4px;

		* {
			outline: var(--_anatomy-border-red);
      outline-offset: -5px;
		}
	}

</style>

<Example direction="column">
<template #example>
<div role="group" class="button-group anatomy">
  <button class="button">Button</button>
  <button class="button">Button</button>
  <button class="button">Button</button>
</div>
</template>
</Example>

### Button API

[Button docs](/components/inputs/button).

<!--@include: ./button-api.md -->

## Installation

::: code-group
<<< @/../src/inputs/button/button-group.css [button-group.css]
:::
