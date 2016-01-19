var prodArray = []; //stores Product Objects
var globalRandNumOne = 0;
var globalRandNumTwo = 0;
var globalRandNumThree = 0;

//Product Constructor defined below
function Product (productName, filePath) {
  this.productName = productName;
  this.filePath = filePath;
  this.productClicksTracker = 0;
}

var globalClicksTracker = 0; //tracks number of products clicked, regardless of selection

//all Product Objects are created below and pushed to prodArray
prodArray[0] = new Product ('R2D2 Bag', 'img/prod1.jpg');
prodArray[1] = new Product ('Banana Slicer', 'img/prod2.jpg');
prodArray[2] = new Product ('Open Toed Boots', 'img/prod3.jpg');
prodArray[3] = new Product ('Convex Chair', 'img/prod4.jpg');
prodArray[4] = new Product ('Chtulu Doll', 'img/prod5.jpg');
prodArray[5] = new Product ('Dragon Meat Can', 'img/prod6.jpg');
prodArray[6] = new Product ('Pen Cap Utensils', 'img/prod7.jpg');
prodArray[7] = new Product ('Pizza Cutter', 'img/prod8.jpg');
prodArray[8] = new Product ('Shark Sleeping Bag', 'img/prod9.jpg');
prodArray[9] = new Product ('Baby Sweeper Onesie', 'img/prod10.png');
prodArray[10] = new Product ('Unicorn Meat Can', 'img/prod11.jpg');
prodArray[11] = new Product ('USB Tentacle Flash Drive', 'img/prod12.gif');
prodArray[12] = new Product ('Self Watering Can', 'img/prod13.jpg');
prodArray[13] = new Product ('Death Star Wine Glass', 'img/prod14.jpg');

var displayWindowOne = document.getElementById('productOne');
var displayWindowTwo = document.getElementById('productTwo');
var displayWindowThree = document.getElementById('productThree');


function randomProductsDisplay () {

 var randNumOne = Math.floor(Math.random() * 14);
 globalRandNumOne = randNumOne; //saves random number for later use
 displayWindowOne.innerHTML = '<img src="' + prodArray[randNumOne].filePath +'" alt = "">';
 var randNumTwo = Math.floor(Math.random() * 14);
 if (randNumTwo === randNumOne) {
   var randNumTwo = Math.floor(Math.random() * 14);
   globalRandNumTwo = randNumTwo;
   displayWindowTwo.innerHTML = '<img src="' + prodArray[randNumTwo].filePath +'" alt = "">';
 } else {
   globalRandNumTwo = randNumTwo;
   displayWindowTwo.innerHTML = '<img src="' + prodArray[randNumTwo].filePath +'" alt = "">';
 };
 var randNumThree = Math.floor(Math.random() * 14);
 if (randNumThree === randNumTwo || randNumThree === randNumOne) {
   var randNumThree = Math.floor(Math.random() * 14);
   globalRandNumThree = randNumThree;
   displayWindowThree.innerHTML = '<img src="' + prodArray[randNumThree].filePath +'" alt = "">';
 } else {
   globalRandNumThree = randNumThree;
   displayWindowThree.innerHTML = '<img src="' + prodArray[randNumThree].filePath +'" alt = "">';
 };
}

randomProductsDisplay(); //calls the initial random product display

displayWindowOne.addEventListener('click', handleWindowOneClick);
displayWindowTwo.addEventListener('click', handleWindowTwoClick);
displayWindowThree.addEventListener('click', handleWindowThreeClick);

function handleWindowOneClick (event) {
  prodArray[globalRandNumOne].productClicksTracker++;
  console.log(prodArray[globalRandNumOne].productName+ ' was clicked. Its been clicked ' + prodArray[globalRandNumOne].productClicksTracker + ' times so far');
  randomProductsDisplay();
}

function handleWindowTwoClick (event) {
  prodArray[globalRandNumTwo].productClicksTracker++;
  console.log(prodArray[globalRandNumTwo].productName+ ' was clicked. Its been clicked ' + prodArray[globalRandNumTwo].productClicksTracker + ' times so far')
  randomProductsDisplay();
}

function handleWindowThreeClick (event) {
  prodArray[globalRandNumThree].productClicksTracker++;
  console.log(prodArray[globalRandNumThree].productName+ ' was clicked. Its been clicked ' + prodArray[globalRandNumThree].productClicksTracker + ' times so far')
  randomProductsDisplay();
}

function handleProductClick() {
  if (globalClicksTracker < 16) {
  globalClicksTracker += 1;
  console.log('there have been ' + globalClicksTracker + ' global clicks so far');

} else {
  console.log('more than 14 clicks, trigger button yo');
};
}
