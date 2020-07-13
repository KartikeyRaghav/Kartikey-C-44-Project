class Form {

  constructor() {
    this.name = createDiv("Name"), this.nameInput = createInput(""),
    this.mail = createDiv("E-Mail-ID"), this.mailInput = createInput(""),
    this.button = createButton('SUBMIT'),
    this.title = createDiv("Please Enter Your Details."),
    this.reset = createButton("Reset");
    this.everything = [this.button,this.title,this.name,this.nameInput,this.mail,this.mailInput];
  }

  hide(){
    this.greeting.hide();
    this.greeting2.hide();
    this.button.hide();
    this.nameInput.hide();
    this.title.hide();
  }

  display(){
    this.title.html("Please Enter Your Details.");
    this.title.position(90,100);

    this.name.position(90,140), this.nameInput.position(140,140),
    this.mail.position(65,180), this.mailInput.position(140,180),
    this.button.position(30, 220), this.reset.position(30,260);

    alert("This is a Ludo game made just for keeping you away from lonliness.\n\n You can play this game with one of your friend.\n\nAlso one of you can press the reset button before you enter your details and also please refresh the page.\n\nFirst you fill the form and then click the 'GO' button at the top.\n\nYou will be taken to the game and then you can play the game by clickng on the button next to your name.\n\nYou will see a text at the top which will tell you that who won the game.");

    this.button.mousePressed(()=>{
      for(var i = 0; i < this.everything.length; i++) {
        this.everything[i].hide();
      }

      player.name = this.nameInput.value();
      player.mail = this.mailInput.value();
    
      playerCount++;
      player.index = playerCount;

      player.update();
      player.updateCount(playerCount);

      this.greeting = createDiv("Hello " + player.name);
      this.greeting2 = createDiv("Please wait for the other players to come.")      
      this.greeting2.position(2,40);
      this.greeting.position(2,2);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      gameState = 0;
      game.update(0);
    })
  }
}
