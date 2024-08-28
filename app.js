"use strict";

// let numbersOfSeries;

// function series() {
//     for (let i = 0; i < 1; i++) {
//         numbersOfSeries = +prompt(`Nechta serial ko'rdingiz ?`, "");

//         if (
//             numbersOfSeries === "" ||
//             numbersOfSeries === null ||
//             isNaN(numbersOfSeries)
//         ) {
//             i--;
//         }
//     }
// }

// series();

// const seriesDB = {
//     count: numbersOfSeries,
//     series: {},
//     actors: {},
//     genres: [],
//     private: false,
// };

// function question() {
//     for (let i = 1; i <= 2; i++) {
//         let savol = prompt(`Savol - ${i} : Oxirgi ko'rgan serialingiz`, ""),
//             point = +prompt(`Javob - ${i} : Necha baho qo'yasiz`, "");

//         if (
//             savol === "" ||
//             savol === null ||
//             point === "" ||
//             point === null ||
//             isNaN(point)
//         ) {
//             i--;
//         } else {
//             seriesDB.series[savol] = point;
//         }
//     }
// }

// function count() {
//     if (numbersOfSeries < 5) {
//         console.log(`Kam serial ko'ribsiz`);
//     } else if (numbersOfSeries >= 5 && numbersOfSeries <= 10) {
//         console.log(`Siz classic tomoshabin ekansiz`);
//     } else if (numbersOfSeries > 10) {
//         console.log(`Siz serial ko'rishda yorvoreyshin ekansiz`);
//     } else {
//         console.log(`Error`);
//     }
// }

// function showDB(pri) {
//     if (pri) {
//         console.log(`DB xavfsizligi himoyalangan`);
//     } else {
//         console.log(seriesDB);
//     }
// }

// function writeGenres() {
//     for (let i = 1; i <= 3; i++) {
//         let savol = prompt(`Gener - ${i} : Yaxshi ko'rgan janringiz`);

//         if (savol == "" || savol == null) {
//             i--;
//         } else {
//             seriesDB.genres.push(savol);
//         }
//     }
// }

// question();
// count();
// showDB(seriesDB.private);
// writeGenres();

// console.log(seriesDB);

// do while va while

let numbersOfSeries;

function series() {
    do {
        numbersOfSeries = +prompt(`Nechta serial ko'rdingiz ?`, "");
    } while (
        numbersOfSeries === "" ||
        numbersOfSeries === null ||
        isNaN(numbersOfSeries)
    );
}

series();

const seriesDB = {
    count: numbersOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false,
};

function question() {
    for (let i = 1; i <= 2; i++) {
        let savol, point;
        do {
            savol = prompt(`Savol - ${i} : Oxirgi ko'rgan serialingiz`, "");
            point = +prompt(`Javob - ${i} : Necha baho qo'yasiz`, "");
        } while (
            savol === "" ||
            savol === null ||
            point === "" ||
            point === null ||
            isNaN(point)
        );

        seriesDB.series[savol] = point;
    }
}

function count() {
    if (numbersOfSeries < 5) {
        console.log(`Kam serial ko'ribsiz`);
    } else if (numbersOfSeries >= 5 && numbersOfSeries <= 10) {
        console.log(`Siz classic tomoshabin ekansiz`);
    } else if (numbersOfSeries > 10) {
        console.log(`Siz serial ko'rishda yorvoreyshin ekansiz`);
    } else {
        console.log(`Error`);
    }
}

function showDB(pri) {
    if (pri) {
        console.log(`DB xavfsizligi himoyalangan`);
    } else {
        console.log(seriesDB);
    }
}

function writeGenres() {
    let i = 1;
    while (i <= 2) {
        let savol = prompt(`Gener - ${i} : Yaxshi ko'rgan janringiz`);
        if (savol !== "" && savol !== null) {
            i--;
        }
    }
}

question();
count();
showDB(seriesDB.private);
writeGenres();

console.log(seriesDB);
