let title = document.getElementById('website_title').innerHTML;
console.log(title);


document.getElementById('test_div').innerHTML = 'test';



// Aufgabe: Button hinzufügen

document.getElementById('test_button').innerHTML = '<button>Klick mich</button>';
// Aufgabe ENDE


// Ich kann via JavaScript den div Containern einen css Style zuweisen
// Mit add, remove, toggle
document.getElementById('test_div').classList.add('green_bg');
document.getElementById('test_div').classList.remove('green_bg');
document.getElementById('test_div').classList.toggle('green_bg');

// Ich kann via JavaScrpit die types und values eines input Felds Verändern
document.getElementById('test_input').setAttribute('type', 'text');
document.getElementById('test_input').setAttribute('value', 'hallo');

// Das geht bei input-Feldern auch direk, ohne setAttribute
document.getElementById('test_input1.0').value=123456;

// Man sollte aber immer setAttribute verwenden
document.getElementById('test_input2').setAttribute('value', '123456');
console.log(document.getElementById('test_input2').value); // So liest man ein input-Feld aus.