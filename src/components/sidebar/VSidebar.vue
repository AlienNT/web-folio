<template>
  <div class="v-sidebar">
    <VNav
      :nav-links="navLinks"
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
    }
  },
  components: {
    VNav
  }

}
</script>

<style scoped>

</style>