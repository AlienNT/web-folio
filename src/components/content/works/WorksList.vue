<template>
  <ul class="works-list v-row">
    <transition-group name="fade">
      <li
          class="v-col works-list__wrapper"
          v-for="(work, key) in worksList"
          :key="work?.id || key"
      >
        <WorksListItem
            :card-data="work"
        />
      </li>
    </transition-group>
  </ul>
</template>

<script>
import WorksListItem from "@/components/content/works/WorksListItem";

export default {
  name: "WorksList",
  components: {
    WorksListItem
  },
  props: {
    worksList: {
      type: Array,
      default: null
    }
  }
}
</script>

<style scoped lang="scss">
.works-list {
  justify-content: center;
}

.works-list__wrapper {
  flex: 1 1 calc(100% / 3);
  max-width: 400px;
}

</style>