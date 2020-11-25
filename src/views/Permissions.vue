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
            The following list details what permissions Overcord requires to
            ensure proper operation.
          </h2>
          <div class="columns is-multiline is-mobile">
            <div
              class="column is-full"
              v-for="(value, key) in permissions"
              :key="key"
            >
              <permission :value="value" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import permissions from '@/assets/permissions.json';
import Permission from '@/components/Permission';

export default {
  data: () => {
    return {
      permissions,
    };
  },

  components: {
    Permission,
  },
};
</script>

<style scoped lang="scss">
.wrapper__permissions {
  max-width: 800px;
  margin: 0 auto;
}
</style>
