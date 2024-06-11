<template>
<div class="post-card">
  <h3>Titulo</h3>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque, perspiciatis ut. Aliquid asperiores blanditiis dolor, dolore ea eius, esse, id iure placeat quasi quisquam quos soluta tempore veritatis voluptas voluptate!</p>
  <PostButton />
</div>
</template>

<script lang="ts" setup>
import PostButton from "@/components/PostButton.vue";
</script>

<style scoped>
.post-card{
  border-radius: 15px;
  padding: 10px;
  margin: 5px;
  border: 1px solid #ccc;
}
</style>