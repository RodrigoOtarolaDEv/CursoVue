<template>
<form>
  <input type="text" v-model="inputText"/>
  <input type="checkbox" v-model="agree"/> Acepto los terminos y condiciones
  <select v-model="countries">
    <option value="1">Spain</option>
    <option value="2">UK</option>
    <option value="3">France</option>
  </select>
</form>
  <h3>{{inputText}}</h3>
</template>

<script lang="ts" setup>
import {ref} from "vue";
let inputText = ref('')
// Para activar checkbox
let agree = ref(true)
// Seleccionar select
let countries = ref(1)

</script>

<style scoped>
</style>