Engine = function(game, player){
    this.game = game;
    this.player = player;
    this.maze = [];
    this.mazeWidth = 11;
    this.mazeHeight = 11;
    this.tileSize = 15;
    this.mazeGraphics = null;
    this.positions = [];
}
 
Engine.prototype.constructor = Engine;

Engine.prototype.initGame = function(){
          this.mazeGraphics = this.game.add.graphics(0, 0);
          var moves = [];
          for(var i = 0; i < this.mazeHeight; i ++){
               this.maze[i] = [];
               for(var j = 0; j < this.mazeWidth; j ++){
                    this.maze[i][j] = 1;
               }
          }
          var posX = 1;
          var posY = 1;
          this.maze[posX][posY] = 0; 
          moves.push(posY + posY * this.mazeWidth);
          this.game.time.events.loop(Phaser.Timer.SECOND/250000, function(){
               if(moves.length){       
                    var possibleDirections = "";
                    if(posX+2 > 0 && posX + 2 < this.mazeHeight - 1 && this.maze[posX + 2][posY] == 1){
                         possibleDirections += "S";
                    }
                    if(posX-2 > 0 && posX - 2 < this.mazeHeight - 1 && this.maze[posX - 2][posY] == 1){
                         possibleDirections += "N";
                    }
                    if(posY-2 > 0 && posY - 2 < this.mazeWidth - 1 && this.maze[posX][posY - 2] == 1){
                         possibleDirections += "W";
                    }
                    if(posY+2 > 0 && posY + 2 < this.mazeWidth - 1 && this.maze[posX][posY + 2] == 1){
                         possibleDirections += "E";
                    } 
                    if(possibleDirections){
                         var move = Math.floor(Math.random() * (possibleDirections.length - 0) + 0);
                         switch (possibleDirections[move]){
                              case "N": 
                                   this.maze[posX - 2][posY] = 0;
                                   this.maze[posX - 1][posY] = 0;
                                   posX -= 2;
                                   break;
                              case "S":
                                   this.maze[posX + 2][posY] = 0;
                                   this.maze[posX + 1][posY] = 0;
                                   posX += 2;
                                   break;
                              case "W":
                                   this.maze[posX][posY - 2] = 0;
                                   this.maze[posX][posY - 1] = 0;
                                   posY -= 2;
                                   break;
                              case "E":
                                   this.maze[posX][posY + 2]=0;
                                   this.maze[posX][posY + 1]=0;
                                   posY += 2;
                                   break;         
                         }
                         moves.push(posY + posX * this.mazeWidth);     
                    }
                    else{
                         var back = moves.pop();
                         posX = Math.floor(back / this.mazeWidth);
                         posY = back % this.mazeWidth;
                    }
                    this.drawMaze(posX, posY,possibleDirections[move]);                                         
               }      
          }, this);	  
          
}

Engine.prototype.drawMaze = function(posX, posY, dir){

     this.mazeGraphics.clear();
     this.mazeGraphics.beginFill(0xffffff);
     for(i = 0; i < this.mazeHeight; i ++){
          for(j = 0; j < this.mazeWidth; j ++){
               if(this.maze[i][j] == 1){
                    this.mazeGraphics.drawRect(j * this.tileSize, i * this.tileSize, this.tileSize, this.tileSize);                          
               }
          }
     }
     this.mazeGraphics.endFill();   
     this.mazeGraphics.beginFill(0x000000); 
     this.mazeGraphics.drawRect(posY * this.tileSize, posX * this.tileSize, this.tileSize, this.tileSize);

                    xp = posX * this.tileSize;
                    yp = posY * this.tileSize;
           


                   // console.log(xp);
                    for(i=0;i<=this.tileSize*2;i++){
                        for(j=0;j<=this.tileSize*2;j++){





                         switch (dir){
                              case "N": 
                                    if(!this.positions.isItemInArray([xp+i,yp+j])){
                                        this.positions.push([xp+i,yp-j]);
                                        if(yp+i ==31){console.log("DSDSSD");}
                                    }
                                   break;
                              case "S":
                                    if(!this.positions.isItemInArray([xp+i,yp-j])){
                                        this.positions.push([xp+i,yp+j]);
                                        if(yp+i ==31){console.log("DSDSSD");}
                                    }
                                   break;
                              case "W":
                                    if(!this.positions.isItemInArray([xp+i,yp+j])){
                                        this.positions.push([xp-i,yp+j]);
                                        if(yp+i ==31){console.log("DSDSSD");}
                                    }
                                   break;
                              case "E":
                                    if(!this.positions.isItemInArray([xp-i,yp+j])){
                                        this.positions.push([xp+i,yp+j]);
                                        if(yp+i ==31){console.log("DSDSSD");}
                                    }
                                   break;         
                         }










                            if(!this.positions.isItemInArray([xp+i,yp+j])){
                                this.positions.push([xp+i,yp+j]);
                                if(yp+i ==31){console.log("DSDSSD");}
                            }
                        }
                    }


     this.mazeGraphics.endFill();   
}