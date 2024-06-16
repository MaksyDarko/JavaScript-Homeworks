// Task 1

const movies = [
  {
    title: "Inception",
    director: "Christopher Nolan",
    year: 2010,
    rating: 8.8,
    duration: 148,
  },
  {
    title: "Interstellar",
    director: "Christopher Nolan",
    year: 2014,
    rating: 8.6,
    duration: 169,
  },
  {
    title: "The Dark Knight",
    director: "Christopher Nolan",
    year: 2008,
    rating: 9.0,
    duration: 152,
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: 1994,
    rating: 8.9,
    duration: 154,
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    year: 1994,
    rating: 9.3,
    duration: 142,
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: 1972,
    rating: 9.2,
    duration: 175,
  },
  {
    title: "The Matrix",
    director: "Lana Wachowski, Lilly Wachowski",
    year: 1999,
    rating: 8.7,
    duration: 136,
  },
  {
    title: "Fight Club",
    director: "David Fincher",
    year: 1999,
    rating: 8.8,
    duration: 139,
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    year: 1994,
    rating: 8.8,
    duration: 142,
  },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    director: "Peter Jackson",
    year: 2001,
    rating: 8.8,
    duration: 178,
  },
];

// Task 1 - Find Method
// We type in the movie director that we wan't to find.

let findByDirector = movies.find(
  (movies) => movies.director === `Robert Zemeckis`
);
console.log(findByDirector);

// Task 2 - Some Method
// Here we check if there are any movies released before the year 2000.

const hasOldMovies = movies.some((movie) => movie.year < 2000);
console.log(hasOldMovies);

// Task 3 - Every Method
// Here we check if all movies have a rating greater than 8.5.

const hihglyRated = movies.every((movies) => movies.rating > 8.5);
console.log(hihglyRated);

// Task 4 - ForEach Method
// Here we give the movie name and the duration on the movie.

const durationMovie = movies.forEach((movie) => {
  console.log(
    `The duration of the ${movie.title} is : ${movie.duration} minutes.`
  );
});

// Task 5 - Sort  Method
// Here we sort the movies by their release year.
// The sort method gives us the movies list starting from the lowest year realeased to the highest.

const sortedByYear = movies.sort((a, b) => a.year - b.year);
console.log(sortedByYear);

// Task 6 - Map Method
// With the map method we create a new array that shows only the titles of the movies.

const movieTitles = movies.map((movie) => movie.title);
console.log(movieTitles);

// Task 7 - Filter Method
// With the filter method we filtered every movie that has the director Ch Nolan.

const chNolanMovies = movies.filter(
  (movie) => movie.director === `Christopher Nolan`
);
console.log(chNolanMovies);
