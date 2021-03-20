<template>
  <base-container>
    <h1 class="title">Bot Permissions</h1>
    <hr />
    <h2 class="subtitle is-6">
      The following list details what permissions OverBot requires to ensure proper operation.
    </h2>
    <div class="columns is-multiline is-mobile">
      <div
        v-for="(permission, index) in permissions"
        :key="index"
        class="column is-half-desktop is-full-tablet is-full-mobile"
      >
        <permission-item :permission="permission" />
      </div>
    </div>
  </base-container>
</template>

<script>
import permissions from '@/assets/json/permissions.json';
import BaseContainer from '@/components/BaseContainer.vue';
import PermissionItem from '@/components/PermissionItem';

export default {
  components: {
    BaseContainer,
    PermissionItem,
  },

  data: () => {
    return {
      permissions,
    };
  },
};
</script>

<style scoped lang="scss">
.tag {
  font-size: 0.875rem !important;
}

.icon {
  margin-right: 3px !important;
}
</style>
