import Vue from 'vue'
import App from './App.vue'
import firebase from 'firebase'

//jQuery
import 'expose-loader?$!expose-loader?jQuery!jquery'

//부트스트랩
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import {router} from "./routes/index.js"

import axios from 'axios'
import store from './vuex/store'

Vue.prototype.$http = axios;

Vue.config.productionTip = false

let firebaseConfig = {
    apiKey: "AIzaSyAYFMZo9aNtC2T6TezjTuRbaFRaNza-IFk",
    authDomain: "vue-express-1d60b.firebaseapp.com",
    databaseURL: "https://vue-express-1d60b.firebaseio.com",
    projectId: "vue-express-1d60b",
    storageBucket: "",
    messagingSenderId: "990367012445",
    appId: "1:990367012445:web:51d1cc0a4821c9a9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
