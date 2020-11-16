<template>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <div class="wrapper__permissions">
          <h1 class="title is-spaced">
            Bot Permissions
            <span class="tag is-danger">
              <span class="icon">
                <i class="fas fa-exclamation-circle"></i>
              </span>
              Required
            </span>
          </h1>
          <h2 class="subtitle is-6 has-text-white opacity-75">
            The following list details what permissions OverBot requires to
            ensure proper operation.
          </h2>
          <div class="columns is-multiline is-mobile">
            <div
              class="column is-full"
              v-for="(value, key) in permissions"
              :key="key"
            >
              <div class="box permission">
                <div class="columns">
                  <div class="column">
                    <span class="icon permission__icon">
                      <i :class="['fas', `fa-${value['icon']}`]"></i>
                    </span>
                    <span class="permission__title">
                      {{ value["name"] }}
                      <b-tooltip
                        type="is-black"
                        label="Required"
                        :delay="50"
                        class="permission__required"
                      >
                        <span class="icon">
                          <i class="fas fa-exclamation-circle"></i>
                        </span>
                      </b-tooltip>
                    </span>
                  </div>
                  <div class="column is-two-thirds">
                    <span class="permission__subtitle opacity-75">{{
                      value["desc"]
                    }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import permissions from "@/assets/permissions.json";

export default {
  data: () => {
    return {
      permissions,
    };
  },
};
</script>

<style scoped lang="scss">
.wrapper__permissions {
  max-width: 800px;
  margin: 0 auto;
}

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