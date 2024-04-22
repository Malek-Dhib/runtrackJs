var shuffleButton = document.getElementById("shuffleButton");
var rainbowContainer = document.getElementById("rainbowContainer");
var droppableContainer = document.getElementById("droppableContainer");
var resultMessage = document.getElementById("resultMessage");

var images = [
    "arc1.png",
    "arc2.png",
    "arc3.png",
    "arc4.png",
    "arc5.png",
    "arc6.png"
];

shuffleButton.addEventListener("click", shuffleImages);

function shuffleImages() {
    images.sort(() => Math.random() - 0.5);
    rainbowContainer.innerHTML = "";

    images.forEach(function(image) {
        var img = document.createElement("img");
        img.src = image;
        img.alt = "arc-en-ciel";
        img.classList.add("rainbowImage");
        img.draggable = true; // Rendre les images déplaçables
        rainbowContainer.appendChild(img);
    });

    droppableContainer.innerHTML = ""; // Réinitialiser le conteneur déposable
    resultMessage.textContent = ""; // Réinitialiser le message de résultat
}

rainbowContainer.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
});

droppableContainer.addEventListener("dragover", function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut
});

droppableContainer.addEventListener("drop", function(event) {
    event.preventDefault(); // Empêcher le comportement par défaut
    var data = event.dataTransfer.getData("text/plain");
    var draggedImage = document.getElementById(data);
    if (draggedImage && event.target === droppableContainer) {
        droppableContainer.appendChild(draggedImage);
        checkOrder();
    }
});


function checkOrder() {
    var orderedImages = Array.from(droppableContainer.children).map(function(image) {
        return image.src.substr(image.src.lastIndexOf('/') + 1);
    });

    var isCorrect = orderedImages.every(function(image, index) {
        return image === images[index];
    });

    if (isCorrect) {
        resultMessage.textContent = "Vous avez gagné";
        resultMessage.style.color = "green";
    } else {
        resultMessage.textContent = "Vous avez perdu";
        resultMessage.style.color = "red";
    }
}
