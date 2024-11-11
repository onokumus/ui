<style scoped>
@import "../../../src/inputs/input-base.css";
@import "../../../src/inputs/input-variants.css";
@import "../../../src/inputs/autocomplete.css";
</style>

# Autocomplete

Leverages the `<input>` + `<datalist>` element combo.

## Basics

Make sure you couple the `<input>` and `<datalist>`:

- `<input list="DATALISTID">`
- `<datalist id="DATALISTID">`

<div class="example-wrapper">
   <div class="example">

<input type="text" list="artists" />
<datalist id="artists">
  <option>Ray Manzarek</option>
  <option>Jonny Greenwood</option>
  <option>Marika Hackman</option>
</datalist>

  </div>

```html
<input class="input outlined" type="text" list="artists" />

<datalist id="artists">
  <option>Ray Manzarek</option>
  <option>Jonny Greenwood</option>
  <option>Marika Hackman</option>
</datalist>
```

</div>
