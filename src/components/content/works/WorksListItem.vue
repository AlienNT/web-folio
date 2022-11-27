<template>
  <ul class="works-list__item">
    <li class="work-card__image">
      {{ cardData?.img }}
    </li>
    <li class="work-card__title">
      {{ cardData?.title }}
    </li>
    <li class="work-card__description">
      {{ cardData?.description }}
    </li>
    <li class="">
      <button
          type="button"
          style="background: blue; color: white; padding: 10px 15px"
          @click.prevent.stop="showFrame = !showFrame"
      >
        toggle frame
      </button>
    </li>
  </ul>
  <VFrame
      :title="cardData?.title"
      :content-url="cardData?.url"
      :show="showFrame"
      @hideEvent="showFrame = false"
  />

</template>

<script>
import VFrame from "@/components/conponents/VFrame";

export default {
  name: "WorksListItem",
  components: {
    VFrame
  },
  props: {
    cardData: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      showFrame: false
    }
  },
}
</script>

<style scoped lang="scss">
.works-list__item {
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 2px 5px black;
  padding: 10px;
}

.work-card__image {
  min-height: 200px;
  width: 100%;
  background: #cccccc;
}

</style>