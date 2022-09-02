const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
        }
    },

    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt("Один из просмотренных фильмов?", "").trim(),
                rating = prompt("На сколько оцените его", "").trim();


            if ((lastFilm && rating !== null) && ((lastFilm && rating) !== "") && (lastFilm.length < 50 && rating.length < 50)) {
                personalMovieDB.movies[lastFilm] = rating;
                console.log(personalMovieDB);
                console.log("Done");
            } else {
                console.log("Error");
                i--;
            }
        }
    },

    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            alert("Просмотренно довольно мало фильмов!");
        } else if (personalMovieDB.count < 30 && personalMovieDB.count > 10) {
            alert("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            alert("Вы киноман!");
        }
    },

    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat === false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },

    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {

            let genre = prompt(`Ваш любимый жанр под номером ${i+1}`, '').trim();

            if (genre == null || genre == "") {
                i--;
            }

            personalMovieDB.genres[i] = genre;
        }

        personalMovieDB.genres.forEach(function (item, i) {
            console.log(`Любимый жанр ${i+1} - это ${item}`);
        });
    }
};