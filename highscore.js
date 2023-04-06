let highscores = document.getElementById("highscores");

function retrieveHighscores () {
let storedUsers = JSON.parse(localStorage.getItem("highscores"));
console.log(storedUsers);
for (let i = 0; i < storedUsers.length; i++) {
    let scoreDiv = document.createElement("div")
    scoreDiv.innerHTML = "User: ", storedUsers[i].user + "Score: " + storedUsers[i].userScore;
    scoreDiv.style.fontSize = "30px";
    highscores.append(scoreDiv);
}
}

retrieveHighscores();