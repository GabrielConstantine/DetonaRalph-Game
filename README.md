# Jogo de Reação - Detona Ralph Game

## Descrição
O Detona Ralph Game é um jogo de reação em que, conforme o tempo passa, a velocidade aumenta, desafiando o jogador a marcar o máximo de pontos possível. Criado para testar a reação e a atenção do jogador, ele apresenta uma troca constante e aleatória de posições. Dessa forma, proporciona um jogo desafiador e divertido, com o objetivo de marcar o máximo de pontos em 90 segundos.

## Funcionalidades
- **Recovery Life (Recuperação de Vida):** Compreendendo a dificuldade do jogo, em que a velocidade de troca aumenta constantemente e, com isso, a chance de erros aumenta, o jogo recompensa o jogador com 1 Life a cada 10 pontos obtidos, recuperando a vida perdida.
- **Independent Soundtrack (Trilha Sonora Autônoma):** Quando o jogo é carregado, uma trilha sonora leve e animada é tocada automaticamente, enquanto o jogo não é iniciado. Após o seu início, a trilha sonora atual é pausada e substituída por uma nova, carregando uma tensão e emoção.
- **Diversified Game Over (Fim de Jogo Diversificado):** Existem diversos cenários que podem levar ao fim do jogo, e o Detona Ralph Game está preparado para isso. Dependendo da situação, uma mensagem diferente é exibida.
- **Score (Pontuação):** Os pontos são marcados ao atingir o Ralph, ganhando 1 ponto por clique nele.
- **Loss of Life (Perda de Life):** O jogador perde vida quando atinge um personagem diferente do Ralph, perdendo 1 Life no processo. Porém, caso ele atinja o personagem Conserta Felix Jr, ele irá perder 1.5 Life.
- - **Responsiveness (Responsividade):** Suporte responsivo para que o jogo se adapte aos diversos tamanhos de tela, oferecendo uma experiência adaptativa e agradável aos jogadores.

## Tecnologias Utilizadas
- HTML5
- CSS3
- JavaScript
- Node.js

## Interface do Jogo em Dispositivos Suportados

<p align="center">
    <img src="./public/img/Interface-PC.png" alt="Interface do Detona Ralph Game em PC" width="60%">
    <br>
    Interface do Detona Ralph Game em PC
</p>


<p align="center">
    <img src="./public/img/Interface-Mobile.png" alt="Interface do Detona Ralph Game em Smartphones" width="40%">
    <br>
    Interface do Detona Ralph Game em Smartphones
</p>

## Estrutura do Projeto

```plaintext
DetonaRalph-Game/
├── public
│   ├── img/
│   │   ├── button-play.png
│   │   ├── Candlehead.jpeg
│   │   ├── Conserta-FelixJr.jpg
│   │   ├── Deanna.jpg
│   │   ├── Gene.jpg
│   │   ├── General-Hologram.jpg
│   │   ├── Markowski.webp
│   │   ├── Player.png
│   │   ├── Ralph.jpg
│   │   ├── RalphIcon.png
│   │   ├── Rei-Candy.jpeg
│   │   ├── Roy.webp
│   │   ├── Satine.webp
│   │   ├── Sgt-Calhoun.jpg
│   │   ├── Surge-Protector.jpg
│   │   ├── Taffyta.webp
│   │   ├── Tapper.webp
│   │   ├── Vanellope.jpg
│   │   ├── wall.png
│   │   ├── Interface-PC.png
│   │   ├── Interface-Mobile.png
│   │   ├── Wallpapper-Window.jpg
│   │   └── Wynnchel-Duncan.jpg
│   ├── scripts/
│   │   ├── gameEngine.js
│   │   └── responsiveGame.js
│   ├── sounds/
│   │   ├── GameSound.mpeg
│   │   └── MenuGame.mpeg
│   ├── style/
│   │   ├── gamePage.css
│   │   └── reset.css
├── index.html
└── README.md
```

## Como Jogar?
- Primeiro acesse o site do jogo através do seguinte link: https://gabrielconstantine.github.io/DetonaRalph-Game/
- O segundo passo é clicar no botão onde está escrito "Jogar".
- O Ralph estará em uma das 16 janelas, assim como outros 15 personagens, e eles vão trocar constantemente de posição a cada 1.5 segundos, mas quando sobrar 50 segundos ou menos, trocarão 1 vez a cada 1 segundo.
- O terceiro passo é atingir o Ralph, clicando nele e assim marcando pontuação, evitando ao maximo atingir outros personagens.
  
## Personagens do Jogo Detona Ralph

<p align="center" style="display: flex; justify-content: space-evenly; flex-wrap: wrap;">
    <span>
        <img src="./public/img/Ralph.jpg" alt="Ralph" width="100" height="100"><br> Ralph
    </span>
    <span>
        <img src="./public/img/Conserta-FelixJr.jpg" alt="Conserta Felix Jr" width="100" height="100"><br> Conserta Felix Jr
    </span>
    <span>
        <img src="./public/img/Vanellope.jpg" alt="Vanellope" width="100" height="100"><br> Vanellope
    </span>
</p>

<p align="center" style="display: flex; justify-content: space-evenly; flex-wrap: wrap;">
    <span>
        <img src="./public/img/General-Hologram.jpg" alt="General Hologram" width="100" height="100"><br> General Hologram
    </span>
    <span>
        <img src="./public/img/Markowski.webp" alt="Markowski" width="100" height="100"><br> Markowski
    </span>
    <span>
        <img src="./public/img/Gene.jpg" alt="Gene" width="100" height="100"><br> Gene
    </span>
</p>

<p align="center" style="display: flex; justify-content: space-evenly; flex-wrap: wrap;">
    <span>
        <img src="./public/img/Roy.webp" alt="Roy" width="100" height="100"><br> Roy
    </span>
    <span>
        <img src="./public/img/Tapper.webp" alt="Tapper" width="100" height="100"><br> Tapper
    </span>
    <span>
        <img src="./public/img/Sgt-Calhoun.jpg" alt="Sargento Calhoun" width="100" height="100"><br> Sargento Calhoun
    </span>
</p>

<p align="center" style="display: flex; justify-content: space-evenly; flex-wrap: wrap;">
    <span>
        <img src="./public/img/Wynnchel-Duncan.jpg" alt="Wynnchel e Duncan" width="100" height="100"><br> Wynnchel e Duncan
    </span>
    <span>
        <img src="./public/img/Taffyta.webp" alt="Taffyta" width="100" height="100"><br> Taffyta
    </span>
    <span>
        <img src="./public/img/Surge-Protector.jpg" alt="Surge Protector" width="100" height="100"><br> Surge Protector
    </span>
</p>

<p align="center" style="display: flex; justify-content: space-evenly; flex-wrap: wrap;">
    <span>
        <img src="./public/img/Rei-Candy.jpeg" alt="Rei Candy" width="100" height="100"><br> Rei Candy
    </span>
    <span>
        <img src="./public/img/Candlehead.jpeg" alt="Candlehead" width="100" height="100"><br> Candlehead
    </span>
    <span>
        <img src="./public/img/Satine.webp" alt="Satine" width="100" height="100"><br> Satine
    </span>
</p>
