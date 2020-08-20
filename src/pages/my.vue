<template>
  <div class="q-px-md row">
    <div class="col-xs-12 col-sm-6 col-md-6 ">
      <h5 class="q-my-md text-primary">Mi perfil</h5>
  		<q-card class="my-card" flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar size="xl">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ my ? my.name : null }}</q-item-label>
            <q-item-label caption>
              {{ my ? my.tel : null }}
            </q-item-label>
            <q-item-label>
              {{ my ? my.dir : null }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error404',
  computed: {
    my() {
      if (Object.keys(this.$store.state.users.data).length) {
        return this.$store.state.users.data[
          Object.keys(this.$store.state.users.data)[0]
        ]
      }
    }
  }
}
</script>
