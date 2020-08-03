<template>
  <div class="section-title">
    <div class="section-title-text" :style="cssVars">
      <slot></slot>
    </div>
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
.section-title-text {
  width: max-content;
  position: relative;
  color: var(--color);
  text-align: center;
}

@media only screen and (min-width: 768px) {
  .section-title-text::before,
  .section-title-text::after {
    background-color: var(--color);
    content: ' ';
    position: absolute;
    top: 48%;
    width: 80px;
    height: 2px;
    margin: 0 10px;
    display: inline-block;
  }

  .section-title-text::before {
    right: 100%;
  }

  .section-title-text::after {
    left: 100%;
  }
}

@media only screen and (max-width: 767px) {
  .section-title-text::after {
    background-color: var(--color);
    content: ' ';
    position: absolute;
    bottom: -0.4rem;
    width: 100px;
    height: 2px;
    display: inline-block;
    left: calc(50% - 50px);
  }
}
</style>
