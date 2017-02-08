var game;

game = new Phaser.Game(getScreenWidth(), getScreenHeight(), Phaser.AUTO, '');

game.state.add('Menu', Menu);
game.state.add('Word_Game', Word_Game);
//game.state.add('Word_Game', Maze_Game);
//game.state.add('Game_Over', Game_Over);

game.state.start('Menu');
