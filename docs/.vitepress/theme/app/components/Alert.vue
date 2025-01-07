<script setup lang="ts">
defineProps<{
  severity?: "error" | "ok" | "warning"
  title?: string
  variant?: "outlined"
}>()
</script>

<template>
  <article role="alert" class="alert" :class="[severity, variant]">
    <slot v-if="$slots.icon" name="icon"></slot>

    <div v-if="title || $slots.title || $slots.default" class="content">
      <h3 v-if="title">{{ title }}</h3>
      <h3 v-else-if="$slots.title">
        <slot name="title"></slot>
      </h3>

      <slot></slot>
    </div>
  </article>
</template>
