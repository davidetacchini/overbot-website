<template>
  <div class="box permission">
    <div class="columns is-multiline">
      <div class="column is-full inline-block">
        <span class="icon permission__icon">
          <i :class="['fas', `fa-${value.icon}`]" />
        </span>
        <span class="title is-6">
          {{ value.name }}
          <b-tooltip
            v-if="value.required"
            class="permission__required"
            type="is-danger"
            :animated="true"
            :delay="50"
            label="Required"
          >
            <span class="icon">
              <i class="fas fa-exclamation-circle" />
            </span>
          </b-tooltip>
        </span>
      </div>
      <div class="column">
        <h2 class="subtitle is-6">
          {{ value.desc }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Permission',

  props: {
    value: Object,
  },
};
</script>

<style scoped lang="scss">
.permission {
  position: relative;

  &__icon {
    margin-right: 10px;
    font-size: 1rem;
    color: $white-high-emphasis;
  }

  &__required {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.125rem;
    color: $danger;
  }
}
</style>
