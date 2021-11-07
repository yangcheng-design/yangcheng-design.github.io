// JS implementation for shopping page functionality

// Setup local and session storage variables for cart items and quantity
let itemsList = []
var totalCartQuantity = 0;

// Declare Product object
function Product(productName, productColor, productSize) {
    this.name = productName;
    this.color = productColor;
    this.size = productSize;
}

const itemToBuy = new Product('name', 'color', 'tiny');

// Get the imgs for each color selection
let strawberry = document.querySelector('.color-strawberry');
let blackberry = document.querySelector('.color-blackberry');
let crazyberry = document.querySelector('.color-crazyberry');
let orange = document.querySelector('.color-orange');

// Get the buy button
let buyBtn = document.querySelector('.add-to-cart-btn');

// Change the product image according to color selected
strawberry.addEventListener('click', function () {
        document.getElementById('product-image').src = './images/backpack-strawberry.png';
    }); 

blackberry.addEventListener('click', function () {
        document.getElementById('product-image').src = './images/backpack-blackberry.png';
    }); 

crazyberry.addEventListener('click', function () {
        document.getElementById('product-image').src = './images/backpack-crazyberry.png';
    }); 

orange.addEventListener('click', function () {
        document.getElementById('product-image').src = './images/backpack-orange.png';
    }); 

buyBtn.addEventListener('click', function () {
        document.getElementById('cart').src = './images/cart-1-item.svg';
    });

// Give clicked color option activated color
var colorInputs = document.querySelectorAll('.colors >img'); 
for(let i = 0; i < colorInputs.length; i++) { 
    colorInputs[i].addEventListener('click', function () { 
        var current = document.getElementsByClassName('active-color'); 
        current[0].className = current[0].className.replace(' active-color', ''); 
        this.className += ' active-color'; 
    });
}

// Give clicked size option activated look
var sizeInputs = document.querySelectorAll('.sizes >img'); 
for(let i = 0; i < sizeInputs.length; i++) { 
    sizeInputs[i].addEventListener('click', function () { 
        var current = document.getElementsByClassName('active-size'); 
        current[0].className = current[0].className.replace(' active-size', ''); 
        this.className += ' active-size'; 
    });
}

// Store currently selected color/size in local storage

// // Change the item quantity
// document.getElementById("num-items-cart").innerHTML = totalCartQuantity;

// Add to cart button 
buyBtn.addEventListener("click", function() {
    // Add new product item to local storage 
    let tempQ = 0;
    
    itemsList.push()
    localStorage.setItem('items', JSON.stringify(itemsList))
    // Update number of cart items 
    tempQ += parseInt(totalCartQuantity) + quantity;
    totalCartQuantity = tempQ;
    sessionStorage.setItem('cartQ', tempQ)
    document.getElementById("num-items-cart").innerHTML = tempQ;

})