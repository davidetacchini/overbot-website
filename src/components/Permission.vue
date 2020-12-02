<template>
  <div class="box permission">
    <div class="columns">
      <div class="column">
        <span class="icon permission__icon">
          <i :class="['fas', `fa-${value['icon']}`]"></i>
        </span>
        <span class="permission__title">
          {{ value['name'] }}
          <b-tooltip
            v-if="value['required']"
            class="permission__required"
            type="is-danger"
            :animated="true"
            :delay="50"
            label="Required"
          >
            <span class="icon">
              <i class="fas fa-exclamation-circle"></i>
            </span>
          </b-tooltip>
        </span>
      </div>
      <div class="column is-two-thirds">
        <span class="permission__subtitle opacity-75">{{ value['desc'] }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'permission',

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
  }

  &__title,
  &__subtitle,
  &__icon {
    color: $white-opacity-full;
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
