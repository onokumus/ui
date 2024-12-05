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

::: tip Javascript is required
The whole idea of Toggle button group is that it relies on state change. Therefore Javascript is needed for it to work as intended.
:::
::: details Button group or Toggle button group?
If you just need to group a bunch of "dumb" (uncontrolled) buttons - use [Button group](/components/inputs/button-group).

If your buttons depend on state (controlled) - use Toggle button group.
:::

<Example direction="column" centered>
<template #example>

<div role="group" class="toggle-button-group">
  <button class="selected">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M29.907 5.14a1.25 1.25 0 0 1-.047 1.767l-19 18a1.25 1.25 0 0 1-1.775-.055l-6.75-7.25a1.25 1.25 0 0 1 1.83-1.704l5.89 6.327L28.14 5.093a1.25 1.25 0 0 1 1.767.047"/></svg>
		Selected
	</button>
  <button>Enabled</button>
  <button disabled>Disabled</button>
</div>

</template>

<template #code>

```html
<div role="group" class="toggle-button-group">
  <button class="selected">
    <svg></svg>
    Selected
  </button>

  <button>Enabled</button>

  <button disabled>Disabled</button>
</div>
```

</template>
</Example>
