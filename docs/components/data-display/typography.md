<script setup>
import Example from "../../.vitepress/theme/app/components/Example.vue"
</script>

# Typography

## Headings

<Example>
  <template #example>
  <h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6></template>

<template #code>

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
```

  </template>
</Example>

## Heading group

<Example>
<template #example>
<hgroup>
  <p>Zero or more p elements</p>
  <h2>Followed by one h* element</h2>
  <p>Followed by zero or more p elements</p>
</hgroup>
</template>

<template #code>

```html
<hgroup>
  <p>Zero or more p elements</p>
  <h2>Followed by one h* element</h2>
  <p>Followed by zero or more p elements</p>
</hgroup>
```

</template>
</Example>

::: info `<hgroup>` spec

- Zero or more p elements...
- ... followed by one h1, h2, h3, h4, h5, or h6 element...
- ...followed by zero or more p elements.

[Source](https://html.spec.whatwg.org/multipage/sections.html#the-hgroup-element)
:::

## Inline text elements

<Example direction="stack">
<template #example>

<abbr title="Abbreviation">Abbr.</abbr> `<abbr>`

<strong>Bold</strong> `<strong>`, `<b>`

<i>Italic</i> `<i>`, `<em>`, `<cite>`

<del>Deleted</del> `<del>`

<ins>Inserted</ins> `<ins>`

<kbd>Ctrl + S</kbd> `<kbd>`

<mark>Highlighted</mark> `<mark>`

<s>Strikethrough</s> `<s>`

<small>Small</small> `<small>`

Text <sub>Sub</sub> `<sub>`

Text <sup>Sup</sup> `<sup>`

<u>Underline</u> `<u>`
</template>

</Example>

## Blockquote

<Example>

<template #example>

<blockquote>
  "Occupy your mind, don't stay home. Talk to all your friends, but don't look at your phone”
  <footer>
    — Marika Hackman, <cite>No Caffeinie</cite>
  </footer>
</blockquote>

</template>

<template #code>

```html
<blockquote>
  "Occupy your mind, don't stay home. Talk to all your friends, but don't look
  at your phone”
  <footer>— Marika Hackman, <cite>No Caffeinie</cite></footer>
</blockquote>
```

</template>
</Example>

## Rich text

Similar to the `.prose` class in [TailwindCSS](https://tailwindcss.com/docs/plugins#typography) you can use the `.rich-text` class to add typographic styles to an element. Is extra handy when you can't control the contents yourself, like printing text from a CMS.

<Example>
<template #example>
<article class="rich-text">
  <h2>Rich text content</h2>
  <p>It's really nice that you don't have to style this yourself!</p>
  <p>Especially when you don't know what you're going to find here.</p>

  <ul>
    <li>Saves time.</li>
    <li>Looks decent.</li>
    <li>Tweak it yourself if you want</li>
  </ul>
</article>
</template>

<template #code>

```html
<article class="rich-text">
  <h2>Rich text content</h2>
  <p>It's really nice that you don't have to style this yourself!</p>
  <p>Especially when you don't know what you're going to find here.</p>

  <ul>
    <li>Saves time.</li>
    <li>Looks decent.</li>
    <li>Tweak it yourself if you want</li>
  </ul>
</article>
```

</template>
</Example>
