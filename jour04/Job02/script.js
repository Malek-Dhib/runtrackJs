document.getElementById("getValueButton").addEventListener("click", function() {
    const jsonString = `{
        "name": "La Plateforme_",
        "address": "8 rue d'hozier",
        "city": "Marseille",
        "nb_staff": "11",
        "creation": "2019"
    }`;
    
    const key = "city";
    const value = jsonValueKey(jsonString, key);

    const resultContainer = document.getElementById("resultContainer");
    resultContainer.textContent = `La valeur de la clé "city" est : ${value}`;
});

function jsonValueKey(jsonString, key) {
    try {
        const data = JSON.parse(jsonString);
        return data[key];
    } catch (error) {
        console.error("Erreur lors de l'analyse JSON:", error);
        return null;
    }
}
