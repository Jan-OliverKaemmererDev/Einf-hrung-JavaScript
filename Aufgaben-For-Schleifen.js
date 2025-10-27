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
printNumbers(3);

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


// Aufgabenstellung 3: Rückwärts laufende for-Schleife
// Implementiere eine for-Schleife, die die Zahlen von der gegebenen Zahl bis 1 in absteigender Reihenfolge ausgibt.

printNumbersReverse(5);
printNumbersReverse(3);

function printNumbersReverse(number) {
    let output = "";
    for (let index = number; index >= 1; index--) {
        output += index;
        if (index > 1) {
            output += ", ";
        }
    }
    console.log(output)
}


// Aufgabenstellung 4: Nur jedes dritte Element ausgeben
// Implementiere eine for-Schleife, die jedes dritte Element des gegebenen Arrays ausgibt.

printEveryThirdElement([1, 2, 3, 4, 5, 6, 7, 8, 9]);
printEveryThirdElement(['a', 'b', 'c', 'd', 'e', 'f']);

function printEveryThirdElement(liste) {  
    let output = "";
    for (let index = 0; index < liste.length; index += 3) {
        output += liste[index];
        if (index + 3 < liste.length) {
            output += ", ";
        }
    }
    console.log(output);
}


// Bonusaufgabe: Prüfung auf Primzahlen
// Implementiere eine for-Schleife, um zu überprüfen, ob die gegebene Zahl eine Primzahl ist (d.h. nur durch 1 und sich selbst teilbar ist). Gib true zurück, wenn sie eine Primzahl ist, andernfalls false.

function isPrime(prime) {
    if (prime <= 1) {
        return false;
    }

    const limit = Math.sqrt(prime);

    for (let index = 2; index <= limit; index++) {
        if (prime % index === 0) {
            return false;
        }
    }

    return true;
}

console.log(isPrime(7));
console.log(isPrime(4));
console.log(isPrime(1));
console.log(isPrime(13));