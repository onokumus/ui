<script setup lang="ts">
import { useData } from "vitepress";
import usePosts from "../composables/posts";
import Post from "./BlogPost.vue";

const { allPosts: posts } = usePosts();

const { theme } = useData();
</script>

<template>
  <h2>
    {{ theme.blog?.title }}
  </h2>
  <p>
    {{ theme.blog?.description }}
  </p>

  <div>
    <Post v-for="post of posts" :post="post" />
  </div>
</template>

<style scoped>
div {
  display: grid;
  gap: 1rem;
}
</style>
