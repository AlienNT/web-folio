<template>
  <div class="v-skills v-col v-transition">
    <ul class="v-skills__list v-row v-transition">
      <VSkillCard
          v-for="skill in skills"
          :key="skill?.id"
          :data="skill"
          :columns="columns"
      />
    </ul>
  </div>
</template>

<script>
import VSkillCard from "@/components/content/about/VSkillCard";

export default {
  name: "VSkillsList",
  props: {
    skills: {
      type: Array,
      default: null
    },
    columns: {
      type: Number,
      default: 4
    }
  },
  components: {
    VSkillCard
  }
}
</script>

<style scoped>
.v-skills__list {
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>