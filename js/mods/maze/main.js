var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var engine;
function preload() {
  game.load.image('player', './assets/images/snake.png');
}

function create() {
  // Instantiate game engine
  engine = new Engine(game);
  engine.initGame();
  player = game.add.sprite(15, 15, 'player');
}

function update() {
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {

        if(engine.positions.isItemInArray([player.x-1,player.y])){
          player.x -= 1;
        }

    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
      console.log(player.x);
      console.log(engine.positions);

        if(engine.positions.isItemInArray([player.x+1,player.y])){
          player.x += 1;
        } 

    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
          if(engine.positions.isItemInArray([player.x,player.y-1])){
            player.y -= 1;
          }
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
console.log(player.y);
        if(engine.positions.isItemInArray([player.x,player.y+1])){
          player.y += 1;
        }

    }

}