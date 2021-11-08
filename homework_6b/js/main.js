// Check local storage and update cart icon

// var totalCartQuantity = 0;
// console.log("initializing totalCartQuantity to zero");

var currentQ = localStorage.getItem('cartQuantity');
var cartQuantityElem = document.querySelector('.cart-num-items');
cartQuantityElem.innerText = currentQ;