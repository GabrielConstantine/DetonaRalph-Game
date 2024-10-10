function adaptingGame() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 500) {
        document.querySelector(".menu-time h1").textContent = "Tempo:";
        document.querySelector(".menu-score h1").textContent = "Pontuação:";
    } else {
        document.querySelector(".menu-time h1").textContent = "Tempo Restante:";
        document.querySelector(".menu-score h1").textContent = "Sua Pontuação:";
    }
}

window.onload = adaptingGame;

window.onresize = adaptingGame;
