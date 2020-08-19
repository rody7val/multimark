<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'App',

  mounted() {
    firebase.auth().onAuthStateChanged(user => {
      if (user && user.isAnonymous) {
        // if no user
        if (!Object.keys(this.$store.state.users.data).length) {
          const where = [['lastAuth', '==', user.uid]]
          this.$store.dispatch('users/fetchAndAdd', {where})
        }

        this.$store.commit('auth', user.uid)
        // await
        if (this.myId()) {
          let id = this.myId()
          this.$store.dispatch('users/patch', {
            id,
            lastAuth: this.$store.state.auth
          })
        }
      }
    })
  },

  methods: {
    myId() {
      if (Object.keys(this.$store.state.users.data).length) {
        return this.$store.state.users.data[
          Object.keys(this.$store.state.users.data)[0]
        ].id
      }
    },
  },
}
</script>

<style>
html,
body {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    sans-serif;
}
</style>
