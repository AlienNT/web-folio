<template>
  <main class="v-content">
    <div class="v-container">
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
  </main>
</template>

<script>
export default {
  name: "VContent"
}
</script>

<style scoped lang="scss">
.v-container {
  position: relative;
  overflow: hidden;
}

.v-content {
  background: #fff;
  width: 100%;
  height: 100%;
  box-shadow: 0 2px 8px 0 black;
  border-radius: 10px;
  padding-top: 15px;
  padding-bottom: 15px;
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
</style>