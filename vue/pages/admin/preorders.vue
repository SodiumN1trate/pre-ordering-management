<template>
  <div>
    <div v-for="preorder in preorders" :key="preorder.id" class="preorder" @click="preorder.detailShow = !preorder.detailShow">
      <div class="detail-row">
        <div>
          <div class="d-flex align-items-center">
            <h2>{{ preorder.firstname }} {{ preorder.lastname }}</h2>
            <span v-if="preorder.status === 1" class="badge badge-success ml-2">Open</span>
            <span v-if="preorder.status === 2" class="badge badge-warning ml-2">Prepared</span>
            <span v-if="preorder.status === 3" class="badge badge-secondary ml-2">Closed/Delivered</span>
          </div>
          <p>{{ preorder.email }}</p>
        </div>
        <h3>#{{ preorder.unique_code }}</h3>
      </div>
      <div v-for="product in preorder.products" :key="product.id" v-show="preorder.detailShow">
        <hr>
        <div class="d-flex">
          <div id="preview">
            <img
              ref="product"
              :src="product.pivot.image"
              style="position: relative; z-index: 1; margin: 2%; user-select: none;"
              width="400px"
            >
          </div>
          <div class="preview-detail">
            <div>
              <h2>{{ product.name }}</h2>
              <p>{{ product.type_id === 1 ? 'T-shirt' : 'Accessory' }}</p>
            </div>
            <div>
              <p>Color</p>
              <div class="colors">
                <ColorRadioInput :checked="true" :color="JSON.parse(product.pivot.color)" />
              </div>
              <br>
              <p>Size</p>
              <div class="sizes">
                <SizeRadioInput :checked="true" :size="JSON.parse(product.pivot.size)" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AdminPreordersPage',
  layout: 'AdminLayout',
  auth: true,
  data () {
    return {
      preorders: [],
      tests: null
    }
  },
  async fetch () {
    const preorders = await this.$axios.get('/preorders').then(res => res)
    preorders.data.data.forEach((preorder) => {
      preorder.detailShow = false
      this.preorders.push(preorder)
    })
  }
}
</script>

<style scoped>
.preorder {
  margin: 2% auto;
  gap: 10px;
  width: 80%;
  justify-content: space-between;
  border: 1px solid #cecece;
  border-radius: 20px;
  cursor: pointer;
  padding: 2%;
}

.detail-row {
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
}

.detail {
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
}

.colors, .sizes {
  display: flex;
  gap: 10px;
}

.preview-detail {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  flex-direction: column;
  margin: 2%;
}

</style>
