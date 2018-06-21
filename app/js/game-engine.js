let round = 1, rightAnswer;

const maxRounds = 3,
  generateNumber = num => Math.random() * num,
  hideElements = (...elements) => elements.forEach((element) => element.style.display = 'none');

document.addEventListener('DOMContentLoaded', () => {

  const questionNode = document.getElementById('game-question'),
    messageNode = document.getElementById('message'),
    answerNode = document.getElementById('answer'),
    gameContent = document.getElementById('game-content'),
    currentRoundNode = document.getElementById('current-round'),
    rounds = document.getElementById('rounds'),
    checkAnswerBtn = document.getElementById('check-answer'),
    nextRoundBtn = document.getElementById('next-round'),
    playAgainBtn = document.getElementById('play-again');

  const restartContent = () => {
    gameContent.style.display = 'block';
    messageNode.textContent = '';
    currentRoundNode.textContent = round;
    answerNode.value = '';
    answerNode.focus();
  };

  hideElements(checkAnswerBtn, nextRoundBtn, playAgainBtn);

  currentRoundNode.textContent = round;
  rounds.textContent = maxRounds;

  answerNode.focus();

  const gameEngine = gameData => {
    const gameCondition = gameData(),
      quest = gameCondition.question,
      correctResult = gameCondition.correctAnswer;

    rightAnswer = correctResult;
    questionNode.textContent = quest;
  };

  gameEngine(gameData);

  const checkAnswer = (answer, correctAnswer, round) => {
    if (answer === correctAnswer) {
      if (round < maxRounds) {
        hideElements(checkAnswerBtn, gameContent);
        nextRoundBtn.style.display = 'inline-block';
        nextRoundBtn.focus();
        answerNode.value = '';
        messageNode.textContent = 'Correct!';
      } else {
        hideElements(gameContent, nextRoundBtn, checkAnswerBtn);
        playAgainBtn.style.display = 'inline-block';
        playAgainBtn.focus();
        messageNode.textContent = 'Congratulations, you win!';
      }
    } else {
      hideElements(gameContent, nextRoundBtn, checkAnswerBtn);
      playAgainBtn.style.display = 'inline-block';
      playAgainBtn.focus();
      messageNode.textContent = `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`;
    }
  };

  checkAnswerBtn.addEventListener('click', () => {
    answer = answerNode.value;
    checkAnswer(answer, rightAnswer, round);
    round += 1;
  });

  answerNode.addEventListener('keypress', (event) => {
    if (event.which === 13) {
      checkAnswerBtn.click();
      return;
    }
  });

  answerNode.addEventListener('input', () => {
    const value = answerNode.value,
      valueLength = value.length;

    if (valueLength > 0) {
      checkAnswerBtn.style.display = 'inline-block';
    } else {
      checkAnswerBtn.style.display = 'none';
    }
  });

  nextRoundBtn.addEventListener('click', () => {
    gameEngine(gameData);
    restartContent();
    nextRoundBtn.style.display = 'none';
  });

  playAgainBtn.addEventListener('click', () => {
    gameEngine(gameData);
    round = 1;
    hideElements(playAgainBtn, nextRoundBtn);
    restartContent();
  });

});