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
export default {
  data() {
    return {
      elements: [],
      parentElement: null,
      activeScroll: null,
      yOffsetBuffer: 50,
      scrollInterval: 16.67 // ~60 fps
    };
  },
  mounted() {
    this.parentElement = document.getElementById('main-container');
    this.elements = this.parentElement.children;
  },
  methods: {
    isTopOfPage: function () {
      return window.pageYOffset <= 0;
    },
    isBottomOfPage: function () {
      return (
        window.pageYOffset + window.innerHeight >=
        this.parentElement.offsetHeight
      );
    },
    scrollTo: function (el, ms = 750) {
      if (this.activeScroll) {
        return;
      }

      const numOfSteps = Math.round(ms / this.scrollInterval);

      const currentPosition = window.pageYOffset;
      const finalPosition = el.offsetTop;
      const travelDistance = finalPosition - currentPosition;

      const distanceCurve = function (step) {
        return (
          (-travelDistance / (-numOfSteps * -numOfSteps)) *
            ((step - numOfSteps) * (step - numOfSteps)) +
          travelDistance
        );
      };

      let currentStep = 0;
      this.activeScroll = window.setInterval(() => {
        ++currentStep;
        window.scrollTo(0, currentPosition + distanceCurve(currentStep));

        if (currentStep >= numOfSteps) {
          window.clearInterval(this.activeScroll);
          window.scrollTo(0, el.offsetTop + 1);
          this.activeScroll = null;
        }
      }, this.scrollInterval);
    },
    scrollDown: function () {
      if (this.isBottomOfPage()) {
        return;
      }

      for (let i = 0; i < this.elements.length; ++i) {
        if (this.elements[i].offsetTop > window.pageYOffset + this.yOffsetBuffer) {
          this.scrollTo(this.elements[i]);
          break;
        }
      }
    },
    scrollUp: function () {
      if (this.isTopOfPage()) {
        return;
      }

      for (let i = this.elements.length - 1; i >= 0; --i) {
        if (this.elements[i].offsetTop < window.pageYOffset - this.yOffsetBuffer) {
          this.scrollTo(this.elements[i]);
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
  bottom: 1rem;
  right: 1rem;
}

.button {
  height: 34px;
  width: 34px;
  margin: 3px;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  background-color: #444;
  border: none;
  border-radius: 5px;
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
