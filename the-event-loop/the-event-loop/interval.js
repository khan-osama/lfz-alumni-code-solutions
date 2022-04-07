let curCount = 3;

let handle = setInterval(() => {
  if (curCount === 0) {
    console.log('Blast off!');
    clearInterval(handle);
    return;
  }
  console.log(curCount);
  curCount--;
}, 1000);
