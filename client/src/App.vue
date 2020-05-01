<template>
  <section class="container">
    <movie-header />
    <div class="row">
      <films-grid />
      <movie-details v-if="selectedFilm" :film="selectedFilm"/>
    </div>
  </section>
</template>

<script>
import FilmsGrid from '@/components/FilmsGrid';
import MovieHeader from '@/components/MovieHeader';
import MovieDetails from '@/components/MovieDetails';
import {eventBus} from '@/main.js';

export default {
  name: 'app',
  data() {
    return {
      selectedFilm: null,
    }
  },
  mounted() {
    eventBus.$on('selected-film', (film) => {
      this.selectedFilm = film;
    })
  },
  components: {
    'films-grid': FilmsGrid,
    'movie-header': MovieHeader,
    'movie-details': MovieDetails,
  }
}
</script>

<style>

body {
  font-family: 'Source Serif Pro', serif;

  background-color: #E1E5F2;
  background-position: center;
  width: 100%;
  margin: 0 auto;
  color: #1F7A8C;
}

h1, h2, h3 {
  color: #022B3A;
  font-family: 'Skranji', cursive;
}

.container {
  display: flex;
  flex-direction: column;
  align-self: center;
}

.row {
  display: flex;
  width:90%;
  align-self: center;
  justify-content: center;
}
</style>
