import {createApp} from 'vue'
import App from './App.vue'

// createApp(App).mount('#app')

const app = createApp(App)

// Directiva basica: 1er argunmento: nombre, 2do argumento: Arreglo
app.directive('font-size', {
    // Lo ejecutamos antes de que el elemento se monte
    // el: Elemento que se monta el componente (div,h3mp etx, binding: Datos que recibe de la directiva para trabajar con esos datos
    beforeMount: (el, binding) => {
        el.style.fontSize = "70px"

    }
})

// Directiva con value: el binding.value se le puede asignar desde el component
app.directive('custom-size', {
    beforeMount: (el, binding) => {
        // el.style.fontSize = binding.value + "px"
        let size = 18
        // arg, en componente se ocupa los : ejemplo v-bind:style
        switch (binding.arg) {
            case 'sm':
                size = 10
                break
            case 'md':
                size = 18
                break
            case 'lg':
                size = 25
                break
            case 'xl':
                size = 40
                break
            case 'xxl':
                size = 72
                break
        }
        el.style.fontSize = size + 'px'
    }
})


app.mount('#app')