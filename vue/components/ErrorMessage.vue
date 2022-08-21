<template>
  <transition name="bounce">
    <div style="top: 50px;" v-for="error in errors" :key="error.name" class="box alert alert-danger position-absolute" role="alert">
      {{ error[0] }}
    </div>
  </transition>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: ['errors']
}
</script>

<style>
.box {
  left: 20%;
  text-align: center;
  width: 60%;
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
