<template>
  <h3>Contador: {{ counter }}</h3>
  <button @click="addCounter">Incrementar</button>
</template>

<script lang="ts" setup>
//ref se importa para los valores reactivos
import {Ref, ref} from "vue";

let counter: Ref = ref(0);
const addCounter = (): void => {
  // Para acceder a los valores referenciados se ocupa el value
  counter.value++;
}
</script>

<style scoped>
button {
  background: yellow;
}
</style>