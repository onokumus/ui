<script setup>
import Example from "../../.vitepress/theme/app/components/Example.vue";
import Baseline from "../../.vitepress/theme/app/components/Baseline.vue";
</script>

# Toggle button group

Groups related buttons by wrapping them with `<yourElement class="toggle-button-group" role="group">`.

- Button groups should consist of 2-5 buttons.
- Don't allow them to wrap onto a new line.
- If an icon is used without label text make sure the button communicates clearly what it does.

[More helpful guidelines](https://m3.material.io/components/segmented-buttons/guidelines).

::: tip Button group or Toggle button group?
If you just need to group a bunch of "dumb" (uncontrolled) buttons - use [Button group](/components/inputs/button-group).

If your buttons depend on state (controlled) - use Toggle button group.
:::

<Example direction="column" centered>
<template #example>

<div role="group" class="toggle-button-group">
  <button class="selected">Selected</button>
  <button disabled>Disabled</button>
  <button>Enabled</button>
</div>

</template>

<template #code>

```html
<div role="group" class="toggle-button-group">
  <button class="selected">Text</button>
  <button>Text</button>
  <button>Text</button>
</div>
```

</template>
</Example>

## Orientation

<Example direction="column" centered exampleClass="gap-l">
<template #example>

<div role="group" class="toggle-button-group">
  <button>Text</button>
  <button>Text</button>
  <button>Text</button>
</div>

<div role="group" class="toggle-button-group stack">
  <button>Text</button>
  <button>Text</button>
  <button>Text</button>
</div>

</template>

<template #code>

```html
<div role="group" class="toggle-button-group stack">
  <!--  -->
</div>
```

</template>
</Example>
