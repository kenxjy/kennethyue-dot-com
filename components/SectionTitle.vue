<template>
  <div class="section-title" :style="cssVars">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
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
  color: var(--color, #333);
  text-align: center;
  font-family: 'Josefin Sans', Verdana, Helvetica, Tahoma, sans-serif;
  font-weight: bold;
  overflow-wrap: break-word;
  max-width: 100%;
}

@media only screen and (min-width: 768px) {
  .section-title::before,
  .section-title::after {
    background-color: var(--color, #333);
    content: ' ';
    position: absolute;
    
    width: 54%;
    height: 1px;
    display: inline-block;
  }

  .section-title::before {
    top: -0.8rem;
    left: 0%
  }

  .section-title::after {
    bottom: -0.5rem;
    right: 0%;
  }
}

@media only screen and (max-width: 767px) {
  .section-title::before {
    background-color: var(--color);
    content: ' ';
    position: absolute;
    bottom: -0.5rem;
    width: 100px;
    height: 1px;
    display: inline-block;
    left: calc(50% - 50px);
  }
}
</style>
