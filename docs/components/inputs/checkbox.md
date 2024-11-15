# Checkbox

## Basic checkboxes

<div class="example-wrapper">
  <div class="example row">
   <input id="checkboxa1" name="checkbox" type="checkbox" checked="checked">
   <input id="checkboxa2" name="checkbox" type="checkbox">
   <input id="checkboxa3" name="checkbox" type="checkbox" disabled>
   <input id="checkboxa4" name="checkbox" type="checkbox" checked="checked" disabled>
  </div>

```html
<input id="checkboxa1" name="checkbox" type="checkbox" checked="checked" />
<input id="checkboxa2" name="checkbox" type="checkbox" />
<input id="checkboxa3" name="checkbox" type="checkbox" disabled />
<!-- prettier-ignore -->
<input id="checkboxa4" name="checkbox" type="checkbox" checked="checked" disabled>
```

</div>

## Labels

<div class="example-wrapper">
  <div class="example row">
    <label for="checkboxb1"><input id="checkboxb1" name="checkbox" type="checkbox" checked="checked"> Choice A</label>
    <label for="checkboxb2"><input id="checkboxb2" name="checkbox" type="checkbox"> Choice B</label>
    <label for="checkboxb3"><input id="checkboxb3" name="checkbox" type="checkbox" disabled> Disabled</label>
     <label for="checkboxb4"><input id="checkboxb4" name="checkbox" type="checkbox" checked="checked" disabled>Checked and disabled
     </label>
  </div>

```html
<label for="checkboxb1">
  <input id="checkboxb1" name="checkbox" type="checkbox" checked="checked" />
  Choice A
</label>
<label for="checkboxb2">
  <input id="checkboxb2" name="checkbox" type="checkbox" /> Choice B
</label>
<label for="checkboxb3">
  <input id="checkboxb3" name="checkbox" type="checkbox" disabled />
  Disabled
</label>
<label for="checkboxb4">
  <input
    id="checkboxb4"
    name="checkbox"
    type="checkbox"
    checked="checked"
    disabled
  />Checked and disabled
</label>
```

</div>

## Sizes

<div class="example-wrapper">
  <div class="example row">
   <input class="small" id="checkboxc1" name="checkbox" type="checkbox" checked="checked">
   <input id="checkboxc1" name="checkbox" type="checkbox" checked="checked">
   <input class="large" id="checkboxc1" name="checkbox" type="checkbox" checked="checked">

  </div>

```html
<input
  class="small"
  id="checkboxc1"
  name="checkbox"
  type="checkbox"
  checked="checked"
/>
<input id="checkboxc1" name="checkbox" type="checkbox" checked="checked" />
<input
  class="large"
  id="checkboxc1"
  name="checkbox"
  type="checkbox"
  checked="checked"
/>
```

</div>
