'use strict';

let totalVotes = 25;
let allProducts = [];

let images = document.getElementById('images');
let imgOne = document.getElementById('one');
let imgTwo = document.getElementById('two');
let imgThree = document.getElementById('three');
let button = document.createElement('results-btn');
let results = document.createElement('results-list');

function Product(name, photo = 'jpg', votes, views) {
  this.name = name;
  this.photo = `img/${name}.${photo}`;
  this.votes = 0;
  this.views = 0;

  allProducts.push(this);
}

new Product('sweep', 'png');
new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pen-sweep');
new Product('scissors');
new Product('shark');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');

