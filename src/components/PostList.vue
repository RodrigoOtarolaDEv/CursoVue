<script setup lang="ts">
import PostDetail from "@/components/PostDetail.vue";

let info = [{
  title: 'Post 1',
  content: 'Contenido post 1'
}, {
  title: 'Post 2',
  content: 'Contenido post 2'
}, {
  title: 'Post 3',
  content: 'Contenido post 3'
}, {
  title: 'Post 4',
  content: 'Conetenido post 4'
}, {
  title: 'Post 5',
  content: 'Contenido post 4'
}]


</script>

<template>
  <div class="container">
    <PostDetail v-for="elm in info" :key="elm.title" :title="elm.title" :content="elm.content"/>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
}
</style>