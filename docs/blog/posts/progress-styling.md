---
date: 2024-11-12
title: The ridiculously confusing task of styling a decent-looking progress bar
category: blog
tags: ui
excerpt: How hard can it be?
status: public
---

<script setup>
	import { ref } from "vue"
	import Example from "../../.vitepress/theme/app/components/Example.vue"

	const stopIt = ref(2)
</script>

<style scoped>
	:where(.unstyled) {
		all: revert;

		&:indeterminate {
			all: revert;
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
		&:indeterminate::-webkit-progress-bar {
			background-color: yellow;
		}

		&:indeterminate::-webkit-progress-value {
			background-color: yellow;
		}

		&:indeterminate::-moz-progress-bar {
			background-color: yellow;
		}
	}




</style>

<hgroup>
	<p>2024-11-12</p>
	<h1>The ridiculously confusing task of styling a decent-looking progress bar</h1>
	<p>You would think it's easy. I mean, it's just one teeny tiny, simple <a class="link" href="/components/feedback/progress">progress</a> element!</p>
</hgroup>

<p v-if="stopIt < 1" @click="stopIt = 2" style="cursor: pointer;">How hard could it be?</p>
<marquee v-else @click="stopIt--"
class="this-is-my-favorite-html-element"
direction="down"
width="200px"
height="50px"
:behavior="stopIt === 1 ? '' : 'alternate'" style="cursor: pointer;" title="Try it!">
<marquee direction="right" :behavior="stopIt === 1 ? '' : 'alternate'">How hard could it be?</marquee>
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

Can we change the height, width and accent-color?

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

It works! I don't like that border-radius though. Let's set it to 0!

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

It became gray, that's weird. How about doing something about that background color instead then?

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

Armed with this knowledge - how do we change the `background-color` of... whatever any of that is?

<Example>
<template #example>
<progress class="unstyled step-4"></progress>
</template>

<template #code>

```css
progress::-webkit-progress-bar {
  background-color: yellow;
}
progress::-webkit-progress-value {
  background-color: yellow;
}
progress::-moz-progress-bar {
  background-color: yellow;
}
```

</template>
</Example>

Nothing happened? Hmm, no, guess it's not that.

## The finished version

At this point I'm just like... screw it!

If it's going to be this hard I'll just bypass all that nonsense and do something that's readable and will work regardless of pseudo-class nonsense! **(╯°□°)╯︵ ┻━┻**

I ended up reaching for the trusty `:after` pseudo-class. In this case it also enables me to do some nice animations, so win-win!

<Example>
<template #example>
<progress></progress>
</template>

<template #code>

::: code-group

```css [progress.css]
:where(progress) {
  --_accent-color: var(--primary);
  --_bg-color: var(--surface-tonal);

  appearance: none;
  background-color: var(--_bg-color);
  border-radius: var(--border-radius);
  border: 0;
  display: inline-block;
  height: var(--size-2);
  overflow: hidden;
  position: relative;
  vertical-align: baseline;
  width: 100%;

  &::-webkit-progress-bar {
    border-radius: var(--border-radius);
    background: none;
  }

  &[value]::-webkit-progress-value {
    background-color: var(--_accent-color);

    @media (prefers-reduced-motion: no-preference) {
      transition: inline-size 0.2s var(--ease-out-4);
    }
  }

  &::-moz-progress-bar {
    background-color: var(--_accent-color);
  }
}

@media (prefers-reduced-motion: no-preference) {
  progress:indeterminate {
    background-color: var(--_bg-color);

    &::after {
      animation: indeterminate 2s linear infinite;
      background-color: var(--_accent-color);
      content: "";
      inset: 0 auto 0 0;
      position: absolute;
      will-change: inset-inline-start, inset-inline-end;
    }

    &[value]::-webkit-progress-value {
      background-color: transparent;
    }

    &::-moz-progress-bar {
      background-color: transparent;
    }
  }
}

[dir="rtl"] {
  @media (prefers-reduced-motion: no-preference) {
    :where(progress):indeterminate {
      animation-direction: reverse;
    }
  }
}

[dir="rtl"] {
  @media (prefers-reduced-motion: no-preference) {
    :where(progress):indeterminate::after {
      animation-direction: reverse;
    }
  }
}

@keyframes indeterminate {
  0% {
    left: -200%;
    right: 100%;
  }
  60% {
    left: 107%;
    right: -8%;
  }
  100% {
    left: 107%;
    right: -8%;
  }
}
```

```html [progress.html]
<progress></progress>
```

:::

</template>
</Example>

## See more

- [Progress](/components/feedback/progress)
- [Spinner](/components/feedback/spinner)
