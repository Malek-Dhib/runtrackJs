function showhide() {
    var article = document.getElementById("citation");
    var button = document.getElementById("button");

    // Vérifier si l'article est déjà affiché
    if (article) {
        // L'article existe, le supprimer
        article.parentNode.removeChild(article);
        button.textContent = "Afficher"; // Mettre à jour le texte du bouton
    } else {
        // L'article n'existe pas, le créer et l'ajouter
        var newArticle = document.createElement("article");
        newArticle.textContent = "L'important n'est pas la chute, mais l'atterrissage.";
        newArticle.id = "citation";
        document.body.appendChild(newArticle);
        button.textContent = "Masquer"; // Mettre à jour le texte du bouton
    }
}
