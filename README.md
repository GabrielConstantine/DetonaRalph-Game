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
    <img src="./public/img/Interface-Mobile.png" alt="Interface do Detona Ralph Game em Smartphones" width="60%">
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
