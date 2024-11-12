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
        <p class="overline">{{ post.date.since }}</p>
        <h2 class="h4 link">{{ post.title }}</h2>
      </hgroup>

      <div class="content">
        <p v-html="post.excerpt" />
      </div>

      <div class="actions">
        <div class="button small">Read more</div>
      </div>
    </article>
  </a>
</template>

<style scoped>
a {
  color: var(--text-1);
  font-weight: var(--font-weight-4);
  text-decoration: none;

  .link {
    text-decoration: underline;
  }
}
</style>
