var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, '', { preload: preload, create: create, update: update });

function preload() {
}

function create() {
  // Instantiate game engine
  engine = new Engine(game);
  engine.initGame();
}

function update() {
}