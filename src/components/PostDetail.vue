<script lang="js" setup>
import { defineProps, defineEmits, ref } from 'vue'

// Recibimos valor de input message
let message = ref("")

//Recibimos props desde el elemento padre
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: false,
    default: 'Texto sin contenido'
  }
})
// Recibimos el emit desde el elemento padre
const emit = defineEmits(["sayHi"])
const handleClick = ()=>{
  //Se establece la comunicacion cntre el componente padre e hijo
  emit("sayHi",message.value),
  message.value = ""
}
</script>

<template>
  <div class="post">
    <h3>{{ title }}</h3>
    <p>{{ content }}</p>
    <input type="text" v-model="message" />
    <button @click="handleClick">Di hola!</button>
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