<template>
    <div>
      <q-carousel
        style="height: 300px;"
        v-model="slide"
        :autoplay="autoplay"
        controlType="regular"
        control-color="blue"
        class="carousel"
        animated
        navigation
        infinite
        arrows
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide :name="1" img-src="~assets/image-1.jpeg" />
        <q-carousel-slide :name="2" img-src="~assets/image-2.jpeg" />
        <q-carousel-slide :name="3" img-src="~assets/image-3.jpeg" />
      </q-carousel>
    </div>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      slide: 1,
      autoplay: true
    }
  }
}
</script>

<style>
</style>