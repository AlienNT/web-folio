<template>
  <div
      class="v-main-component"
  >
    <div class="v-sidebar-component">
      <VSidebar
          :navLinks="navLinks"
          :isMobile="isMobile"
      />
    </div>
    <div class="v-content-component">
      <div class="v-container">
        <VContent/>
      </div>
    </div>
  </div>
</template>

<script>
import VSidebar from "@/components/sidebar/VSidebar";
import VContent from "@/components/content/VContent";
import {_notEmpty} from "@/helpers/fakeLodash";

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
  },
  methods: {
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

<style scoped>
@import "assets/css/main.scss";

.v-main-component {
  background: #ffffff;
  display: flex;
  width: 100%;
}

.v-sidebar-component, .v-content-component {
  height: 100vh;
  overflow-y: auto;
  display: flex;
}

.v-sidebar-component {
  min-width: fit-content;
  overflow-x: hidden;
  overflow-y: auto;
}

.v-content-component {
  padding-top: 15px;
  padding-bottom: 15px;
  flex: 1 1 auto;
}

</style>