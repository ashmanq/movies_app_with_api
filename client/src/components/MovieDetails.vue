<template lang="html">
  <div class="film-details-card">
      <h2>Film Details:</h2>
      <p><span>Title: </span>{{ film.title }}</p>
      <p><span>Director: </span>{{ film.Crew.Director }}</p>
      <p><span>Producer: </span>{{ film.Crew.Producer }}</p>
      <p><span>Plot: </span>  {{ film.plot }}</p>
  </div>
</template>

<script>

import {eventBus} from '@/main.js';

export default {
  name: 'movie-details',
  props: ['film'],
}
</script>

<style lang="css" scoped>

.film-details-card {
  background-color: #BFDBF7;
  border: 1px solid #BFDBF7;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 50vw;
}
span {
  font-weight:600;
}
</style>
