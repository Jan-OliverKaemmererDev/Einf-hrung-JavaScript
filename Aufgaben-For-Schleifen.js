// Aufgabenstellung 1: Summe der Elemente eines Arrays
// Implementiere eine for-Schleife, um die Summe der Elemente in einem Array zu berechnen und zurückzugeben.

function sumArray(arr) {
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index]; 
    }
    
    return sum;
}

console.log(sumArray([3, 7, 1, 4]));


// Aufgabenstellung 2: Ausgabe einer Zahlenreihe
// Implementiere eine for-Schleife, um die Zahlen von 1 bis n in aufsteigender Reihenfolge auszugeben.

printNumbers(5);

function printNumbers(number) {
    let output = "";
    for (let index = 1; index <= number; index++) {
        output += index;
        if (index < number) {
            output += ", ";
        }
    }
    console.log(output);
}

printNumbers2(3);

function printNumbers2(number) {
    let output = "";
    for (let index = 1; index <= number; index++) {
        output += index;
        if (index < number) {
            output += ", ";
        }
    }
    console.log(output);
}


// Aufgabenstellung 3: Rückwärts laufende for-Schleife
// Implementiere eine for-Schleife, die die Zahlen von der gegebenen Zahl bis 1 in absteigender Reihenfolge ausgibt.

printNumbersReverse(5);

function printNumbersReverse(number) {
    let output = "";
    for (let index = number, index > 0; index++) {
        otput -= index;
        if (index > 1) {
            output += ", ";
        }
    }
    console.log(output)
}