//import './src/assets/main.css'
//import { createApp } from 'vue'

// import App from './App.vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

// const app = Vue.createApp({
//   data() {
//     return {
//       counter: 0
//       //   name: ''
//     }
//   }
//   methods: {
//     setName(event, lastName) {
//       this.name = event.target.value + ' ' + lastName
//     },
//     add(num) {
//       this.counter = this.counter + num
//     },
//     reduce(num) {
//       this.counter = this.counter - num
//       // this.counter--;
//     }
//   }
// })

// app.mount('#events')
