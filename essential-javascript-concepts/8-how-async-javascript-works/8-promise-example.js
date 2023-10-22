const promise = new Promise((resolve, reject) => {
  reject({user: "Helena"});
});

promise
  .then((data) => {
    return data
  })
  // anything you return in dot then(.then) will going to automatically go down to the other dot(.then) then
  .then((user) => {
    console.log(user)
  })
  .catch(err => {
    console.log(err)
  });
