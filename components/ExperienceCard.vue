<template>
  <div class="card">
    <img
      class="card-img"
      src="https://avatars3.githubusercontent.com/u/43609718?s=460&u=0b367126ab4d8861419a17866491fc3ba871e6d1&v=4"
    />
    <div class="card-info">
      <a v-if="url !== ''" class="card-title" :href="url" target="_blank">{{ company }}</a>
      <span v-else class="card-title">{{ company }}</span>
      <p class="card-subtitle">
        <span>{{ jobTitle }}</span>
        <i>{{ dates }}</i>
      </p>
      <p class="location-text">{{ experience.location }}</p>
      <p class="description-text">{{ experience.description }}</p>
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
      return this.experience.jobTitle + (this.dates ? ', ' : '');
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
  },
};
</script>

<style scoped>
.card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
}

.card-img {
  height: 250px;
  width: 300px;
  margin-bottom: 1.5rem;
}

.card-info {
  width: 500px;
  max-width: 100%;
  padding: 0 1rem;
}

.card-title {
  margin-bottom: 0.4rem;
  max-width: 100%;
  margin-top: 0;
  color: rgb(0, 187, 255);
  font-size: 20px;
}

a {
  text-decoration: none;
}

a:hover {
  color: red;
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
