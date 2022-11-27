<template>
  <ViewTemplate
      :ref-name="$options.name"
  >
    <template v-slot:title>
      {{ $options.name }}
    </template>
    <template v-slot:content>
      <template v-if="works">
        <WorksList
            :works-list="works"
        />
      </template>
      <div v-else>
        нет записей
      </div>
    </template>
  </ViewTemplate>
</template>

<script>
import {_notEmpty} from "@/helpers/fakeLodash";
import ViewTemplate from "@/views/templates/ViewTemplate";
import WorksList from "@/components/content/works/WorksList";

export default {
  name: "WorksView",
  components: {
    ViewTemplate,
    WorksList
  },
  computed: {
    works() {
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