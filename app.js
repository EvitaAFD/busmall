'use strict';
//global variables
var images = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var productArray = [];
var index1, index2, index3;
var totalClicks = 0;
var totalViews = [];

//DOM variables
var picContainer = document.getElementById('random-images');
var el1 = document.getElementById('left');
var el2 = document.getElementById('center');
var el3 = document.getElementById('right');
var elArray = [el1, el2, el3];
var currentImageDis = [];

function Product (name){

  this.name = name;
  this.filePath = './img/' + name + '.jpg';
  this.numViewed = 0;
  this.numClicked = 0;

}
//create product images and push into productArray
for(var i = 0; i < images.length; i++){
  var newProduct = new Product(images[i]);
  productArray.push(newProduct);
}

console.log(productArray);

//three randomly generated images
function randomImageGen () {
  return Math.floor(Math.random() * (productArray.length - 0)) + 0;
}

//console.log(randomImageGen());
//creates random number three times, different everytime, use number to grab filepath out of productArray at index randomImageGen, and displays image
function makeThreeImages (){
  for(var j = 0; j < 3; j++){
    console.log(j);
    var newImage = randomImageGen();
    var getImage = productArray[newImage].filePath;
  //  console.log(getImage);
  }
}
//console.log(currentImageDis);

function displayThreeImages () {
  makeThreeImages();
  index1 = randomImageGen();
  index2 = randomImageGen();
  index3 = randomImageGen();
  if (index1 === index2){
    index1 = randomImageGen();
    index2 = randomImageGen();
    index3 = randomImageGen();
  }
  if (index1 === index3) {
    index1 = randomImageGen();
    index2 = randomImageGen();
    index3 = randomImageGen();
  }
  if (index2 === index3){
    index1 = randomImageGen();
    index2 = randomImageGen();
    index3 = randomImageGen();
  }
  console.log(index1, index2, index3);

  el1.setAttribute('src', productArray[index1].filePath);
  el2.setAttribute('src', productArray[index2].filePath);
  el3.setAttribute('src', productArray[index3].filePath);

  console.log(productArray);
}
displayThreeImages();
totalViews.push(productArray[index1], productArray[index2], productArray[index3]);
el1.addEventListener('click', clickImageOne, false);
function clickImageOne() {
  stopEventListener();
  totalClicks ++;
  productArray[index1].numClicked++;
  totalViews ++;
  productArray[index1].numViewed++;
  console.log('this is this total' + totalClicks);
  console.log(productArray[index1]);
  displayThreeImages();
}
el2.addEventListener('click', clickImageTwo, false);
function clickImageTwo(){
  stopEventListener();
  totalClicks ++;
  productArray[index2].numClicked++;
  totalViews ++;
  productArray[index2].numViewed++;
  console.log('this is this total' + totalClicks);
  console.log(productArray[index2]);
  displayThreeImages();
}
el3.addEventListener('click', clickImageThree, false);
function clickImageThree() {
  stopEventListener();
  totalClicks ++;
  productArray[index3].numClicked++;
  totalViews ++;
  productArray[index3].numViewed++;
  console.log('this is this total' + totalClicks);
  console.log(productArray[index3]);
  displayThreeImages();
}

function stopEventListener() {
  if (totalClicks > 5) {
    el1.removeEventListener('click', clickImageOne);
    el2.removeEventListener('click', clickImageTwo);
    el3.removeEventListener('click', clickImageThree);
    listImagesWithVotes();
  }
}

//display list after voting completed
function listImagesWithVotes() {
  var ImgsAndVotes = document.getElementById('num-votes-display');
  for(var i = 0; i < productArray.length; i++) {
    var listOfImg = document.createElement('li');
    listOfImg.textContent = 'The ' + productArray[i].name + ' was voted for ' + productArray[i].numClicked + ' times, and was shown ' + productArray[i].numViewed + ' times!';
    ImgsAndVotes.appendChild(listOfImg);
  }
}
