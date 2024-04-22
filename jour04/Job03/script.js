document.getElementById("filterButton").addEventListener("click", function() {
    const filterForm = document.getElementById("filterForm");
    const formData = new FormData(filterForm);

    fetch("pokemon.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur lors du chargement du fichier.");
            }
            return response.json();
        })
        .then(data => {
            const filteredPokemon = data.filter(pokemon => {
                return Object.keys(formData).every(key => {
                    const formValue = formData.get(key);
                    if (formValue === "") {
                        return true; // Si aucun filtre n'est spécifié, tous les Pokemon sont valides
                    }
                    if (key === "type") {
                        // On vérifie si le type du Pokemon est inclus dans les types sélectionnés
                        return pokemon.type.includes(formValue);
                    } else if (key === "nom") {
                        // On vérifie si le nom du Pokemon correspond à la valeur saisie (ignorant la casse)
                        return Object.values(pokemon.name).some(name => name.toLowerCase().includes(formValue.toLowerCase()));
                    } else {
                        // On vérifie si la valeur saisie correspond à la valeur du champ dans le Pokemon
                        return pokemon[key].toString().toLowerCase().includes(formValue.toLowerCase());
                    }
                });
            });

            displayPokemon(filteredPokemon);
        })
        .catch(error => {
            console.error("Erreur:", error);
        });
});

function displayPokemon(pokemonArray) {
    const pokemonList = document.getElementById("pokemonList");
    pokemonList.innerHTML = "";

    pokemonArray.forEach(pokemon => {
        const pokemonElement = document.createElement("div");
        pokemonElement.textContent = `ID: ${pokemon.id}, Nom: ${pokemon.name.english}, Type: ${pokemon.type.join(", ")}`;
        pokemonList.appendChild(pokemonElement);
    });
}
