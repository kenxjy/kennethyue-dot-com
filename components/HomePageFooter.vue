<template>
  <SectionContainer id="home-page-footer">
    <template v-slot:section-title>
      <SectionTitle class="title" v-scrollanimation>{{ text }}</SectionTitle>
    </template>
    <span class="subtitle" v-scrollanimation>Let's connect!</span>
    <div class="icon-container" v-scrollanimation>
      <IconLink href="mailto:kenneth@kennethyue.com" src="email.png" alt="email" />
      <IconLink href="https://linkedin.com/in/kenxjy" src="linkedin.png" alt="linkedin" />
      <IconLink href="https://github.com/kenxjy" src="github.png" alt="github" />
    </div>
  </SectionContainer>
</template>

<script>
export default {
  name: 'HomePageFooter',
  data() {
    return {
      text: `Toronto-based\nSoftware Developer\nwith a passion for technology`,
    };
  },
};
</script>

<style scoped>
#home-page-footer {
  margin-bottom: 10rem;
}

.icon-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 2rem 0;
}

.white-space {
  height: 100px;
}

.title {
  white-space: pre-wrap;
}

.subtitle {
  color: #666;
}
</style>
