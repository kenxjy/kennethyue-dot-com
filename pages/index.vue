<template>
  <div>
    <HomePageHeader name="Kenneth Yue" />
    <div class="outer-container">
      <div class="container" id="main-container">
        <div id="top"></div>
        <ExperienceList section-title="My work so far" v-bind:experiences="experience" />
        <ExperienceList section-title="My personal projects" v-bind:experiences="projects" />
        <HomePageFooter />
      </div>
      <ScrollButtonContainer />
    </div>
  </div>
</template>

<script>
import SITE_DATA from '../plugins/data';

export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return SITE_DATA;
  },
};
</script>

<style>
html,
body {
  color: #333;
  margin: 0;
  overflow-x: hidden;
  font-family: 'Roboto', Verdana, Helvetica, Tahoma, sans-serif;
}

.outer-container {
  width: 100vw;
  background: #f0f0f0;
  padding-top: 2rem;
}

.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

#top {
  position: absolute;
  top: 0;
}

@media only screen and (max-width: 575px) {
  .container {
    width: 100%;
  }
}

@media only screen and (min-width: 576px) {
  .container {
    width: 540px;
  }
}

@media only screen and (min-width: 768px) {
  .container {
    width: 720px;
  }
}

@media only screen and (min-width: 992px) {
  .container {
    width: 960px;
  }
}

@media only screen and (min-width: 1200px) {
  .container {
    width: 1140px;
  }
}

.top {
  position: absolute;
}

.aos-enter {
  opacity: 0;
  transform: translateY(50px);
}

.aos-enter-to {
  opacity: 1;
  transform: none;
  transition: opacity 1s ease-in, transform 0.75s ease-out;
}
</style>
