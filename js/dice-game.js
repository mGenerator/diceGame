function rollDice(){
  //Initial score is 0
  let goldCoins = 0;
  //Run this game 10 times
  for (let i = 0; i < 10; i++){
    // ROLL A NUMBER
    const roll = Math.floor(Math.random()*6) + 1; 
    //Announce the roll
    alert("You roll a " + roll);
    
  // Perform Roll Checks and Act according to game rules
    if (roll === 1){
      alert("Game over, no more rolls!");
      break;
    }
    /* If roll is less than 5, do the following
    If the roll is exactly 4, and the current score > 0 deduct points
    otherwise announce the roll, and roll again
    */
    if(roll < 5){
      if((roll === 4)&&(goldCoins > 0)){
        goldCoins--;
        alert("You rolled a 4! You lose a point");
        alert("Your current score is " + goldCoins);
        continue;
      }
      else{
        alert("You rolled a " + roll + "! No Points. Roll AGAIN!");
        alert("Your current score is " + goldCoins);
      }
      continue;
    }
    goldCoins += roll; 
    alert("Congratulations! You win " + roll + " gold coins");
    alert(`You current score is ${goldCoins}!`);
         
  }
  //Announce Final Score
  alert("Your final score is " + goldCoins + " gold coins.")
}