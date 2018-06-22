const steps = [2, 3, 4, 5],
  progressionLength = 10;

const gameData = () => {
  const stepIndex = Math.round(model.generateNumber(3)),
    step = steps[stepIndex],
    startNum = Math.ceil(model.generateNumber(100)),
    hiddenNum = Math.round(model.generateNumber(9)),
    progression = [];

  for (let i = 0; i < progressionLength - 1; i += 1) {
    if (i === 0) progression.push(startNum);
    progression.push(progression[i] + step);
  }

  const correctAnswer = progression[hiddenNum];

  const progressoinQuestion = progression.map((item, index) => {
    if (index === hiddenNum) return '..';
    return item;
  });

  const question = progressoinQuestion.join(' ');

  return {
    question,
    correctAnswer: correctAnswer.toString()
  };
};
