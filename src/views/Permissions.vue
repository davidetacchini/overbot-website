<template>
  <base-container>
    <h1 class="title is-spaced">
      Bot Permissions
      <span class="tag is-danger">
        <span class="icon">
          <i class="fas fa-exclamation-circle" />
        </span>
        Required
      </span>
    </h1>
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
