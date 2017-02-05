var Menu = {

    preload : function() {
        // Load all the needed resources for the menu.
        game.load.image('menu', './assets/images/menu.png');
        game.load.spritesheet('butterfly', './assets/images/butterfly.jpg', 441, 416, 7);
        game.load.image('button', './assets/images/button.png');
    },

    create: function () {

        // Add menu screen
        background = game.add.sprite(0, 0, 'menu');

        //  Scale it to fit the width of the game 
        background.scale.setTo(0.5, 0.4);

        button = this.add.button(0, 0, 'button', this.startGame, this);
        button.scale.setTo(0.5, 0.4);
           cropRect = new Phaser.Rectangle(1000, 60, 450, 200);

    button.crop(cropRect);

        butterfly = this.add.sprite(300, 200, 'butterfly');
        butterfly.scale.setTo(0.2, 0.2);

        //  Here we add a new animation called 'fly'
        //  Because we didn't give any other parameters it's going to make an animation from all available frames in the 'mummy' sprite sheet
        var fly = butterfly.animations.add('fly');

        //  And this starts the animation playing by using its key ("fly")
        //  5 is the frame rate (5fps)
        //  true means it will loop when it finishes
        butterfly.animations.play('fly', 5, true);
        numbers = [-1, 0, 1];
        turns = 0;

    },

    update: function() {
        if(turns == 0 || turns == 400 || butterfly.x<=0 || butterfly.y<=0 
        || butterfly.x>=window.innerWidth * window.devicePixelRatio || butterfly.y>=window.innerHeight * window.devicePixelRatio){
            numberX = numbers.getRandomElement();
            numberY = numbers.getRandomElement();
            if(butterfly.x<=0)numberX=1;
            if(butterfly.y<=0)numberY=1;
            if(butterfly.x>=window.innerWidth * window.devicePixelRatio)numberX=-1;
            if(butterfly.y>=window.innerHeight * window.devicePixelRatio)numberY=-1;
            turns=0;
            if((butterfly.scale.x > 0 && numberX > 0)||(butterfly.scale.x < 0 && numberX < 0)){
                butterfly.scale.x *= -1;
            } 

        }
        butterfly.x+=numberX;
        butterfly.y+=numberY;
        turns++;
    },

    startGame: function () {

        // Change the state to the actual game.
        this.state.start('Word_Game');

    }

};