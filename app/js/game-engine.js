const answerNode = document.getElementById('answer');
const messageNode = document.getElementById('message');
const gameContent = document.getElementById('game-content');
const checkAnswerBtn = document.getElementById('check-answer');
const nextRoundBtn = document.getElementById('next-round');
const playAgainBtn = document.getElementById('play-again');

const model = {
  round: 1,
  maxRounds: 3,
  rightAnswer: '',

  generateNumber: (num) => Math.random() * num,

  gameEngine: (gameData) => {
    const gameCondition = gameData();
    const { question } = gameCondition;
    const { correctAnswer } = gameCondition;

    model.rightAnswer = correctAnswer;
    view.showQuestion(question);
  },

  checkAnswer: (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      view.hideElements(checkAnswerBtn, gameContent);
      nextRoundBtn.style.display = 'inline-block';
      nextRoundBtn.focus();
      answerNode.value = '';
      view.displayMessage('Correct!');

      return true;
    }

    view.hideElements(gameContent, nextRoundBtn, checkAnswerBtn);
    playAgainBtn.style.display = 'inline-block';
    playAgainBtn.focus();
    view.displayMessage(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);

    return false;
  }
};

const view = {
  displayMessage: (message) => {
    messageNode.textContent = message;
  },

  hideElements: (...elements) => elements.forEach((element) => element.style.display = 'none'),

  showContent: () => {
    gameContent.style.display = 'block';
    messageNode.textContent = '';
    answerNode.value = '';
    answerNode.focus();
  },

  showQuestion: (quest) => {
    const questionNode = document.getElementById('game-question');
    questionNode.textContent = quest;
  },

  showRounds: () => {
    const currentRoundNode = document.getElementById('current-round');
    const rounds = document.getElementById('rounds');

    currentRoundNode.textContent = model.round;
    rounds.textContent = model.maxRounds;
  }
};

const controller = {
  processAnswer: (answer) => {
    const isRightAnswer = model.checkAnswer(answer, model.rightAnswer);

    if (isRightAnswer && model.round === model.maxRounds) {
      view.hideElements(gameContent, nextRoundBtn, checkAnswerBtn);
      playAgainBtn.style.display = 'inline-block';
      playAgainBtn.focus();
      view.displayMessage('Congratulations, you win!');
    }
  }
};

checkAnswerBtn.addEventListener('click', () => {
  answer = answerNode.value;
  controller.processAnswer(answer);
  model.round += 1;
});

answerNode.addEventListener('keypress', (event) => {
  if (event.which === 13) {
    checkAnswerBtn.click();
    return;
  }
});

answerNode.addEventListener('input', () => {
  const { value } = answerNode;
  const valueLength = value.length;

  if (valueLength > 0) {
    checkAnswerBtn.style.display = 'inline-block';
  } else {
    view.hideElements(checkAnswerBtn);
  }
});

nextRoundBtn.addEventListener('click', () => {
  model.gameEngine(gameData);
  view.showRounds();
  view.showContent();
  view.hideElements(nextRoundBtn);
});

playAgainBtn.addEventListener('click', () => {
  model.gameEngine(gameData);
  model.round = 1;
  view.hideElements(playAgainBtn, nextRoundBtn);
  view.showRounds();
  view.showContent();
});

document.addEventListener('DOMContentLoaded', () => {
  view.hideElements(checkAnswerBtn, nextRoundBtn, playAgainBtn);
  view.showRounds();
  answerNode.focus();
  model.gameEngine(gameData);
});
