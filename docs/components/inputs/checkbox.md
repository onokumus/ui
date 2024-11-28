<script setup>
import Example from "../../.vitepress/theme/app/components/Example.vue";
import Baseline from "../../.vitepress/theme/app/components/Baseline.vue";
</script>

# Checkbox

<Example direction="row">
<template #example>
   <input class="checkbox" id="checkboxa1" name="checkbox" type="checkbox" checked="checked">
   <input class="checkbox" id="checkboxa2" name="checkbox" type="checkbox">
   <input class="checkbox" id="checkboxa3" name="checkbox" type="checkbox" disabled>
   <input class="checkbox" id="checkboxa4" name="checkbox" type="checkbox" checked="checked" disabled>

</template>

<template #code>

<!-- prettier-ignore -->
```html
<input class="checkbox" id="checkboxa1" name="checkbox" type="checkbox" checked="checked" />

<input class="checkbox" id="checkboxa2" name="checkbox" type="checkbox" />

<input class="checkbox" id="checkboxa3" name="checkbox" type="checkbox" disabled />

<input class="checkbox" id="checkboxa4" name="checkbox" type="checkbox" checked="checked" disabled />
```

</template>

</Example>

## Label

<Example hideCode direction="row">
<template #example>
    <label for="checkboxb1"><input class="checkbox" id="checkboxb1" name="checkbox" type="checkbox" checked="checked"> Choice A</label>
    <label for="checkboxb2"><input class="checkbox" id="checkboxb2" name="checkbox" type="checkbox"> Choice B</label>
    <label for="checkboxb3"><input class="checkbox" id="checkboxb3" name="checkbox" type="checkbox" disabled> Disabled</label>
     <label for="checkboxb4"><input class="checkbox" id="checkboxb4" name="checkbox" type="checkbox" checked="checked" disabled>Checked and disabled
     </label>
</template>

<template #code>

<!-- prettier-ignore -->
```html
<label for="checkboxb1">
  <input class="checkbox" id="checkboxb1" name="checkbox" type="checkbox" checked="checked" />
  Choice A
</label>

<label for="checkboxb2">
  <input class="checkbox" id="checkboxb2" name="checkbox" type="checkbox" />
  Choice B
</label>

<label for="checkboxb3">
  <input class="checkbox" id="checkboxb3" name="checkbox" type="checkbox" disabled />
  Disabled
</label>

<label for="checkboxb4">
  <input class="checkbox" id="checkboxb4" name="checkbox" type="checkbox" checked="checked" disabled />
  Checked and disabled
</label>
```

</template>
</Example>

## Size

<Example hideCode direction="row">
<template #example>
   <input class="checkbox small" id="c-size-1" name="checkbox" type="checkbox" checked="checked">
   <input class="checkbox" id="c-size-2" name="checkbox" type="checkbox" checked="checked">
   <input class="checkbox large" id="c-size-3" name="checkbox" type="checkbox" checked="checked">
</template>

<template #code>

<!-- prettier-ignore -->
```html
<input class="checkbox small" id="c-size-1" name="checkbox" type="checkbox" checked="checked" />

<input class="checkbox" id="c-size-2" name="checkbox" type="checkbox" checked="checked" />

<input class="checkbox large" id="c-size-3" name="checkbox" type="checkbox" checked="checked" />
```

</template>
</Example>
