<template>
  <div>
    <input type="text" v-model="message"/>
    <h3>{{ message }}</h3>
    <h3>Valor computado: {{ reverse }}</h3>
  </div>
</template>

<script lang="js" setup>

import {computed, ref} from "vue";

const message = ref('');

// Definimos valores computados
const reverse = computed(() =>
  message.value.split('').reverse().join(''))

</script>

<style></style>