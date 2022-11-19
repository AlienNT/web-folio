<template>
  <li
      class="v-skills__card v-transition"
      :style="`flex: 0 1 ${100 / columns}%;`"
  >
    <div class="card">
      <div class="card__id">
        {{ data?.id }}
      </div>
      <div class="card__title">
        {{ data?.title }}
      </div>
      <div class="card__percent">
        <VProgressBar
            :percent="data?.percent"
        />
      </div>
    </div>
  </li>
</template>

<script>
import VProgressBar from "@/components/conponents/VProgressBar";

export default {
  name: "VSkillCard",
  props: {
    data: {
      type: Object,
      default: null
    },
    columns: {
      type: Number,
      default: 4
    }
  },
  components: {
    VProgressBar
  }
}
</script>

<style scoped lang="scss">
.v-skills__card {
  padding: 15px;

  .card {
    min-width: 200px;
    padding: 15px;
    border-radius: 5px;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.51);
  }

  .card__item {
    font-size: 18px;
    padding: 5px 0;
    text-align: center;
  }
}

</style>