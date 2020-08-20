<template>
  <div class="card">
    <img class="card-img" loading="lazy" :src="imgUrl" :alt="imgAlt" />
    <div class="card-info">
      <a v-if="url" class="card-title" :href="url" target="_blank" rel="noreferrer">{{ company }}</a>
      <span v-else class="card-title">{{ company }}</span>
      <p class="card-subtitle" v-if="jobTitle">
        <span>{{ jobTitle }}</span>
        <i>{{ dates }}</i>
      </p>
      <p class="location-text" v-if="location">{{ location }}</p>
      <p class="description-text" v-html="description"></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExperienceCard',
  props: {
    experience: {
      type: Object,
      required: true,
    },
  },
  computed: {
    company: function () {
      return this.experience.company;
    },
    dates: function () {
      return this.experience.dates;
    },
    jobTitle: function () {
      if (this.experience.jobTitle) {
        return this.experience.jobTitle + (this.dates ? ', ' : '');
      } else {
        return null;
      }
    },
    location: function () {
      return this.experience.location;
    },
    description: function () {
      return this.experience.description;
    },
    url: function () {
      return this.experience.url;
    },
    imgUrl() {
      return this.experience.imgUrl || '/images/image-placeholder.png';
    },
    imgAlt() {
      return this.experience.imgAlt || 'image-placeholder';
    },
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  align-items: flex-start;
  padding: 0 1.5rem;
  box-sizing: border-box;
}

.card-img {
  height: 250px;
  width: 300px;
  margin-bottom: 1.5rem;
  border-radius: 15px;
}

.card-info {
  width: 500px;
  max-width: 100%;
  padding: 0 1rem;
}

@media only screen and (max-width: 575px) {
  .card-img {
    width: 100%;
    height: auto;
  }

  .card-info {
    padding: 0;
  }
}

.card-title {
  margin-bottom: 0.4rem;
  max-width: 100%;
  margin-top: 0;
  color: rgb(0, 108, 148);

  font-size: 20px;
}

a {
  text-decoration: none;
}

a:hover {
  color: rgb(0, 163, 223);
}

.card-subtitle {
  margin-bottom: 0.25rem;
  max-width: 100%;
  color: #6635ee;
}

.location-text {
  margin: 0;
}

.description-text {
  white-space: pre-wrap;
  font-weight: 300;
}
</style>
