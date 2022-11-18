<template>
  <div
      class="v-sidebar__toggle-btn"
      v-show="isMobile"
      @click.stop.prevent="toggleNav"
  >
    <div
        class="v-toggle"

    />
  </div>
  <div class="v-sidebar v-transition"
       :class="{
          'mobile-sidebar' : isMobile,
          'sidebar-show': isShow
       }">
    <VNav
        :nav-links="navLinks"
        @onClick="isShow = false"
    />
  </div>
</template>

<script>
import VNav from "@/components/sidebar/VNav";

export default {
  name: "VSidebar",
  props: {
    navLinks: {
      type: Array,
      default: null
    },
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShow: false
    }
  },
  components: {
    VNav
  },
  methods: {
    toggleNav () {
      this.isShow = !this.isShow;
    }
  },
}
</script>

<style scoped lang="scss">
.v-sidebar {
  background: $sidebarBgColor;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.mobile-sidebar {
  position: fixed;
  z-index: 999998;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: translateX(-100%);
}
.v-sidebar__toggle-btn {
  border-radius: 0 0 50px 0;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 30px;
  height: 30px;
  position: fixed;
  z-index: 999999;
  background: forestgreen;
  cursor: pointer;
}
.sidebar-show {
  transform: translateX(0);
}
</style>