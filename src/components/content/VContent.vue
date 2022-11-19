<template>
  <main class="v-content">
    <div
        class="v-container"
    >
      <div
          v-if="!isMobile"
          class="desktop-container"
      >
        <router-view
            v-slot="{ Component }"
        >
          <transition
              name="slide-fade"
          >
            <component
                :is="Component"
                style="transition: .5s ease"
            />
          </transition>
        </router-view>
      </div>
      <div
          v-else
          class="mobile-container v-scroll"
          ref="content"
      >
        <template
            v-for="route in routerComponents"
            :key="route.name">
          <component
              :is="route.component"
              :ref="route.name"
          />
        </template>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  name: "VContent",
  props: {
    isMobile: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    routerComponents() {
      return this.$router['options']?.routes
    },
  }
}
</script>

<style lang="scss" scoped>
.v-container {
  position: relative;
  scroll-behavior: smooth;
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
}

.desktop-container, .mobile-container {
  height: 100%;
  width: 100%;
}

.desktop-container {
  &::-webkit-scrollbar {
    display: none;
  }
}

.v-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.slide-fade-enter {
  transition: all .5s ease;
}

.slide-fade-enter-active {
  transform: translateX(-50%);
}

.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all .5s ease;
  opacity: 0;
}

.slide-fade-leave-active {
  transform: translateX(50%);
}

.show-scroll {
  background: #000;

  ::-webkit-scrollbar {
    display: block;
  }
}
</style>