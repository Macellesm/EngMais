<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jogo Educativo - Indução Magnética</title>
  <script src="https://cdn.jsdelivr.net/npm/phaser@3/dist/phaser.min.js"></script>
</head>
<body>
  <div id="game-container"></div>
  <script>
    const config = {
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      backgroundColor: "#ffffff",
      parent: "game-container",
      physics: { default: "arcade" },
      scene: {
        preload: preload,
        create: create,
        update: update,
      },
    };

    const coilPosition = { x: 400, y: 300 }; // Posição fixa da bobina
    let magnet, coil, currentText, flux = 0, fluxRate = 0;

    const game = new Phaser.Game(config);

    function preload() {
      this.load.image("magnet", "magnet.png"); // Ícone do ímã
      this.load.image("coil", "coil.png");     // Ícone da bobina
    }

    function create() {
      // Adiciona a bobina e o ímã
      coil = this.add.image(coilPosition.x, coilPosition.y, "coil").setScale(0.5);
      magnet = this.physics.add.image(400, 500, "magnet").setScale(0.5);
      magnet.setInteractive();
      this.input.setDraggable(magnet);

      // Texto para exibir informações
      currentText = this.add.text(20, 20, "Corrente Induzida: 0 A", {
        font: "20px Arial",
        fill: "#000",
      });

      // Movimento do ímã
      this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
        gameObject.x = dragX;
        gameObject.y = dragY;

        // Calcula a taxa de variação do fluxo magnético
        fluxRate = Math.abs(gameObject.y - coil.y) / 100;
        flux = Math.max(0, 10 - fluxRate); // Fluxo é inversamente proporcional à distância
        updateCurrentText();
      });
    }

    function update() {
      // Atualizações contínuas podem ser implementadas aqui
    }

    function updateCurrentText() {
      const current = (flux * fluxRate).toFixed(2); // Corrente induzida
      currentText.setText(`Corrente Induzida: ${current} A`);
    }
  </script>
</body>
</html>
