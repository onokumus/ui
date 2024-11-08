<style scoped>
  @import "../../src/button/button-base.css";
  @import "../../src/button/button-variants.css";
  @import "../../src/button/button-icon.css";

  .anatomy {
    outline: var(--_anatomy-border-gray);
    outline-offset: 2px;
    & > * {
      outline: var(--_anatomy-border-red);
    }
  }
</style>

# Button

## Variants

<div class="example-wrapper">
  <div class="example row">
    <button class="button">Text</button>
    <button class="button outlined">Outlined</button>
    <button class="button tonal">Tonal</button>
    <button class="button filled">Filled</button>
    <button class="button elevated">Elevated</button>
  </div>

```html
<button class="button">Text</button>
<button class="button outlined">Outlined</button>
<button class="button tonal">Tonal</button>
<button class="button filled">Filled</button>
<button class="button elevated">Elevated</button>
```

</div>

### Text

<div class="example-wrapper">
  <div class="example row">
    <button class="button">Text</button>
    <button class="button" disabled>Disabled</button>
    <a href="#" class="button">Link</a>
  </div>

```html
<button class="button">Text</button>
<button class="button" disabled>Disabled</button>
<a href="#" class="button">Link</a>
```

</div>

### Outlined

<div class="example-wrapper">
  <div class="example row">
    <button class="button outlined">Outlined</button>
    <button class="button outlined" disabled>Disabled</button>
    <a href="#" class="button outlined">Link</a>
  </div>

```html
<button class="button outlined">Outlined</button>
<button class="button outlined" disabled>Disabled</button>
<a href="#" class="button outlined">Link</a>
```

</div>

### Tonal

<div class="example-wrapper">
  <div class="example row">
    <button class="button tonal">Tonal</button>
    <button class="button tonal" disabled>Disabled</button>
    <a href="#" class="button tonal">Link</a>
  </div>

```html
<button class="button tonal">Tonal</button>
<button class="button tonal" disabled>Disabled</button>
<a href="#" class="button tonal">Link</a>
```

</div>

### Filled

<div class="example-wrapper">
  <div class="example row">
    <button class="button filled">Filled</button>
    <button class="button filled" disabled>Disabled</button>
    <a href="#" class="button filled">Link</a>
  </div>

```html
<button class="button filled">Filled</button>
<button class="button filled" disabled>Disabled</button>
<a href="#" class="button filled">Link</a>
```

</div>

### Elevated

<div class="example-wrapper">
  <div class="example row">
    <button class="button elevated">Elevated</button>
    <button class="button elevated" disabled>Disabled</button>
    <a href="#" class="button elevated">Link</a>
  </div>

```html
<button class="button elevated">Elevated</button>
<button class="button elevated" disabled>Disabled</button>
<a href="#" class="button elevated">Link</a>
```

</div>

## Buttons with icon and label

<div class="example-wrapper">
  <div class="example row">
    <button class="button">
      Text
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    </button>
    <button class="button outlined">
    Outlined
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    </button>
    <button class="button tonal">
    Tonal
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    </button>
    <button class="button filled">
    Filled
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    </button>
    <button class="button elevated">
    Elevated
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    </button>
  </div>

   <div class="example row">
    <button class="button">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
      Text
    </button>
    <button class="button outlined">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    Outlined
    </button>
    <button class="button tonal">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    Tonal
    </button>
    <button class="button filled">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    Filled
    </button>
    <button class="button elevated">
     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    Elevated
    </button>
  </div>

```html
<!-- Label + icon -->
<button class="button">
  Label
  <svg></svg>
</button>

<!-- Icon + label -->
<button class="button">
  <svg></svg>
  Label
</button>
```

</div>

## Icon button

The `.sr-only` (screen reader only) class removes the visible text but still allows screen readers to
access it.

<div class="example-wrapper">
  <div class="example row">
    <button class="button">
      <span class="sr-only">
        Text
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    </button>
     <button class="button outlined">
      <span class="sr-only">
        Text
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    </button>
     <button class="button tonal">
      <span class="sr-only">
        Text
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    </button>
     <button class="button filled">
      <span class="sr-only">
        Text
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    </button>
     <button class="button elevated">
      <span class="sr-only">
        Text
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    </button>
  </div>

```html
<button class="button">
  <span class="sr-only">Label</span>
  <svg></svg>
</button>
```

</div>

### Without label

If you can't provide a label or want to control the button from its root you can use the `.icon-only` class.

```html
<button class="button icon-only">
  <svg></svg>
</button>
```

## File upload

## Sizes

Resize any button with the `.small` and `.large` modifiers.

