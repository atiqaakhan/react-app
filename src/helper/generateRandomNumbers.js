export const generateRandomNumbers = (minLimit, maxLimit) => {
  if (maxLimit) {
    return Math.floor(Math.random() * (maxLimit - minLimit)) + minLimit;
  }
  return Math.floor(Math.random() * minLimit);
};
