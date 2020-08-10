<template>
  <q-item
    clickable
    tag="a"
    exact
    :to="link"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon style="font-size: 2em" :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label class="sidebar-item">{{ title }}</q-item-label>
      <q-item-label caption class="sidebar-item-label">
        <b>{{ caption }}</b>
      </q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.sidebar-item{
  font-size: 18px
}
.sidebar-item-label{
  font-size: 16px;
  color: #999
}
</style>