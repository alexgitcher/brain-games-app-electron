const generateNumber = num => Math.random() * num;

let round = 1,
  answerOutside;

const maxRounds = 3;

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

  checkAnswerBtn.style.display = 'none';
  nextRoundBtn.style.display = 'none';
  playAgainBtn.style.display = 'none';

  currentRoundNode.textContent = round;
  rounds.textContent = maxRounds;

  answerNode.focus();

  // const greeting = 'Welcome to the Brain Games!';

  const gameEngine = gameData => {
    const gameCondition = gameData(),
      quest = gameCondition.question,
      correctResult = gameCondition.correctAnswer;

    answerOutside = correctResult;
    questionNode.textContent = quest;
  };

  gameEngine(gameData);

  const checkAnswer = (answer, correctAnswer, round) => {
    if (round < maxRounds) {

      if (answer === correctAnswer) {
        checkAnswerBtn.style.display = 'none';
        nextRoundBtn.style.display = 'inline-block';
        messageNode.textContent = 'Correct!';
        answerNode.value = '';
        answerNode.setAttribute('disabled', 'disabled');
      } else {
        messageNode.textContent = `"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`;
        gameContent.style.display = 'none';
        nextRoundBtn.style.display = 'none';
        checkAnswerBtn.style.display = 'none';
        playAgainBtn.style.display = 'inline-block';
      }

    } else {
      gameContent.style.display = 'none';
      nextRoundBtn.style.display = 'none';
      checkAnswerBtn.style.display = 'none';
      playAgainBtn.style.display = 'inline-block';
      messageNode.textContent = 'Congratulations, you\'re win!';
    }
  };

  checkAnswerBtn.addEventListener('click', () => {
    answer = answerNode.value;
    checkAnswer(answer, answerOutside, round);
    round += 1;
  });


  answerNode.addEventListener('keydown', (event) => {
    if (event.which === 13) {
      answer = answerNode.value;
      checkAnswer(answer, answerOutside, round);
      round += 1;
    }
  });

  answerNode.addEventListener('input', (event) => {
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
    answerNode.value = '';
    answerNode.removeAttribute('disabled');
    messageNode.textContent = '';
    currentRoundNode.textContent = round;
    nextRoundBtn.style.display = 'none';
  });

  playAgainBtn.addEventListener('click', () => {
    gameEngine(gameData);
    round = 1;
    playAgainBtn.style.display = 'none';
    nextRoundBtn.style.display = 'none';
    checkAnswerBtn.style.display = 'inline-block';
    gameContent.style.display = 'block';
    messageNode.textContent = '';
    answerNode.value = '';
    currentRoundNode.textContent = round;
  });


});