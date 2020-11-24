<template>
  <div class="circles-status">
    <b-tooltip type="is-black" label="Stable connection" :delay="50">
      <div class="circle has-background-success"></div>
    </b-tooltip>
    <b-tooltip type="is-black" label="High ping (> 150ms)" :delay="50">
      <div class="circle has-background-warning"></div>
    </b-tooltip>
    <b-tooltip type="is-black" label="Ping > 1000ms" :delay="50">
      <div class="circle has-background-danger"></div>
    </b-tooltip>
  </div>
</template>

<script>
export default {
  name: 'status-info',
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
  background-color: $color-bravo;
  border-radius: 3rem;
}

.circle {
  position: relative;
  height: 20px;
  width: 20px;
  border: unset;
  border-radius: 50%;
}
</style>
