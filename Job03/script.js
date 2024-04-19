const gameBoard = document.getElementById("gameBoard");
const resultMessage = document.getElementById("resultMessage");
const restartButton = document.getElementById("restartButton");

// Liste des images du jeu
const images = [
    "logo1.PNG",
    "logo2.PNG",
    "logo3.PNG",
    "logo4.PNG",
    "logo5.PNG",
    "logo6.PNG",
    "logo7.PNG",
    "logo8.PNG"
];

// Initialisation du jeu
let tiles = [];
let emptyTileIndex;
initializeGame();

function initializeGame() {
    // Mélanger les images
    const shuffledImages = shuffleArray(images);

    // Créer les carreaux et les ajouter à la grille de jeu
    for (let i = 0; i < shuffledImages.length; i++) {
        const tile = document.createElement("div");
        tile.className = "tile";
        tile.style.backgroundImage = `url(${shuffledImages[i]})`;
        tile.setAttribute("data-index", i);
        tile.addEventListener("click", () => moveTile(i));
        gameBoard.appendChild(tile);
        tiles.push(tile);
    }

    // Trouver l'indice de la case vide
    emptyTileIndex = tiles.length - 1;

    // Afficher le message de résultat et le bouton de redémarrage
    resultMessage.textContent = "";
    restartButton.classList.add("hidden");
}

function shuffleArray(array) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function moveTile(tileIndex) {
    // Vérifier si le clic est sur une case adjacente à la case vide
    if (isAdjacent(tileIndex, emptyTileIndex)) {
        // Échanger les positions du carreau et de la case vide
        [tiles[tileIndex], tiles[emptyTileIndex]] = [tiles[emptyTileIndex], tiles[tileIndex]];
        gameBoard.innerHTML = ""; // Effacer le contenu de la grille
        tiles.forEach(tile => gameBoard.appendChild(tile)); // Réinsérer les carreaux dans la grille

        // Mettre à jour l'indice de la case vide
        emptyTileIndex = tileIndex;

        // Vérifier si le jeu est terminé
        if (isGameComplete()) {
            resultMessage.textContent = "Vous avez gagné !";
            resultMessage.style.color = "green";
            restartButton.classList.remove("hidden");
        }
    }
}

function isAdjacent(tileIndex1, tileIndex2) {
    const row1 = Math.floor(tileIndex1 / 3);
    const col1 = tileIndex1 % 3;
    const row2 = Math.floor(tileIndex2 / 3);
    const col2 = tileIndex2 % 3;

    return (Math.abs(row1 - row2) === 1 && col1 === col2) ||
           (Math.abs(col1 - col2) === 1 && row1 === row2);
}

function isGameComplete() {
    for (let i = 0; i < tiles.length; i++) {
        if (parseInt(tiles[i].getAttribute("data-index")) !== i) {
            return false;
        }
    }
    return true;
}

restartButton.addEventListener("click", () => {
    // Réinitialiser le jeu
    gameBoard.innerHTML = "";
    tiles = [];
    initializeGame();
});
