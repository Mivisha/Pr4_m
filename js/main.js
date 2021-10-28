const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener('click', function (event){
    modal.classList.add("is-open");
});
close.addEventListener('click', function (event){
    modal.classList.remove("is-open");
});

new WOW().init();

// day 1

console.log(document.querySelector('.button-auth'))

let a=5;
const b=10;

console.log(a)