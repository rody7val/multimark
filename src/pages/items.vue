<template>
  <div class="q-px-md">
    <div class="row">
      <div class="col-xs-12 col-sm-5">
        <h5 class="q-my-md text-primary">Nuevo Producto</h5>
        <form @submit.prevent="newItem" class="q-gutter-sm">
          <q-input
            v-model="item.name"
            type="text"
            placeholder="Nombre"
            required
          />
          <q-input
            v-model="item.desc"
            type="text"
            placeholder="Descripción"
            required
          />
          <q-input
            v-model="item.price"
            type="number"
            placeholder="Precio"
            required
          />
          <q-btn
            v-if="!load"
            type="submit"
            class="q-py-xs q-my-lg"
            color="primary"
            label="Guardar"
          />
          <q-spinner
            v-else
            class="q-my-lg"
            color="primary"
            size="3em"
          />
        </form>
      </div>
      <div class="col-xs-12 col-sm-7">
        <h5 class="q-my-md text-primary">Listado de Productos</h5>
        <small>Vacio...</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'productos',

  data() {
  	return {
  		load: false,
  		item: {
  			name: '',
  			desc: '',
  			price: '',
  			img: '',
  			category: '',
  			tag: '',
  		}
  	}
  },

  methods: {
  	newItem() {
  		alert('Listo para guardar!')
  	},
  }
}
</script>
