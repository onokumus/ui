<script setup lang="ts">
import { useData } from "vitepress";
import type { Post } from "../../composables/custom/posts.data";

const props = defineProps<{
  post: Post;
}>();
const { site } = useData();
</script>

<template>
  <a :href="`${site.base}blog${post.href}`">
    <article class="card outlined">
      <hgroup>
        <p>{{ post.date.since }}</p>
        <h2 class="h5">{{ post.title }}</h2>
      </hgroup>

      <div class="content">
        <p v-html="post.excerpt" />
      </div>

      <footer class="actions">
        <div class="button small">Read more</div>
      </footer>
    </article>
  </a>
</template>

<style scoped>
a {
  color: var(--text-1);
  font-weight: var(--font-weight-4);
  text-decoration: none;

  .link {
    text-decoration: none;
  }

  &:hover {
    border-radius: var(--surface-border-radius, 0.25rem);
    outline: 1px solid var(--primary);
    .link {
      text-decoration: underline;
    }
  }
}
</style>