<div class="example-wrapper">
<div class="example row">
  <button class="button small">Small</button>
  <button class="button">Medium</button>
  <button class="button large">Large</button>
</div>
<div class="example row">
  <button class="button filled small">Small</button>
  <button class="button filled">Medium</button>
  <button class="button filled large">Large</button>
</div>

<div class="example row">
  <button class="button small">
      Text
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
  </button>
    <button class="button outlined">
      Text
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
  </button>
    <button class="button filled large">
      Text
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
  </button>
</div>

<div class="example row">
  <button class="button small">
    <span class="sr-only">
      Text
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
  </button>
    <button class="button">
    <span class="sr-only">
      Text
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
  </button>
    <button class="button large">
    <span class="sr-only">
      Text
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
  </button>
</div>
<div class="example row">
  <button class="button filled small">
    <span class="sr-only">
      Text
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
  </button>
    <button class="button filled">
    <span class="sr-only">
      Text
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
  </button>
    <button class="button filled large">
    <span class="sr-only">
      Text
    </span>
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
  </button>
</div>

```html
<button class="button small">Small</button>
<button class="button">Medium</button>
<button class="button large">Large</button>
```

</div>

## Disabled

Add disabled styling with the `disabled` attribute or the `.disabled` class.

<div class="example-wrapper">
<div class="example row">
  <button class="button" disabled>Text</button>
  <button class="button outlined" disabled>Outlined</button>
  <button class="button tonal" disabled>Tonal</button>
  <button class="button filled" disabled>Filled</button>
  <button class="button elevated" disabled>Elevated</button>
</div>
<div class="example row">
  <button class="button" disabled>Text <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg></button>
  <button class="button outlined" disabled>Outlined <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg></button>
  <button class="button tonal" disabled>Tonal <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg></button>
  <button class="button filled" disabled>Filled <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg></button>
  <button class="button elevated" disabled>Elevated <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg></button>
</div>
  <div class="example row">
    <button class="button" disabled>
      <span class="sr-only">
        Text
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    </button>
     <button class="button outlined" disabled>
      <span class="sr-only">
        Text
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    </button>
     <button class="button tonal" disabled>
      <span class="sr-only">
        Text
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    </button>
     <button class="button filled" disabled>
      <span class="sr-only">
        Text
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    </button>
     <button class="button elevated" disabled>
      <span class="sr-only">
        Text
      </span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    </button>
  </div>

```html
<button class="button" disabled>
  <span class="sr-only">Label</span>
  <svg></svg>
</button>

<!-- or with .disabled class -->

<button class="button disabled">
  <span class="sr-only">Label</span>
  <svg></svg>
</button>
```

</div>

## Ripple effect

The ripple effect on button press is enabled by default. Here's how you remove it.

Either go to your theme file and add:

::: code-group

```css [theme.css]
--ripple: none;
```

:::

...or go to your `button-variants.css` file and remove all the ripple related styles:

::: code-group

```css [button-variants.css]
:where(button, .button) {
  /* ... */

  /* Ripple */
  background-position: center; // [!code --]
  transition: background 0.8s; // [!code --]

  &:where(:not(.disabled, [disabled])) {
    &:where(:not(:active):hover) {
      --ripple: radial-gradient(circle, transparent 1%, var(--_bg-color) 1%) center/15000%; // [!code --]
    }

    &:where(:hover:active) {
      background-size: 100%; // [!code --]
      transition: background 0s; // [!code --]
    }
  }
}
```

:::

## Colors

These are the out-of-the-box colors generated by the Open Props UI `theme.css` file. You are free to add as many and as few as you want to your styles.

## Anatomy

1. Container
2. Label text (optional)
3. Icon (optional)

<div class="example-wrapper">
   <div class="example row">

 <button class="button filled anatomy">
       <span> Text</span>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    </button>

  <button class="button anatomy">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
      <span> Text</span>
  </button>

  <button class="button filled anatomy">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg>
    <span class="sr-only">Text</span>
</button>
  </div>

</div>

## API

These are the classes and attributes a button can be styled with. As usual, feel free to add your own!

| Type                      | Modifiers                                              | Default   | Description                                        |
| ------------------------- | ------------------------------------------------------ | --------- | -------------------------------------------------- |
| [Disabled](#disabled)     | `[disabled]`, `.disabled`                              | -         | If applied, the button is disabled.                |
| [Icon-only](#icon-button) | `.icon-only`                                           | -         | If applied, the button won't show its inner label. |
| [Sizes](#sizes)           | `.small`, `.medium`, `.large`                          | `.medium` | The size of the button.                            |
| [Variants](#variants)     | `.text`, `.outlined`, `.tonal`, `.filled`, `.elevated` | `.text`   | The variant to use.                                |

## Installation
