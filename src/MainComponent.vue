<template>
  <div
      class="v-main-component"
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
</template>

<script>
import VSidebar from "@/components/sidebar/VSidebar";
import VContent from "@/components/content/VContent";
import {_notEmpty} from "@/helpers/fakeLodash";
import {setTitle} from "@/helpers/apiHelper";

export default {
  name: "MainComponent",
  components: {
    VSidebar,
    VContent
  },
  data() {
    return {
      windowWidth: null,
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
    setScrollEvent (event) {
      this.$store.dispatch('scrollEvent', event)
    },
    setInnerWidth() {
      this.windowWidth = window.innerWidth
    },
    async getNavLinks() {
      return await this.$store.dispatch('fetchNavLinks')
      /*return await axios(
          {
            url: routes.NAV_LINKS,
            method: 'GET',
            onUploadProgress: (e) => this.onProgress = e.loaded * 100 / e.total,
            onDownloadProgress: (e) => this.onProgress = e.loaded * 100 / e.total,
          })*/
    },
  },
  async created() {
    await this.getNavLinks()
    this.setInnerWidth()
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.setInnerWidth()
    })
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

.v-main-component {
  background: #ffffff;
  display: flex;
  width: 100%;
  height: 100vh;
}

.v-sidebar-component, .v-content-component {
  height: 100vh;
  display: flex;
}

.v-sidebar-component {
  min-width: fit-content;
}

.v-content-component {
  background-image: url("assets/img/background.webp");
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
</style>