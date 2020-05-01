const baseURL = 'http://localhost:3000/api/movies/';

export default {
  getMovies() {
    return fetch(baseURL)
    .then(res => res.json());
  },
  deleteMovie(id){
    return fetch(baseURL + id, {
      method: 'DELETE'
    })
    .then(res => res.json());
  }
};
