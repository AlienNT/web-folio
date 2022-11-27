<template>
  <div
      class="view-wrapper"
      :class="{
        'mobile-view-wrapper': isMobile
      }"
      :ref="refName"
  >
    <div class="wrapper">
      <div class="v-screen-title">
        <slot name="title"/>
      </div>
      <div class="v-screen-content">
        <slot name="content"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ViewTemplate",
  props: {
    refName: {
      type: String,
      default: null
    }
  },
  computed: {
    scrollEvent() {
      return this.$store.getters['GET_SCROLL_EVENT']
    },
    element() {
      return this.$refs[this.refName]
    },
  },
  methods: {
    scrolling() {
      return this.$store.dispatch('scrollAction', {
        event: this.scrollEvent,
        element: this.element,
        refName: this.refName
      })
    }
  },
  watch: {
    scrollEvent: {
      handler(e) {
        this.scrolling(e)
      }
    }
  },
}
</script>

<style scoped lang="scss">
.view-wrapper {
  height: 100%;
  padding: 15px;
  background: #ffffff;
  display: flex;

  &:first-child {
    height: 100%;
  }

  .wrapper {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
    width: 100%;
  }

  @media all and (max-width: 500px) {
    height: fit-content;
  }
}
.mobile-view-wrapper {
  min-height: 100%;
}
.v-screen-title {
  text-align: center;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 24px;
  &:last-child {
    margin-bottom: 0;
  }
}
.v-screen-content {
  flex: 1 1 auto;
}
</style>