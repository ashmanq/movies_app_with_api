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
    },
    plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
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
    },
    plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
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
    },
    plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
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
    },
    plot: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
  },

]);
