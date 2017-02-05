var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, '', { preload: preload, create: create, update: update });

var engine = null;
var colors = resources[0].colors;
var alphabets =  resources[1].alphabets;
var words = resources[2].words;

function preload() {
  // Load static image background
  game.load.image('background', 'assets/background.png');

  // Preload all possible sprites with combinations of letters and colors
  for(var i=0;i<colors.length;i++){
    game.load.image('letter_'+colors[i],'assets/letters/'+colors[i].capitalizeFirstLetter()+'/letter.png');
    for(var j=0;j<alphabets.length;j++){
      game.load.image('letter_'+alphabets[j]+'_'+colors[i],'assets/letters/'+colors[i].capitalizeFirstLetter()+'/letter_'+alphabets[j].toUpperCase()+'.png');
    }
  }

}

function create() {
  //  We're going to be using physics, so enable the Arcade Physics system
  game.physics.startSystem(Phaser.Physics.ARCADE);

  //  A simple background for our game
  background = game.add.sprite(0, 0, 'background');

  //  Scale it to fit the width of the game 
  background.scale.setTo(0.5, 0.4);

  // Instantiate game engine
  engine = new Engine(game, words, alphabets, colors);

  // Start game engine
  engine.initGame();
}


function update() {

}



