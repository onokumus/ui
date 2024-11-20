<script setup>
	import Example from "../../.vitepress/theme/app/components/Example.vue"
	import Baseline from "../../.vitepress/theme/app/components/Baseline.vue"
	</script>

# Alert

## Variants

<Example direction="stack">
<template #example>
<article class="alert">Tonal</article>
<article class="alert outlined">Outlined</article>

</template>

<template #code>

```html
<article class="alert">Neutral</article>
<article class="alert outlined">Neutral</article>
```

</template>
</Example>

## Colors

<Example direction="stack">
<template #example>
<article class="alert success">Success</article>
<article class="alert info">Info</article>
<article class="alert warning">Warning</article>
<article class="alert danger">Danger</article>

<article class="alert outlined success">Success</article>
<article class="alert outlined info">Info</article>
<article class="alert outlined warning">Warning</article>
<article class="alert outlined danger">Danger</article>
</template>

<template #code>

```html
<article class="alert success">Success</article>
<article class="alert info">Info</article>
<article class="alert warning">Warning</article>
<article class="alert danger">Danger</article>

<article class="alert outlined success">Success</article>
<article class="alert outlined info">Info</article>
<article class="alert outlined warning">Warning</article>
<article class="alert outlined danger">Danger</article>
```

</template>
</Example>
