<template>
  <section class="hero is-medium is-dark">
    <div class="hero-body">
      <div class="container">
        <div class="header-container">
          <h1 class="title is-2 has-text-gradient servers-title-padding">
            {{ title }}
          </h1>
          <div class="columns is-scrollable is-mobile" v-dragscroll.x>
            <div
              v-for="(value, key) in data"
              :key="key"
              class="column is-two-fifths-desktop is-two-fifths-tablet is-full-mobile server-column"
            >
              <div class="box">
                <div v-if="key === 0">
                  <span class="icon has-text-warning">
                    <i class="fas fa-star"></i>
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
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "servers",

  props: {
    title: String,
    data: [Array, Function],
  },
};
</script>

<style scoped>
.header-container {
  max-width: 880px !important;
  margin: 0 auto !important;
}

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
}

.box:hover {
  box-shadow: 0 0 12px rgb(0, 0, 0, 0.3);
  transform: scale(1.02);
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