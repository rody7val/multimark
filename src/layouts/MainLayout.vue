<template>
  <q-layout view="hHh LpR fFf">
    <!-- menu -->
    <q-header elevated class="bg-dark text-white" height-hint="98">
      <q-toolbar>
        <q-btn
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          color="primary"
          round
          dense
          push
        />
        <q-toolbar-title>
          <b>{{$store.state.title}}</b>
        </q-toolbar-title>

        <!-- acceder -->
        <q-btn-dropdown
          icon="account_circle"
          v-if="!$store.state.auth"
          class="q-px-sm"
          label="ACCEDER"
          color="primary"
          dense
        >
          <q-list>
            <q-item clickable v-close-popup @click="onItemClick('/signup')">
              <q-item-section avatar>
                <q-avatar icon="person_add" color="primary" text-color="white" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Registrarse</q-item-label>
                <q-item-label caption>Solicitar usuario</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick('/signin')">
              <q-item-section avatar>
                <q-avatar icon="how_to_reg" color="primary" text-color="white" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Entrar</q-item-label>
                <q-item-label caption>Acceder con mi clave</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>

        <!-- auth panel -->
        <q-btn-dropdown
          v-else
          class="q-px-sm"
          color="primary"
          dense
        >
          <template v-slot:label>
            <q-avatar size="md">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </template>

          <q-list>
            <q-item clickable v-close-popup @click="onItemClick('/dash')">
              <q-item-section avatar>
                <q-avatar icon="dashboard" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Dashboard</q-item-label>
                <q-item-label caption>Panel de control</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="onItemClick('/my')">
              <q-item-section avatar>
                <q-avatar icon="person" color="primary" text-color="white" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Usuario</q-item-label>
                <q-item-label caption>Mi Perfil</q-item-label>
              </q-item-section>
            </q-item>

            <q-item clickable v-close-popup @click="logout">
              <q-item-section avatar>
                <q-avatar icon="close" color="primary" text-color="white" />
              </q-item-section>

              <q-item-section>
                <q-item-label>Salir</q-item-label>
                <q-item-label caption>Cerrar sesión</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>

      <!-- admin panel -->
      <q-tabs
        v-if="$store.state.auth"
        v-model="tabs"
        align="left">
        <q-route-tab to="/items" label="Productos" name="productos" />
        <q-route-tab to="/orders" label="Pedidos" name="pedidos" />
        <q-route-tab to="/users" label="Usuarios" name="usuarios" />
      </q-tabs>
    </q-header>

    <!-- sidebar -->
    <q-drawer
      v-model="leftDrawerOpen"
      side="left"
      behavior="mobile"
      content-class="bg-dark text-white"
      overlay
      elevated
    >
      <q-btn
        @click="leftDrawerOpen = !leftDrawerOpen"
        class="close"
        color="white"
        icon="close"
        flat
        round
      />
      <q-list>
        <q-item>
          <img
          class="logo"
          src="~assets/logo.png">
        </q-item>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <!-- views -->
    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>  
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import firebase from 'firebase'

const linksData = [
  {
    title: 'DISTRIBUIDORA',
    caption: 'Nuestra empresa',
    icon: 'home',
    link: '/'
  },
  {
    title: 'CONTACTO',
    caption: 'Contáctanos',
    icon: 'room',
    link: '/contact'
  },
];

export default {
  name: 'MainLayout',
  
  components: { EssentialLink },
  
  data () {
    return {
      tabs: "productos",
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },

  methods: {
    onItemClick (link) {
      this.$router.push(link)
    },
    logout() {
      firebase.auth().signOut().then(() => {
        // logout
        this.$store.commit('logout')
        return window.location.href = '/'
        // return this.$router.push('/')
      }).catch(error => {
        alert(error)
      });

    }
  },
}
</script>

<style>
.close{
  float: right;
}
.logo{
  -webkit-box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.15) !important;
  width: 100%;
}
</style>