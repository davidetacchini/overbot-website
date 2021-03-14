<template>
  <div class="circles-status">
    <b-tooltip type="is-black" :animated="true" :delay="50" label="Stable connection">
      <div class="circle has-background-success" />
    </b-tooltip>
    <b-tooltip type="is-black" :animated="true" :delay="50" label="High ping (> 150ms)">
      <div class="circle has-background-warning" />
    </b-tooltip>
    <b-tooltip type="is-black" :animated="true" :delay="50" label="Bad connection">
      <div class="circle has-background-danger" />
    </b-tooltip>
  </div>
</template>

<script>
export default {
  name: 'StatusInfo',
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
