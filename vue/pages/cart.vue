<template>
  <div id="content">
    <div v-for="product in products" :key="product.id" @click="open(product)" class="container shadow-sm">
      <transition>
        <div class="preview" v-show="product.show">
          <img :src="product.image" style="position: relative; z-index: 1; margin: 2%; user-select: none;" width="400px">
        </div>
      </transition>
      <div :class="{'detail': product.detailShow, 'detail-row': !product.detailShow}">
        <div>
          <h2>{{ product.name }}</h2>
          <p>{{ product.type.name }}</p>
        </div>
        <div v-show="product.show">
          <p>Select color</p>
          <div class="colors">
            <ColorRadioInput :checked="true" :color="product.color" />
          </div>
          <br>
          <p>Size</p>
          <div class="sizes">
            <SizeRadioInput :checked="true" :size="product.size" />
          </div>
        </div>
        <div>
          <h2>{{ product.price }} $</h2>
        </div>
      </div>
    </div>
    <h2 v-if="sum">Total: <span style="font-weight: bold;">{{ sum.toFixed(2) }}$</span></h2>
    <button v-if="products.length > 0" class="btn btn-primary pl-5 pr-5" @click="$router.push('/contact')">Order</button>
    <p v-else>Cart is empty!</p>
  </div>
</template>

<script>
export default {
  name: 'CartPage',
  layout: 'DefaultLayout',
  auth: false,
  data () {
    return {
      symbols: [],
      accessories: [],
      sizes: [],
      products: [],
      sum: null
    }
  },
  async fetch () {
    this.symbols = await this.$axios.get('/symbols').then(res => res)
    this.symbols = this.symbols.data.data
    this.accessories = await this.$axios.get('/products').then(res => res)
    this.accessories = this.accessories.data.data
    this.sizes = await this.$axios.get('/sizes').then(res => res)
    this.sizes = this.sizes.data.data
    this.$store.state.cart.forEach((product) => {
      console.log(product)
      const output = {}
      this.accessories.map((acc) => {
        if (acc.id === product.accessory) {
          output.name = acc.name
          output.price = acc.price
          this.sum += parseFloat(output.price)
          output.type = acc.type
        }
        return acc
      })
      this.sizes.filter((acc) => {
        if (acc.id === product.size) {
          output.size = acc
        }
        return acc
      })
      output.image = product.image
      output.color = product.color
      output.symbolPos = product.symbol_pos
      output.show = false
      output.detailShow = false

      this.products.push(output)
    })
  },
  methods: {
    open (product) {
      product.show = !product.show
      product.detailShow = !product.detailShow
    },
    colorOn (colorId) {
      this.form.color = this.colors.filter(function (color) {
        return parseInt(colorId) === color.id
      })[0]
    },
    submit () {
      this.form.symbol = this.symbol.id
      this.form.accessory = this.accessory.id
      if (this.form.color === null) {
        this.colorError = true
      } else if (this.form.size === null) {
        this.sizeError = true
      } else {
        this.form.size = parseInt(this.form.size)
        this.$store.commit('addCart', this.form)
        alert('Added to cart!')
        this.$router.push('/')
      }
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 80%;
  border: 1px solid #cecece;
  border-radius: 20px;
  cursor: pointer;
}

.preview {
  position: relative;
  width: 400px;
}

#symbol {
  position: absolute;
  top: 30%;
  transform: translateY(-50%);
  left: 40%;
  display: block;
  z-index: 2;
}

h2 {
  color: #575757;
}

#content {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
}

.detail {
  display: flex;
  gap: 10px;
  justify-content: space-between;
  flex-direction: column;
  margin: 2%;
}

.detail-row {
  display: flex;
  gap: 10px;
  width: 100%;
  justify-content: space-between;
  margin: 2%;
}

.colors, .sizes {
  display: flex;
  gap: 10px;
}

.error {
  color: red;
}

.v-enter-active {
  transition: opacity .5s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}

</style>
