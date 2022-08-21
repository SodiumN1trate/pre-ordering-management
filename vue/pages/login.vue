<template>
  <div class="content">
    <form @submit.prevent="login">
      <div v-if="error" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
      <div v-if="success" class="alert alert-success" role="alert">
        {{ success }}
      </div>
      <div class="form-group">
        <label for="username">Email address</label>
        <input v-model="form.username" type="text" class="form-control" id="username" placeholder="Enter username">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="form.password"  type="password" class="form-control" id="password" placeholder="Password">
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
        username: null,
        password: null
      },
      error: null,
      success: null
    }
  },
  methods: {
    async login () {
      try {
        const data = await this.$auth.loginWith('local', { data: this.form })
        this.error = null
        this.$auth.strategy.token.set(data.data.access_token)
        this.$auth.strategy.token.sync()
        this.$auth.setUser(data.data.user)
        this.success = data.data.message.message
        this.$router.push('/admin')
      } catch (e) {
        if (e.response.data.message.message) {
          this.error = e.response.data.message.message
        } else {
          this.error = e.response.data.message
        }
      }
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
