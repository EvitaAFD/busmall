'use strict';
//global variables
var images = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'tauntaun', 'unicorn', 'usb', 'water-can', 'wine-glass'];
var productArray = [];
var el1 = document.getElementById('left');
var el2 = document.getElementById('center');
var el3 = document.getElementById('right');
var elArray = [el1, el2, el3];

function Product (name){

  this.name = name;
  this.filePath = './img/' + name + '.jpg';
  this.numViewed = 0;
  this.numClicked = 0;

}

for(var i = 0; i < images.length; i++){
  var newProduct = new Product(images[i]);
  productArray.push(newProduct);
}

console.log(productArray);

//three randomly generated images
function randomImageGen (){
  return Math.floor(Math.random() * (productArray.length - 0)) + 0;
}

console.log(randomImageGen());
//creates random number three times, different everytime, use number to grab filepath out of productArray at index randomImageGen
function displayImage (){
  for(var j = 0; j < 3; j++){
    var newImage = randomImageGen();
    var getImage = productArray[newImage].filePath;
    console.log(getImage);
    elArray[j].setAttribute('src', getImage);
  }
}
displayImage();
