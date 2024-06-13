import { createApp } from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

const app = createApp(App)

// 1er argunmento: nombre, 2do argumento: Arreglo
app.directive('font-size',{
    // Lo ejecutamos antes de que el elemento se monte
    // el: Elemento que se monta el componente (div,h3mp etx, binding: Datos que recibe de la directiva para trabajar con esos datos
    beforeMount: (el,binding)=>{
        el.style.fontSize="70px"

    }
})

// el binding.value se le puede asignar desde el component
app.directive('custom-size',{
    beforeMount: (el,binding)=>{
        el.style.fontSize = binding.value + "px"
    }
})

app.mount('#app')