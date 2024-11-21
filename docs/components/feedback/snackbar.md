<script setup>
	import { ref, onMounted } from "vue"
	import Example from "../../.vitepress/theme/app/components/Example.vue"
	import Baseline from "../../.vitepress/theme/app/components/Baseline.vue"

		const showSnackbar = ref(false)

</script>

# Snackbar

## Basics

<Example>
<template #example>
<div class="snackbar">
	<div class="content">
		<p>Content</p>
	</div>
	<div class="actions">
		<button class="button">Action</button>
		<button class="button">
			<span class="sr-only">Action</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M26.113 4.116a1.25 1.25 0 0 1 1.768 1.768L17.766 15.999l10.115 10.114a1.25 1.25 0 1 1-1.768 1.768L16 17.766L5.884 27.881a1.25 1.25 0 1 1-1.768-1.768L14.231 16L4.116 5.884a1.25 1.25 0 1 1 1.768-1.768l10.115 10.115z"/></svg>
		</button>
	</div>
</div>
</template>
</Example>

## Dialog

<Example>
<template #example>
<button class="button" @click="showSnackbar = true">Show snackbar</button>

<dialog v-if="showSnackbar" :open="showSnackbar" class="snackbar" role="dialog">
	<div class="content">
		<p>Content</p>
	</div>
	<div class="actions">
		<button class="button" @click="showSnackbar = false">Action</button>
		<button class="button" @click="showSnackbar = false">
			<span class="sr-only">Action</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M26.113 4.116a1.25 1.25 0 0 1 1.768 1.768L17.766 15.999l10.115 10.114a1.25 1.25 0 1 1-1.768 1.768L16 17.766L5.884 27.881a1.25 1.25 0 1 1-1.768-1.768L14.231 16L4.116 5.884a1.25 1.25 0 1 1 1.768-1.768l10.115 10.115z"/></svg>
		</button>
	</div>
</dialog>
</template>
</Example>
