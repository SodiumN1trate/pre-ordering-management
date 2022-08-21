<template>
  <div class="content">
    <SucessMessage :success="success" />
    <ErrorMessage :errors="errors" />
    <form @submit.prevent="submit">
      <div class="form-group">
        <label for="firstname">Firstname</label>
        <input v-model="form.firstname" type="text" class="form-control" id="firstname" placeholder="Enter firstname">
      </div>
      <div class="form-group">
        <label for="lastname">Lastname</label>
        <input v-model="form.lastname" type="text" class="form-control" id="lastname" placeholder="Enter lastname">
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input v-model="form.email" type="text" class="form-control" id="email" placeholder="Enter email">
      </div>
      <div class="form-group">
        <label for="remark">Remark</label>
        <textarea v-model="form.remark" type="text" class="form-control" id="remark"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'DefaultLayout',
  auth: false,
  data () {
    return {
      form: {
        firstname: null,
        lastname: null,
        email: null,
        remark: null,
        products: []
      },
      errors: null,
      success: null
    }
  },
  methods: {
    submit () {
      this.errors = null
      this.success = null
      const cartProducts = this.$store.state.cart.map((param) => {
        const output = {}
        output.product_id = param.accessory
        output.color_id = param.color?.id ? param.color.id : 1
        output.size_id = param.size
        output.symbol_id = param.symbol
        output.image = param.image
        return output
      })
      this.form.products = cartProducts
      this.$axios.post('/preorders', this.form).then((res) => {
        this.success = res.data.message
        this.$store.commit('clear')
      }).catch((error) => {
        this.errors = error.response.data.errors
      })
    }
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
