<template>
	<div class="q-px-xs row">
		<div class="col sm"></div>
		<div class="col md"></div>
		<div class="col lg"></div>
		<div class="col xl"></div>
		<div class="col q-pa-sm text-center" style="min-width: 300px">
		  <h3 class="q-mt-md q-mb-xs text-primary">Entrar</h3>
      <p>Acceder con mi clave</p>
	    <form @submit.prevent="signIn" class="q-gutter-sm">
		    <q-input
		      v-model="user.username"
          type="text"
		      label="Usuario"
		    />
		    <q-input
		      v-model="user.pass"
          type="password"
		      label="Contraseña"
		    />
		    <q-btn
          v-if="!load"
          type="submit"
		      class="q-py-xs q-my-md left"
		      color="primary"
		      label="Entrar"
		    />
        <q-spinner
          v-else
          color="primary"
          size="3em"
        />
	    </form>
		</div>
		<div class="col sm"></div>
		<div class="col md"></div>
		<div class="col lg"></div>
		<div class="col xl"></div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'signIn',

  data() {
  	return {
      load: false,
  		user: {
  			username: '',
  			pass: ''
  		}
  	}
  },

  mounted() {
    if (this.$store.state.auth) {
      this.$router.push('/')
    }
  },

  methods: {
    signIn() {
      let self = this
      this.load = true
      // input condition
      if (this.isEmpty(this.user)) {
        return this.$q.dialog({
          title: 'Campos requeridos!',
          message: 'Complete todos los campos.'
        }).onDismiss(() => { this.load = false })
      }
      // search user
      const where = [
        ['active', '==', true],
        ['username', '==', this.user.username],
        ['pass', '==', this.user.pass],
      ]
      this.$store.dispatch('users/fetchAndAdd', {where}).then((snap) => {
        // incorrecto
        if (snap.done) {
          console.log('0 docs')
          return this.$q.dialog({
            title: 'Usuario o contraña incorrecta. ',
            message: 'Verifique los campos y que su usurio esté activo.'
          }).onDismiss(() => { this.load = false })
        }
        // signin
        firebase.auth().signInAnonymously().then(() => {
          this.$router.push('/')
        }).catch(error => {
          // handle errors
          this.$q.dialog({
            title: error.code,
            message: error.message
          }).onDismiss(() => { this.load = false })
        })
      }).catch(console.error)
    },

    isEmpty(object) {
      for(var i in object) {
        if (object[i] == '') {
          return true
        }
      }
      return false
    },
  },
}
</script>