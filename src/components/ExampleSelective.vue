<template>
<h1 v-show="age<18">Eres menor de edad </h1>
<h1 v-show="age>18">Eres mayor de edad </h1>
</template>

<script lang="ts" setup>
let age = 10
</script>

<style scoped></style>