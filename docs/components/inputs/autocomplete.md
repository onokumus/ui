<script setup>
import Example from "../../.vitepress/theme/app/components/Example.vue"
</script>

# Autocomplete

Leverages the `<input>` + `<datalist>` element combo.

## Basics

Make sure you couple the `<input>` and `<datalist>`:

- `<input list="DATALISTID">`
- `<datalist id="DATALISTID">`

<Example>
<template #example>
<input type="text" list="artists" />
<datalist id="artists">
  <option>Ray Manzarek</option>
  <option>Jonny Greenwood</option>
  <option>Marika Hackman</option>
</datalist>

</template>

<template #code>

```html
<input type="text" list="artists" />
<datalist id="artists">
  <option>Ray Manzarek</option>
  <option>Jonny Greenwood</option>
  <option>Marika Hackman</option>
</datalist>
```

</template>
</Example>
