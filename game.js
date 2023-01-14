//Initialisation des variables

let scores = "";
let roundScore = "";
let activePlayer = "";
let gamePlaying = "";

init();
//Création d'un event pour le lancement aléatoire du dé avec "click"
document.querySelector(".btn-roll").addEventListener("click", function () {
  if (gamePlaying) {
//Nombre aléatoire
    let dice = Math.floor(Math.random() * 6) + 1;

//Montrer le résultat du lancement de dé
    let diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = `dice-${dice}.png`;

//Mise à jour du score si le nombre n'est pas un 1
    if (dice !== 1) {
//Ajouter le score
      roundScore += dice;
      document.querySelector("#current-" + activePlayer).textContent =
        roundScore;
    } else {
//Joueur suivant
      nextPlayer();
    }
  }
});
//Création d'un event pour la capture du score
document.querySelector(".btn-hold").addEventListener("click", function () {
  if (gamePlaying) {
// Ajoute "CURRENT score" à "GLOBAL score"
    scores[activePlayer] += roundScore;

// Mise à jour du UI
    document.querySelector("#score-" + activePlayer).textContent =
      scores[activePlayer];

// Si le joueur gagne la partie
    if (scores[activePlayer] >= 100) {
      document.querySelector("#name-" + activePlayer).textContent = "Gagné!";
      document.querySelector(".dice").style.display = "none";
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.add("winner");
      document
        .querySelector(".player-" + activePlayer + "-panel")
        .classList.remove("active");
      gamePlaying = false;
    } else {
//Joueur suivant
      nextPlayer();
    }
  }
});
//Fonction permettant le changement de joueur
function nextPlayer() {
//Joueur Suivant
  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  roundScore = 0;

  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

  
}
// Iniatiliser le jeu pour recommencer une partie
document.querySelector(".btn-new").addEventListener("click", init);


function init() {
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector(".dice").style.display = "none";

  document.getElementById("score-0").textContent = "0";
  document.getElementById("score-1").textContent = "0";
  document.getElementById("current-0").textContent = "0";
  document.getElementById("current-1").textContent = "0";
  document.getElementById("name-0").textContent = "Joueur 1";
  document.getElementById("name-1").textContent = "Joueur 2";
  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");
  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");
  document.querySelector(".player-0-panel").classList.add("active");
}
