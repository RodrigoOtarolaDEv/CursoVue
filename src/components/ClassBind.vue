<template>
  <p v-bind:class="{
    // primero va la clase y despues la condicion
    'danger' : hasError
  }">El mensaje se ha enviado satisfactoriamente</p>
</template>

<script lang="ts" setup>

let hasError = false

</script>

<style>
.danger{
  color: red;
}
</style>