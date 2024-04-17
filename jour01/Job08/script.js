function estNombrePremier(nombre) {
    if (nombre <= 1) return false; // Les nombres inférieurs ou égaux à 1 ne sont pas premiers
    for (var i = 2; i <= Math.sqrt(nombre); i++) {
        if (nombre % i === 0) {
            return false; // Si le nombre est divisible par un autre nombre que lui-même et 1, il n'est pas premier
        }
    }
    return true; // Si le nombre est divisible uniquement par 1 et lui-même, il est premier
}

function sommeNombresPremiers(nombre1, nombre2) {
    if (estNombrePremier(nombre1) && estNombrePremier(nombre2)) {
        return nombre1 + nombre2; // Si les deux nombres sont premiers, retourner leur somme
    } else {
        return false; // Sinon, retourner false
    }
}

// Test de la fonction avec deux nombres
console.log(sommeNombresPremiers(5, 7)); // Résultat attendu: 12 (5 + 7)
console.log(sommeNombresPremiers(6, 7)); // Résultat attendu: false (6 n'est pas premier)
console.log(sommeNombresPremiers(13, 17)); // Résultat attendu: 30 (13 + 17)
