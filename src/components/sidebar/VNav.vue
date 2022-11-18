<template>
  <nav class="v-sidebar__nav v-col">
    <ul class="v-sidebar__list v-row">
      <template
          v-for="link in navLinks"
          :key="link?.id"
      >
        <VNavLink
            :path="link?.path"
            :title="link?.title"
            @onClick="e => $emit('onClick', e)"

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
.v-sidebar__list {
  flex-direction: column;
}

</style>