<template>
  <div class="q-px-xs row">
    <div class="col sm"></div>
    <div class="col md"></div>
    <div class="col lg"></div>
    <div class="col xl"></div>
    <div class="col q-pa-sm text-center" style="min-width: 300px">
      <h3 class="q-mt-md q-mb-xs text-primary">Registrarse</h3>
      <p>Solicitar usuario</p>
      <form @submit.prevent="signUp" class="q-gutter-sm">
        <q-input
          v-model="user.name"
          label="Nombre"
          type="text"
        />
        <q-input
          v-model="user.tel"
          label="Teléfono"
          type="text"
        />
        <q-input
          v-model="user.dir"
          label="Dirección"
          type="text"
        />
        <q-btn
          class="q-py-xs q-my-lg"
          label="Solicitar"
          color="primary"
          type="submit"
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
export default {
  name: 'signUp',

  data() {
    return {
      user: {
        name: '',
        tel: '',
        dir: '',
        img: '',
        active: false,
        admin: false,
        username: '',
        pass: '',
      }
    }
  },

  created() {
    if (this.$store.state.auth) {
      this.$router.push('/')
    }
  },

  methods: {
    signUp() {
      // condition
      if (this.isEmpty(this.user)) {
        return this.$q.dialog({
          title: 'Campos requeridos!',
          message: 'Complete todos los campos.'
        })
      }
      // set user
      this.$store.dispatch('users/set', this.user)
      // response
      return this.$q.dialog({
        title: '¡Listo!',
        message: 'Le notificamos cuando su usuario esté activo.' 
      }).onDismiss(() => {
        this.user = { name: '', tel: '', dir: '', img: '', active: false, admin: false, username: '', pass: ''}
        // redirect to home
        this.$router.push('/')
      })
    },

    isEmpty(object) {
      for(var i in object) {
        // campos requeridos
        if (object['name'] == '' || object['tel'] == '' || object['dir'] == '') {
          return true
        }
      }
      return false
    }
  },

}
</script>