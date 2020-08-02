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
      parent: null,
    };
  },
  computed: {
    topOfPage: function () {
      return window.pageYOffset <= 0;
    },
    bottomOfPage: function () {
      return (
        Math.round(window.pageYOffset + window.innerHeight) >=
        this.parent.offsetHeight
      );
    },
  },
  mounted() {
    this.parent = document.getElementById('main-container');
    this.elements = this.parent.children;
  },
  methods: {
    scrollTo: function (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    },
    scrollDown: function () {
      if (this.bottomOfPage) {
        return;
      }

      for (let i = 0; i < this.elements.length; ++i) {
        if (this.elements[i].offsetTop > Math.round(window.pageYOffset)) {
          this.scrollTo(this.elements[i]);
          break;
        }
      }
    },
    scrollUp: function () {
      if (this.topOfPage) {
        return;
      }

      for (let i = this.elements.length - 1; i >= 0; --i) {
        if (this.elements[i].offsetTop < Math.round(window.pageYOffset)) {
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
  background-color: #444; /* Green */
  border: none;
  border-radius: 5px;
  color: white;
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
