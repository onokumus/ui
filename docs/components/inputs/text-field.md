<script setup>
	import Example from "../../.vitepress/theme/app/components/Example.vue"
	import Baseline from "../../.vitepress/theme/app/components/Baseline.vue"
</script>

# Text field

<Example row>
<template #example>
<div class="field">
	<input type="text" placeholder="Outlined"/>
</div>

<div class="field filled">
	<input type="text" placeholder="Filled"/>
</div>
</template>
<template #code>

```html
<div class="field">
  <input type="text" placeholder="Outlined" />
</div>

<div class="field filled">
  <input type="text" placeholder="Filled" />
</div>
```

</template>
</Example>

## Disabled

## Accessibility

## API

## Browser compatibility

<Baseline :ids="['field-sizing','light-dark', 'color-mix']" />

## Installation
