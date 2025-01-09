<script setup>
import Example from "../../.vitepress/theme/app/components/Example.vue";
import Baseline from "../../.vitepress/theme/app/components/Baseline.vue";
</script>

# Radio

## Basic radio buttons

<Example row>
<template #example>

<label class="radio">
  <input id="radioa1" name="basic-enabled" type="radio"  />
  <span class="sr-only">Unchecked</span>
</label>

<label class="radio">
  <input id="radioa2" name="basic-enabled" type="radio" checked/>
  <span class="sr-only">Checked</span>
</label>

<label class="radio">
  <input id="radioa3" name="basic-disabled" type="radio" disabled />
  <span class="sr-only">Disabled</span>
</label>

<label class="radio">
  <input id="radioa4" name="basic-disabled" type="radio" checked disabled />
  <span class="sr-only">Checked and disabled</span>
</label>
</template>

<template #code>

```html
<!-- Unchecked -->
<label class="radio">
  <input id="radioa1" name="basic-enabled" type="radio" />
  <span class="sr-only">Unchecked</span>
</label>

<!-- Checked -->
<label class="radio">
  <input id="radioa2" name="basic-enabled" type="radio" checked />
  <span class="sr-only">Checked</span>
</label>

<!-- Unchecked & disabled -->
<label class="radio">
  <input id="radioa3" name="basic-disabled" type="radio" disabled />
  <span class="sr-only">Disabled</span>
</label>

<!-- Checked & disabled -->
<label class="radio">
  <input id="radioa4" name="basic-disabled" type="radio" checked disabled />
  <span class="sr-only">Checked and disabled</span>
</label>
```

</template>
</Example>

<!--@include: ../../sr-only.md -->

## Visible label

Render the label text inside an element with a `.text` class.

<Example row>
<template #example>
<label class="radio">
  <input id="radio-label-1" name="labels-enabled" type="radio" checked />
  <span class="label">Radio 1</span>
</label>

<label class="radio">
  <input id="radio-label-2" name="labels-enabled" type="radio" />
  <span class="label">Radio 2</span>
</label>

<label class="radio">
  <input id="radio-label-3" name="labels-disabled" type="radio" disabled />
  <span class="label">Disabled</span>
</label>

<label class="radio">
  <input id="radio-label-4" name="labels-disabled" type="radio" checked disabled />
  <span class="label">Checked and disabled</span>
</label>
</template>

<template #code>

```html{3}
<label class="radio">
  <input id="radio-example-id" name="labels" type="radio" />
  <span class="label">Label</span>
</label>
```

</template>
</Example>

### Label position

<Example row exampleClass="gap-l">
<template #example>
  <label class="radio">
    <input name="radio-label-position" type="radio">
    <span class="label">Default</span>
  </label>

  <label class="radio stack">
    <input name="radio-label-position" type="radio">
    <span class="label">Stack</span>
  </label>

</template>

<template #code>

```html{1}
<label class="radio stack">
  <input name="radio-label-position" type="radio">
  <span class="label">Stack</span>
</label>

```

</template>
</Example>

### Supporting text

<Example row exampleClass="gap-l">
<template #example>
  <label class="radio">
    <input name="supporting-text" type="radio">
    <span class="label">Default</span>
    <span class="supporting-text">Supporting text</span>
  </label>

  <label class="radio stack">
    <input name="supporting-text" type="radio">
    <span class="label">Stack</span>
    <span class="supporting-text">Supporting text</span>
  </label>

</template>

<template #code>

```html{4}
<label class="radio">
  <input name="checkbox" type="radio">
  <span class="label">Stack</span>
  <span class="supporting-text">Supporting text</span>
</label>

```

</template>
</Example>

### Validation

<Example row exampleClass="gap-l">
<template #example>
  <label class="radio error">
    <input name="validation" checked type="radio">
    <span class="label">Default</span>
    <span class="supporting-text">Check yourself</span>
  </label>

  <label class="radio stack error">
    <input name="validation" type="radio">
    <span class="label">Stack</span>
    <span class="supporting-text">Before you wreck yourself</span>
  </label>

</template>

<template #code>

```html{1}
<label class="radio error">
  <input name="checkbox" type="radio">
  <span class="label">Label</span>
  <span class="supporting-text">Supporting text</span>
</label>

```

</template>
</Example>

## Size

<Example column centered>
<template #example>
<label class="radio small">
  <input id="radio-small-1" name="size-enabled" type="radio" checked />
  <span class="label">Small</span>
</label>

<label class="radio">
  <input id="radio-small-2" name="size-enabled" type="radio"  />
  <span class="label">Default</span>
</label>

<label class="radio large">
  <input id="radio-small-3" name="size-enabled" type="radio"  />
  <span class="label">Large</span>
</label>
</template>

<template #code>

```html{1}
<label class="radio small">
  <input id="radio-small-1" name="size-enabled" type="radio" />
  <span class="label">Small</span>
</label>
```

</template>
</Example>

## Accessibility

### Labels

Accessible radio buttons must have a label. You can choose between three approaches:

| Approach                                                       | Usage in Radio component |
| -------------------------------------------------------------- | ------------------------ |
| Provide a label text inside the `label`/`role="radio"` element | Default                  |
| Add a `aria-label` on the input element                        | Not used                 |
| Have a visible label that you reference with `aria-labelledby` | Not used                 |

### Keyboard support

<div class="not-rich-text">

| Key              | Function                                               |
| ---------------- | ------------------------------------------------------ |
| <kbd>Space</kbd> | When Radio is focused it changes its state.            |
| <kbd>Enter</kbd> | (Optional) When Radio is focused it changes its state. |

</div>

## API

<!--@include: ./checkbox-radio-api.md -->

## Installation

::: code-group
<<< @/../src/inputs/checkbox-radio.css [checkbox-radio.css]
:::
