<template>
  <base-section>
    <h1 class="title">Bot Permissions</h1>
    <hr />
    <h2 class="subtitle is-6">
      The following list details what permissions OverBot requires to ensure proper operation.
    </h2>
    <div class="columns is-variable is-6-desktop is-6-tablet is-multiline">
      <div
        v-for="permission in permissions"
        :key="permission.id"
        class="column is-4-desktop is-6-tablet is-12-mobile"
      >
        <item-card :item="permission" iconColor="bg-white" />
      </div>
    </div>
  </base-section>
</template>

<script>
import permissions from "@/assets/json/permissions.json";
import BaseSection from "@/components/BaseSection";
import ItemCard from "@/components/ItemCard";

export default {
  components: {
    BaseSection,
    ItemCard,
  },

  data: () => {
    return {
      permissions,
    };
  },
};
</script>
