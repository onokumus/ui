<script setup>
import Example from "../../.vitepress/theme/app/components/Example.vue";
import Baseline from "../../.vitepress/theme/app/components/Baseline.vue";
</script>

# Checkbox

<Example row>
<template #example>
  <label class="checkbox">
   <input name="checkbox" type="checkbox" checked="checked">
    <span class="sr-only">Label</span>
  </label>

  <label class="checkbox">
   <input name="checkbox" type="checkbox">
    <span class="sr-only">Label</span>
   </label>

  <label class="checkbox">
   <input name="checkbox" type="checkbox" disabled>
    <span class="sr-only">Label</span>
   </label>

  <label class="checkbox">
   <input name="checkbox" type="checkbox" checked="checked" disabled>
  <span class="sr-only">Label</span>
</label>
</template>

<template #code>

<!-- prettier-ignore -->
```html
<label class="checkbox">
  <input name="checkbox" type="checkbox" checked="checked" />
  <span class="sr-only">Label</span>
</label>

<!-- Checked -->
<label class="checkbox">
  <input name="checkbox" type="checkbox" />
  <span class="sr-only">Label</span>
</label>

<!-- Unchecked & disabled -->
<label class="checkbox">
  <input name="checkbox" type="checkbox" disabled />
  <span class="sr-only">Label</span>
</label>

<!-- Checked & disabled -->
<label class="checkbox">
  <input name="checkbox" type="checkbox" checked="checked" disabled />
  <span class="sr-only">Label</span>
</label>
```

</template>

</Example>

<!--@include: ../../sr-only.md -->

## Visible label

Render the label text inside an element with a `.text` class.

<Example column centered>
<template #example>
    <label class="checkbox">
      <input name="checkbox" type="checkbox" checked="checked">
      <span class="label">Choice A</span>
    </label>

  <label class="checkbox">
    <input name="checkbox" type="checkbox" disabled>
    <span class="label">Disabled</span>
  </label>

  <label class="checkbox">
    <input  name="checkbox" type="checkbox" checked="checked" disabled>
    <span class="label">Checked and disabled</span>
  </label>

  <label class="checkbox">
    <input name="checkbox" type="checkbox">
    <span class="label">Long text dolor amet mustache knausgaard +1, blue bottle waistcoat tbh semiotics artisan synth stumptown gastropub cornhole <a class="link" href="#visible-label">privacy policy ipsum</a></span>
  </label>
</template>

<template #code>

```html{3}
<label class="checkbox">
  <input name="checkbox" type="checkbox" checked="checked" />
  <span class="label">Label</span>
</label>

```

</template>
</Example>

### Label position

<Example row exampleClass="gap-l">
<template #example>
  <label class="checkbox">
    <input name="checkbox" type="checkbox">
    <span class="label">Default</span>
  </label>

  <label class="checkbox stack">
    <input name="checkbox" type="checkbox">
    <span class="label">Stack</span>
  </label>

</template>

<template #code>

```html{1}
<label class="checkbox stack">
  <input name="checkbox" type="checkbox">
  <span class="label">Stack</span>
</label>

```

</template>
</Example>

### Supporting text

<Example row exampleClass="gap-l">
<template #example>
  <label class="checkbox">
    <input name="checkbox" type="checkbox">
    <span class="label">Default</span>
    <span class="supporting-text">Supporting text</span>
  </label>

  <label class="checkbox stack">
    <input name="checkbox" type="checkbox">
    <span class="label">Stack</span>
    <span class="supporting-text">Supporting text</span>
  </label>

</template>

<template #code>

```html{4}
<label class="checkbox">
  <input name="checkbox" type="checkbox">
  <span class="label">Stack</span>
  <span class="supporting-text">Supporting text</span>
</label>

```

</template>
</Example>

### Validation

<Example row exampleClass="gap-l">
<template #example>
  <label class="checkbox error">
    <input name="checkbox" checked type="checkbox">
    <span class="label">Default</span>
    <span class="supporting-text">Check yourself</span>
  </label>

  <label class="checkbox stack error">
    <input name="checkbox" type="checkbox">
    <span class="label">Stack</span>
    <span class="supporting-text">Before you wreck yourself</span>
  </label>

</template>

<template #code>

```html{1}
<label class="checkbox error">
  <input name="checkbox" type="checkbox">
  <span class="label">Label</span>
  <span class="supporting-text">Supporting text</span>
</label>

```

</template>
</Example>

## Size

<Example column exampleClass="gap-l" centered>
<template #example>
   <div class="row">
   <label class="checkbox small">
      <input name="checkbox" type="checkbox" checked="checked">
      <span class="sr-only">Label</span>
  </label>
  <label class="checkbox">
     <input name="checkbox" type="checkbox" checked="checked">
     <span class="sr-only">Label</span>
  </label>
  <label class="checkbox large">
     <input name="checkbox" type="checkbox" checked="checked">
     <span class="sr-only">Label</span>
  </label>
   </div>

   <div class="row">
    <label class="checkbox small">
      <input name="checkbox" type="checkbox" checked="checked">
      <span class="label">Small</span>
    </label>
    <label class="checkbox">
      <input name="checkbox" type="checkbox" checked="checked">
      <span class="label">Default</span>
    </label>
    <label class="checkbox large">
      <input name="checkbox" type="checkbox" checked="checked">
      <span class="label">Large</span>
    </label>
   </div>
</template>

<template #code>

```html{1,6,12,17}
<label class="checkbox small">
  <input checked="checked" name="checkbox" type="checkbox" />
  <span class="sr-only">Label</span>
</label>

<label class="checkbox large">
  <input checked="checked" name="checkbox" type="checkbox" />
  <span class="sr-only">Label</span>
</label>

<!-- With label -->
<label class="checkbox small">
  <input checked="checked" name="checkbox" type="checkbox" />
  <span class="label">Small</span>
</label>

<label class="checkbox large">
  <input checked="checked" name="checkbox" type="checkbox" />
  <span class="label">Large</span>
</label>
```

</template>
</Example>

## Accessibility

### Labels

Accessible checkboxes must have a label. You can choose between three approaches:

| Approach                                                          | Usage in Checkbox component |
| ----------------------------------------------------------------- | --------------------------- |
| Provide a label text inside the `label`/`role="checkbox"` element | Default                     |
| Add a `aria-label` on the input element                           | Not used                    |
| Have a visible label that you reference with `aria-labelledby`    | Not used                    |

### Keyboard support

<div class="not-rich-text">

| Key              | Function                                                  |
| ---------------- | --------------------------------------------------------- |
| <kbd>Space</kbd> | When Checkbox is focused it changes its state.            |
| <kbd>Enter</kbd> | (Optional) When Checkbox is focused it changes its state. |

</div>

## API

<!--@include: ./checkbox-radio-api.md -->

## Installation

::: code-group
<<< @/../src/inputs/checkbox-radio.css [checkbox-radio.css]
:::
