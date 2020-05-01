use movies_db;

db.dropDatabase();

db.movies.insertMany([
  {
    Title: "The Shawshank Redemption",
    Genre: "Drama",
    Rating: "15",
    ReleaseDate: "17 February 1995",
    Runtime: "142 mintutes",
    Crew: {
      Director: "Frank Darabont",
      Producer: "Stephen King",
    }
  },
  {
    Title: "Inception",
    Genre: "Action, Adventure, Sci-Fi",
    Rating: "12A",
    ReleaseDate: "16 July 2010",
    Runtime: "148 mintutes",
    Crew: {
      Director: "Christopher Nolan",
      Producer: "Zakaria Alaoui",
    }
  },
  {
    Title: "Pulp Fiction",
    Genre: "Crime, Drama",
    Rating: "18",
    ReleaseDate: "17 February 1995",
    Runtime: "154 mintutes",
    Crew: {
      Director: "Quentin Tarantino",
      Producer: "Lawrence Bender",
    }
  },
  {
    Title: "Spirited Away",
    Genre: "Animation, Adventure, Family",
    Rating: "PG",
    ReleaseDate: "12 September 2003",
    Runtime: "125 mintutes",
    Crew: {
      Director: "Hayao Miyazaki",
      Producer: "Toshio Suzuki",
    }
  },

]);
