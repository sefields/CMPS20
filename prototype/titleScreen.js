/*
  * This file holds functions like creating a game object and game object
  * function
  */

 //create an instance of the game
function Title(parent){
	this.parent=parent;
	this.view=parent.view;
	this.renderer=parent.renderer;
	this.stage = new PIXI.Stage(0xCCCCCC,true);

 	this.update = function() {
 		
 	};
	this.keydown=function(event){
		var key = String.fromCharCode(event.keyCode);
		if(event.keyCode==27){
			//press esc to un-pause game
			parent.signal_pop();
		}
	};
	this.keyup=function(event){
		var key = String.fromCharCode(event.keyCode);

	}
	this.drawGui=function(){
	    
 }
 
 	this.init_ = function() {
 		//initiate the gui
 		this.drawGui();
 		
 	};
 }

 //Temp Gui for score and alarm for soldiers