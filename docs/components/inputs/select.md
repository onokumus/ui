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
<template #code>

```html
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
  <!--  -->
</select>
```

</template>
</Example>

## Disabled

<Example direction="row">
<template #example>

<select class="select" disabled>
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list">
   <option>Outlined (disabled)</option>
    <option>Option Two</option>
    <option>Option Three</option>
  </div>
</select>

<select class="select filled" disabled>
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list">
   <option>Filled (disabled)</option>
    <option>Option Two</option>
    <option>Option Three</option>
  </div>
</select>
</template>
<template #code>

```html{1}
<select class="select" disabled>
  <!--  -->
</select>
```

</template>
</Example>

## Sizes

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

## Dense

Since the Select popover uses the [List component](/components/data-display/list) we can simply apply its `.dense` modifier class.

<Example direction="row">
<template #example>
<select class="select">
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list dense">
    <option>Dense</option>
    <option>Dense Two</option>
    <option>Dense Three</option>
  </div>
</select>
</template>
<template #code>

```html{1}
<select class="select">
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list dense">
    <option>Dense</option>
    <option>Dense Two</option>
    <option>Dense Three</option>
  </div>
</select>
```

</template>
</Example>

<style scoped>
  .anatomy {
    display: grid;
    gap: 6px;
    outline: var(--_anatomy-border-gray);
    outline-offset: 4px;

    & > * {
      outline: var(--_anatomy-border-red);
    }

    button:after {
      outline: var(--_anatomy-border-red);
      outline-offset: 2px;
    }
  }
</style>

## Multiple

## Anatomy

1. Select container: `<select>`
2. Select button: `<button>`
3. Select button selected option: `<selectedoption>`
4. Select button arrow
5. Popover list: `.list`
6. List option/s: `<option>`
7. List option group/s (optional): `<optgroup>`

<Example direction="column">
<template #example>
<div class="anatomy" style="margin: 0 auto;">
<select class="select">
  <button class="anatomy">
    <selectedoption></selectedoption>
  </button>
  <div class="list">
   <option>Option One</option>
  </div>
</select>
<div class="list">
   <option checked>Option One</option>
    <option>Option Two</option>
    <option>Option Three</option>
  </div>
</div>
</template>
</Example>

## Accessibility

::: warning Experimental status
This way of writing Selects are currently quite experimental. Accessible solutions are on the way, but not solved yet.
:::

## API

### Select API

<!--@include: ./select-api.md -->

### List API

<!--@include: ../data-display/list-api.md -->

## Browser compatibility

<Baseline :ids="['light-dark', 'color-mix']" />

## Installation

::: code-group
<<< @/../src/inputs/select.css [select.css]
<<< @/../src/data-display/list.css [list.css]
:::
