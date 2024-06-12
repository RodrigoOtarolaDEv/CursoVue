<template>
  <div>
    <input type="text" v-model="message" />
    <h3>{{ message }}</h3>
    <h3>Valor computado: {{ reverse }}</h3>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ComputedExample',
  data(){
    return{
      message : ''
    }
  },
  // Definimos valores computados
  computed:{
    reverse(){
      return this.message.split('').reverse().join('')
    }
  }
})
</script>

<style></style>