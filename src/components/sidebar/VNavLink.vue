<template>
  <li class="v-sidebar__item">
    <router-link
        :to="path"
    >
      {{ title }}
    </router-link>
  </li>
</template>

<script>
export default {
  name: "VNavLink",
  props: {
    path: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
  }
}
</script>

<style scoped>

</style>