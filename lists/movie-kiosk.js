const Customer = require('./customer.js');
const List = require('./list.js');
const fs = require('fs');

const movies = fs.readFileSync('./movie-list.txt', 'utf8').split('\n');

const movieList = new List();
const customers = new List();

movies.forEach(movie => movieList.append(movie));

function checkOut(name, movie, filmList, customerList) {
  if (filmList.contains(movie)) {
    customerList.append(new Customer(name, movie));
    filmList.remove(movie);
    return true;
  }
  console.log(`${movie} is not available.`);
  return false;
}

checkOut('sean', '2. The Godfather', movieList, customers);
console.log(JSON.stringify(customers.getList(), undefined, 2));
