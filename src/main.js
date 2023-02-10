import Vue from 'vue'
import App from './App.vue'

//This plugin has been deprecated
import { firestorePlugin } from 'vuefire'

// This is actually what is supposed to replace it but I guess I'm making an error somewhere
// import {VueFireFirestoreOptionsAPI} from 'vuefire'
// +App.use('VueFire', { modules: [VueFireFirestoreOptionsAPI] })

Vue.use(firestorePlugin)

Vue.config.produtionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
