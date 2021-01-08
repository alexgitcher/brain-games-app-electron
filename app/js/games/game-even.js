const isEven = num => num % 2 === 0;

const gameData = () => {
  const num = Math.ceil(model.generateNumber(100));
  const question = num;
  const correctAnswer = isEven(num) ? 'yes' : 'no';

  return { question, correctAnswer };
};
