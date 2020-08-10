<template>
  <q-layout view="hHh LpR fFf">
    <!-- menu -->
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          round
          dense
          push
          flat
        />
        <q-toolbar-title>
          Multimark
        </q-toolbar-title>

        <q-btn-dropdown
          class="q-px-sm"
          label="ACCEDER"
          color="dark"
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
      </q-toolbar>

      <!-- admin -->
      <!-- <q-tabs align="left">
        <q-route-tab to="/page1" label="Distribuidora" />
        <q-route-tab to="/page2" icon="person_add" />
        <q-route-tab to="/page3" label="Page Three" />
      </q-tabs> -->
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

const linksData = [
  {
    title: 'DISTRIBUIDORA',
    caption: 'Nuestra empresa',
    icon: 'home',
    link: '/'
  },
  {
    title: 'REGISTRARSE',
    caption: 'Solicitar usuario',
    icon: 'person_add',
    link: '/signup'
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
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  },

  methods: {
    onItemClick (link) {
      this.$router.push(link)
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
}
</style>