<template>
  <div class="button-container" v-scrollanimation>
    <button class="button up-button" @click="scrollUp()">
      <svg
        class="button-arrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
      </svg>
    </button>
    <button class="button down-button" @click="scrollDown()">
      <svg
        class="button-arrow"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="white"
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
      </svg>
    </button>
  </div>
</template>

<script>
import SmoothScroll from '../plugins/smoothScroll';

export default {
  name: 'ScrollButtons',
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
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #444;
  border: none;
  border-radius: 5px;
}

@media only screen and (max-width: 768px) {
  .button {
    height: 45px;
    width: 45px;
    padding: 6px;
  }
}

@media only screen and (max-width: 576px) {
  .button {
    height: 48px;
    width: 48px;
    padding: 6px;
  }
}

.button svg {
  fill: white;
}

.button:hover svg {
  fill: aqua;
}

.button-arrow {
  height: 100%;
  width: 100%;
}

.aos-enter {
  opacity: 0;
  transform: none;
}

.aos-enter-to {
  opacity: 1;
  transition: all 1s ease-out;
}
</style>
