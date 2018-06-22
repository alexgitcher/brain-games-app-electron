const sortNum = (num) => {
  const numArray = num.toString().split('');
  return numArray.sort((a, b) => a - b).join('');
};

const getMiddlePart = (num) => {
  const numStr = num.toString();
  return numStr.substring(1, numStr.length - 1);
};

const numBalance = (num) => {
  const sortedNum = sortNum(num),
    firstNum = Number(sortedNum[0]),
    lastNum = Number(sortedNum[sortedNum.length - 1]),
    middleNum = getMiddlePart(sortedNum),
    diff = lastNum - firstNum;

  if (diff <= 1) return sortedNum;

  const newNum = Number([firstNum + 1, middleNum, lastNum - 1].join(''));

  return numBalance(newNum);
};

const gameData = () => {
  const num = Math.ceil(model.generateNumber(10000)),
    question = num,
    correctAnswer = numBalance(num);
  return {
    question,
    correctAnswer: correctAnswer.toString()
  };
};
