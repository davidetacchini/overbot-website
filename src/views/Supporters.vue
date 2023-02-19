<template>
  <base-section>
    <error-alert v-if="$store.getters.error" />
    <h1 class="title">Supporters</h1>
    <hr />
    <h2 class="subtitle is-4">Users</h2>
    <div class="columns is-multiline is-mobile">
      <supporter-card v-for="item in premiumUsers" :key="item.id" :item="item" />
    </div>
    <h2 class="subtitle is-4">Servers</h2>
    <div class="columns is-multiline is-mobile">
      <supporter-card v-for="item in premiumServers" :key="item.id" :item="item" />
    </div>
  </base-section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import SupporterCard from "@/components/SupporterCard";

export default {
  name: "Supporters",

  components: {
    SupporterCard,
  },

  computed: {
    ...mapGetters(["premiumUsers", "premiumServers"]),
  },

  created() {
    this.getSupporters();
  },

  methods: {
    ...mapActions({ getSupporters: "GET_SUPPORTERS" }),
  },
};
</script>
