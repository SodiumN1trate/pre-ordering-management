<template>
  <div class="item-box border shadow p-3 mb-5 bg-white rounded" @click="addSymbol(item)">
    <img class="shadow-sm p-3 mb-5 bg-white rounded" :src="item.image">
  </div>
</template>

<script>
export default {
  name: 'DesignSymbolBox',
  layout: 'DefaultLayout',
  props: ['item'],
  methods: {
    addSymbol (item) {
      console.log(item)
      this.$store.commit('addSymbol', item)
      this.$router.push('/select')
    }
  }
}
</script>

<style scoped>
.item-box {
  display: flex;
  flex-direction: column;
  transition: all .2s ease-in-out;
  width: 20%;
  cursor: pointer;
}

.item-box:hover {
  transform: scale(1.05);
}

</style>
