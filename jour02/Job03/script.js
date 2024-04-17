// Initialiser le compteur
var compteur = 0;

// Fonction pour ajouter un à chaque clic sur le bouton
function addOne() {
    compteur++; // Incrémenter le compteur
    document.getElementById("compteur").textContent = compteur; // Mettre à jour le contenu de l'élément <p>
}

// Ajouter un écouteur d'événements sur le bouton pour appeler la fonction addOne
document.getElementById("button").addEventListener("click", addOne);
