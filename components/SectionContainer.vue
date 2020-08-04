<template>
  <div class="section-container">
    <SectionTitle v-if="sectionTitle" class="title" v-scrollanimation>{{ sectionTitle }}</SectionTitle>
    <SectionTitle v-else class="title" v-scrollanimation>
      <slot name="section-title">Section Title</slot>
    </SectionTitle>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    sectionTitle: String,
  },
};
</script>

<style scoped>
.section-container {
  padding: 75px 1rem;
  width: 100%;
}

.title {
  font-size: 28px;
  margin-bottom: 2rem;
}
</style>