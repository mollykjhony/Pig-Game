/*****PIG GAME ******/
let score, roundScore, activePlayer, gamePlaying;
    init();
    
    let lastDice;

    // WORK FOR BUTTON
    document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {

    // RANDOM NUMBAR 
    let dice1 = Math.floor(Math.random() * 6) + 1;
    let dice2 = Math.floor(Math.random() * 6) + 1;

    // DISPLAY THE RESULT
    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'black-' + dice1 + '.png';
    document.getElementById('dice-2').src = 'black-' + dice2 + '.png';

    // UPDATE THE ROUND SCORE IF THE ROLLED NUMBAR WAS NOT A 1
    if (dice1 !== 1 && dice2 !== 1) {
        //Add Score
        roundScore += dice1 + dice2;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        //Next Player 
        nextPlayer();
    }
    /*
    if ( dice === 6 && lastDice === 6) {
        // PLAYER LOOSER SCORE
        score[activePlayer] = 0;
        document.querySelector('#score-' + activePlayer).textContent = '0';
    } else if (dice !== 1) {

        //ADD SCORE 
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
      }

    lastDice = dice;
    */
}
});


// WORK FOR HOLD
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
     // ADD CURENT SCORE TO GLOBAL SCORE
    score[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = score[activePlayer];

    let input = document.querySelector('.final-score').value;
    let winingScore;
    // Undefined, 0, null or " "are COERCED to false
      if (input) {
          winingScore = input;
      } else {
          winingScore = 100
      }

    // CHECK IF PLAYER WON THE GAME
    if (score[activePlayer] >= winingScore) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.getElementById('dice-1').style.display = 'none';
        document.getElementById('dice-2').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }else {
        nextPlayer();
    }
}
});

// NEXT PLAYER FUNCTIONALITY
function nextPlayer() {
      // THIS IS TURNERY OPERATOR
      activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      roundScore = 0;
  
      document.getElementById('current-0').textContent = '0';
      document.getElementById('current-1').textContent = '0';
   
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
   
      document.getElementById('dice-1').style.display = 'none';
      document.getElementById('dice-2').style.display = 'none';
  }

document.querySelector('.btn-new').addEventListener('click', init); 

// INIT FUNCTIONALITY
function init() {
    score = [0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';

    document.querySelector('#score-0').textContent = 0;
    document.querySelector('#score-1').textContent = 0;

    document.querySelector('#current-0').textContent = 0;
    document.querySelector('#current-1').textContent = 0;

    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}
   