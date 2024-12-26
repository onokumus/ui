<script setup lang="ts">
import { defineClientComponent } from 'vitepress'
const props = defineProps<{
  ids: string[]
}>()

const BaselineStatus = defineClientComponent(() => {
  return import('baseline-status/baseline-status')
})
</script>

<template v-if="ids.length">
  <article class="card outlined not-rich-text">
    <baseline-status v-for="id in ids" :featureId="id"></baseline-status>
  </article>
</template>

<style scoped>
article {
  margin-block: var(--size-3);
}

baseline-status {
  border-radius: 0;
  padding: var(--size-3) var(--size-3);

  &:nth-child(even) {
    background-color: var(--surface-tonal);
  }
}
</style>
