<template>
  <div class="item-box border shadow p-3 mb-5 bg-white rounded" @click="addAccessory(accessory)">
    <img class="shadow-sm p-3 mb-5 bg-white rounded" :src="accessory.image">
    <h5>{{ accessory.name }}</h5>
    <p>{{ accessory.type.name }}</p>
    <h4>{{ accessory.price }}$</h4>
  </div>
</template>

<script>
export default {
  name: 'ProductBox',
  layout: 'DefaultLayout',
  props: ['accessory'],
  methods: {
    addAccessory (item) {
      this.$store.commit('addAccessory', item)
      if (this.$store.state.product.symbol) {
        this.$router.push('/order')
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.item-box {
  display: flex;
  flex-direction: column;
  transition: all .2s ease-in-out;
  cursor: pointer;
  width: 200px;
}

.item-box:hover {
  transform: scale(1.05);
}

</style>
