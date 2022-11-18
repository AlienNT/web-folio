<template>
  <li class="v-sidebar__item v-col">
    <router-link
        class="v-sidebar__link v-transition"
        :to="path"
        @click="e => $emit('onClick', e)"
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
  },
  methods: {
    navClick (e) {
      console.log('navClick', e)
    }
  }
}
</script>

<style scoped lang="scss">
.v-sidebar__item {
  padding: 5px 15px;
  cursor: pointer;
  text-transform: uppercase;
  .v-sidebar__link {
    display: block;
    color: $sidebarLinkColor;
    &:hover {
      color: $sidebarLinkHoverColor;
    }
  }
  .router-link-active {
    color: $sidebarLinkHoverColor;
  }
}

</style>