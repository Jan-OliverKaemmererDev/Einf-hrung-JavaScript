// 1. Aufgabe: Erstelle ein p-tag mit einer selbst gewählten id und Inhalt.


// 2. Aufgabe: Füge mit JavaScript dem p-tag einen title hinzu.
document.getElementById('p_setAttribute_lesson').title = "P-Element-Lesson";


// 3. Probiere aus: Kannst du auch eine css class mit setAttribute hinzufügen?
document.getElementById('p_setAttribute_lesson').setAttribute = ('type', 'text');
document.getElementById('p_setAttribute_lesson').setAttribute = ('color: red');
document.getElementById('p_setAttribute_lesson').style.color = 'red';
// Der korrekte Weg, um mit JavaScript die CSS-Eigenschaft Textfarbe für das p-Element zu ändern, ist die Verwendung der .style.color Syntax, nicht .setAttribute() für Inline-Styles.


// 4. Probiere aus: Worin liegt der Unterschied von classList.add("test_class") und setAttribute("class", "test_class")?

// Die Methode classList.add() fügt die angegebene Klasse zur Menge der vorhandenen Klassen hinzu, ohne die anderen Klassen zu beeinträchtigen.
document.getElementById('p_setAttribute_lesson').classList.add("test_class");

// Die Methode setAttribute überschreibt das gesamte class-Attribut. Alle vorherigen Klassen werden gelöscht und durch den neuen String ersetzt.
document.getElementById('p_setAttribute_lesson2').setAttribute("class", "test_class");