<template>
  <div class="icon-wrapper">
    <a :href="href" target="_blank">
      <img class="icon" :src="imgSrc" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'IconLink',
  props: {
    href: {
      type: String,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  },
  computed: {
    imgSrc() {
      return require('../assets/icons/' + this.src);
    },
  },
};
</script>

<style scoped>
.icon-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  margin: 0.5rem;
}

.icon {
  width: 105px;
  height: 105px;
  --transition: all 0.5s ease-out;
  transition: var(--transition);
  -webkit-transition: var(--transition);
  -moz-transition: var(--transition);
  -o-transition: var(--transition);
  -ms-transition: var(--transition);
}

.icon:hover {
  width: 120px;
  height: 120px;
}
</style>
