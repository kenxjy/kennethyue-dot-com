<template>
  <div id="home-page-header" :style="{ color: color }" v-scrollanimation>
    <i>Hi, I'm</i>
    <SectionTitle class="title" v-bind:color="color">
      {{ name }}
    </SectionTitle>
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
      default: 'red',
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
}

.title {
  font-size: 40px;
}
</style>
