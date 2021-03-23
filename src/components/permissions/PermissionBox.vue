<template>
  <div class="box">
    <div class="columns is-multiline is-mobile">
      <div class="column is-narrow">
        <span class="icon">
          <i :class="['fas', `fa-${permission.icon}`]" />
        </span>
        <required-tooltip v-if="permission.required" />
      </div>
      <div class="column">
        <h1 class="title is-6 is-spaced">
          {{ permission.name }}
        </h1>
        <h2 class="subtitle">
          {{ permission.description }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import RequiredTooltip from '@/components/permissions/RequiredTooltip';

export default {
  name: 'PermissionBox',

  props: {
    permission: Object,
  },

  components: {
    RequiredTooltip,
  },
};
</script>

<style scoped lang="scss">
.box {
  position: relative !important;
}

.icon {
  font-size: 1.5rem;
  color: $grey;
}

.subtitle {
  font-size: 0.875rem !important;
}
</style>
