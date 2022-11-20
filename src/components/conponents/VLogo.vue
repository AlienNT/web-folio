<template>
  <div class="v-logo">
    <a
        :href="path"
        class="logo__link"
        @click.prevent.stop="$emit('onClick')"
    >
      <img
          :src="src"
          :alt="alt"
          class="logo"
      >
    </a>
  </div>
</template>

<script>
export default {
  name: "VLogo",
  props: {
    path: {
      type: String,
      default: null,
    },
    src: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: null,
    },
  }
}
</script>

<style scoped lang="scss">
.v-logo {
  position: relative;
  width: 0;
  height: 0;
  display: flex;
  padding-top: 100%;
  padding-right: 100%;

  .logo__link {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    height: 100%;
    width: 100%;
  }

  .logo {
    display: flex;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
}
</style>