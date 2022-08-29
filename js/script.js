let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastFilm;
let rating;

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотренно довольно мало фильмов!");
    } else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
        alert("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        alert("Вы киноман!");
    }
}

detectPersonalLevel();

function showMyDB(privat) {
    if (!privat) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
    }
}

writeYourGenres();

























































///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////