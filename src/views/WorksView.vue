<template>
  <div class="view-wrapper">
    <div class="v-screen-title">WorksView</div>
    <div v-if="works">
      {{works}}
    </div>
    <div v-else>
      нет записей
    </div>
  </div>
</template>

<script>
import {_notEmpty} from "@/helpers/fakeLodash";

export default {
  name: "WorksView",
  computed: {
    works () {
      return _notEmpty(this.$store.getters['GET_WORKS'])
    }
  },
  methods: {
    async getWorks() {
      return await this.$store.dispatch('fetchWorks')
    }
  },
  created() {
    if (!this.works) {
      this.getWorks()
    }
  }
}
</script>

<style scoped>

</style>