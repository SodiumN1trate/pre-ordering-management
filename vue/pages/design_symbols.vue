<template>
  <div>
    <h3 class="text-center mb-5">Choose a design symbol and put it on your favorite accessory or t-shirt!</h3>
    <div class="content">
      <DesignSymbolBox v-for="item in items" :key="item" :item="item"/>
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
    this.items = await this.$axios.get('/symbols').then(res => res)
    this.items = this.items.data.data
  }
}
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}
</style>
