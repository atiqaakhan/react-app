export const dataMonitor = (emit) => {
  let maxTimeLimit = 2000;
  let timeInterval = Math.floor(Math.random() * (maxTimeLimit - 100)) + 100;

  setInterval(() => {
    let value = Math.random() * 30;
    emit(timeInterval > 1000 ? "N/A" : value.toFixed(1));
  }, timeInterval);

  setInterval(() => {
    timeInterval = Math.floor(Math.random() * (maxTimeLimit - 100)) + 100;
    maxTimeLimit = maxTimeLimit === 1000 ? 2000 : 1000;
  }, 2000);
};
