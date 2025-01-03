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

<Example row>
<template #example>
<label class="switch" aria-label="Label">
  <input type="checkbox" role="switch" checked />
</label>

<div class="switch">
  <label for="switch-unchecked" aria-label="Label"></label>
  <input id="switch-unchecked" type="checkbox" role="switch" />
</div>

<label class="switch" aria-label="Label">
  <input type="checkbox" role="switch" checked disabled />
</label>

<label class="switch" aria-label="Label">
  <input type="checkbox" role="switch" disabled />
</label>
</template>

<template #code>

<!-- prettier-ignore -->
```html
<!-- Checked -->
<label class="switch" aria-label="Label">
  <input type="checkbox" role="switch" />
</label>

<!-- Unchecked. Demos another common pattern that input is outside label -->
<div class="switch">
  <label for="switch-unchecked" aria-label="Label"></label>
  <input id="switch-unchecked" type="checkbox" role="switch" />
</div>

<!-- Checked & disabled -->
<label class="switch" aria-label="Label">
  <input type="checkbox" role="switch" checked disabled />
</label>

<!-- Unchecked & disabled -->
<label class="switch" aria-label="Label">
  <input type="checkbox" role="switch" disabled />
</label>
```

</template>
</Example>

## Visible labels

Add an element with the `.text` class. Also, don't miss the info on label [accessibility](#accessibility).

<Example column>
<template #example>
<label class="switch">
	<input type="checkbox" role="switch" />
	<span class="text">Label</span>
</label>

<label class="switch">
	<input type="checkbox" role="switch" disabled/>
	<span class="text">Disabled</span>
</label>

<label class="switch">
	<input type="checkbox" role="switch"/>
	<span class="text">Long text bacon ipsum dolor amet prosciutto tenderloin biltong leberkas ribeye short ribs shankle tri-tip doner buffalo chislic meatloaf meatball.</span>
</label>

</template>

<template #code>

```html{3}
<label class="switch">
  <input type="checkbox" role="switch" />
  <span class="text">Label</span>
</label>
```

</template>
</Example>

### Label position

<Example row exampleClass="gap-l">
<template #example>
<label class="switch">
	<input type="checkbox" role="switch" />
	<span class="text">Default</span>
</label>

<label class="switch stack">
	<input type="checkbox" role="switch" />
	<span class="text">Stack</span>
</label>

</template>

<template #code>

```html{3}
<label class="switch">
  <input type="checkbox" role="switch" />
  <span class="text">Label</span>
</label>
```

</template>
</Example>

## Sizes

Add the `.small` class on the parent for a smaller Switch variant.

<Example row>
<template #example>
<label class="switch small">
	<input type="checkbox" role="switch" />
	<span class="text">Small</span>
</label>

<label class="switch">
	<input type="checkbox" role="switch" />
	<span class="text">Default</span>
</label>
</template>

<template #code>

```html
<label class="switch small">
  <!--  -->
</label>

<label class="switch">
  <!-- -->
</label>
```

</template>
</Example>

## Accessibility

### Role & attributes

| Role/attribute  | Usage                                                                            |
| --------------- | -------------------------------------------------------------------------------- |
| `role="switch"` | Required on the `input` element. Identifies the element that serves as a switch. |

### Labels

To have an accessible label you can choose between three approaches.

| Variant                                                        | Usage in Switch component                            |
| -------------------------------------------------------------- | ---------------------------------------------------- |
| Add a `aria-label` on the element                              | Default behavior.                                    |
| Provide a label inside the element                             | Used when showing [visible labels](#visible-labels). |
| Have a visible label that you reference with `aria-labelledby` | Not used.                                            |

### Keyboard support

| Key              | Function                                                       |
| ---------------- | -------------------------------------------------------------- |
| <kbd>Space</kbd> | When switch is focused, changes the switch's state.            |
| <kbd>Enter</kbd> | (Optional) When switch is focused, changes the switch's state. |

<style scoped>
  .anatomy {
    outline-offset: 8px;
    outline: var(--_anatomy-border-gray);

    * {
      outline: var(--_anatomy-border-red);
    }

    input {
      border-radius: 100vmax;
      outline-offset: 2px;
    }

  }
</style>

## Anatomy

1. Container: `label` element
2. Switch: `& input type="checkbox" role="switch"`
3. Label (optional): & `.text`

<Example row>
<template #example>
<label class="switch anatomy" aria-label="Label">
  <input type="checkbox" role="switch" />
  <span class="text">Label</span>
</label>
</template>
</Example>

## API

<!--@include: ./switch-api.md -->

## Browser compatibility

<Baseline :ids="['light-dark']" />

## Installation

::: code-group
<<< @/../src/inputs/switch.css [switch.css]
:::
