<script setup lang="ts">
import { onMounted } from "vue";

const props = defineProps<{
  ids: string[];
}>();

onMounted(async () => {
  await import("baseline-status/baseline-status");
});
</script>

<template v-if="ids.length">
  <ClientOnly>
    <article class="card outlined not-rich-text">
      <baseline-status v-for="id in ids" :featureId="id"></baseline-status>
    </article>
  </ClientOnly>
</template>

<style>
article {
  margin-block: var(--size-3);
}
</style>
