<template>
  <div class="circles-status">
    <b-tooltip type="is-black" :animated="true" :delay="50" label="Operational">
      <div class="circle bg-success" />
    </b-tooltip>
    <b-tooltip type="is-black" :animated="true" :delay="50" label="Partial Outage">
      <div class="circle bg-warning" />
    </b-tooltip>
    <b-tooltip type="is-black" :animated="true" :delay="50" label="Major Outage">
      <div class="circle bg-danger" />
    </b-tooltip>
  </div>
</template>

<script>
export default {
  name: 'ShardTooltip',
};
</script>

<style scoped lang="scss">
.circles-status {
  position: absolute;
  right: 20px;
  top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  padding: 10px;
  background-color: transparent;
  border-radius: 3rem;
  border: 1px solid $color-delta;
}

.circle {
  position: relative;
  height: 20px;
  width: 20px;
  border: unset;
  border-radius: 50%;
}
</style>
