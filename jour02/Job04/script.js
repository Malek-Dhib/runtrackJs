// Récupérer le textarea
var textarea = document.getElementById("keylogger");

// Ajouter un écouteur d'événements pour détecter les frappes clavier
document.addEventListener("keypress", function(event) {
    var keyPressed = event.key;

    // Vérifier si le caractère tapé est une lettre de l'alphabet
    if (/^[a-zA-Z]$/.test(keyPressed)) {
        // Si le focus est sur le textarea, ajouter le caractère deux fois
        if (document.activeElement === textarea) {
            textarea.value += keyPressed + keyPressed;
        } else {
            textarea.value += keyPressed;
        }
    }
});
