<template>
  <div class="circles-status">
    <b-tooltip type="is-dark" label="Stable connection" :delay="50">
      <div class="circle has-background-success"></div>
    </b-tooltip>
    <b-tooltip type="is-dark" label="High ping (> 150ms)" :delay="50">
      <div class="circle has-background-warning"></div>
    </b-tooltip>
    <b-tooltip type="is-dark" label="Bad connection" :delay="50">
      <div class="circle has-background-danger"></div>
    </b-tooltip>
  </div>
</template>

<script>
export default {
  name: "status-info",
};
</script>

<style scoped>
.circles-status {
  position: absolute;
  right: 20px;
  top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 120px;
  padding: 10px;
  background-color: var(--ob-theme-bg);
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