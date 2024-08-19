import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import FriendsView from './views/FriendsView.vue'
import CarsView from './views/CarsView.vue'
import ConsolesView from './views/ConsolesView.vue'

createApp(App).use(store).use(router).mount('#app')

