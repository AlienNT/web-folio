<template>
  <div
      class="view-wrapper"
      :ref="$options.name"
  >
    <div class="wrapper">
      <div class="v-screen-title">HomeView</div>
    </div>
  </div>
</template>

<script>
import {ViewMixin} from "@/views/viewMixin";

export default {
  name: "HomeView",
  mixins: [
    ViewMixin
  ]
}
</script>

<style scoped lang="scss">
.view-wrapper {
  background: transparent;
  color: #cccccc;
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