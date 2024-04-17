function bisextile(annee) {
    if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
        return true; // L'année est bissextile
    } else {
        return false; // L'année n'est pas bissextile
    }
}

// Test de la fonction
console.log(bisextile(2024)); // Résultat attendu: true
console.log(bisextile(2021)); // Résultat attendu: false
