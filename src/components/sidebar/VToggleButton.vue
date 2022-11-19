<template>
  <div
      class="v-sidebar__toggle-btn"
      :class="{
        'active':isActive
      }"
      v-show="isShow"
      @click.stop.prevent="() => $emit('onClick')"
  >
    <div class="btn__item"/>
    <div class="btn__item"/>
    <div class="btn__item"/>
  </div>
</template>

<script>
export default {
  name: "VToggleButton",
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    isActive: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.v-sidebar__toggle-btn {
  overflow: hidden;
  width: 30px;
  height: 30px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  &.active {
    transform: rotate(-45deg);
    .btn__item {
      &:nth-of-type(2) {
        height: 100%;
        background: #7a6995;
      }
      &:first-of-type, &:last-of-type {
        height: 40%;
      }
    }
  }
  &:hover {
    .btn__item {
      &:first-of-type,  &:last-of-type {
        background: lighten(#7a6995, 35%)
      }
      &:nth-of-type(2) {
        background: lighten(#7a6995, 5%);
      }
    }
  }
}

.btn__item {
  transition: .2s ease;
  width: 5px;
  height: 5px;
  background: #ffffff;
  position: relative;
  border-radius: 5px;

  &:first-of-type {
    //transform: translateX(-140%);
  }

  &:last-of-type {
    //transform: translateX(140%);
  }
}

</style>