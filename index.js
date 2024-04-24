// let data = dummyData;

/* Read */
function listMovies(movies) {
  let result = {};

  for (let perMovie of movies) {
    console.log(perMovie);
  }

  return result;
}
console.log(
  listMovies([
    {
      id: 0,
      name: "Jenal the movie",
      category: "Action",
      year: 2024,
      img: "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
      link: "https://www.youtube.com/watch?v=2QKg5SZ_35I",
      actors: ["Tom Cruise", "Jenal"],
    },
    {
      id: 1,
      name: "Doraemon",
      category: "Cartoon",
      year: 2000,
      img: "https://i.pinimg.com/736x/74/c1/18/74c118b4cffc66837af9a42e003da097.jpg",
      link: "https://www.youtube.com/watch?v=bNd5xfqVw1M",
      actors: ["Shizuka", "Nobita"],
    },
  ])
);
