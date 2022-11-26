<template>
  <transition name="fade">
    <div
        v-if="navLinks"
        class="v-main-component v-full-height"
        :class="{
        'mobile-app': isMobile
      }"
    >
      <div class="v-sidebar-component">
        <VSidebar
            :navLinks="navLinks"
            :isMobile="isMobile"
            @onClick="setScrollEvent"
        />
      </div>
      <div class="v-content-component"
           ref="v-content">

        <VContent
            :isMobile="isMobile"
        />
      </div>

    </div>
    <template v-else>
      <VSpinner/>
    </template>
  </transition>
</template>

<script>
import VSidebar from "@/components/sidebar/VSidebar";
import VContent from "@/components/content/VContent";
import VSpinner from "@/components/conponents/VSpinner";
import {_notEmpty} from "@/helpers/fakeLodash";
import {setTitle} from "@/helpers/apiHelper";

export default {
  name: "MainComponent",
  components: {
    VSidebar,
    VContent,
    VSpinner
  },
  data() {
    return {
      windowWidth: null,
      show: false
    }
  },
  computed: {
    navLinks() {
      return _notEmpty(this.$store.getters['GET_NAV_LINKS'])
    },
    isMobile() {
      //todo адаптив для малых экранов
      return this.windowWidth < 500
    },
    routeName() {
      return this.$route['name']
    }
  },
  watch: {
    routeName: {
      handler(e) {
        setTitle(e)

      },
      immediate: true
    }
  },
  methods: {
    event(event) {
      console.log(event)
    },
    setScrollEvent(event) {
      this.$store.dispatch('scrollEvent', event)
    },
    setInnerWidth() {
      this.windowWidth = window.innerWidth
    },
    async getNavLinks() {
      return await this.$store.dispatch('fetchNavLinks')
    },
  },
  async created() {
    this.setInnerWidth()
    await this.getNavLinks()
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.setInnerWidth()
    })
    setTimeout(() => {
      this.show = true
    }, 0)
  },
  beforeUnmount() {
    window.removeEventListener('resize', () => {
      this.setInnerWidth()
    })
  },
}
</script>

<style lang="scss">
@import "assets/css/main.scss";

[v-cloac] {
  opacity: 0;
}

.v-main-component {
  background: #ffffff;
  display: flex;
  width: 100%;
  overflow: hidden;
}

.v-sidebar-component, .v-content-component {
  height: 100%;
  display: flex;
}

.v-sidebar-component {
  min-width: fit-content;
  width: 0;
}

.v-content-component {
  background-image: url("assets/img/background.webp");
  background-size: cover;
  background-attachment: fixed;
  background-repeat: no-repeat;

  overflow-y: auto;
  flex: 1 1 auto;
  overflow-x: hidden;

  .v-content {
    background: rgba(50, 44, 61, 0.8);
  }
}


.mobile-app {
  flex-direction: column;

  .v-sidebar-component {
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .v-content-component {
    padding: 0;

    > .v-container {
      max-width: 100%;
      padding: 0;

      .v-content {
        border-radius: 0;
      }
    }
  }
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
</style>