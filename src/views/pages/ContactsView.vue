<template>
  <ViewTemplate
      :ref-name="$options.name"
  >
    <template v-slot:title>
      {{ $options.name }}
    </template>
    <template v-slot:content>
      {{contacts}}
    </template>
  </ViewTemplate>
</template>

<script>
import ViewTemplate from "@/views/templates/ViewTemplate";
import {_notEmpty} from "@/helpers/fakeLodash";

export default {
  name: "ContactsView",
  components: {
    ViewTemplate,
  },
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