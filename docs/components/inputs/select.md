<script setup>
	import Example from "../../.vitepress/theme/app/components/Example.vue"
	import Baseline from "../../.vitepress/theme/app/components/Baseline.vue"
</script>

# Select

## Variants

<Example>
<template #example>
<select class="select">
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list">
   <option>Default</option>
    <option>Option Two</option>
    <option>Option Three</option>
  </div>
</select>
</template>
</Example>

## Size

## Multiple select

### Checkbox

### Chip

### Placeholder

### `[multiple]`

## Grouped

<Example>
<template #example>
<select class="select">
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list">
   <option>Default</option>
   <option>Option Three</option>
   <optgroup label="First group">
    <option>Option Two</option>
    <option>Option Three</option>
   </optgroup>
   <optgroup label="Second group">
    <option>Option Four</option>
    <option>Option Five</option>
   </optgroup>
  </div>
</select>
</template>
</Example>

## Auto-width

<Example>
<template #code>

```html
<select class="select auto-width">
  <!--  -->
</select>
```

</template>
</Example>

## Anatomy

## Accessibility

::: warning Experimental status
This way of writing Selects are currently quite experimental. Accessible solutions are on the way, but not solved yet.
:::

## API

## Browser compatibility

## Installation
