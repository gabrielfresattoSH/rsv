export default function(callback, vanish = false) {
  return new Promise(resolve => {
    const interval = setInterval(() => {
      const elem = callback();
      // Pro caso de vc estar aguardando o elemento desaparecer do HTML
      if (vanish) {
        if (!elem) {
          resolve();
          clearInterval(interval);
        }
      } else {
        // Aguardando o elemento aparecerr
        if (elem) {
          resolve(elem);
          clearInterval(interval);
        }
      }
    }, 1000);
  });
}
