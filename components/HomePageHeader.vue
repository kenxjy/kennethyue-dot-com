<template>
  <div id="home-page-header" v-scrollanimation>
    <div id="background"></div>
    <div id="title-container">
      <SectionTitle class="section-title" v-bind:color="color">{{ name }}</SectionTitle>
    </div>
  </div>
</template>

<script>
import SectionTitle from './SectionTitle.vue';

export default {
  components: {
    SectionTitle,
  },
  name: 'HomePageHeader',
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'white',
    },
  },
};
</script>

<style scoped>
i {
  margin-bottom: 0.25rem;
}

#title-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#background {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: -1;
  background-image: url('/images/header-background.jpeg');
  background-position: center;
  background-size: cover;
}

.section-title {
  font-size: 40px;
  color: white !important;
  text-shadow: 1px 1px #333;
}

.section-title::before,
.section-title::after {
  background-color: white !important;
  box-shadow: 1px 1px #333;
}
</style>
