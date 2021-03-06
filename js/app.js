var prodArray = []; //stores Product Objects
var globalRandNumOne = 0;
var globalRandNumTwo = 0;
var globalRandNumThree = 0;
var globalLeftClickTracker = 0; //global tracker for number of container clicks
var globalCenterClickTracker = 0; //global tracker for number of container clicks
var globalRightClickTracker = 0; //global tracker for number of container clicks

//Product Constructor defined below
function Product (productName, filePath) {
  this.productName = productName;
  this.filePath = filePath;
  this.productClicksTracker = 0;
  this.productImpressionsTracker = 0;
  this.rightClickTracker = 0;
  this.centerClickTracker = 0;
  this.leftClickTracker = 0;
  // this.conversionRatio = parseFloat(this.productImpressionsTracker) / parseFloat(this.productClicksTracker);
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
var buttonEventTracker = document.getElementById('loadButton');


function randomProductsDisplay () {

  var randNumOne = Math.floor(Math.random() * 14);
  globalRandNumOne = randNumOne; //saves random number for later use
  displayWindowOne.innerHTML = '<img src="' + prodArray[randNumOne].filePath +'" alt = "">';
  var randNumTwo = Math.floor(Math.random() * 14); //saves random number for later use
  while (randNumTwo === randNumOne) {
    var randNumTwo = Math.floor(Math.random() * 14);
    globalRandNumTwo = randNumTwo; //saves random number for later use
  }
  displayWindowTwo.innerHTML = '<img src="' + prodArray[randNumTwo].filePath +'" alt = "">';
  var randNumThree = Math.floor(Math.random() * 14);
  while (randNumThree === randNumTwo || randNumThree === randNumOne) {
    var randNumThree = Math.floor(Math.random() * 14);
    globalRandNumThree = randNumThree; //saves random number for later use
  }
  displayWindowThree.innerHTML = '<img src="' + prodArray[randNumThree].filePath +'" alt = "">';

 //3 lines below count the number of impressions per product
  prodArray[globalRandNumOne].productImpressionsTracker++;
  prodArray[globalRandNumTwo].productImpressionsTracker++;
  prodArray[globalRandNumThree].productImpressionsTracker++;
}

randomProductsDisplay(); //calls the initial random product display

displayWindowOne.addEventListener('click', handleWindowOneClick);
displayWindowTwo.addEventListener('click', handleWindowTwoClick);
displayWindowThree.addEventListener('click', handleWindowThreeClick);
buttonEventTracker.addEventListener('click', handleButtonClick);

function handleWindowOneClick (event) {
  handleProductClick(); //adds to global click counter
  prodArray[globalRandNumOne].productClicksTracker++;
  prodArray[globalRandNumOne].leftClickTracker++; //tracks where the image was displayed when it was clicked
  globalLeftClickTracker++; //tracks which container was clicked
  console.log(prodArray[globalRandNumOne].productName+ ' was clicked. Its been clicked ' + prodArray[globalRandNumOne].productClicksTracker + ' times so far');
  randomProductsDisplay();
}

function handleWindowTwoClick (event) {
  handleProductClick(); //adds to global click counter
  prodArray[globalRandNumTwo].productClicksTracker++;
  prodArray[globalRandNumTwo].centerClickTracker++; //tracks where the image was displayed when it was clicked
  globalCenterClickTracker++; //tracks which container was clicked
  console.log(prodArray[globalRandNumTwo].productName+ ' was clicked. Its been clicked ' + prodArray[globalRandNumTwo].productClicksTracker + ' times so far');
  randomProductsDisplay();
}

function handleWindowThreeClick (event) {
  handleProductClick(); //adds to global click counter
  prodArray[globalRandNumThree].productClicksTracker++;
  prodArray[globalRandNumThree].rightClickTracker++; //tracks where the image was displayed when it was clicked
  globalRightClickTracker++; //tracks which container was clicked
  console.log(prodArray[globalRandNumThree].productName+ ' was clicked. Its been clicked ' + prodArray[globalRandNumThree].productClicksTracker + ' times so far');
  randomProductsDisplay();
}


//data for chart initiated below
var data = {
  labels: [],
  datasets: [{
    label: 'Times Viewed',
    fillColor: 'rgba(220,220,220,0.5)',
    strokeColor: 'rgba(220,220,220,0.8)',
    highlightFill: 'rgba(220,220,220,0.75)',
    highlightStroke: 'rgba(220,220,220,1)',
    data: []
  },
    {
      label: 'Times Clicked',
      fillColor: 'rgba(420,420,220,0.5)',
      strokeColor: 'rgba(220,220,220,0.8)',
      highlightFill: 'rgba(220,220,220,0.75)',
      highlightStroke: 'rgba(220,220,220,1)',
      data: []
    }
]
};

var barChartTwoData = {
  labels: [],
  datasets: [{
    label: 'Left Clicks',
    fillColor: 'rgba(220,220,220,0.5)',
    strokeColor: 'rgba(220,220,220,0.8)',
    highlightFill: 'rgba(220,220,220,0.75)',
    highlightStroke: 'rgba(220,220,220,1)',
    data: []
  },
    {
      label: 'Middle Clicks',
      fillColor: 'rgba(420,420,220,0.5)',
      strokeColor: 'rgba(220,220,220,0.8)',
      highlightFill: 'rgba(220,220,220,0.75)',
      highlightStroke: 'rgba(220,220,220,1)',
      data: []
    },
    {
      label: 'Right Clicks',
      fillColor: 'rgba(620,420,220,0.5)',
      strokeColor: 'rgba(620,220,220,0.8)',
      highlightFill: 'rgba(220,220,220,0.75)',
      highlightStroke: 'rgba(220,220,220,1)',
      data: []
    }
]
};

var pieData = [{
  value: '',
  color:'#F7464A',
  highlight: '#FF5A5E',
  label: 'Left Clicks'
},
  {
    value: '',
    color:'#46BFBD',
    highlight: '#5AD3D1',
    label: 'Middle Clicks'
  },
  {
    value: '',
    color: '#FDB45C',
    highlight: '#FFC870',
    label: 'Right Clicks'
  }
];


//function below handles global click tracking
function handleProductClick() {
  if (globalClicksTracker < 15) {
    globalClicksTracker += 1;
    console.log('there have been ' + globalClicksTracker + ' global clicks so far');

  } else {
    document.getElementById('loadButton').className = 'loadButton'; //loads button after specified number of global clicks
  }
}
//chart functionality below

function handleButtonClick (event) {
  //populates pieChartOne
  pieData[0].value = globalLeftClickTracker;
  pieData[1].value = globalCenterClickTracker;
  pieData[2].value = globalRightClickTracker;

  //populates parts of the graph datasets
  for (var i = 0; i <prodArray.length; i++) {
    data.labels[i] = prodArray[i].productName;
    data.datasets[0].data[i] = prodArray[i].productImpressionsTracker;    //flipped 197 and 198 on 231 and 232 
    data.datasets[1].data[i] = prodArray[i].productClicksTracker;
    barChartTwoData.labels[i] = prodArray[i].productName;
    barChartTwoData.datasets[0].data[i] = prodArray[i].rightClickTracker;
    barChartTwoData.datasets[1].data[i] = prodArray[i].middleClickTracker;
    barChartTwoData.datasets[2].data[i] = prodArray[i].leftClickTracker;

  }

   localStorage.setItem('chartPersist', JSON.stringify(data));
  //unhides canvas
  var barChart = document.getElementById('barChart').getContext('2d');
  new Chart(barChart).Bar(data);
  var pieChartOne = document.getElementById('pieChartOne').getContext('2d');
  new Chart(pieChartOne).Pie(pieData);
  var barChartTwo = document.getElementById('barChartTwo').getContext('2d');
  new Chart(barChartTwo).Bar(barChartTwoData);
  //reveals canvas elements along with associated h3 elements
  document.getElementById('barChartContainer').className= 'showCanvas';
  document.getElementById('pieChartContainer').className = 'showCanvas';
  document.getElementById('barChartHeader').className = 'showCanvas';
  document.getElementById('pieChartHeader').className = 'showCanvas';
  document.getElementById('canvasContainer').className = 'showCanvas';
  document.getElementById('pieChartOne').className = 'showCanvas';
  document.getElementById('barChart').className = 'showCanvas';
  document.getElementById('barChartTwo').className = 'showCanvas';
  document.getElementById('barChartTwoHeader').className = 'showCanvas';
  document.getElementById('barChartTwoContainer').className = 'showCanvas';
}

var chartData = localStorage.getItem('chartPersist');
  if (chartData){
    data = JSON.parse(chartData);
    for (var i = 0; i <prodArray.length; i++) {
      prodArray[i].productImpressionsTracker = data.datasets[0].data[i];
      prodArray[i].productClicksTracker = data.datasets[1].data[i];
    }

  }
  else{
    console.log('local Storage empty ');
    localStorage.setItem('chartPersist', JSON.stringify(data));
  }


var clearLS = document.getElementById('clearLSButton');
clearLS.addEventListener('click',clearLSHandler);

    function clearLSHandler (event) {
      console.log('i just cleared the local storage');
      localStorage.clear();
    }
