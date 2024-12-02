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

Notice the use of `aria-label` on the `label` element. Read more about labels and Switch [accessibility](#labels).

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

<Example direction="row">
<template #example>
<label role="switch" for="switch2" class="switch">
	<input id="switch2" type="checkbox"/>
	Label
</label>

<label role="switch" for="switch3" class="switch">
	<input id="switch3" type="checkbox" disabled/>
	Disabled
</label>
</template>

<template #code>

```html{3}
<label role="switch" for="switch-with-label" class="switch">
  <input id="switch-with-label" type="checkbox" />
  Label
</label>
```

</template>
</Example>

## Size

<Example direction="row">
<template #example>
<label role="switch" for="switch-small" class="switch small">
	<input id="switch-small" type="checkbox"/>
	Label
</label>

<label role="switch" for="switch-default" class="switch">
	<input id="switch-default" type="checkbox"/>
	Label
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
