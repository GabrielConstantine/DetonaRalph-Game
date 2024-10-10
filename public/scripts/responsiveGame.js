function adaptingGame() {
    const screenWidth = window.innerWidth;

    if (screenWidth <= 650) {
        document.querySelector(".menu-time h1").textContent = "Tempo:";
        document.querySelector(".menu-score h1").textContent = "Pontuação:";
    } else {
        document.querySelector(".menu-time h1").textContent = "Tempo Restante:";
        document.querySelector(".menu-score h1").textContent = "Sua Pontuação:";
    }
}

function checkPlaySound() {
    const player = document.getElementById('player');

    if (player.paused) {
        player.play();
    }
}

function responsiveStyles() {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    if (screenWidth >= 800 && screenHeight >= 800) {
        document.querySelector(".menu").style.height = "80px";
    } else if (screenWidth >= 480 && screenWidth <= 600) {
        document.querySelector(".menu h1").style.fontSize = "14px";
        document.querySelector(".menu h2").style.fontSize = "12px";
        document.querySelector(".menu h2").style.paddingLeft = "2px";
    } else if (screenWidth <= 450) {
        document.querySelector(".menu h1").style.fontSize = "14px";
        document.querySelector(".menu h2").style.fontSize = "12px";
        document.querySelector(".menu h2").style.paddingLeft = "2px";
        document.querySelector(".grid-game").style.width = "320px";
        document.querySelector(".grid-game").style.height = "320px";
        document.querySelectorAll(".panel-game").forEach(panel => {
            panel.style.width = "65px";
            panel.style.height = "320px";
        });
        document.querySelectorAll(".cardGame").forEach(card => {
            card.style.width = "65px";
            card.style.height = "65px";
        });
    }
}

window.onload = function() {
    adaptingGame();
    checkPlaySound();
    responsiveStyles();
};

window.onresize = adaptingGame;
