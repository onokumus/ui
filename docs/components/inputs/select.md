<script setup>
	import Example from "../../.vitepress/theme/app/components/Example.vue"
	import Baseline from "../../.vitepress/theme/app/components/Baseline.vue"
</script>

# Select

Leverages the [List component](/components/data-display/list) to provide markup for the Select popover.

## Variants

<Example direction="row">
<template #example>
<select class="select">
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list">
   <option>Outlined (default)</option>
    <option>Option Two</option>
    <option>Option Three</option>
  </div>
</select>

<select class="select filled">
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list">
   <option>Filled</option>
    <option>Option Two</option>
    <option>Option Three</option>
  </div>
</select>
</template>
</Example>

## Size

<Example direction="row">
<template #example>
<select class="select small">
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list">
   <option>Small</option>
    <option>Option Two</option>
    <option>Option Three</option>
  </div>
</select>

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
<template #code>

```html{1}
<select class="small">
  <!--  -->
</select>
```

</template>
</Example>

## Grouped

<Example direction="row">
<template #example>
<select class="select">
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list">
  <option>Select car</option>
   <optgroup label="Swedish cars">
    <option>Volvo</option>
    <option>SAAB</option>
   </optgroup>
   <optgroup label="French cars">
    <option>Renault</option>
    <option>Citroën</option>
   </optgroup>
  </div>
</select>
</template>

<template #code>

```html{7,10,11,14}
<select class="select">
  <button>
  <selectedoption></selectedoption>
  </button>
  <div class="list">
    <option>Select car</option>
    <optgroup label="Swedish cars">
      <option>Volvo</option>
      <option>SAAB</option>
    </optgroup>
    <optgroup label="French cars">
      <option>Renault</option>
      <option>Citroën</option>
    </optgroup>
  </div>
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
