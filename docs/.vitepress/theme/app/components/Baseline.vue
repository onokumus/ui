<script setup lang="ts">
import { onMounted } from "vue";

const props = defineProps<{
  id: string;
}>();

onMounted(async () => {
  await import("baseline-status/baseline-status");
});
</script>

<template>
  <ClientOnly>
    <article class="card outlined not-rich-text">
      <baseline-status :featureId="id"></baseline-status>
    </article>
  </ClientOnly>
</template>
