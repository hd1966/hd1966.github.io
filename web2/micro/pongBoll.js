function Game() {
    var canvas = document.getElementById("game");
    this.width = canvas.width;
    this.height = canvas.height;
    this.context = canvas.getContext("2d");
    this.context.fillStyle = "white";
    this.context.lineWidth="6";
    this.ball = new Ball();
    this.ball.x = this.width/2;
    this.ball.y = this.height/2;
    this.ball.vy = Math.floor(Math.random()*10 - 3);
    this.ball.vx = 4 - Math.abs(this.ball.vy);
  /*   soundManager.setup({
        url: "",
        flashVersion: 9, // optional: shiny features (default = 8)
        // optional: ignore Flash where possible, use 100% HTML5 mode
        // preferFlash: false,
        onready: function() {

          
            soundManager.createSound({
                id: "wall",
                url: "wall.mp3"
            });
         
        }
    }); */


    window.soundbox = new SoundBox();
	soundbox.load("wall", "sounds/wall.mp3")
	soundbox.load("explosion", "sounds/explosion.mp3");
	/*soundbox.load("padding", "sounds/padding.mp3"); */

}

//game
Game.prototype.draw = function()
{
    this.context.clearRect(0, 0, this.width, this.height);
    this.context.strokeRect(0, 0, this.width, this.height);
    this.ball.draw(this.context);
};
 
Game.prototype.update = function() 
{
    if (key.isPressed(39)) { // RIGHT - right arrow
        this.ball.x = this.ball.x + 2;
    } else if (key.isPressed(37)) { // LEFT - left arrow
        this.ball.x = this.ball.x - 2;
    } 

    if (key.isPressed(40)) { // UP - up arrow
        this.ball.y = this.ball.y + 2;
    } else if (key.isPressed(38)) { // DOWN - down arrow
        this.ball.y = this.ball.y - 2;
    } 

    this.ball.update();
    if (this.ball.x  + this.ball.width > this.width || this.ball.x < 0) {
        this.ball.vx = -this.ball.vx;
        soundbox.play("explosion",function() {
            soundbox.play("wall");
        });

        //soundManager.play("wall");
     } 
     else if (this.ball.y + this.ball.height > this.height || this.ball.y  < 0 ) {
              this.ball.vy = -this.ball.vy;
              //soundManager.play("wall");
              soundbox.play("explosion",function() {
                soundbox.play("wall");
            });
     }
    
};






//Ball
function Ball() {
    this.x = 0;
    this.y = 0;
    this.img=new Image();
    
    this.img.src="tball.png";
    this.vx = 0;
    this.vy = 0;
    this.width = 16;
    this.height = 16;
}
 
Ball.prototype.update = function()
{
    this.x += this.vx;
    this.y += this.vy;
};
 
Ball.prototype.draw = function(p)
{
    //p.fillRect(this.x, this.y, this.width, this.height);
    p.drawImage(this.img,this.x, this.y, this.width, this.height);
};





// Initialize our game instance
var game = new Game();
 
function MainLoop() {
    game.update();
    game.draw();
    // Call the main loop again at a frame rate of 30fps
    setTimeout(MainLoop, 33.3333);
}
 
// Start the game execution
MainLoop();