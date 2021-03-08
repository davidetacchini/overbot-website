<template>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
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
          The following list details what permissions OverBot requires to ensure
          proper operation.
        </h2>
        <div class="columns is-multiline is-mobile">
          <div
            class="column is-half-desktop is-half-tablet is-full-mobile"
            v-for="(value, key) in permissions"
            :key="key"
          >
            <permission :value="value" />
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
.container {
  max-width: 1000px;
  margin: 0 auto;
}
</style>
