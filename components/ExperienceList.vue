<template>
  <div id="experience-list">
    <SectionTitle class="title" v-scrollanimation>My work so far</SectionTitle>
    <ExperienceCard
      class="experience-card"
      v-scrollanimation
      v-for="(item, index) in experiences"
      :key="index"
      :experience="item"
    />
  </div>
</template>

<script>
import ExperienceCard from './ExperienceCard.vue';
import SectionTitle from './SectionTitle.vue';

export default {
  components: {
    ExperienceCard,
    SectionTitle,
  },
  name: 'ExperienceList',
  props: {
    experiences: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 2rem;
}

#experience-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding-top: 75px;
}

.experience-card {
  margin-bottom: 2rem;
  width: 100%;
}
</style>
