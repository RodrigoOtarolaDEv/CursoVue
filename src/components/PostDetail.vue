<script lang="js">
import {defineComponent} from "vue";
//Recibimos props desde el elemento padre
export default defineComponent({
  name: 'PostDetail',
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: false,
      default: 'Texto sin contenido'
    }
  }
})
</script>

<template>
  <div class="post">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
  </div>
</template>

<style scoped>
.post {
  width: 300px;
  height: 200px;
  border-radius: 10px;
  background-color: antiquewhite;
  margin: 10px;
  padding: 10px;
}

</style>