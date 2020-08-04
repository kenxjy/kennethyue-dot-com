<template>
  <SectionContainer id="experience-list" section-title="My work so far">
    <ExperienceCard
      class="experience-card"
      v-scrollanimation
      v-for="(item, index) in experiences"
      :key="index"
      :experience="item"
    />
  </SectionContainer>
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
.experience-card {
  margin-bottom: 2rem;
  width: 100%;
}
</style>
