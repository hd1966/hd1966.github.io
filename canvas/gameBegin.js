function Game() {
    var canvas = document.getElementById("game"); //canvas ska placeras element med id = ”game”
    this.width = canvas.width; //spelets bredd och höjd = elementets bredd och höjd
    this.height = canvas.height;
    this.context = canvas.getContext("2d");//hämta context som behövs för att göra förändringar
    this.context.fillStyle = "white"; //ange färgen och linjens tjocklek
    this.context.lineWidth="6";
    this.boll = new Boll(); //skapa ny boll
    //placera bollen(ungefär i mitten) och ge bollen hastighet i x och y led – det ska du göra
    this.boll.x=this.width/2;
    this.boll.x=this.height/2;
    this.boll.vx=Math.random()*5+4; //för att hastigheten blir inte alltid samma använd Math.random()
    this.boll.vy=Math.random()*5+2;
    }
    Game.prototype.draw = function()
    {
        this.context.clearRect(0, 0, this.width, this.height);//ta bort hela rektangeln 
        this.context.strokeRect(0, 0, this.width, this.height);
        this.boll.draw(this.context);//rita bollen
    };
    Game.prototype.update = function() 
    {
        this.boll.update();//uppdatera bollens placering
        if (this.boll.x  + this.boll.width > this.width || this.boll.x < 0) {
                                this.boll.vx = -this.boll.vx;//om bollen går utanför ritdukens(canvas) vänstra //eller högra kant uppdatera bollen vx hastighet 
    //om bollen går utanför ritdukens(canvas) övre eller nedre kant uppdatera bollen vy hastighet- det ska du göra
        }
          else if (this.boll.y + this.boll.height > this.height || this.boll.y  < 0 ) {
            this.boll.vy = -this.boll.vy;
                   
    }
    };
    function Boll(){
        // i denna funktion initialiseras bollens placering(x,y), bollens bild,
        //bollens hastighet (vx – x led och vy  - y-led), storleken av bollens bild
         this.x=0;
        this.y=0;//övre vänstra hörnet av canvas
        //hastighet i x och y led
        this.vx=3; 
        this.vy=3;
        this.img=new Image();//bollens bild
        this.img.src="boll.png";
        this.width=16;
        //ange höjd för att bilden har kvadratisk form
        this.height=16;
        }
        //2 funktioner inne i klassen för uppdatering och ritning
        Boll.prototype.update= function(){
         this.x+=this.vx;
         //uppdatera också y koordinat
         this.y+=this.vy;
        };
        Boll.prototype.draw = function(p)  //p är context
        {
                p.drawImage(this.img,this.x, this.y, this.width, this.height);
        };
        var game = new Game();
function initAll(){
    //använd  variabel game att anropa update och draw av game klass
    game.update();
    game.draw();
    setTimeout(initAll ,500);//uppdatering varje ½ sekund
} 
initAll();

                