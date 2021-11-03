// JS implementation for shopping page functionality

function Product(productName, productColor, productSize) {
    this.name = productName;
    this.color = productColor;
    this.size = productSize;
}

// Get the imgs for each color selection
let strawberry = document.querySelector('.color-strawberry');
let blackberry = document.querySelector('.color-blackberry');
let crazyberry = document.querySelector('.color-crazyberry');
let orange = document.querySelector('.color-orange');

// Get the buy button
let buyBtn = document.querySelector('.add-to-cart-btn');

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

