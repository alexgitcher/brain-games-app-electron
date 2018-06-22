const isEven = num => num % 2 === 0;

const gameData = () => {
  const num = Math.ceil(model.generateNumber(100)),
    question = num,
    correctAnswer = isEven(num) ? 'yes' : 'no';
  return { question, correctAnswer };
};
