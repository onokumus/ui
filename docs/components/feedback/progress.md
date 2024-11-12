<script setup>
	import { ref } from "vue"
	import { useIntervalFn } from '@vueuse/core'
	import Example from "../../.vitepress/theme/app/components/Example.vue"

	const progressValue = ref(10)

	useIntervalFn(() => {
		if (progressValue.value >= 100) {
			progressValue.value = 10
		} else {
			progressValue.value += 10
		}
	}, 3000)
</script>

# Progress

## Linear

### Indeterminate

<Example>
<template #example>
<progress></progress>
</template>

<template #code>

```html
<progress></progress>
```

</template>
</Example>

### Determinate

<Example>
<template #example>
<progress :value="progressValue" max="100"></progress>
</template>

<template #code>

```html-vue
<progress value="{{progressValue}}" max="100"></progress>
```

</template>
</Example>

## Circular

Check out the documentation for the [spinner](/components/feedback/spinner).
