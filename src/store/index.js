import Vue from 'vue'
import Vuex from 'vuex'
import VuexEasyFirestore from 'vuex-easy-firestore'
Vue.use(Vuex)

import { Firebase, initFirebase } from '../config/firebase.js'
import users from '../modules/users.js'

const easyFirestore = VuexEasyFirestore(
  [users],
  {logging: true, FirebaseDependency: Firebase}
)

const storeData = {
  plugins: [easyFirestore],

  state: {
    title: 'MULTIMARK',
    auth: null,
  },

  mutations: {
    auth (state, auth) {
      state.auth = auth
    },
    logout (state) {
      state.auth = null
      state.users.data = {}
    },
  },
}

const store = new Vuex.Store(storeData)

// initFirebase
initFirebase()
  .catch(error => {
    // take user to a page stating an error occurred
    // (might be a connection error, or the app is open in another tab)
  })

export default store