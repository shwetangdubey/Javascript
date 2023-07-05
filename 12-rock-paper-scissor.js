score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  looses: 0,
  ties:0
}; 





function playGames(playerMove) {
  const computerSelection = selectComputerMove();
  let result = null;
  if (playerMove === 'scissor') {
    if (computerSelection === 'rock') {
      result = 'You loos.';
    } else if (computerSelection === 'paper') {
      result = 'You win.';
    } else if (computerSelection === 'scissor') {
      result = 'Tie.';
    }
   
  }

  else if (playerMove === 'paper') {
    if (computerSelection === 'rock') {
    result = 'You win.';
    } else if (computerSelection === 'paper') {
    result = 'Tie.';
    } else if (computerSelection === 'scissor') {
    result = 'You loos.';
    }
  }

  else if (playerMove === 'rock') {
    if (computerSelection === 'rock') {
      result = 'Tie.';
    } else if (computerSelection === 'paper') {
      result = 'You loos.';
    } else if (computerSelection === 'scissor') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins ++;
  } else if (result === 'You loos.') score.looses ++;
  else if (result === 'Tie.') score.ties ++;


  localStorage.setItem('score', JSON.stringify(score));
  //alert(`You picked ${playerMove}. Computer pickes ${computerSelection}. ${result}
  //Wins : ${score.wins}, Losses : ${score.looses}, Ties : ${score.ties}`);
  document.querySelector('.js-result').innerHTML = result;
  document.querySelector('.js-show').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="image-class">  <img src="images/${computerSelection}-emoji.png" class="image-class"> Computer.`;
  updateScore();
  
}
function updateScore() {
  document.querySelector('.js-score')
  .innerHTML = `Wins : ${score.wins}, Losses : ${score.looses}, Ties : ${score.ties}`;
}

function showResult() {

}


function selectComputerMove(){

  const randomNumber = Math.random();
  let computerSelection = null;
  if (randomNumber >= 0 && randomNumber <= 1/3) {
  computerSelection = 'rock';
} else if (randomNumber > 1/3 && randomNumber <= 2/3) {
  computerSelection = 'paper';
} else {
  computerSelection = 'scissor';
}

return computerSelection;
}


let gameId;
let isAutoPlay = false;
function autoPlay() {
  
  if (!isAutoPlay) {
    gameId = setInterval (() => {
      const playerMoveAuto = selectComputerMove();
      playGames(playerMoveAuto);
      }, 1000);
    document.querySelector('.js-stop-autoPlay')
      .innerHTML = `Stop`;
    
    isAutoPlay = true;
  } else {
    clearInterval(gameId);
    document.querySelector('.js-stop-autoPlay').innerHTML = 'Auto play';
    isAutoPlay = false;
  } 
}
document.querySelector('.js-game1')
  .addEventListener('click', () => {
    playGames('rock')
  });
document.querySelector('.js-game2')
  .addEventListener('click', () => {
    playGames('paper')
  });
document.querySelector('.js-game3')
  .addEventListener('click', ()=> {
    playGames('scissor')
  });

const reset_button = () => {
  score.wins = 0;
    score.ties = 0;
    score.looses = 0;
    localStorage.removeItem('score');
   // alert(`The score has been reset to: 
   // wins : ${score.wins}, Losses : ${score.looses}, Ties : ${score.ties}`);
    updateScore();
};
document.querySelector('.js-reset')
  .addEventListener('click', reset_button);
document.querySelector('.js-autoplay')
  .addEventListener('click', () => {
    autoPlay();
  });
document.body.addEventListener('keydown', (event) => {
  if(event.key === 'r') {
    playGames('rock');
  } else if (event.key === 'p') playGames('paper');
  else if(event.key === 's') playGames('scissor');
  else alert('Enter r for rock, p for Paper, s for scissor');
})



