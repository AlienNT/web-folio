<template>
  <div class="v-progress-bar"
       :style="`
          background: ${backgroundColor};
        `">
    <div
        class="line"
        :style="`
          width: ${progressValue}%;
          background: ${lineColor};
        `"
    />
  </div>
</template>

<script>
export default {
  name: "VProgressBar",
  props: {
    percent: {
      type: Number,
      default: null,
    },
    maxValue: {
      type: Number,
      default: null,
    },
    currentValue: {
      type: Number,
      default: null,
    },
    backgroundColor: {
      type: String,
      default: 'lightgreen'
    },
    lineColor: {
      type: String,
      default: 'green'
    }
  },
  computed: {
    progressValue() {
      return this.percent ? this.percent : (this.maxValue / 100 * this.currentValue) || 0;
    }
  }
}
</script>

<style scoped lang="scss">
.v-progress-bar {
  width: 100%;
  border-radius: 4px;
  .line {
    height: 4px;
    border-radius: 4px;
  }
}
</style>