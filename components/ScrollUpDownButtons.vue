<template>
  <div class="button-container">
    <ScrollButton class="button up-button" v-on:clicked="scrollUp()" />
    <ScrollButton class="button down-button" down v-on:clicked="scrollDown()" />
  </div>
</template>

<script>
import SmoothScroll from '../plugins/smoothScroll';

export default {
  name: 'ScrollUpDownButtons',
  data() {
    return {
      elements: [],
      parentElement: null,
      yOffsetBuffer: 50,
    };
  },
  mounted() {
    this.parentElement = document.getElementById('main-container');
    this.elements = this.parentElement.children;
  },
  methods: {
    isTopOfPage: function () {
      return window.pageYOffset <= 1;
    },
    isBottomOfPage: function () {
      return (
        window.pageYOffset + window.innerHeight >=
        this.parentElement.offsetHeight
      );
    },
    scrollDown: function () {
      if (this.isBottomOfPage()) {
        return;
      }

      for (let i = 0; i < this.elements.length; ++i) {
        if (
          this.elements[i].offsetTop >
          SmoothScroll.getActiveScrollPosition() + this.yOffsetBuffer
        ) {
          SmoothScroll.scrollTo(this.elements[i].offsetTop);
          break;
        }
      }
    },
    scrollUp: function () {
      if (this.isTopOfPage()) {
        return;
      }

      for (let i = this.elements.length - 1; i >= 0; --i) {
        if (
          this.elements[i].offsetTop <
          SmoothScroll.getActiveScrollPosition() - this.yOffsetBuffer
        ) {
          SmoothScroll.scrollTo(this.elements[i].offsetTop);
          break;
        }
      }
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
  height: 38px;
  width: 38px;
  margin: 4px 0;
  padding: 5px;
}
</style>
