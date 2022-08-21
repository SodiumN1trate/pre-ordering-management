<template>
  <div>
    <h3 class="text-center mb-5">Choose an accessory and put one of the design symbols on it!</h3>
    <div
      class="d-flex flex-wrap flex-row justify-content-center"
      style="gap: 20px;"
    >
      <div
        v-for="item in items"
        :key="item.id">
        <ProductBox
          v-if="item.type.id === 2"
          :accessory="item"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'DefaultLayout',
  auth: false,
  data () {
    return {
      items: []
    }
  },
  async fetch () {
    this.items = await this.$axios.get('/products').then(res => res)
    this.items = this.items.data.data
  }
}
</script>
