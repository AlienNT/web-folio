<template>
  <div class="v-main-component">
    <div class="v-sidebar-component">
      <VSidebar
          :navLinks="navLinks"
      />
    </div>
    <div class="v-main-component">
      <VContent/>
    </div>
  </div>
</template>

<script>
import VSidebar from "@/components/sidebar/VSidebar";
import VContent from "@/components/content/VContent";

export default {
  name: "MainComponent",
  components: {
    VSidebar,
    VContent
  },
  computed: {
    navLinks() {
      return this.$store.getters['navLinks/GET_NAV_LINKS'] || null;
    }
  }
}
</script>

<style scoped>
@import "assets/css/main.scss";
</style>