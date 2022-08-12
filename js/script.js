const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


const lastFilm = prompt("Один из просмотренных фильмов?", "");
const rating = prompt("На сколько оцените его", "");

personalMovieDB.movies[lastFilm] = rating;

console.log(personalMovieDB);