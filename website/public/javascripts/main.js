const ele = document.getElementById("counter");

const increment = ((num = 0, interval = null) => () => {
  interval = setInterval(() => {
    if (num <= 100) {
        ele.innerText = num++;
    } else {
      clearInterval(interval);
    }
  }, 10);
})();

increment();