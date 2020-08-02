<template>
  <div id="home-page-footer">
    <SectionTitle v-scrollanimation>
      <div class="title">{{ text }}</div>
    </SectionTitle>
    <span class="subtitle" v-scrollanimation>Let's connect!</span>
    <div class="icon-container" v-scrollanimation>
      <IconLink href="mailto:kenneth@kennethyue.com" src="email.png" />
      <IconLink href="https://linkedin.com/in/kenxjy" src="linkedin2.png" />
      <IconLink href="https://github.com/kenxjy" src="github2.png" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: `Toronto-based\nsoftware developer\nwith a passion for technology`,
    };
  },
};
</script>

<style scoped>
#home-page-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 3rem;
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
  font-size: 21px;
  margin-bottom: 2rem;
  white-space: pre-wrap;
}

.subtitle {
  color: #666;
}
</style>
