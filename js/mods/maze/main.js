var game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.AUTO, '', { preload: preload, create: create, update: update });
var engine;
var player=null;
var roads =[];
var press = true;
var timer;
function preload() {
  game.load.image('player', './assets/images/snake.png');
  game.load.image('road', './assets/images/apple.png');
}

function create() {
  // Instantiate game engine
  engine = new Engine(game);
  engine.initGame();
timer = game.time.create(false);
    //  Set a TimerEvent to occur after 2 seconds
    timer.loop(200, updatePress, this);

    //  Start the timer running - this is important!
    //  It won't start automatically, allowing you to hook it to button events and the like.
    timer.start();

}

function updatePress(){
  press=true;
}

function checkOverlap() {

for(i=0;i<roads.length;i++){
  if(Phaser.Rectangle.intersects(roads[i].getBounds(), player.getBounds()) && roads[i].x==player.x && roads[i].y==player.y){
    console.log(roads[i]);
return roads[i];
  }
}
return false;


}

function update() { 




    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {

        //if(engine.positions.isItemInArray([player.x-1,player.y])){
          if(press){
          player.x -= 15;
          console.log(player.x);
          co = checkOverlap();
          if (co) {
            player.x = co.x;
          }else{
            player.x += 15;
          }
          console.log('>>'+player.x);
          press = false;
          }
        //}

    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
      //console.log(player.x);
      //console.log(engine.positions);

        //if(engine.positions.isItemInArray([player.x+1,player.y])){
                    if(press){
          player.x += 15;
          console.log(player.x);
          co = checkOverlap();
          if (co) {
            player.x = co.x;
          }else{
            player.x -= 15;
          }
          console.log('>>'+player.x);
                    press = false;
          }
        //} 

    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
          //if(engine.positions.isItemInArray([player.x,player.y-1])){
                      if(press){
            player.y -= 15;
            console.log(player.y);
          co = checkOverlap();
          if (co) {
            player.y = co.y;
          }else{
            player.y += 15;
          }
           console.log('>>'+player.y);
                     press = false;
          }
         // }
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
//console.log(player.y);
        //if(engine.positions.isItemInArray([player.x,player.y+1])){
                    if(press){
          player.y += 15;
          console.log(player.y);
          co = checkOverlap();
          if (co) {
            player.y = co.y;
          }else{
            player.y -= 15;
          }
                     console.log('>>'+player.y);
                               press = false;
          }
       // }

    }

}