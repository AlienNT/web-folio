<template>
  <div
      class="view-wrapper"
      :ref="$options.name"
  >
    <div class="wrapper">
      <div class="v-screen-title">WorksView</div>
      <div v-if="works">
        {{works}}
      </div>
      <div v-else>
        нет записей
      </div>
    </div>
  </div>
</template>

<script>
import {_notEmpty} from "@/helpers/fakeLodash";
import {ViewMixin} from "@/views/viewMixin";

export default {
  name: "WorksView",
  mixins: [
    ViewMixin
  ],
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