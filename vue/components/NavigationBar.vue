<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5 shadow-sm p-3 mb-5 bg-white d-flex rounded flex-wrap flex-columnx">
    <a class="navbar-brand">Shop</a>
    <div class="navbar-nav d-flex flex-wrap">
      <NuxtLink
        v-for="navigation in navigations"
        :key="navigation.id"
        :style="{order: navigation.position}"
        class="nav-item nav-link"
        :class="{active: ($route.fullPath === navigation.link)}"
        :to="navigation.link"
      >
        {{ navigation.name }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavigationBar',
  layout: 'DefaultLayout',
  data () {
    return {
      navigations: []
    }
  },
  async fetch () {
    this.navigations = await this.$axios.get('/navigations').then(res => res)
    this.navigations = this.navigations.data.data
  }
}
</script>
