// 01 Aufgabe: Erstelle eine Funktion namens "fullName", die zwei Strings als Parameter übernimmt, sie zusammenfügt zu einem einzigen String und diesen zurückgibt (returned).

fullName("Asterix ", "Der Gallier");
function fullName(FirstName, LastName) {
    console.log(FirstName + LastName);
}


// 02 Aufgabe: Erstelle eine Funktion namens "capitalizeLetters", die einen String als Parameter übernimmt, jeden Buchstaben darin groß schreibt und diesen dann wieder zurückgibt.

function capitalizeLetters(str) {
    return str.toUpperCase();
}
console.log(capitalizeLetters("bAnanE"));


// 03 Aufgabe: Erstelle eine Funktion namens "countCharacters", die einen String als Parameter übernimmt und die Anzahl der Zeichen in diesem String zurückgibt.

function countCharacters(str) {
    return str.length;
}
console.log(countCharacters("banana"));


// Knacker-Aufgabe: Erstelle eine Funktion namens "formatToCurrency", die eine Dezimalzahl als Parameter übernimmt und diese als Währungswert im Format 0,00€ zurückgibt. Verwende die toFixed() Methode, um zwei Nachkommastellen sicherzustellen und ersetze den Punkt durch ein Komma.

formatToCurrency(0.5);

function formatToCurrency(number) {
    console.log(new Intl.NumberFormat("de-DE", { style: "currency", currency: "EUR" }).format(number));
}