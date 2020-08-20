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
        <h5 class="q-ma-md text-primary">Listado de Productos</h5>
		    <q-list class="q-ma-md" bordered separator>
		      <q-item
		        v-for="item in $store.state.items.data"
		        :key="item.id"
		        clickable
		        v-ripple >
		        <q-item-section>
		        	<q-item-label>{{item.name}}</q-item-label>
		        	<q-item-label caption>$ {{item.price}}</q-item-label>
		        </q-item-section>
		        <q-item-section avatar>
		          <q-btn
		            @click.stop="deleteItem(item)"
		            color="primary"
		            label="Borrar"/>
		        </q-item-section>
		      </q-item>
		    </q-list>
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

	mounted() {
		this.$store.dispatch('items/openDBChannel')
	},

  methods: {
    newItem() {
      // set item
      this.load = true
      this.$store.dispatch('items/set', this.item).then(() => {
      	this.load = false
        this.item = {
          name: '',
          desc: '',
          price: '',
          img: '',
          category: '',
          tag: '',
        }
      })
    },

    deleteItem(item) {
			this.$q.dialog({
        title: 'Confirmar',
        message: 'Borrar ' + item.name + '?' ,
        cancel: true,
        persistent: true
      }).onOk(() => {
    		this.$store.dispatch('items/delete', item.id)
      })
    },
  }
}
</script>
