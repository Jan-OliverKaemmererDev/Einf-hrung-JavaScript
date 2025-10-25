let myList= [12, "Banana", 1];

let fruits = ["Banana", "Orange", "Apple", "Mango"];

let singletestVar = fruits.pop()

function initArrays() {
    myList[0] = "No Banana"

    console.log(fruits);
}


// Übung for-Schleife

function initArrays() {
    let contentRef = document.getElementById('my_content');
    contentRef.innerHTML = "";
    for (let indexFruits = 0; indexFruits < fruits.length; indexFruits += 1) {
        contentRef.innerHTML += `<p>${fruits[indexFruits]}</p>`
    }
}