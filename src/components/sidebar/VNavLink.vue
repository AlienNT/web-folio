<template>
  <li class="v-sidebar__item v-col">
    <router-link
        v-if="!isMobile"
        class="v-sidebar__link v-transition"
        :style="{
            'text-align': align
        }"
        :to="path"
    >
      {{ title }}
    </router-link>
    <div
        v-else
        class="v-sidebar__link v-transition"
        :style="{
            'text-align': align
        }"
        @click.stop.prevent="() => $emit('onClick', title)"
    >
      {{ title }}
    </div>
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
    isMobile: {
      type: Boolean,
      default: false
    },
    align: {
      type: String,
      default: 'left'
    }
  },
  methods: {
    navClick(e) {
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
  font-size: 14px;

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