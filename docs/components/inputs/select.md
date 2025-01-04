<script setup>
	import Example from "../../.vitepress/theme/app/components/Example.vue"
	import Baseline from "../../.vitepress/theme/app/components/Baseline.vue"
</script>

# Select

Leverages the [List component](/components/data-display/list) to provide markup for the Select popover.

## Variants

<Example row>
<template #example>
<div class="field">
<select>
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list">
   <option>Outlined (default)</option>
    <option>Option Two</option>
    <option>Option Three</option>
  </div>
</select>
</div>

<div class="field filled">
<select>
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list">
   <option>Filled</option>
    <option>Option Two</option>
    <option>Option Three</option>
  </div>
</select>
</div>
</template>
<template #code>

```html{1,14}
<div class="field">
  <select>
    <button>
      <selectedoption></selectedoption>
    </button>
    <div class="list">
      <option>Outlined (default)</option>
      <option>Option Two</option>
      <option>Option Three</option>
    </div>
  </select>
</div>

<div class="field filled">
  <select>
    <!--  -->
  </select>
</div>
```

</template>
</Example>

## Label & supporting text

- Use the `<label>` element with the `.field` class.
- `.label`: label text element
- `.supporting-text`: supporting text element

<Example row>
<template #example>
<label class="field">
<span class="label">Label</span>
<select>
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list">
  <option value="">-</option>
   <option>Outlined (default)</option>
    <option>Option Two</option>
    <option>Option Three</option>
  </div>
</select>
<span class="supporting-text">Supporting text</span>
</label>

<label class="field filled">
<span class="label">Label</span>
<select>
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list">
  <option value="">-</option>
   <option>Filled</option>
    <option>Option Two</option>
    <option>Option Three</option>
  </div>
</select>
<span class="supporting-text">Supporting text</span>
</label>
</template>
<template #code>

```html{2,6}
<div class="field">
  <span class="label">Label</span>
  <select>
   <!--  -->
  </select>
  <span class="supporting-text">Supporting text</span>
</div>
```

</template>
</Example>

## Sizes

<Example row>
<template #example>
<div class="field small">
<select>
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list">
   <option>Small</option>
    <option>Option Two</option>
    <option>Option Three</option>
  </div>
</select>
</div>
<div class="field">
<select>
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list">
   <option>Default</option>
    <option>Option Two</option>
    <option>Option Three</option>
  </div>
</select>
</div>
</template>
<template #code>

```html{1}
<div class="field small">
  <select>
    <!--  -->
  </select>
</div>
```

</template>
</Example>

## Grouped

Wrap your options in an element with `role="group"`. The `<label>` inside will be used as a group heading.

<Example row>
<template #example>
<div class="field">
<select>
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list">
  <option>Select car</option>
   <div role="group">
   <label>Swedish cars</label>
    <option>Volvo</option>
    <option>SAAB</option>
   </div>
   <div role="group">
   <label>French cars</label>
    <option>Renault</option>
    <option>Citroën</option>
   </div>
  </div>
</select>
</div>
</template>

<template #code>

```html{8,9,12-14,17}
<div class="field">
  <select>
    <button>
      <selectedoption></selectedoption>
    </button>
    <div class="list">
      <option>Select car</option>
      <div role="group">
        <label class="text">Swedish cars</label>
        <option>Volvo</option>
        <option>SAAB</option>
      </div>
      <div role="group">
        <label class="text">French cars</label>
        <option>Renault</option>
        <option>Citroën</option>
      </div>
    </div>
  </select>
</div>
```

</template>
</Example>

## Dense

Since the Select popover uses the [List component](/components/data-display/list) we can simply apply its `.dense` modifier class.

<Example row>
<template #example>
<div class="field">
<select>
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list dense">
    <option>Dense</option>
    <option>Dense Two</option>
    <option>Dense Three</option>
  </div>
</select>
</div>
</template>
<template #code>

```html{6}
<div class="field">
  <select>
    <button>
      <selectedoption></selectedoption>
    </button>
    <div class="list dense">
      <option>Dense</option>
      <option>Dense Two</option>
      <option>Dense Three</option>
    </div>
  </select>
</div>
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

## Validation

The `.bad` class toggles the error styles. Make use of the supporting text to give extra feedback on the error.

<Example row>
<template #example>
<label class="field bad">
	<span class="label">Label</span>
<select>
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list">
   <option>Outlined (default)</option>
    <option>Option Two</option>
    <option>Option Three</option>
  </div>
</select>	<span class="supporting-text">Only double-negatives are allowed.</span>
</label>

<label class="field bad filled">
	<span class="label">Label</span>
<select>
  <button>
    <selectedoption></selectedoption>
  </button>
  <div class="list">
   <option>Filled</option>
    <option>Option Two</option>
    <option>Option Three</option>
  </div>
</select>	<span class="supporting-text">Only letters from the first half of the alphabet are allowed.</span>
</label>
</template>
<template #code>

```html{1}
<label class="field bad">
  <span class="label">Label</span>
  <select> <!-- --> </select>
  <span class="supporting-text">Supporting text</span>
</label>
```

</template>
</Example>

## Non-experimental Select

Just implement the Select as you normally would.

<Example row>
<template #example>
<div class="field">
  <select>
    <option>Outlined (default)</option>
    <option>Option Two</option>
    <option>Option Three</option>
  </select>
</div>

<div class="field filled">
  <select>
    <option>Filled</option>
    <option>Option Two</option>
    <option>Option Three</option>
  </select>
</div>

<label class="field">
  <span class="label">Label</span>
  <select>
    <option value="">-</option>
    <option>Option</option>
    <option>Option</option>
  </select>
    <span class="supporting-text">Supporting text</span>
</label>

<label class="field filled">
  <span class="label">Label</span>
  <select>
    <option value="">-</option>
    <option>Option</option>
    <option>Option</option>
  </select>
    <span class="supporting-text">Supporting text</span>
</label>
</template>
<template #code>

```html
<div class="field">
  <select>
    <option>Outlined (default)</option>
    <option>Option Two</option>
    <option>Option Three</option>
  </select>
</div>

<label class="field">
  <span class="label">Label</span>
  <select>
    <option value="">-</option>
    <option>Option</option>
    <option>Option</option>
  </select>
  <span class="supporting-text">Supporting text</span>
</label>
```

</template>
</Example>

## Anatomy

1. Select container: `<select>`
2. Select button: `<button>`
3. Select button selected option: `<selectedoption>`
4. Select button arrow
5. Popover list: `.list`
6. List option/s: `<option>`
7. List option group/s (optional): `<optgroup>`

<Example column>
<template #example>
<div class="anatomy" style="margin: 0 auto;">
<div class="field">
<select>
  <button class="anatomy">
    <selectedoption></selectedoption>
  </button>
  <div class="list">
   <option>Option One</option>
  </div>
</select>
</div>
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
<<< @/../src/inputs/field.css [field.css]
<<< @/../src/inputs/select.css [select.css]
<<< @/../src/data-display/list.css [list.css]
:::
