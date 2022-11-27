<template>
  <ul
      class="works-list__item"
      :class="{
          'animated': !isMobile
      }"
  >
    <li class="work-card__image">
      <transition-group name="fade">
        <img
            :class="{
              'image-loaded': image.loaded
            }"
            :src="cardData?.image"
            :alt="`${cardData?.title} image`"
            key="1"
            @error="onError"
            @load="onLoad"
        >
        <div v-if="!image.loaded && !image.error"
             class="image-loader"
             key="2"
        >
          Loading...
        </div>
      </transition-group>
    </li>
    <li class="work-card__info">
      <span class="work-card__title">
        {{ cardData?.title }}
      </span>
      <span class="work-card__date">
        {{ dateString }}
      </span>
    </li>
    <li class="work-card__buttons">
      <button
          class="work-card__button"
          type="button"
          title="open in iframe"
          @click.prevent.stop="showFrame = !showFrame"
      >
        open
      </button>
      <a
          class="work-card__link"
          target="_blank"
          title="open in new page"
          :href="cardData?.url"
      >
        link
      </a>
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
      showFrame: false,
      errorImage: false,
      image: {
        loaded: false,
        error: false
      }
    }
  },
  computed: {
    dateString() {
      return this.getDateString(this.cardData['updated_at'])
    }
  },
  methods: {
    getDateString(dateString) {
      return new Date(dateString).toLocaleDateString()
    },
    onLoad() {
      this.image.loaded = true
    },
    onError() {
      this.image.error = true
    }
  }
}
</script>

<style scoped lang="scss">
.works-list__item {
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  padding: 10px;

  > * {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  &.animated {
    transition: .2s ease;

    &:hover {
      box-shadow: 0 2px 8px rgba(29, 22, 40, 0.8);
    }
  }
}

.work-card__image {
  min-height: 200px;
  width: 100%;
  background: #cccccc;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
  transition: .2s ease;

  &:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0 0 8px rgba(19, 18, 19, 0.6);
  }

  img {
    opacity: 0;

    &.image-loaded {
      opacity: 1;
    }
  }

  img, .image-loader {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .image-loader {
    background: #363636;
    color: black;
    font-size: 36px;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.work-card__title {
  color: #615477;
  font-size: 18px;
  font-weight: bold;

  &:first-letter {
    text-transform: uppercase;
  }
}

.work-card__date {
  font-size: 12px;
  font-weight: bold;
  opacity: .6;
}

.work-card__info,
.work-card__buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.work-card__button {
  border-radius: 5px;
  background: #615477;
  padding: 5px 15px;
  color: white;

  &:hover {
    background: lighten(#615477, 10%);
  }
}

.work-card__link {
  color: #615477;
  border-bottom: 2px solid #615477;

  &:hover {
    color: lighten(#615477, 10%);
    border-bottom: 2px solid lighten(#615477, 10%);
  }
}

.work-card__button,
.work-card__link {
  transition: .2s ease;
  font-weight: bold;

  &:first-letter {
    text-transform: uppercase;
  }
}

</style>