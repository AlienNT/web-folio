<template>
  <div class="view-wrapper">
    <div class="v-screen-title">HomeView</div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      show: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.show = true
    }, 100)
  },
  beforeUnmount() {
    this.show = false
  }
}
</script>

<style scoped lang="scss">
.view-wrapper {
  background: #ccc;
}

.slide-fade-enter-active {
  transition: all .8s ease;
  transform: translateX(-100%);
}

.slide-fade-leave-active {
  transition: all .8s;
  transform: translateX(0);
}

.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active до версии 2.1.8 */
{
  transform: translateX(100%);
  opacity: 0;
}
</style>