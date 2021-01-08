const mod = (num, divider) => num % divider === 0;

const greatestCommonDivisor = (num1, num2) => {
  const minNumber = num1 < num2 ? num1 : num2;

  const iter = (number1, number2, divisor) => {
    if (mod(number1, divisor) && mod(number2, divisor)) return divisor;

    const div = divisor - 1;
    return iter(number1, number2, div);
  };

  return iter(num1, num2, minNumber);
};

const gameData = () => {
  const num1 = Math.ceil(model.generateNumber(100));
  const num2 = Math.ceil(model.generateNumber(100));
  const question = `${num1} ${num2}`;
  const correctAnswer = greatestCommonDivisor(num1, num2);

  return {
    question,
    correctAnswer: correctAnswer.toString()
  };
};
