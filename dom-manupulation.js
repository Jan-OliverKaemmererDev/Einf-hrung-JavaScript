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


// Toggle Test Übung
function toggleDNone(id) {
    document.getElementById(id).classList.toggle('d_none')
}

function logger() {
    console.log(123456);
}


// OnKeyUp & OnKeyDown Übung
function onkeyupdown(eventType) {
    const inputElement = document.activeElement; 
    const value = inputElement.value;
    console.log(`[${eventType}] Aktueller Value des Feldes '${inputElement.id}': "${value}"`);
}

// Der Hauptunterschied liegt im Zeitpunkt des Event-Feuers, relativ zur Aktualisierung des Input-Wertes im DOM.

// onkeydown feuert zu früh, um den gerade neu eingegebenen Buchstaben in input.value zu erfassen.

// onkeyup feuert zu spät genug, um den gerade neu eingegebenen Buchstaben in input.value zu erfassen.

// Wenn man den aktuellen (den neuen) Wert eines Inputfeldes nach einer Benutzereingabe auslesen möchte, ist onkeyup (oder besser noch, das oninput Event) in den meisten Fällen die korrektere Wahl.



// addEventListener Übung

document.getElementById("our_p_tag").addEventListener("click", logger);