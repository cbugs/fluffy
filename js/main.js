var game;

game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, '');

game.state.add('Menu', Menu);
game.state.add('Word_Game', Word_Game);
//game.state.add('Game_Over', Game_Over);

game.state.start('Menu');
