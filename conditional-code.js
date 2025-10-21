let myCondition = true;

myCondition = !myCondition  // das ! ist der "not Operator"

myCondition = false || false || true; // or Operator. Sobald in der Kette einmal true ist, dann ist es true.

myCondition = true && true && false; // und Operator. Sobald in der Kette ein false ist, dann ist es false. Außer bei einer einzelnen Entscheidung.

console.log(myCondition);

console.log(true && false);                     // -> false

console.log(true || false);                     // -> true

console.log(false && true);                     // -> false

console.log(true && (false || true));           // -> true

console.log((true && false) || true);           // -> true

console.log(!(true && false));                  // -> true

console.log(!(false || true));                  // -> false

console.log(!(true && (false || true)));        // -> false

console.log((true && !(false || true)) || (false && (true || false)));                  // -> false

console.log((true || !(false && true)) && (!(true || false) || (false && true)));       // -> false


myCondition = 45 == "45"; // == Operator testet ob exakt gleich. Testet dabei nicht, ob der Typ gleich ist.

myCondition = 45 === 45; // === Operator testet ob exakt gleich. Testet auch den Typen. -> true
myCondition = 45 === "45"; // === Operator testet ob exakt gleich. Testet auch den Typen. -> false

myCondition = 45 < 123; // kleiner-als Abfrage
myCondition = 45 <= 45; // kleiner-gleich Abfrage

myCondition = 45 != "47"; // not-gleich dreht das Ergebnis um
myCondition = 45 !== 47;
myCondition = 45 !== "47";

console.log(myCondition)

console.log(5 <= 10);                               // -> true

console.log(15 == 15);                              // -> true

console.log(20 > 10);                               // -> true

console.log((7 <= 7) == (5 < 10));                  // -> true

console.log((10 > 5) == (3 < 2));                   // -> false

console.log((12 >= 8) && (8 < 9));                  // -> true

console.log((3 == 3) || (10 > 20));                 // -> true

console.log((6 != 6) || (15 <= 20));                // -> true

console.log((7 < 5) == !(10 >= 10));                // -> true

console.log((4 >= 4) && (8 < 15) && (3 == 3));      // -> true



let myIfCondition = false;

if(myIfCondition){
    console.log("hello world! if Teil");
} else if(myCondition) {
    console.log("hello world! else-if Teil");
} else {
    console.log("hello world! else Teil");
}


// Aufgabe 1:
if (5 <= 10) {
    console.log("a");       // -> a
}

// Aufgabe 2:
if (15 == 15) {
    console.log("b");       // -> b
}

// Aufgabe 3:
if (20 > 10) {
    console.log("c");       // -> c
}

// Aufgabe 4:
if (7 <= 7) {
    console.log("a");
} else {
    console.log("b");       // -> a
}

// Aufgabe 5:
if (10 > 5) {
    console.log("a");
} else if (3 < 2) {
    console.log("b");
} else {
    console.log("c");       // -> a
}

// Aufgabe 6:
if (12 >= 8 && 8 < 9) {
    console.log("a");
} else {
    console.log("b");       // -> a
}

// Aufgabe 7:
if (3 == 3) {
    console.log("a");
} else if (10 > 20) {
    console.log("b");
} else {
    console.log("c");       // -> a
}

// Aufgabe 8:
if (6 != 6) {
    console.log("a");
} else if (15 <= 20) {
    console.log("b");
} else {
    console.log("c");       // -> b
}

// Aufgabe 9:
if (7 < 5) {
    console.log("a");
} else if (!(10 >= 10)) {
    console.log("b");
} else {
    console.log("c");       // -> c
}

// Aufgabe 10:
if (4 >= 4 && 8 < 15 && 3 == 3) {
    console.log("a");
} else {
    console.log("b");       // -> a
}