// Funktionen Grundwissen
// Der Code wird zwar von oben nach unten gelesen, jedoch kann eine function auch ganz unten stehen.

let discount = 50;
let price = 500;

calculatePrice()

price = 400;

calculatePrice()

function calculatePrice() {
    console.log((price - discount) * 1.19);
}


// Grundwissen zu parms (Parametern)
// Ein Parameter ist ein Platzhalter.

logCalculatedPrice(50, 500);
logCalculatedPrice(50, 300);

function logCalculatedPrice(discount, price) {
    console.log((price - discount) * 1.19);
}