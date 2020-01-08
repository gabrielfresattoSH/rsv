export default callback =>
  new Promise(resolve => {
    const interval = setInterval(() => {
      if (callback()) {
        resolve();
        clearInterval(interval);
      }
    }, 200);
  });
