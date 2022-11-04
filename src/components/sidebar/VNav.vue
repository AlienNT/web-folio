<template>
  <nav class="v-sidebar__nav">
    <ul class="v-sidebar__list">
      <template
          v-for="link in navLinks"
          :key="link?.id"
      >
        <VNavLink
            :path="link?.path"
            :title="link?.title"

        />
      </template>
    </ul>
  </nav>
</template>

<script>
import VNavLink from "@/components/sidebar/VNavLink";

export default {
  name: "VNav",
  props: {
    navLinks: {
      type: Array,
      default: null
    }
  },
  components: {
    VNavLink
  }
}
</script>

<style scoped>

</style>