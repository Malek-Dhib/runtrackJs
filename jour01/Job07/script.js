function jourTravaille(date) {
    // Récupérer le jour de la semaine (0 pour dimanche, 1 pour lundi, ..., 6 pour samedi)
    var jourSemaine = date.getDay();

    // Récupérer le mois, le jour et l'année de la date
    var mois = date.getMonth() + 1; // Ajouter 1 car les mois vont de 0 à 11
    var jour = date.getDate();
    var annee = date.getFullYear();

    // Vérifier si la date est un jour férié en 2024
    var joursFeries2024 = [
        "01/01", "01/05", "08/05", "14/07", "15/08", "01/11", "11/11", "25/12"
    ];
    var dateFerie = ("0" + jour).slice(-2) + "/" + ("0" + mois).slice(-2);
    if (joursFeries2024.includes(dateFerie)) {
        console.log("Le " + jour + "/" + mois + "/" + annee + " est un jour férié");
    }
    // Vérifier si la date est un samedi ou un dimanche (week-end)
    else if (jourSemaine === 0 || jourSemaine === 6) {
        console.log("Non, le " + jour + "/" + mois + "/" + annee + " est un week-end");
    }
    // Sinon, c'est un jour travaillé
    else {
        console.log("Oui, le " + jour + "/" + mois + "/" + annee + " est un jour travaillé");
    }
}

// Test de la fonction avec une date donnée
jourTravaille(new Date(2024, 0, 1)); // Jour férié (01/01/2024)
jourTravaille(new Date(2024, 0, 5)); // Jour férié (05/01/2024)
jourTravaille(new Date(2024, 0, 6)); // Week-end (06/01/2024)
jourTravaille(new Date(2024, 3, 15)); // Jour travaillé (15/04/2024)
