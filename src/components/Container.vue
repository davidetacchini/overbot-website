<template>
  <section class="hero is-dark">
    <div class="hero-body">
      <div class="container">
        <slot></slot>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Container',
};
</script>
