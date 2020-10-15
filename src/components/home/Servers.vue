<template>
  <home-section
    sectionSize="medium"
    title="Five most active servers"
    titleSize="3"
    :isSpaced="true"
  >
    <div class="columns is-scrollable is-mobile" v-dragscroll.x>
      <div
        v-for="(value, key) in servers"
        :key="key"
        class="column is-two-fifths-desktop is-two-fifths-tablet is-full-mobile server-column"
      >
        <div class="box">
          <div v-if="key === 0">
            <span class="icon has-text-warning">
              <i class="fas fa-medal"></i>
            </span>
          </div>
          <img :src="value['icon']" :alt="value['name']" />
          <h1 class="title is-4">{{ value["name"] }}</h1>
          <h2 class="subtitle is-6 has-text-grey runned">
            Commands runned: {{ value["commands_runned"] }}
          </h2>
        </div>
      </div>
    </div>
  </home-section>
</template>

<script>
import Section from "./Section";

export default {
  name: "servers",

  components: {
    "home-section": Section,
  },

  computed: {
    servers() {
      return this.$store.getters.servers;
    },
  },

  mounted() {
    this.$store.dispatch("getServers");
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

.box {
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s linear;
  transition-delay: 0.05s;
  cursor: pointer;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
}

.box:hover {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.3);
  transform: scale(1.02) translateY(-5px);
}

.box > .title {
  padding: 12px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.box > img {
  border-radius: 50%;
  pointer-events: none;
  user-select: none;
}

.box > div > .icon {
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 25px;
}

.subtitle {
  line-height: 1.5;
}

.server-column {
  max-width: 250px;
}
</style>