<template>
  <div>
    <h3 class="text-center">Manager</h3>
    <nav class="navbar w-50 shadow-sm ml-auto mr-auto navbar-expand-lg navbar-light bg-light mb-5 p-3 mb-5 bg-white d-flex rounded flex-wrap flex-column justify-content-center">
      <div class="navbar-nav d-flex flex-wrap justify-content-center">
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
  </div>
</template>

<script>
export default {
  name: 'NavigationBar',
  layout: 'DefaultLayout',
  data () {
    return {
      navigations: [
        {
          name: 'Navigation',
          link: '/admin',
          position: 1
        },
        {
          name: 'Pre-orders',
          link: '/admin/preorders',
          position: 2
        },
        {
          name: 'T-shirts',
          link: '/admin/t_shirts',
          position: 3
        },
        {
          name: 'Design symbols',
          link: '/admin/design_symbols',
          position: 4
        }
      ]
    }
  }
}
</script>
