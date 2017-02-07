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
        if(JSON.stringify(engine.positions).indexOf(JSON.stringify({x:player.x-30,y:player.y})) > -1){
          player.x -= 30;
        console.log(engine.positions);console.log(player.x+":"+player.y);
        }
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        if(JSON.stringify(engine.positions).indexOf(JSON.stringify({x:player.x+30,y:player.y})) > -1) {
          player.x += 30;
        console.log(engine.positions);console.log(player.x+":"+player.y);
        }
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        if(JSON.stringify(engine.positions).indexOf(JSON.stringify({x:player.x,y:player.y-30})) > -1) {
          player.y -= 30;
        console.log(engine.positions);console.log(player.x+":"+player.y);
        }
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        if(JSON.stringify(engine.positions).indexOf(JSON.stringify({x:player.x,y:player.y+30})) > -1) {
          player.y += 30;
        console.log(engine.positions);console.log(player.x+":"+player.y);
        }
    }

}