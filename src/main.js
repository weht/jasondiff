import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import router from './router'

const firebaseConfig = {
  apiKey: 'AIzaSyAXLGRAZOi43VstC5JEMOwAd3BDo-28GP0',
  authDomain: 'jsoncomapre.firebaseapp.com',
  projectId: 'jsoncomapre',
  storageBucket: 'jsoncomapre.appspot.com',
  messagingSenderId: '851803856621',
  appId: '1:851803856621:web:9e760ced005546fd52f6e4',
}

firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()

createApp(App).use(router).mount('#app')
