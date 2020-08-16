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
        this.$store.commit('auth', user.uid)
      }
    })
  }
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
