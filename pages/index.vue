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
export default {
  mounted() {
    window.scrollTo(0, 0);
  },
  data() {
    return {
      experience: [
        {
          company: 'The Symes',
          jobTitle: 'Full-Stack Developer',
          dates: 'Since Oct 2019',
          location: 'Toronto, ON',
          description: `Developing an internal customer relations management application from the ground up to replace their existing one.\n
Application uses Angular and Angular Material for the front-end.\n
Firebase is used for the entire backend, including HTTP end-points, database, authentication, etc.\n
Uses Google’s Drive API and Docs API to integrate the application with the company’s G Suite.\n
Assisting company in porting over data from their current CRM app to their new database\n
Integrate the company’s other existing applications to the new application.\n
The project has largely been a solo endeavour, including development and QA.`,
          url: 'https://thesymes.ca',
          imgUrl: '',
        },
        {
          company: 'Warranty Claim Services, Inc.',
          jobTitle: 'Full-Stack Developer',
          dates: 'Apr 2019 - Apr 2020',
          location: 'Ajax, ON',
          description: 'Test',
          url: '',
          imgUrl: '',
        },
        {
          company: 'Seneca College',
          jobTitle: 'Computer Programming Diploma',
          dates: 'earned April 2019',
          location: 'Toronto, ON',
          description: 'Test',
          url: '',
          imgUrl: '',
        },
      ],
    };
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

html,
body {
  color: #333;
  margin: 0;
  overflow-x: hidden;
  font-family: 'Josefin Sans', Verdana, Helvetica, Tahoma, sans-serif;
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
