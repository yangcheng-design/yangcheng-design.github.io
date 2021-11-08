// JS implementation for shopping page functionality

// Setup local storage
var savedCart = JSON.parse(localStorage.getItem('savedCart'));
var cart = savedCart ? savedCart : [];
var savedQuantity = localStorage.getItem('cartQuantity');
var totalCartQuantity = savedQuantity ? savedQuantity : 0;

// Declare Product object
function Product(productName, productColor, productSize) {
    this.name = productName;
    this.color = productColor;
    this.size = productSize;
}

var itemName = 'Adventure Cat Backpack';
var color = 'color-strawberry';
var size = 'size-tiny';

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
        current[0].className = current[0].className.replace(' active-color', ''); // replace deselected class
        this.className += ' active-color'; 
        color = current[0].className.split(' ')[0];  // get the color name from the list of Class names
    });
}

// Give clicked size option activated look
var sizeInputs = document.querySelectorAll('.sizes >img'); 
for(let i = 0; i < sizeInputs.length; i++) { 
    sizeInputs[i].addEventListener('click', function () { 
        var current = document.getElementsByClassName('active-size'); 
        current[0].className = current[0].className.replace(' active-size', ''); 
        this.className += ' active-size'; 
        size = current[0].className.split(' ')[0];
    });
}

// Change the item quantity
document.querySelector('.cart-num-items').innerText = totalCartQuantity;

// Store currently selected color/size product in local storage
buyBtn.addEventListener("click", function() {
    // Add new product item to local storage 
    const itemToBuy = new Product(itemName, color, size);
    cart.push(itemToBuy);
    localStorage.setItem('savedCart', JSON.stringify(cart));
    // Update number of items
    totalCartQuantity++;
    console.log("++ totalcartquant", totalCartQuantity);
    localStorage.setItem('cartQuantity', totalCartQuantity);
    cartQuantityElem = document.querySelector('.cart-num-items');
    cartQuantityElem.innerText = totalCartQuantity;
})