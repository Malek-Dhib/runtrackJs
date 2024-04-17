function afficherJoursSemaines() {
    // Création d'un tableau contenant les jours de la semaine
    var joursSemaines = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi", "Dimanche"];

    // Parcours du tableau et affichage des jours
    for (var i = 0; i < joursSemaines.length; i++) {
        console.log(joursSemaines[i]);
    }
}

// Appel de la fonction pour afficher les jours de la semaine
afficherJoursSemaines();
