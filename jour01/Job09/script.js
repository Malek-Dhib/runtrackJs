function tri(numbers, order) {
    if (order === "asc") {
        // Tri du tableau dans l'ordre ascendant
        numbers.sort(function(a, b) {
            return a - b;
        });
    } else if (order === "desc") {
        // Tri du tableau dans l'ordre décroissant
        numbers.sort(function(a, b) {
            return b - a;
        });
    } else {
        console.log("Le paramètre 'order' doit être 'asc' ou 'desc'");
    }
    return numbers;
}

// Test de la fonction avec un tableau de nombres et un ordre
var tableauAscendant = [3, 8, 4, 1, 7, 9, 2, 6, 5];
var tableauDescendant = [3, 8, 4, 1, 5, 9, 2, 6, 7];

console.log(tri(tableauAscendant, "asc")); // Tri ascendant
console.log(tri(tableauDescendant, "desc")); // Tri descendant
