<script setup>
import Example from "../../.vitepress/theme/app/components/Example.vue"
</script>

<style>
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

<Example direction="row">
<template #example>
    <button class="button">Text</button>
    <button class="button outlined">Outlined</button>
    <button class="button tonal">Tonal</button>
    <button class="button filled">Filled</button>
    <button class="button elevated">Elevated</button>
</template>

<template #code>

```html
<button class="button">Text</button>
<button class="button outlined">Outlined</button>
<button class="button tonal">Tonal</button>
<button class="button filled">Filled</button>
<button class="button elevated">Elevated</button>
```

</template>
</Example>

### Text

<Example direction="row">
<template #example>
    <button class="button">Text</button>
    <button class="button" disabled>Disabled</button>
    <a href="#" class="button">Link</a>
</template>

<template #code>

```html
<button class="button">Text</button>
<button class="button" disabled>Disabled</button>
<a href="#" class="button">Link</a>
```

</template>
</Example>

### Outlined

<Example direction="row">
<template #example>
    <button class="button outlined">Outlined</button>
    <button class="button outlined" disabled>Disabled</button>
    <a href="#" class="button outlined">Link</a>
</template>

<template #code>

```html
<button class="button outlined">Outlined</button>
<button class="button outlined" disabled>Disabled</button>
<a href="#" class="button outlined">Link</a>
```

</template>
</Example>

### Tonal

<Example direction="row">
<template #example>
     <button class="button tonal">Tonal</button>
    <button class="button tonal" disabled>Disabled</button>
    <a href="#" class="button tonal">Link</a>
</template>

<template #code>

```html
<button class="button tonal">Tonal</button>
<button class="button tonal" disabled>Disabled</button>
<a href="#" class="button tonal">Link</a>
```

</template>
</Example>

### Filled

<Example direction="row">
<template #example>
   <button class="button filled">Filled</button>
    <button class="button filled" disabled>Disabled</button>
    <a href="#" class="button filled">Link</a>
</template>

<template #code>

```html
<button class="button filled">Filled</button>
<button class="button filled" disabled>Disabled</button>
<a href="#" class="button filled">Link</a>
```

</template>
</Example>

### Elevated

<Example direction="row">
<template #example>
    <button class="button elevated">Elevated</button>
    <button class="button elevated" disabled>Disabled</button>
    <a href="#" class="button elevated">Link</a>
</template>

<template #code>

```html
<button class="button elevated">Elevated</button>
<button class="button elevated" disabled>Disabled</button>
<a href="#" class="button elevated">Link</a>
```

</template>
</Example>

## Buttons with icon and label

<Example direction="stack">
<template #example>
<div class="row">
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

   <div class="row">
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
</template>

<template #code>

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

</template>
</Example>

## Icon button

The `.sr-only` (screen reader only) class removes the visible text but still allows screen readers to
access it.

<Example direction="row">
<template #example>
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
</template>

<template #code>

```html
<button class="button">
  <span class="sr-only">Label</span>
  <svg></svg>
</button>
```

</template>
</Example>

### Without label

If you can't provide a label or want to control the button from its root you can use the `.icon-only` class.

<Example>
<template #code>

```html
<button class="button icon-only">
  <svg></svg>
</button>
```

</template>
</Example>

## File upload

## Sizes

Resize any button with the `.small` and `.large` modifiers.

<Example direction="stack">
<template #example>
<div class="row">
  <button class="button small">Small</button>
  <button class="button">Medium</button>
  <button class="button large">Large</button>
</div>
<div class="row">
  <button class="button filled small">Small</button>
  <button class="button filled">Medium</button>
  <button class="button filled large">Large</button>
</div>

<div class="row">
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

<div class="row">
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
</template>

<template #code>

```html
<button class="button small">Small</button>
<button class="button">Medium</button>
<button class="button large">Large</button>
```

</template>
</Example>

## Disabled

Add disabled styling with the `disabled` attribute or the `.disabled` class.

<Example direction="stack">
<template #example>
<div class="row">
  <button class="button" disabled>Text</button>
  <button class="button outlined" disabled>Outlined</button>
  <button class="button tonal" disabled>Tonal</button>
  <button class="button filled" disabled>Filled</button>
  <button class="button elevated" disabled>Elevated</button>
</div>
<div class="row">
  <button class="button" disabled>Text <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg></button>
  <button class="button outlined" disabled>Outlined <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg></button>
  <button class="button tonal" disabled>Tonal <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg></button>
  <button class="button filled" disabled>Filled <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg></button>
  <button class="button elevated" disabled>Elevated <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M11.75 3a.75.75 0 0 1 .743.648l.007.102l.001 7.25h7.253a.75.75 0 0 1 .102 1.493l-.102.007h-7.253l.002 7.25a.75.75 0 0 1-1.493.101l-.007-.102l-.002-7.249H3.752a.75.75 0 0 1-.102-1.493L3.752 11h7.25L11 3.75a.75.75 0 0 1 .75-.75"/></svg></button>
</div>
  <div class="row">
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
</template>

<template #code>

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

</template>
</Example>

## Ripple effect

The ripple effect on button press is enabled by default. Here's how you disable it.

Either disable it by setting the ripple size to 0 in your theme config:

::: code-group

```css [theme.css]
// [!code --:2]
--button-ripple-size: 0;
```

:::

... or to your `button-variants.css` file and remove all the ripple related styles:

::: code-group

```css [button-variants.css]
:where(button, .button) {
  /* ... */

  /* Ripple effect */
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

<Example direction="row">
<template #example>
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
</template>

</Example>

## API

These are the classes and attributes a button can be styled with. As usual, feel free to add your own!

| Type                      | Modifiers                                              | Default   | Description                                        |
| ------------------------- | ------------------------------------------------------ | --------- | -------------------------------------------------- |
| [Disabled](#disabled)     | `[disabled]`, `.disabled`                              | -         | If applied, the button is disabled.                |
| [Icon-only](#icon-button) | `.icon-only`                                           | -         | If applied, the button won't show its inner label. |
| [Sizes](#sizes)           | `.small`, `.medium`, `.large`                          | `.medium` | The size of the button.                            |
| [Variants](#variants)     | `.text`, `.outlined`, `.tonal`, `.filled`, `.elevated` | `.text`   | The variant to use.                                |

## Source code

::: code-group
<<< @/../src/inputs/button/button-base.css [button-base.css]
<<< @/../src/inputs/button/button-variants.css [button-variants.css]
<<< @/../src/inputs/button/button-icon.css [button-icon.css]
:::
