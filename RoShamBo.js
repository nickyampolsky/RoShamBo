class RoShamBo {
    constructor() {
        this.player = new Player();
        this.computer = new Player();
        this.scoreboard = new Scoreboard();
        this.ROCK = 1;
        this.PAPER = 2;
        this.SCISSORS = 3;
    }
    storePlayerChoice(choice) {
        this.player.choice = choice;
        this.storeComputerChoice();
    }
    storeComputerChoice() {
        this.computer.choice = Math.ceil(Math.random()*3);
    }
    determineOutcome(){
        if(this.player.choice == this.computer.choice){
            return "Tie Game!";
        }
        else if(this.player.choice = 1 && this.computer.choice = 3){
             return "Player Won!";
        }
        else if(this.player.choice = 1 && this.computer.choice = 2){
             return "Player Lost!";
        }
        else if(this.player.choice = 2 && this.computer.choice = 3){
             return "Player Lost!";
        }
        else if(this.player.choice = 2 && this.computer.choice = 1){
             return "Player Won!";
        }
          else if(this.player.choice = 3 && this.computer.choice = 1){
             return "Player Lost!";
        }
          else if(this.player.choice = 3 && this.computer.choice = 2){
             return "Player Won!";
        }







         return "";
    }
    updateScoreboard(){

    }
    displayScoreboard(){

    }
}


class Player {
    constructor(){
        this.choice = "";
    }
}
class Scoreboard {
    constructor(){

    }
}
