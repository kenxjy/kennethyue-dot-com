<template>
  <button class="button" @click="$emit('clicked')">
    <svg
      v-if="down"
      class="button-arrow"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </svg>
    <svg
      v-else
      class="button-arrow"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="white"
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
    </svg>
  </button>
</template>

<script>
export default {
  props: {
    down: {
      type: Boolean,
      default: false,
    }
  },
};
</script>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #444;
  border: none;
  border-radius: 5px;
}

.button svg {
  fill: white;
}

.button:hover svg {
  fill: aqua;
}

.button-arrow {
  height: 100%;
  width: 100%;
}
</style>