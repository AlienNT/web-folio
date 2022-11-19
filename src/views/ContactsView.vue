<template>
  <div
      class="view-wrapper"
      :ref="$options.name"
  >
    <div class="wrapper">
      <div class="v-screen-title">ContactsView</div>
      {{contacts}}
    </div>
  </div>
</template>

<script>
import {ViewMixin} from "@/views/viewMixin";
import {_notEmpty} from "@/helpers/fakeLodash";

export default {
  name: "ContactsView",
  mixins: [
    ViewMixin
  ],
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