<script setup lang="ts">
defineProps<{
  direction?: "row" | "stack";
  exampleClass?: string;
  richText?: "rich-text" | "not-rich-text";
  wrapperClass?: string;
}>();
</script>

<template>
  <article
    class="example-wrapper"
    :class="[wrapperClass, richText ?? 'not-rich-text']"
  >
    <div
      v-if="$slots.example"
      class="example"
      :class="[direction, exampleClass]"
    >
      <slot name="example" />
    </div>

    <slot v-if="$slots.code" name="code" />
  </article>
</template>

<style>
.example-wrapper {
  border-color: var(--border-color);
  border-radius: var(--surface-border-radius);
  border-style: solid;
  border-bottom-width: 0;
  box-shadow: var(--shadow-1);
  margin-inline: -1rem;
  margin-block: var(--size-3);
  overflow: hidden;

  &:has(.example) {
    border-width: 1px;
  }

  @media (width > 640px) {
    margin-inline: 0;
  }

  .example {
    margin-block: var(--size-3);
    padding-block: 0;
  }

  .vp-code-group .tabs {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }

  .example + [class^="language"] {
    border-block-start: 1px solid var(--border-color);
    border-top-left-radius: 0 !important;
    border-top-right-radius: 0 !important;
  }

  [class^="language"] {
    margin-block: 0 !important;

    @media (width <= 640px) {
      margin-inline: 0 !important;
    }
  }
}

.example {
  margin-block: var(--size-7) var(--size-3);
  padding: var(--size-3);

  & + [class^="language"] {
    margin-block-start: 0 !important;
  }
}

.row {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: var(--size-3);
  justify-content: center;
}

.stack {
  display: grid;
  gap: var(--size-3);
}
</style>
