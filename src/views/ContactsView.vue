<template>
  <div class="view-wrapper">
    <div class="v-screen-title">ContactsView</div>
    {{contacts}}
  </div>
</template>

<script>
import {_notEmpty} from "@/helpers/fakeLodash";

export default {
  name: "ContactsView",
  computed: {
    contacts () {
      return _notEmpty(this.$store.getters['GET_CONTACTS'])
    }
  },
  methods: {
    async getContacts() {
      return await this.$store.dispatch('fetchContacts')
    }
  },
  created() {
    if (!this.contacts) {
      this.getContacts()
    }
  }
}
</script>

<style scoped>

</style>