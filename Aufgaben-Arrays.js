// Aufgabenstellung 1: includes
// Implementiere eine Funktion namens containsElement(array, element), die true zurückgibt, wenn element im array enthalten ist, andernfalls false.

let names = ["Anna", "Ben", "Clara"];

function containsElement(array, element) {
    return array.includes(element);
}

function initArrays() {
    console.log(containsElement(names, "Ben"));
}


// Aufgabenstellung 2: indexOf
// Implementiere eine Funktion namens findElementIndex(array, element), die den Index des ersten Vorkommens von element im array zurückgibt oder -1, wenn es nicht gefunden wird.

let numbers = [10, 20, 30, 40];

function findElementIndex(array, element) {
    return array.indexOf(element);
}

function initArrays() {
    console.log(findElementIndex(numbers, 20));
}


// Aufgabenstellung 3: shift
// Implementiere eine Funktion namens removeFirstElement(array), die das erste Element aus dem array entfernt und das neue Array zurückgibt.

function removeFirstElement(array) {
    return array.shift();
}

function initArrays() {
    console.log(removeFirstElement([10, 20, 30, 40]));
}

function initArrays() {
    console.log(removeFirstElement(['a', 'b', 'c', 'd']));
}


// Aufgabenstellung 4: unshift
// Implementiere eine Funktion namens addElementToStart(array, element), die das element am Anfang des array hinzufügt und das neue Array zurückgibt.

function addElementToStart(array, element) {
    return [element, ...array];
}

function initArrays() {
    console.log(addElementToStart([2, 3, 4], 1));
}

function initArrays() {
    console.log(addElementToStart(['b', 'c', 'd'], 'a'));
}


// Aufgabenstellung 5: slice
// Implementiere eine Funktion namens getSubArray(array, start, end), die ein neues Array zurückgibt, das die Elemente von start bis end (nicht eingeschlossen) enthält.

function getSubArray(array, start, end) {
    return array.slice(start, end);
}

function initArrays() {
    console.log(getSubArray([1, 2, 3, 4, 5], 1, 4));
}

function initArrays() {
    console.log(getSubArray(['a', 'b', 'c', 'd', 'e'], 0, 3));
}


// Aufgabenstellung 6: join
// Implementiere eine Funktion namens joinArray(array, separator), die eine Zeichenkette zurückgibt, die aus den Elementen des array besteht, getrennt durch den separator.

function joinArray(array, separator) {
    return array.join(separator)
}

function initArrays() {
    console.log(joinArray(['apple', 'banana', 'cherry'], ', '));
}

function initArrays() {
    console.log(joinArray([1, 2, 3, 4], ' - '));
}