
// ZADANIE 1

let tab1 = [7, 3, 1, 6, 9, 5, 4, 10, 2, 2];

document.getElementById("wynik1").innerHTML =
    "Piąty element: " + tab1[4];

tab1[6] = 12;

let tab2 = [];
let tab3 = [];

for (let i = 0; i < tab1.length; i++) {
    tab2[i] = tab1[i];
    tab3[i] = tab1[i] + tab2[i];
}

for (let i = 0; i < tab1.length; i++) {
    tab2[i] = tab1[tab1.length - 1 - i];
}

document.getElementById("wynik1").innerHTML +=
    "<br>tab1: " + tab1 +
    "<br>tab2: " + tab2 +
    "<br>tab3: " + tab3;


// ZADANIE 2

let dane = prompt("Podaj liczby oddzielone przecinkami:");
let tab = dane.split(",");

let min = Number(tab[0]);
let max = Number(tab[0]);
let suma = 0;
let trojki = 0;
let parzyste = 0;
let nieparzyste = 0;
let podzielne = 0;

for (let i = 0; i < tab.length; i++) {
    tab[i] = Number(tab[i]);

    if (tab[i] < min) {
        min = tab[i];
    }

    if (tab[i] > max) {
        max = tab[i];
    }

    suma += tab[i];

    if (String(tab[i]).includes("3")) {
        trojki++;
    }

    if (tab[i] % 2 == 0) {
        parzyste++;
    } else {
        nieparzyste++;
    }

    if (tab[i] % 3 == 0) {
        podzielne++;
    }
}

let srednia = suma / tab.length;

// Sortowanie rosnące
for (let i = 0; i < tab.length; i++) {
    for (let j = 0; j < tab.length - 1; j++) {
        if (tab[j] > tab[j + 1]) {
            let pomoc = tab[j];
            tab[j] = tab[j + 1];
            tab[j + 1] = pomoc;
        }
    }
}

let mediana;

if (tab.length % 2 == 0) {
    mediana = (tab[tab.length / 2 - 1] + tab[tab.length / 2]) / 2;
} else {
    mediana = tab[Math.floor(tab.length / 2)];
}

let trzyMale = "";
let trzyDuze = "";

for (let i = 0; i < 3 && i < tab.length; i++) {
    trzyMale += tab[i] + " ";
    trzyDuze += tab[tab.length - 1 - i] + " ";
}

// Podnoszenie do kwadratu
let kwadraty = "";

for (let i = 0; i < tab.length; i++) {
    kwadraty += tab[i] * tab[i] + " ";
}

document.getElementById("wynik2").innerHTML =
    "Najmniejsza: " + min +
    "<br>Największa: " + max +
    "<br>Średnia: " + srednia +
    "<br>Wystąpienia cyfry 3: " + trojki +
    "<br>Sortowanie rosnące: " + tab +
    "<br>Mediana: " + mediana +
    "<br>3 najmniejsze: " + trzyMale +
    "<br>3 największe: " + trzyDuze +
    "<br>Kwadraty: " + kwadraty +
    "<br>Parzyste: " + parzyste +
    "<br>Nieparzyste: " + nieparzyste +
    "<br>Podzielne przez 3: " + podzielne;


// ZADANIE 3

let slowo = prompt("Podaj wyraz 10-literowy:");

while (slowo.length != 10) {
    slowo = prompt("Wyraz musi mieć 10 liter. Podaj ponownie:");
}

let litery = slowo.split("");

for (let i = 0; i < litery.length; i++) {
    if (litery[i] == litery[i].toUpperCase()) {
        litery[i] = litery[i].toLowerCase();
    } else {
        litery[i] = litery[i].toUpperCase();
    }
}

let losowe = [];

for (let i = 0; i < 10; i++) {
    losowe[i] = slowo[i];
}

for (let i = 0; i < 10; i++) {
    let los = Math.floor(Math.random() * 10);
    let pomoc = losowe[i];
    losowe[i] = losowe[los];
    losowe[los] = pomoc;
}

document.getElementById("wynik3").innerHTML =
    "Litery po zamianie: " + litery +
    "<br>Losowa kolejność: " + losowe;


// ZADANIE 4

let A = [];

for (let i = 0; i < 100; i++) {
    A[i] = Math.floor(Math.random() * 30) + 1;
}

let najwieksza = A[0];
let ile = 0;

for (let i = 0; i < 100; i++) {
    if (A[i] > najwieksza) {
        najwieksza = A[i];
    }
}

for (let i = 0; i < 100; i++) {
    if (A[i] == najwieksza) {
        ile++;
    }
}

