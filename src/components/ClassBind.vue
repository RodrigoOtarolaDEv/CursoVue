<template>
  <p v-bind:style="{
    backgroundColor : 'gray',
    color : c
  }">El mensaje se ha enviado satisfactoriamente</p>
  <button @click="cambiarColor">Cambiar color</button>
</template>

<script lang="ts" setup>
import {ref} from "vue";
let c = ref('yellow')
const cambiarColor= () =>{
  c.value = 'red'
}

</script>

<style>

</style>