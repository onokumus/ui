<script setup>
import Example from "../../.vitepress/theme/app/components/Example.vue";
import Baseline from "../../.vitepress/theme/app/components/Baseline.vue";

</script>

<!--
Keep a look out for the new HTML switch control.
It's not mature yet to even try to implement here,
but will be in time.
https://webkit.org/blog/15054/an-html-switch-control/
 -->

# Switch

All switches should have labels. Notice the use of `aria-label` on the `label` element. Also check out:

- [Visible labels](#visible-labels)
- [Accessibility](#accessibility)

<Example direction="row">
<template #example>
<label role="switch" for="switch-checked" class="switch" aria-label="Label">
  <input id="switch-checked" type="checkbox" checked />
</label>

<label role="switch" for="switch-unchecked" class="switch" aria-label="Label">
  <input id="switch-unchecked" type="checkbox" />
</label>

<label role="switch" for="switch-checked-disabled" class="switch" aria-label="Label">
  <input id="switch-checked-disabled" type="checkbox" checked disabled />
</label>

<label role="switch" for="switch-only-disabled" class="switch" aria-label="Label">
  <input id="switch-only-disabled" type="checkbox" disabled />
</label>
</template>

<template #code>

<!-- prettier-ignore -->
```html
<label role="switch" for="switch1" class="switch" aria-label="Label">
  <input id="switch1" type="checkbox" />
</label>

<!-- Checked -->
<label role="switch" for="switch-unchecked" class="switch" aria-label="Label">
  <input id="switch-unchecked" type="checkbox" />
</label>

<!-- Checked & disabled -->
<label role="switch" for="switch-checked-disabled" class="switch" aria-label="Label">
  <input id="switch-checked-disabled" type="checkbox" checked disabled />
</label>

<!-- Unchecked & disabled -->
<label role="switch" for="switch-only-disabled" class="switch" aria-label="Label">
  <input id="switch-only-disabled" type="checkbox" disabled />
</label>
```

</template>
</Example>

## Visible labels

Add an element with the `.text` class. Also, don't miss the info on label [accessibility](#accessibility).

<Example direction="column">
<template #example>
<label role="switch" for="switch-visible-label" class="switch">
	<input id="switch-visible-label" type="checkbox"/>
	<span class="text">Label</span>
</label>

<label role="switch" for="switch-visible-label-disabled" class="switch">
	<input id="switch-visible-label-disabled" type="checkbox" disabled/>
	<span class="text">Disabled</span>
</label>

<label role="switch" for="switch-long-label" class="switch">
	<input id="switch-long-label" type="checkbox"/>
	<span class="text">Long text bacon ipsum dolor amet prosciutto tenderloin biltong leberkas ribeye short ribs shankle tri-tip doner buffalo chislic meatloaf meatball.</span>
</label>

</template>

<template #code>

```html{3}
<label role="switch" for="switch-with-label" class="switch">
  <input id="switch-with-label" type="checkbox" />
  <span class="text">Label</span>
</label>
```

</template>
</Example>

### Label position

<Example direction="row" exampleClass="gap-l">
<template #example>
<label role="switch" for="switch-label-default" class="switch">
	<input id="switch-label-default" type="checkbox"/>
	<span class="text">Default</span>
</label>

<label role="switch" for="switch-label-bottom" class="switch stack">
	<input id="switch-label-bottom" type="checkbox"/>
	<span class="text">Stack</span>
</label>

</template>

<template #code>

```html{3}
<label role="switch" for="switch-with-label" class="switch">
  <input id="switch-with-label" type="checkbox" />
  <span class="text">Label</span>
</label>
```

</template>
</Example>

## Size

Add the `.small` class on the parent for a smaller Switch variant.

<Example direction="row">
<template #example>
<label role="switch" for="switch-small" class="switch small">
	<input id="switch-small" type="checkbox"/>
	<span class="text">Small</span>
</label>

<label role="switch" for="switch-default" class="switch">
	<input id="switch-default" type="checkbox"/>
	<span class="text">Default</span>
</label>
</template>

<template #code>

```html
<label role="switch" class="switch small">
  <!--  -->
</label>

<label role="switch" class="switch">
  <!-- -->
</label>
```

</template>
</Example>

## Accessibility

### Role & attributes

| Role/attribute  | Usage                                           |
| --------------- | ----------------------------------------------- |
| `role="switch"` | Identifies the element that serves as a switch. |

### Labels

To have an accessible label you can choose between three approaches.

| Variant                                                        | Usage in Switch component                            |
| -------------------------------------------------------------- | ---------------------------------------------------- |
| Add a `aria-label` on the element with `role="switch"`         | Default behavior.                                    |
| Provide a label inside the element with `role="switch"`        | Used when showing [visible labels](#visible-labels). |
| Have a visible label that you reference with `aria-labelledby` | Not used.                                            |

### Keyboard support

| Key              | Function                                                       |
| ---------------- | -------------------------------------------------------------- |
| <kbd>Space</kbd> | When switch is focused, changes the switch's state.            |
| <kbd>Enter</kbd> | (Optional) When switch is focused, changes the switch's state. |

<style scoped>
  .anatomy {
    outline-offset: 8px;
    input {
      border-radius: 100vmax;
      outline-offset: 2px;
    }

  }
</style>

## Anatomy

1. Container: `label` element
2. Switch: `& input type="checkbox"`
3. Label (optional): & `.text`

<Example direction="row">
<template #example>
<label role="switch" for="switch-anatomy" class="switch anatomy" aria-label="Label">
  <input id="switch-anatomy" type="checkbox" />
  <span class="text">Label</span>
</label>
</template>
</Example>

## API

<!--@include: ./switch-api.md -->

## Installation

::: code-group
<<< @/../src/inputs/switch.css [switch.css]
:::
