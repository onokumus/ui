---
date: 2024-11-14
title: Neat way to mix components and rich text
category: blog
tags: rich text, typography, Tailwind CSS
excerpt: As with many other typography-related things I stole it from Tailwind CSS.
status: public
---

<script setup>
import Example from "../../.vitepress/theme/app/components/Example.vue"
</script>

<hgroup>
	<p>2024-11-14</p>
	<h1>Neat way to mix components and rich text</h1>
	<p>Learning other peoples' past lessons.</p>
</hgroup>

Typography on the web is a moving target. In some ways it's kind of a solved problem - we roughly know what works in a hierarchical sense, what colors go better with others and so on.

When designing the typographic rules of a component library though, especially in CSS where you're at the mercy of [ _the cascade_](https://web.dev/learn/css/the-cascade?continue=https%3A%2F%2Fweb.dev%2Flearn%2Fcss%2F%23article-https%3A%2F%2Fweb.dev%2Flearn%2Fcss%2Fthe-cascade):tm: you need to be mindful of what styles flow where.

Before we continue there's some !important context you need to know.

The intended/default style hierarchy (at this date of writing) in Open Props UI is as follows:

```css
@layer props, normalize, utils, theme, components;
```

That means we:

1. Reset some typographic elements in the `normalize` layer.
2. Then Declare the `typography.css` component in the `components` layer and set most of our typographic styles there.
3. Lastly we have the normal author CSS declarations (the ones outside of any `@layer` scope) which hierarchically sits on top of the CSS layers (though that [_depends_](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer#description):tm:).

## So what's the problem?

Notice how the typographic styles are different from the ones round the `<Example/>` component! There are no margins on the any of them for instance.

<Example>
<template #example>
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<p class="large">Body Large</p>
<p>Body</p>
<p class="overline">Overline</p>
<caption>Caption</caption>

</template>

<template #code>

```html
<h1>Heading 1</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6</h6>
<p class="large">Body Large</p>
<p>Body</p>
<p class="overline">Overline</p>
<caption>
  Caption
</caption>
```

  </template>
</Example>

On a rich text page like a blog post or on a documentations article you want your text to be styled to encourage long-form reading. In a non-rich-text component you're probably not as interested in those styles.

How are the styles kept separate? It's a bit tricky, but still easier that I thought.

```css{12}
h1 {
  /***/
  line-height: 1.15;
}

/*
*
*
*/

:where(.rich-text) {
  :where(h1):not(:where([class~="not-rich-text"] *)) {
    line-height: 1.1111111;
  }
}
```

The secret sauce is to wrap anything you don't want affected by the `.rich-text` styles with `.not-rich-text`, and then any element with that class _inside_ a `.rich-text` scope will be unaffected! Ta-daa!

Totally stole that idea from [Tailwind CSS](https://github.com/tailwindlabs/tailwindcss-typography), very very neat!
