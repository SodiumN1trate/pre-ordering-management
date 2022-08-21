<template>
  <div>
    <h3 class="text-center mb-5">Select</h3>
    <div
      class="d-flex flex-wrap flex-row justify-content-center"
      style="gap: 20px;"
    >
      <div class="item-box border shadow p-3 mb-5 bg-white rounded justify-content-center" @click="$router.push('/t_shirts')">
        <h5>T-shirts</h5>
      </div>
      <div class="item-box border shadow p-3 mb-5 bg-white rounded justify-content-center" @click="$router.push('/accessories')">
        <h5>Other accessories</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectPage',
  layout: 'DefaultLayout',
  auth: false
}
</script>

<style scoped>
.item-box {
  transition: all .2s ease-in-out;
  cursor: pointer;
  width: 200px;
  text-align: center;
}

.item-box:hover {
  transform: scale(1.05);
}
</style>