let nieparzysteLiczby = "";
let nieparzysteIndeksy = "";
let przedzial = "";
let ilePrzedzial = 0;

for (let i = 0; i < 100; i++) {
    if (A[i] % 2 != 0) {
        nieparzysteLiczby += A[i] + " ";
    }

    if (i % 2 != 0) {
        nieparzysteIndeksy += A[i] + " ";
    }

    if (A[i] >= 5 && A[i] < 15) {
        przedzial += A[i] + " ";
        ilePrzedzial++;
    }
}

let a = Number(prompt("Podaj liczbę a:"));

let najblizsza = A[0];

for (let i = 1; i < 100; i++) {
    if (Math.abs(A[i] - a) < Math.abs(najblizsza - a)) {
        najblizsza = A[i];
    }
}

let indeksMin = 0;

for (let i = 1; i < 100; i++) {
    if (A[i] < A[indeksMin]) {
        indeksMin = i;
    }
}

let poprzednik = "Brak";
let nastepnik = "Brak";

if (indeksMin > 0) {
    poprzednik = A[indeksMin - 1];
}

if (indeksMin < 99) {
    nastepnik = A[indeksMin + 1];
}

let wieksze10 = [];
let licznik = 0;

for (let i = 0; i < 100; i++) {
    if (A[i] > 10) {
        wieksze10[licznik] = A[i];
        licznik++;
    }
}

document.getElementById("wynik4").innerHTML =
    "Tablica: " + A +
    "<br>Największa liczba: " + najwieksza +
    "<br>Ilość wystąpień: " + ile +
    "<br>Liczby nieparzyste: " + nieparzysteLiczby +
    "<br>Liczby na nieparzystych indeksach: " + nieparzysteIndeksy +
    "<br>Liczby z przedziału [5,15): " + przedzial +
    "<br>Ilość liczb w przedziale: " + ilePrzedzial +
    "<br>Najbliższa liczba do a: " + najblizsza +
    "<br>Poprzednik minimum: " + poprzednik +
    "<br>Następnik minimum: " + nastepnik +
    "<br>Liczby większe od 10: " + wieksze10;


// ZADANIE 5

let B = [];
let licznikB = 0;

for (let i = 0; i < 100; i++) {
    if (A[i] > 10) {
        B[licznikB] = A[i];
        licznikB++;
    }
}

let C = [];
let sumaElementow = 0;

for (let i = 0; i < 100; i++) {
    sumaElementow += A[i];
    C[i] = sumaElementow;
}

// Sortowanie malejące
let malejaco = [];

for (let i = 0; i < 100; i++) {
    malejaco[i] = A[i];
}

for (let i = 0; i < 100; i++) {
    for (let j = 0; j < 99; j++) {
        if (malejaco[j] < malejaco[j + 1]) {
            let pomoc = malejaco[j];
            malejaco[j] = malejaco[j + 1];
            malejaco[j + 1] = pomoc;
        }
    }
}

let powtarzajace = "";

for (let i = 0; i < 100; i++) {
    let ileRazy = 0;

    for (let j = 0; j < 100; j++) {
        if (A[i] == A[j]) {
            ileRazy++;
        }
    }

    let czyByla = false;

    for (let j = 0; j < i; j++) {
        if (A[i] == A[j]) {
            czyByla = true;
        }
    }

    if (ileRazy >= 3 && czyByla == false) {
        powtarzajace += A[i] + " ";
    }
}

document.getElementById("wynik5").innerHTML =
    "Elementy większe od 10: " + B +
    "<br>Tablica sum: " + C +
    "<br>Sortowanie malejące: " + malejaco +
    "<br>Liczby występujące minimum 3 razy: " + powtarzajace;


// ZADANIE 6

let fib = [];

fib[0] = 0;
fib[1] = 1;

for (let i = 2; i < 100; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
}

let potegi = [];

for (let i = 0; i < 100; i++) {
    potegi[i] = 2 ** i;
}

let trojkiCiag = [];

for (let i = 0; i < 100; i++) {
    trojkiCiag[i] = (i + 1) * 3;
}

let podwojne = [];

podwojne[0] = 2;

for (let i = 1; i < 100; i++) {
    podwojne[i] = podwojne[i - 1] * 2;
}

document.getElementById("wynik6").innerHTML =
    "Fibonacci: " + fib +
    "<br><br>Potęgi liczby 2: " + potegi +
    "<br><br>Ciąg 3, 6, 9: " + trojkiCiag +
    "<br><br>Ciąg 2, 4, 8: " + podwojne;
