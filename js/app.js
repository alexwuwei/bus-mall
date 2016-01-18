var prodArray = [[]]; //stores Product Objects

//Product Constructor defined below
function Product (productName, filePath) {
  this.productName = productName;
  this.filePath = filePath;
  this.productClicksTracker = 0;

  prodArray.push(this.Product);
  console.log(prodArray);
}

var globalClicksTracker = 0; //tracks number of products clicked, regardless of selection

//all Product Objects are created below
var prodOne = new Product ('R2D2 Bag', 'img/prod1.jpg');
console.log(prodOne);
var prodTwo = new Product ('Banana Slicer', 'img/prod1.jpg');
var prodThree = new Product ('Open Toed Boots', 'img/prod2.jpg');
var prodFour = new Product ('Convex Chair', 'img/prod3.jpg');
var prodFive = new Product ('Chtulu Doll', 'img/prod4.jpg');
var prodSix = new Product ('Dragon Meat Can', 'img/prod5.jpg');
var prodSeven = new Product ('Pen Cap Utensils', 'img/prod6.jpg');
var prodEight = new Product ('Pizza Cutter', 'img/prod7.jpg');
var prodNine = new Product ('Shark Sleeping Bag', 'img/prod8.jpg');
var prodTen = new Product ('Baby Sweeper Onesie', 'img/prod9.jpg');
var prodEleven = new Product ('Unicorn Meat Can', 'img/prod10.png');
var prodTwelve = new Product ('USB Tentacle Flash Drive', 'img/prod11.jpg');
var prodThirteen = new Product ('Self Watering Can', 'img/prod13.gif');
var prodFourteen = new Product ('Death Star Wine Glass', 'img/prod14.jpg');

var displayWindowOne = document.getElementById('productOne');
var displayWindowTwo = document.getElementById('productTwo');
var displayWindowThree = document.getElementById('productThree');

displayWindowOne.addEventListener('click', handleProductClick);
displayWindowTwo.addEventListener('click', handleProductClick);
displayWindowThree.addEventListener('click', handleProductClick);

function handleProductClick(event) {
  if (globalClicksTracker < 14) {
  globalClicksTracker += 1;
  console.log('there have been ' + globalClicksTracker + ' global clicks so far')

} else {
  console.log('more than 14 clicks, trigger button yo');
};
}
displayWindowOne.innerHTML = '<img src="img/prod3.jpg" alt="" />';
