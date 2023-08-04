let closeNav = document.getElementById("closeNav");
let openNav = document.getElementById("openNav");
let navBar = document.getElementById("navbar");
let cart = document.getElementById("cart");
let cartdiv = document.getElementById("cartdiv");
let closeCart = document.getElementById("closeCart");


if (openNav) {
        openNav.addEventListener('click', () =>{
                navBar.classList.add('active');
                document.getElementById("closeNav").style.display = "block";
        })
}

if (closeNav){
        closeNav.addEventListener('click', () =>{
                navBar.classList.remove('active');
                document.getElementById("closeNav").style.display = "none";
        })
}

let shop = document.querySelector(".shop");
let account = document.querySelector(".account");

account.addEventListener('click', () => {
        shop.style.Backgroundcolor = "white";
        alert("hey")
})

if(cartdiv) {
cart.addEventListener('click', () => {
        cartdiv.classList.add("active2");
        closeCart.style.display = "block";
}) }

if (closeCart) {
        closeCart.addEventListener('click', () => {
                cartdiv.classList.remove("active2");
                closeCart.style.display = "none";
        })
}



