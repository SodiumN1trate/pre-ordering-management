<template>
  <div class="wrapper">
    <NavigationBar />
    <AdminNavigationBar />
    <transition>
      <Nuxt />
    </transition>
  </div>
</template>
<style>
.v-leave-active {
  transition: opacity .5s;
}

.v-enter-active {
  transition: opacity .3s;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
