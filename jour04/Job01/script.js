const button = document.getElementById("button");
const expressionContainer = document.getElementById("expressionContainer");

button.addEventListener("click", fetchExpression);

function fetchExpression() {
    fetch("Bananes.txt")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur lors du chargement du fichier.");
            }
            return response.text();
        })
        .then(text => {
            const paragraph = document.createElement("p");
            paragraph.textContent = text;
            expressionContainer.appendChild(paragraph);
        })
        .catch(error => {
            console.error("Erreur:", error);
        });
}
