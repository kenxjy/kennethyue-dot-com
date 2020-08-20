<template>
  <div>
    <transition>
      <ScrollUpDownButtons v-if="aboveThreshold" />
    </transition>
    <transition>
      <ScrollToTopButton v-if="!aboveThreshold && atBottomOfPage" />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: null,
      atBottomOfPage: null,
    };
  },
  computed: {
    aboveThreshold() {
      return this.windowWidth >= 768;
    },
  },
  mounted() {
    this.windowWidth = window.innerWidth;
    window.addEventListener(
      'resize',
      () => (this.windowWidth = window.innerWidth)
    );

    this.atBottomOfPage = this.isBottomOfPage();
    window.addEventListener('scroll', () => {
      this.atBottomOfPage = this.isBottomOfPage();
    });
  },
  methods: {
    isBottomOfPage() {
      return (
        window.pageYOffset + window.innerHeight >=
        document.body.offsetHeight - 250
      );
    },
  },
};
</script>

<style scoped>
.v-enter,
.v-leave-to {
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 1s ease-out;
}

.v-enter-to,
.v-leave {
  opacity: 1;
}
</style>