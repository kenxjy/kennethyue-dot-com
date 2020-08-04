<template>
  <div class="section-title" :style="cssVars">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#333',
    },
  },
  computed: {
    cssVars() {
      return {
        '--color': this.color,
      };
    },
  },
};
</script>

<style scoped>
.section-title {
  width: max-content;
  position: relative;
  color: var(--color);
  text-align: center;
  font-size: 28px;
  margin-bottom: 2rem;
}

@media only screen and (min-width: 768px) {
  .section-title::before,
  .section-title::after {
    background-color: var(--color);
    content: ' ';
    position: absolute;
    top: 48%;
    width: 80px;
    height: 1px;
    margin: 0 10px;
    display: inline-block;
  }

  .section-title::before {
    right: 100%;
  }

  .section-title::after {
    left: 100%;
  }
}

@media only screen and (max-width: 767px) {
  .section-title::after {
    background-color: var(--color);
    content: ' ';
    position: absolute;
    bottom: -0.4rem;
    width: 100px;
    height: 1px;
    display: inline-block;
    left: calc(50% - 50px);
  }
}
</style>
