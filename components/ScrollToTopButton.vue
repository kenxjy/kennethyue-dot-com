<template>
  <div class="button-container">
    <ScrollButton v-on:clicked="scrollToTop" />
  </div>
</template>

<script>
import SmoothScroll from '../plugins/smoothScroll';

export default {
  methods: {
    scrollToTop() {
      SmoothScroll.scrollTo(0);
    },
  },
};
</script>

<style scoped>
.button-container {
  display: flex;
  flex-direction: column;
  position: fixed;
  bottom: 1.25rem;
  right: 1.4rem;
}

.button {
  height: 45px;
  width: 45px;
}

@media only screen and (max-width: 576px) {
  .button {
    height: 48px;
    width: 48px;
  }
}
</style>