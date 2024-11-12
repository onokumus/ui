---
date: 2024-11-12
title: The ridiculously hard task of styling a decent-looking progress bar
category: blog
tags: ui
excerpt: How hard can it be?
status: public
---

<script setup>
	import Example from "../../.vitepress/theme/app/components/Example.vue"
</script>

<style scoped>
	.unstyled {
		all: revert;

		&:indeterminate {
			&:after {
				display: none;
			}
		}

		&::-webkit-progress-bar {
			all: revert;
		}

		&::-webkit-progress-value {
			all: revert;
		}

		&::-moz-progress-bar {
			all: revert;
		}

		&:after {
			display: none !important;
			all: revert;
		}
	}

	.step-1 {
		accent-color: tomato;
		height: 2rem;
		width: 100%;
	}

	.step-2 {
		border-radius: 0;
	}

	.step-3 {
		background-color: yellow;
	}

	.step-4 {
		height: 2rem;
		width: 100%;
	}
</style>

# The ridiculously hard task of styling a decent-looking progress bar

You would think it's easy. I mean, it's just _one_ puny, simple HTML element!

<marquee
  direction="down"
  width="200px"
  height="50px"
  behavior="alternate">
<marquee  behavior="alternate"  class="my-favorite-html-element">How hard could it be?</marquee>
</marquee>

<Example>
<template #example>
<progress class="unstyled"></progress>
</template>

<template #code>

```html
<progress></progress>
```

</template>
</Example>

### Let's try to do something basic.

It works!

<Example>
<template #example>
<progress class="unstyled step-1"></progress>
</template>

<template #code>

```css
progress {
  accent-color: tomato;
  height: 2rem;
  width: 100%;
}
```

</template>
</Example>

I don't like that `border-radius` though. Let's set it to `0`!

<Example>
<template #example>
<progress class="unstyled step-1 step-2"></progress>
</template>

<template #code>

```css {3}
progress {
  accent-color: tomato;
  border-radius: 0;
  height: 2rem;
  width: 100%;
}
```

</template>
</Example>

Uh-oh. It just... disappeared? Uhm.. ok let's ignore that then.

It became gray, that's weird. How about doing something about that `background-color` then?

<Example>
<template #example>
<progress class="unstyled step-1 step-3"></progress>
</template>

<template #code>

```css {3}
progress {
  accent-color: tomato;
  background-color: yellow;
  height: 2rem;
  width: 100%;
}
```

</template>
</Example>

Gray, still?! What did I even do? :scream:

## Pseudo-class heaven

Turns out the `<progress>` element is the forgotten middle child in the browser interop program. Pseudo-classes you'll need to remember to get going are:

- `progress:indeterminate`
- `progress::-webkit-progress-bar`
- `progress::-moz-progress-bar`
- `progress::-webkit-progress-value`

Armed with this knowledge - how do we change the `background-color`?

<Example>
<template #example>
<progress class="unstyled step-4"></progress>
</template>

<template #code>

```css
progress {
  height: 2rem;
  width: 100%;
}

progress::-webkit-progress-bar {
  background-color: yellow;
}
```

</template>
</Example>

Hmm, no, guess it's not that.
