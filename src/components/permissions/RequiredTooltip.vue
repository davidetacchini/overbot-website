<template>
  <b-tooltip class="required" type="is-danger" :animated="true" :delay="50" label="Required">
    <span class="icon">
      <i class="fas fa-exclamation-circle" />
    </span>
  </b-tooltip>
</template>

<script>
export default {
  name: 'PermissionTooltip',
};
</script>

<style scoped lang="scss">
.required {
  position: absolute !important;
  top: 10px !important;
  right: 10px !important;
  font-size: 1.125rem !important;
  color: $danger !important;
}
</style>