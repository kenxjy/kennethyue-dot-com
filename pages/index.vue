<template>
  <div>
    <ScrollButtons />
    <div class="container" id="main-container">
      <HomePageHeader name="Kenneth Yue" color="white" />
      <ExperienceList v-bind:experiences="experience" />
      <HomePageFooter />
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
    return SITE_DATA
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');

html,
body {
  color: #333;
  margin: 0;
  overflow-x: hidden;
  font-family: 'Roboto', Verdana, Helvetica, Tahoma, sans-serif;
}

.container {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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
