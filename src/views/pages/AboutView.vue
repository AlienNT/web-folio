<template>
  <ViewTemplate
      :ref-name="$options.name"
  >
    <template v-slot:title>
      {{ $options.name }}
    </template>
    <template v-slot:content>
      <div class="v-about">
        <div class="v-about__skills">
          <div class="fields">
            <div
                class="field"
                v-for="field in profile"
                :key="field.id"
            >
              <b>{{ field.name }}: </b>
              <span>{{ field.value }}</span>
            </div>
          </div>
          <VSkillsList
              :skills="skills"
          />
        </div>
      </div>
    </template>
  </ViewTemplate>
</template>

<script>
import ViewTemplate from "@/views/templates/ViewTemplate";
import VSkillsList from "@/components/content/about/VSkillsList";
import {_notEmpty} from "@/helpers/fakeLodash";

export default {
  name: "AboutView",
  components: {
    VSkillsList,
    ViewTemplate
  },
  computed: {
    profile() {
      return _notEmpty(this.$store.getters['GET_PROFILE'])
    },
    skills() {
      return _notEmpty(this.$store.getters['GET_SKILLS'])
    }
  },
  methods: {
    async getProfile() {
      return await this.$store.dispatch('fetchProfile')
    },
    async getSkills() {
      return await this.$store.dispatch('fetchSkills')
    },
    createActions() {
      if (!this.profile) {
        this.getProfile()
      }
      if (!this.skills) {
        this.getSkills()
      }
    }
  },
  created() {
    this.createActions()
  }
}
</script>

<style scoped>

</style>