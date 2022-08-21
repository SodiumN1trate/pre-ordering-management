<template>
  <div class="container">
    <div>
      <div class="navigation-buttons d-flex flex-row flex-wrap justify-content-center">
        <div
          v-for="navigation in navigations"
          :key="navigation.position"
          class="card"
          :style="{order: navigation.position}"
          @drop="drop($event, navigation.position)"
          @dragover="$event.preventDefault()"
        >
          <div
            :id="navigation.position"
            :ref="navigation.position"
            draggable="true"
            class="card-body"
            @dragleave="dragEnd"
            @dragenter="dragEnter"
            @dragstart="drag"
            @dragend="dragEnd"
          >
            {{ navigation.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'AdminLayout',
  auth: true,
  data () {
    return {
      navigations: [],
      list: null
    }
  },
  async fetch () {
    this.navigations = await this.$axios.get('/navigations').then(res => res)
    this.navigations = this.navigations.data.data
  },
  methods: {
    async drop (event, position) {
      const currentNavigation = this.navigations.filter((navigation) => { return navigation.position === position })[0]
      const draggableNavigation = this.navigations.filter((navigation) => { return navigation.position === parseInt(event.dataTransfer.getData('position')) })[0]
      currentNavigation.position = draggableNavigation.position
      draggableNavigation.position = position
      this.navigations.map((navigation, key) => {
        if (navigation.id === currentNavigation.id) {
          this.$set(this.navigations, key, currentNavigation)
        } else if (navigation.id === draggableNavigation.id) {
          this.$set(this.navigations, key, draggableNavigation)
        }
        return navigation
      })
      await this.$axios.put('/navigations/' + currentNavigation.id, currentNavigation).then(res => res)
      await this.$axios.put('/navigations/' + draggableNavigation.id, draggableNavigation).then(res => res)
    },
    drag (event) {
      event.target.style.opacity = '1'
      event.target.style.border = '1px solid #666'
      event.target.style.borderRadius = '5px'
      event.dataTransfer.setData('position', event.target.id)
    },
    dragEnter (event) {
      event.target.style.border = '1px solid #666'
      event.target.style.opacity = '0.4'
    },
    dragEnd () {
      this.navigations.map((navigation) => {
        this.$refs[navigation.position][0].style.opacity = '1'
        this.$refs[navigation.position][0].style.border = 'none'
        return navigation
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

.navigation-buttons {
  flex-direction: column-reverse;
  gap: 10px;
}

.on-drag {
  opacity: 1;
  background-color: green;
}
</style>
