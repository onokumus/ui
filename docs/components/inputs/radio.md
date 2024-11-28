<script setup>
import Example from "../../.vitepress/theme/app/components/Example.vue";
import Baseline from "../../.vitepress/theme/app/components/Baseline.vue";
</script>

# Radio

## Basic radio buttons

<Example direction="row">
<template #example>
<input class="radio" id="radioa1" name="radio" type="radio" checked="checked">
   <input class="radio" id="radioa2" name="radio" type="radio">
   <input class="radio" id="radioa3" name="radio" type="radio" disabled>
   <input class="radio" id="radioa4" name="radio" type="radio" checked="checked" disabled></input>
</template>

<template #code>

```html
<input class="radio" id="radioa1" name="radio" type="radio" checked="checked" />
<input class="radio" id="radioa2" name="radio" type="radio" />
<input class="radio" id="radioa3" name="radio" type="radio" disabled />
<!-- prettier-ignore -->
<input class="radio" id="radioa4" name="radio" type="radio" checked="checked" disabled>
```

</template>
</Example>

## Labels

<Example hideCode direction="row">
<template #example>
 <label for="radiob1"><input class="radio" id="radiob1" name="radio" type="radio" checked="checked"> Choice A</label>
    <label for="radiob2"><input class="radio" id="radiob2" name="radio" type="radio"> Choice B</label>
    <label for="radiob3"><input class="radio" id="radiob3" name="radio" type="radio" disabled> Disabled</label>
     <label for="radiob4"><input class="radio" id="radiob4" name="radio" type="radio" checked="checked" disabled>Checked and disabled</label>
</template>

<template #code>

```html
<label for="radiob1">
  <input
    class="radio"
    id="radiob1"
    name="radio"
    type="radio"
    checked="checked"
  />
  Choice A
</label>
<label for="radiob2">
  <input class="radio" id="radiob2" name="radio" type="radio" /> Choice B
</label>
<label for="radiob3">
  <input class="radio" id="radiob3" name="radio" type="radio" disabled />
  Disabled
</label>
<label for="radiob4">
  <input
    class="radio"
    id="radiob4"
    name="radio"
    type="radio"
    checked="checked"
    disabled
  />Checked and disabled
</label>
```

</template>
</Example>

## Sizes

<Example hideCode direction="row">
<template #example>
 <input class="radio small" id="radioc1" name="radio" type="radio" checked="checked">
   <input class="radio" id="radioc1" name="radio" type="radio" checked="checked">
   <input class="radio large" id="radioc1" name="radio" type="radio" checked="checked"></input>
</template>

<template #code>

```html
<input
  class="radio small"
  id="radioc1"
  name="radio"
  type="radio"
  checked="checked"
/>
<input class="radio" id="radioc1" name="radio" type="radio" checked="checked" />
<input
  class="radio large"
  id="radioc1"
  name="radio"
  type="radio"
  checked="checked"
/>
```

</template>
</Example>
