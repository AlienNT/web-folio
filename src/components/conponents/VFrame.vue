<template>
  <transition name="frame">
    <div
        v-if="show"
        class="v-frame"
        :class="{
          'mobile-frame' : isMobile
        }"
        ref="frame"
        @click.self="$emit('hideEvent')"
    >
      <div
          class="frame__wrapper"
      >
        <div class="frame__header">
          <div class="frame__title">
            {{title}}
          </div>
          <div class="frame__close-btn"
               @click.stop.prevent="$emit('hideEvent')"
          />
        </div>
        <iframe
            class="frame__content"
            :src="contentUrl"
        />
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "VFrame",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    contentUrl: {
      type: String,
      require: true,
      default: null
    }
  }
}
</script>

<style lang="scss">
.v-frame {
  background: rgba(54, 47, 66, 0.8);
  padding: 20px;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 1;
  transition: .2s ease;
  display: flex;
  .frame__wrapper {
    max-width: 1200px;
    box-shadow: 0 2px 5px black;
    flex: 1 1 auto;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    overflow: hidden;
    margin: 0 auto;
  }

  .frame__content {
    flex: 1 1 auto;
  }

  .frame__header {
    background: #fff;
    padding: 10px 15px;
    display: flex;
  }

  .frame__close-btn {
    width: 20px;
    height: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    cursor: pointer;
    transition: .2s ease;

    &:before, &:after {
      transition: .2s ease;
      content: '';
      position: absolute;
      display: block;
      background: $sidebarBgColor;
      width: 100%;
      height: 4px;
      border-radius: 2px;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }
    &:hover {
      transform: scale(1.2);
      &:before, &:after {
        background: lighten($sidebarBgColor, 10%);
      }
    }
  }
}
.mobile-frame {
  padding: 0;
  .frame__wrapper {
    margin: 0;
    border-radius: 0;
  }
}
.frame-enter-active, .frame-leave-to {
  opacity: 0;
  transition: .6s ease;
}
</style>