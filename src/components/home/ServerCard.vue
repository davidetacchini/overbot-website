<template>
  <div :class="['server box has-background-dark', { 'first-place': index === 0 }]">
    <img
      class="server__image"
      :src="server.icon ? server.icon : require(`@/assets/images/default-icon.png`)"
      :alt="server.name"
    />
    <h1 class="server__title title has-text-weight-bold is-6 mt-3">{{ server.name }}</h1>
    <h2 class="server__subtitle subtitle is-7">JOINED ON {{ server.joined_at.split(" ")[0] }}</h2>
    <span v-if="server.is_premium" class="tag bg-info is-rounded shine">Premium</span>
    <hr />
    <div class="server__info">
      <p>
        <span class="has-text-grey is-size-7">COMMANDS RUNNED: </span>
        <span class="has-text-white">{{ server.commands_run }}</span>
      </p>
      <p>
        <span class="has-text-grey is-size-7">MEMBERS COUNT: </span>
        <span class="has-text-white">{{ server.members }}</span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ServerCard",

  props: {
    server: Object,
    index: Number,
  },
};
</script>

<style lang="scss" scoped>
.first-place {
  box-shadow: 0 0 8px $primary !important;
}

.tag {
  position: absolute;
  top: 110px;
  left: 50%;
  transform: translateX(-50%);
}

.server {
  position: relative;
  min-height: 300px;
  user-select: none !important;
  text-align: center;

  &__image {
    border-radius: 50%;
    pointer-events: none;
    width: 110px;
  }

  &__title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &__members {
    font-size: 0.875rem;
    color: $grey;
  }

  &__region {
    position: absolute;
    top: 5px;
    right: 10px;
    width: 30px;
  }

  &__info {
    font-size: 0.875rem !important;
  }
}

.is-scrollable {
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  cursor: -webkit-grab;
  cursor: -moz-grab;
  cursor: -o-grab;
  cursor: grab;
}

.is-scrollable:active {
  cursor: -webkit-grabbing;
  cursor: -moz-grabbing;
  cursor: -o-grabbing;
  cursor: grabbing;
}

.is-scrollable::-webkit-scrollbar {
  display: none;
}
</style>
