<template>
  <div>
    <div>
      <label for="" v-custom-font.xl.blue>Subtotal</label>
      <input type="number" name="" id="" v-model="subtotal">
    </div>
    <div>
      <p v-if="calculoIva>0" for="" v-custom-font.green>Valor impuesto: {{calculoIva}} ( {{ivaPorcentaje}})</p>
      <p v-if="total>0" v-custom-font.lg>Valor total: {{total}}</p>
    </div>
  </div>
</template>

<script lang="js" setup>
//Importaciones
import {computed, ref} from "vue";

//Constantes
const iva = 19;
const ivaPorcentaje = '19%'
const subtotal = ref(0);
const calculoIva = computed(() =>
    (subtotal.value * iva) / 100
)
const total = computed(()=>
    calculoIva.value+subtotal.value
)


</script>

<style></style>