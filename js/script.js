const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


let lastFilm;
let rating;


for (let i = 0; i < 2; i++) {
    lastFilm = prompt("Один из просмотренных фильмов?", "");
    rating = prompt("На сколько оцените его", "");


    if ((lastFilm && rating !== null) && ((lastFilm && rating) !== "") && (lastFilm.length < 50 && rating.length < 50)) {
        personalMovieDB.movies[lastFilm] = rating;
        console.log(personalMovieDB);
        console.log("Done");
    } else {
        console.log("Error");
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert("Просмотренно довольно мало фильмов!");
} else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
    alert("Вы классический зритель");
} else if (personalMovieDB.count > 30) {
    alert("Вы киноман!");
}