<template>
  <div id="home-page-header" v-scrollanimation>
    <SectionTitle class="section-title" v-bind:color="color">{{ name }}</SectionTitle>
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

#home-page-header {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: #333;
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
