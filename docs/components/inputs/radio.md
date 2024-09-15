<style>
 @import "../../../src/inputs/input-base.css";
  @import "../../../src/inputs/checkbox.css";
</style>

# Radio

## Basic radio buttons

<div class="example-wrapper">
  <div class="example row">
   <input id="radioa1" name="radio" type="radio" checked="checked">
   <input id="radioa2" name="radio" type="radio">
   <input id="radioa3" name="radio" type="radio" disabled>
   <input id="radioa4" name="radio" type="radio" checked="checked" disabled>
  </div>

```html
<input id="radioa1" name="radio" type="radio" checked="checked" />
<input id="radioa2" name="radio" type="radio" />
<input id="radioa3" name="radio" type="radio" disabled />
<!-- prettier-ignore -->
<input id="radioa4" name="radio" type="radio" checked="checked" disabled>
```

</div>

## Labels

<div class="example-wrapper">
  <div class="example row">
    <label for="radiob1"><input id="radiob1" name="radio" type="radio" checked="checked"> Choice A</label>
    <label for="radiob2"><input id="radiob2" name="radio" type="radio"> Choice B</label>
    <label for="radiob3"><input id="radiob3" name="radio" type="radio" disabled> Disabled</label>
     <label for="radiob4"><input id="radiob4" name="radio" type="radio" checked="checked" disabled>Checked and disabled</label>
  </div>

```html
<label for="radiob1">
  <input id="radiob1" name="radio" type="radio" checked="checked" />
  Choice A
</label>
<label for="radiob2">
  <input id="radiob2" name="radio" type="radio" /> Choice B
</label>
<label for="radiob3">
  <input id="radiob3" name="radio" type="radio" disabled />
  Disabled
</label>
<label for="radiob4">
  <input
    id="radiob4"
    name="radio"
    type="radio"
    checked="checked"
    disabled
  />Checked and disabled
</label>
```

</div>

## Size

<div class="example-wrapper">
  <div class="example row">
   <input class="small" id="radioc1" name="radio" type="radio" checked="checked">
   <input id="radioc1" name="radio" type="radio" checked="checked">
   <input class="large" id="radioc1" name="radio" type="radio" checked="checked">

  </div>

```html
<input class="small" id="radioc1" name="radio" type="radio" checked="checked" />
<input id="radioc1" name="radio" type="radio" checked="checked" />
<input class="large" id="radioc1" name="radio" type="radio" checked="checked" />
```

</div>
