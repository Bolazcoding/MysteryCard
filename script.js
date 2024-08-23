document.getElementById("yes-button").addEventListener("click", function () {
  document.getElementById("landing-page").classList.add("hidden");
  document.getElementById("card-page").classList.remove("hidden");

  const music = document.getElementById("background-music");
  music.play();

  startConfetti();
  releaseBalloons();
});

document.getElementById("no-button").addEventListener("click", function () {
  alert("Maybe next time!");
});

function startConfetti() {
  const confettiContainer = document.getElementById("confetti-container");
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confettiContainer.appendChild(confetti);
  }
}

function releaseBalloons() {
  const balloonContainer = document.getElementById("balloon-container");
  for (let i = 0; i < 5; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloons";
    balloon.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
    balloon.style.width = `${Math.random() * 50 + 50}px`;
    balloon.style.height = `${Math.random() * 50 + 70}px`;
    balloon.style.borderRadius = "50%";
    balloonContainer.appendChild(balloon);
  }
}
