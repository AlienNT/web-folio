<template>
  <div class="view-wrapper">
    <div class="v-screen-title">
      <div class="fields">
        <div
            class="field"
            v-for="field in profile"
            :key="field.id"
        >
          <b>{{field.name}}: </b>
          <span>{{field.value}}</span>
        </div>
      </div>
    </div>
    <div class="v-content__inner">
      <div class="v-about">
        <div class="v-about__skills">
          <VSkillsList
              :skills="skills"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VSkillsList from "@/components/content/about/VSkillsList";
import {_notEmpty} from "@/helpers/fakeLodash";

export default {
  name: "AboutView",
  components: {
    VSkillsList
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
    async getProfile () {
      return await this.$store.dispatch('fetchProfile')
    },
    async getSkills() {
      return await this.$store.dispatch('fetchSkills')
    },
    createActions () {
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