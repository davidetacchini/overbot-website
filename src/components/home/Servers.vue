<template>
  <div class="columns is-scrollable is-mobile" v-dragscroll.x>
    <div
      v-for="(value, key) in servers"
      :key="key"
      class="column is-two-fifths-desktop is-two-fifths-tablet is-full-mobile server-column"
    >
      <div class="server box">
        <div v-if="key === 0">
          <span class="server__icon icon has-text-warning">
            <i class="fas fa-medal"></i>
          </span>
        </div>
        <img class="server__img" :src="value['icon']" :alt="value['name']" />
        <h1 class="server__title title is-4">{{ value['name'] }}</h1>
        <h2 class="server__subtitle subtitle is-6 has-text-grey runned">
          Commands runned: {{ value['commands_runned'] }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'servers',

  computed: {
    servers() {
      return this.$store.getters.servers;
    },
  },

  created() {
    this.$store.dispatch('GET_SERVERS');
  },
};
</script>

<style scoped lang="scss">
.is-scrollable {
  overflow-x: scroll !important;
}

.is-scrollable::-webkit-scrollbar {
  display: none;
}

.servers-title-padding {
  padding-bottom: 20px;
}

.server-column {
  max-width: 250px;
}

.server {
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s linear;
  transition-delay: 0.05s;
  cursor: pointer;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);

  &:hover {
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
    transform: translateY(-5px);
  }

  &__title {
    padding: 12px 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__img {
    border-radius: 50%;
    pointer-events: none;
    user-select: none;
  }

  &__icon {
    position: absolute;
    top: 10px;
    left: 10px;
    font-size: 25px;
  }

  &__subtitle {
    line-height: 1.5;
  }
}
</style>
