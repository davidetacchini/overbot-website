<template>
  <div class="circles-status">
    <b-tooltip type="is-black" :animated="true" :delay="50" label="Operational">
      <div class="circle bg-success"></div>
    </b-tooltip>
    <b-tooltip type="is-black" :animated="true" :delay="50" label="Partial Outage">
      <div class="circle bg-warning"></div>
    </b-tooltip>
    <b-tooltip type="is-black" :animated="true" :delay="50" label="Major Outage">
      <div class="circle bg-danger"></div>
    </b-tooltip>
  </div>
</template>

<script>
export default {
  name: "StatusTooltip",
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
  border: 1px solid $color-gamma;
}

.circle {
  position: relative;
  height: 20px;
  width: 20px;
  border: unset;
  border-radius: 50%;
}
</style>
