const gameEngine = {
    view: {
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#your-score"),
        life: document.querySelector("#your-life"),
        cards: document.querySelectorAll(".cardGame"),
    },
    values: {
        gameVelocity: 2000,
        result: 0,
        currentTime: 90,
        life: 3,
    },
    actions: {
        timerId: null,
        countDownTimerId: null,
    },
};

function playSound(audioName) {
    const player = document.getElementById('player');
    player.pause();
    player.src = `./public/sounds/${audioName}.mpeg`;
    player.load();
    player.volume = 0.4;
    player.play();
}

function revealCards(shouldReveal = true) {
    const cards = document.querySelectorAll(".cardGame img");
    cards.forEach(card => {
        card.style.visibility = shouldReveal ? 'visible' : 'hidden';
    });
}

function countDown() {
    gameEngine.values.currentTime--;
    gameEngine.view.timeLeft.textContent = gameEngine.values.currentTime;

    if (gameEngine.values.currentTime <= 0) {
        clearInterval(gameEngine.actions.countDownTimerId);
        clearInterval(gameEngine.actions.timerId);
        player.pause();
        
        if (gameEngine.values.result === 0) {
            alert("Game Over!! O seu resultado foi: " + gameEngine.values.result);
        } else {
            alert("Tempo Encerrado!! O seu resultado foi: " + gameEngine.values.result);
        }
        endGame(); 
    }

    if (gameEngine.values.currentTime <= 30) {
        gameEngine.values.gameVelocity = 1000;
    } else if (gameEngine.values.currentTime <= 60 && gameEngine.values.currentTime > 30) {
        gameEngine.values.gameVelocity = 1500;
    }
}

function randomCard() {
    const cards = Array.from(gameEngine.view.cards);

    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    const panelGames = document.querySelectorAll('.panel-game');
    panelGames.forEach((panel, index) => {
        panel.innerHTML = '';
        cards.slice(index * 4, (index + 1) * 4).forEach(card => {
            panel.appendChild(card);
        });
    });
}

function initialize() {
    gameEngine.view.life.textContent = "x" + gameEngine.values.life;
    addListenerHitBox();
}


function startGame() {
    gameEngine.values.result = 0;
    gameEngine.values.currentTime = 90;
    gameEngine.values.life = 3;
    gameEngine.view.score.textContent = gameEngine.values.result;
    gameEngine.view.life.textContent = "x" + gameEngine.values.life;
    gameEngine.view.timeLeft.textContent = gameEngine.values.currentTime;

    gameEngine.actions.timerId = setInterval(randomCard, gameEngine.values.gameVelocity);
    gameEngine.actions.countDownTimerId = setInterval(countDown, 1000);

    revealCards(true);
    initialize();
}

function handleCardClick(event) {
    const clickedCardId = event.currentTarget.id;

    if (clickedCardId === "ralph") {
        increaseScore();
    } else if (clickedCardId === "conserta-felixjr") {
        decreaseLife(1.5);
    } else {
        decreaseLife(1);
    }
}

function increaseScore() {
    gameEngine.values.result++;
    gameEngine.view.score.textContent = gameEngine.values.result;

    if (gameEngine.values.result % 10 === 0 && gameEngine.values.life < 3) {
        gameEngine.values.life++;
        gameEngine.view.life.textContent = "x" + gameEngine.values.life;
    }
}

function decreaseLife(amount) {
    gameEngine.values.life -= amount;
    gameEngine.view.life.textContent = "x" + gameEngine.values.life;

    if (gameEngine.values.life <= 0) {
        endGame();
    }
}

function endGame() {
    clearInterval(gameEngine.actions.countDownTimerId);
    clearInterval(gameEngine.actions.timerId);
    alert("Game Over!! O seu resultado foi: " + gameEngine.values.result);
    document.getElementById('player').pause();

    gameEngine.values.result = 0;
    gameEngine.values.currentTime = 90;
    gameEngine.values.life = 3;
    gameEngine.view.score.textContent = gameEngine.values.result; 
    gameEngine.view.life.textContent = "x" + gameEngine.values.life; 
    gameEngine.view.timeLeft.textContent = gameEngine.values.currentTime;

    revealCards(false);
    const cards = gameEngine.view.cards; 
    cards.forEach(card => {
        card.removeEventListener('click', handleCardClick);
    });
}

function addListenerHitBox() {
    const cards = gameEngine.view.cards;
    cards.forEach(card => {
        card.addEventListener('click', handleCardClick);
    });
}