// Sélectionner les boutons et l'élément de citation
var showTextButton = document.getElementById("showTextButton");
var hideElementButton = document.getElementById("hideElementButton");
var citation = document.getElementById("citation");

// Ajouter un écouteur d'événements pour afficher le texte lors du clic sur le premier bouton
showTextButton.addEventListener("click", function() {
    citation.style.display = "block";
});

// Ajouter un écouteur d'événements pour masquer l'élément lors du clic sur le deuxième bouton
hideElementButton.addEventListener("click", function() {
    citation.style.display = "none";
});
