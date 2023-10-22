const promise = new Promise((resolve, reject) => {
  reject("aww sheesh server is down boys");
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch(err => {
    console.log(err)
  });
