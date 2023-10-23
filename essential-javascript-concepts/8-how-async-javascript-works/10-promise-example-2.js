// promise with setTimeout sample

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("this is my data from the server");
  }, 2000);
});

promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
