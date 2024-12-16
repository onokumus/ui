<script setup>
	import Example from "../../.vitepress/theme/app/components/Example.vue"
	import Baseline from "../../.vitepress/theme/app/components/Baseline.vue"
</script>

# Text field

## Variants

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

## Sizes

<Example row>
<template #example>
<div class="field small">
	<input type="text" placeholder="Small"/>
</div>

<div class="field">
	<input type="text" placeholder="Default"/>
</div>
</template>
<template #code>

```html
<div class="field small">
  <input type="text" placeholder="Small" />
</div>

<div class="field">
  <input type="text" placeholder="Default" />
</div>
```

</template>
</Example>

## Native types

<Example column>
<template #example>
	<div class="field">
		<input type="text" placeholder="Text">
</div>
	<div class="field">
		<input type="password" placeholder="Password">
</div>
	<div class="field">
		<input type="url" placeholder="https://yoursite.com">
</div>
	<div class="field">
		<input type="email" placeholder="name@email.com">
</div>
	<div class="field">
		<input type="tel" placeholder="(666) 666-1337">
</div>
	<div class="field">
		<input type="search" placeholder="Search">
</div>
</template>
<template #code>

```html{2}
<div class="field">
  <input type="text" />
</div>
```

</template>
</Example>

### Numeric vs `<input type="number">`

::: danger You most likely don't need `<input type="number">`
**You will have a bad time.**

While `<input type="number">` may seem logical for numeric data it should only be used when mathematical operations are needed on the input (which is... never). Data like credit card numbers, IDs or social security numbers - are actually text that happen to be numeric rather than mathematical values. Therefore, consider using `<input type="text" inputmode="numeric" pattern="[0-9]*">` instead.

This triggers the numeric keyboard on mobile devices while avoiding the jank of number inputs, such as:

- Unexpected value increments from scroll wheels
- Browser-specific validation differences
- Accessibility problems
- Removal of leading zeros
- Allows for some non-numeric mathematical characters

It should probably be called `<input type="math">` instead.

The British Government has a [great article](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/) about how bad input number is and goes in-depth. It's a very interesting read.
:::

<Example column>
<template #example>

<div class="field">
	<input type="text" inputmode="numeric" pattern="[0-9]*" placeholder="Numeric">
</div>
</template>
<template #code>

```html{2}
<div class="field">
  <input type="text" inputmode="numeric" pattern="[0-9]*" placeholder="Numeric"> // [!code ++]
  <input type="number" placeholder="Number"> // [!code --]
</div>

```

</template>
</Example>

## Disabled

<Example row>
<template #example>
<div class="field">
	<input type="text" placeholder="Disabled" disabled/>
</div>
<div class="field filled">
	<input type="text" placeholder="Disabled" disabled/>
</div>
</template>
<template #code>

```html{2}
<div class="field">
  <input type="text" disabled>
</div>
```

</template>
</Example>

## Auto-fit

When enabled the Field changes size depending on its content.

<Example row>
<template #example>
<div class="field auto-fit">
	<input type="text" placeholder="Auto-fit"/>
</div>
</template>
<template #code>

```html{1}
<div class="field auto-fit">
  <!--  -->
</div>
```

</template>
</Example>

## Accessibility

- [Don't use `<input type="number">`](#numeric-vs-input-type-number) unless your user research tells you to.

## API

<!--@include: ./text-field-api.md -->

## Browser compatibility

<Baseline :ids="['field-sizing','light-dark', 'color-mix']" />

## Installation

::: code-group
<<< @/../src/inputs/field.css [field.css]
<<< @/../src/inputs/text-field.css [text-field.css]
:::
