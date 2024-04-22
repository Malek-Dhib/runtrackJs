document.getElementById("updateButton").addEventListener("click", function() {
    fetch("utilisateur.json")
        .then(response => {
            if (!response.ok) {
                throw new Error("Erreur lors du chargement des utilisateurs.");
            }
            return response.json();
        })
        .then(data => {
            displayUsers(data);
        })
        .catch(error => {
            console.error("Erreur:", error);
        });
});

function displayUsers(users) {
    const userTableBody = document.querySelector("#userTable tbody");
    userTableBody.innerHTML = "";

    users.forEach(user => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.nom}</td>
            <td>${user.prenom}</td>
            <td>${user.email}</td>
        `;
        userTableBody.appendChild(row);
    });
}
