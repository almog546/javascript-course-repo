// For loop:
let names = ["John", "Lee", "Paul", "Rose"];

for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

// For...of loop:
let games = ["assassin creed syndicate", "fortnite", "call of duty mobile"];

for (const name of games) {
  console.log(name);
}

// forEach method:
let movies = ["John Wick", "Spider Man", "Samaritan", "Deadpool"];

movies.forEach(function (movie) {
  console.log(movie);
});
