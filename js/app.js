var prodArray = [[]];

function Product (productName, filePath) {
  this.productName = productName;
  this.filePath = filePath;

  prodArray.push(this.Product);
}

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
