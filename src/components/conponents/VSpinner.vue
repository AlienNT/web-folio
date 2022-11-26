<template>
  <div class="v-spinner">
    <div class="spinner__container">
      <div class="spinner__wrapper">
        <div class="spinner__inner">
          <div class="spinner__item"/>
          <div class="spinner__item"/>
          <div class="spinner__item"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VSpinner"
}
</script>

<style scoped lang="scss">

.v-spinner {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background: lighten($sidebarBgColor, 15%);
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .spinner__container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 100px;

  }
}

.spinner__wrapper {
  position: relative;
  width: 0;
  height: 0;
  padding-top: 50%;
  padding-left: 50%;
}

.spinner__inner {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  //justify-content: space-between;
  flex-direction: column;
  gap: 12%;
  animation: spinnerAnimate infinite ease 2s;
}

.spinner__item {
  //transition: .2s ease;
  width: 100%;
  flex: auto;
  background: #ffffff;
  position: relative;
  border-radius: 50px;

  &:first-of-type {
    animation: spinnerItemWidthAnimate infinite ease 2s;
  }

  &:nth-of-type(2) {
    animation: spinnerItemColorAnimate infinite ease 2s;
  }

  &:last-of-type {
    animation: spinnerItemWidthAnimate infinite ease 2s;
  }
}

@keyframes spinnerAnimate {
  0%, 15%, 85%, 100% {
    transform: rotate(-90deg);
  }
  30%,
  70%{
    transform: rotate(-45deg);
  }
}

@keyframes spinnerItemWidthAnimate {
  0%, 15%, 85%, 100%  {
    width: 24%;
    transform: scale(1);
    background: $sidebarBgColor;
  }
  35%,
  65%{
    width: 30%;
    transform: scale(0.8);
    background: #ffffff;
  }
}

@keyframes spinnerItemColorAnimate {
  0%, 15%, 85%, 100% {
    width: 24%;
    background: #fff;
    transform: scale(0.8);
  }
  35%,
  65% {
    width: 100%;
    background: $sidebarBgColor;
    transform: scale(1);

  }
}
</style>