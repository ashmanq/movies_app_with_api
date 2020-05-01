use movies_db;

db.dropDatabase();

db.movies.insertMany([
  {
    title: "The Shawshank Redemption",
    Genre: "Drama",
    rating: "15",
    release_date: "17 February 1995",
    runtime: "142 mintutes",
    Crew: {
      Director: "Frank Darabont",
      Producer: "Stephen King",
    }
  },
  {
    title: "Inception",
    Genre: "Action, Adventure, Sci-Fi",
    rating: "12A",
    release_date: "16 July 2010",
    runtime: "148 mintutes",
    Crew: {
      Director: "Christopher Nolan",
      Producer: "Zakaria Alaoui",
    }
  },
  {
    title: "Pulp Fiction",
    Genre: "Crime, Drama",
    rating: "18",
    release_date: "17 February 1995",
    runtime: "154 mintutes",
    Crew: {
      Director: "Quentin Tarantino",
      Producer: "Lawrence Bender",
    }
  },
  {
    title: "Spirited Away",
    Genre: "Animation, Adventure, Family",
    rating: "PG",
    release_date: "12 September 2003",
    runtime: "125 mintutes",
    Crew: {
      Director: "Hayao Miyazaki",
      Producer: "Toshio Suzuki",
    }
  },

]);
