const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const gameData = () => {
  const number = Math.ceil(model.generateNumber(100));
  const question = number;
  const correctAnswer = isPrime(number) ? 'yes' : 'no';

  return { question, correctAnswer };
};
