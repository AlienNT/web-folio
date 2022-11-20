<template>
  <div class="v-sidebar__wrapper">
    <div
        class="wrapper"
        :class="{
          'mobile-wrapper' : isMobile
        }"
    >
      <div
          v-if="isMobile"
          class="logo-wrapper"
      >
        <VLogo
            path="/"
            alt="logo"
            :src="logoSrc"
            @onClick="isMobile? onClick('Home'): $router.push('/')"
        />
      </div>
      <VToggleButton
          :is-active="isShow"
          :is-show="isMobile"
          @onClick="isShow = !isShow"
      />
    </div>
    <div class="v-sidebar v-transition"
         :class="{
          'mobile-sidebar' : isMobile,
          'sidebar-show': isShow
       }">
      <VNav
          :is-mobile="isMobile"
          :nav-links="navLinks"
          :align="isMobile ? 'right' : 'left'"
          @onClick="onClick"
      />
    </div>
  </div>
</template>

<script>
import VNav from "@/components/sidebar/VNav";
import VToggleButton from "@/components/sidebar/VToggleButton";
import VLogo from "@/components/conponents/VLogo";

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
  data() {
    return {
      isShow: false
    }
  },
  components: {
    VNav,
    VToggleButton,
    VLogo
  },
  computed: {
    logoSrc() {
      return require('../../assets/img/icon/favicon-32x32.png')
    }
  },
  methods: {
    toggleNav() {
      this.isShow = !this.isShow;
    },
    onClick(event) {
      this.$emit('onClick', event)
      this.isShow = false
    }
  },
  watch: {
    isMobile: {
      handler(e) {
        if (!e) {
          this.isShow = e
        }
      },
      immediate: true
    }
  }
}
</script>

<style scoped lang="scss">
.v-sidebar__wrapper {
  background: $sidebarBgColor;
  overflow: hidden;

  * {
    transition: .2s ease;
  }
}

.logo-wrapper {
  display: flex;
  align-items: center;
  height: 30px;
  width: 30px;
}

.wrapper {
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: center;

}

.mobile-wrapper {
  justify-content: space-between;
}

.v-sidebar {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  overflow: hidden;
  height: 100%;
}

.mobile-sidebar {
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 0;
  opacity: 0;
  visibility: hidden;
  //transform: translateX(-100%);
}

.sidebar-show {
  //transform: translateX(0);
  height: 130px;
  opacity: 1;
  visibility: visible;
}
</style>