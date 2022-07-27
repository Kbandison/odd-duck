'use strict';

let totalVotes = 25;
let allProducts = [];

let images = document.getElementById('images');
let imgOne = document.getElementById('one');
let imgTwo = document.getElementById('two');
let imgThree = document.getElementById('three');
let button = document.getElementById('results-btn');
let canvasElem = document.getElementById('results-chart');

function Product(name, photo = 'jpg') {
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
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');

function randomGen() {
  return Math.floor(Math.random() * (allProducts.length));
}

let productArray = [];

function renderImg(){

  while(productArray.length < 6){
    let randomNum = randomGen();
    if(!productArray.includes(randomNum)){
      productArray.push(randomNum);
    }
  }
  let imgOneIndex = productArray.shift();
  let imgTwoIndex = productArray.shift();
  let imgThreeIndex = productArray.shift();

  imgOne.src = allProducts[imgOneIndex].photo;
  imgOne.alt = allProducts[imgOneIndex].name;
  allProducts[imgOneIndex].views++;

  imgTwo.src = allProducts[imgTwoIndex].photo;
  imgTwo.alt = allProducts[imgTwoIndex].name;
  allProducts[imgTwoIndex].views++;

  imgThree.src = allProducts[imgThreeIndex].photo;
  imgThree.alt = allProducts[imgThreeIndex].name;
  allProducts[imgThreeIndex].views++;
}

renderImg();

function handleClick(event) {
  let imgClicked = event.target.alt;

  for (let i = 0; i < allProducts.length; i++){
    if(imgClicked === allProducts[i].name){
      allProducts[i].votes++;
    }
  }
  totalVotes--;

  if (totalVotes === 0){
    images.removeEventListener('click', handleClick);
  }
  renderImg();
}

function handleShowResults(){
  if(totalVotes === 0){
    renderChart();
    // for(let i = 0; i < allProducts.length; i++){
    //   let liElem = document.createElement('li');
    //   liElem.textContent = `${allProducts[i].name}: views: ${allProducts[i].views}, votes: ${allProducts[i].votes}`;
    //   results.appendChild(liElem);
    // }
    button.removeEventListener('click', handleShowResults);
  }
}

function renderChart(){

  let productName = [];
  let productVotes = [];
  let productViews = [];

  for(let i = 0; i < allProducts.length; i++) {
    productName.push(allProducts[i].name);
    productVotes.push(allProducts[i].votes);
    productViews.push(allProducts[i].views);
  }

  let myChart = {
    type: 'bar',
    data: {
      labels: productName,
      datasets: [{
        label: '# of Votes',
        data: productVotes,
        backgroundColor: [
          'gray'
        ],
        borderColor: [
          'rgb(43, 181, 206)'
        ],
        borderWidth: 2
      },

      {
        label: '# of views',
        data: productViews,
        backgroundColor: [
          'rgb(43, 181, 206)'
        ],
        borderColor: [
          'rgb(43, 181, 206)'
        ],
        borderWidth: 2
      }]
    },
    options: {
      // indexAxis: 'y',
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };

  new Chart(canvasElem, myChart);
}

images.addEventListener('click', handleClick);
button.addEventListener('click', handleShowResults);
