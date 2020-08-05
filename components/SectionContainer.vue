<template>
  <div class="section-container">
    <SectionTitle v-if="sectionTitle" class="title" v-scrollanimation>{{ sectionTitle }}</SectionTitle>
    <slot v-else name="section-title">
      <SectionTitle class="title" v-scrollanimation>Section Title</SectionTitle>
    </slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'SectionContainer',
  props: {
    sectionTitle: String,
  },
};
</script>

<style scoped>
.title {
  font-size: 28px;
  margin-bottom: 1.5rem;
}

.section-container {
  padding: 50px 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
</style>