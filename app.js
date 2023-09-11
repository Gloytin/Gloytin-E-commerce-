const productsEl = document.querySelector(".product");
const cartItemsEl = document.querySelector(".cartItems");
const subtotalEl = document.querySelector(".subtotal");

function renderProducts() {
        products.forEach( (product) => {
        productsEl.innerHTML += `
        <div class="product1">
        <img src="${product.imgSrc}">
        <div class="span">
        <p> ${product.name}</p>
        <div class="star">
        <span><i class="bi bi-star-fill"></i></span>
        <span><i class="bi bi-star-fill"></i></span>
        <span><i class="bi bi-star-fill"></i></span>
        <span><i class="bi bi-star-fill"></i></span>
        <span><i class="bi bi-star-fill"></i></span>
        <span><i class="bi bi-star-half"></i></span>
</div>
<p> $${product.price}</p>
</div>
<button class="cart" onClick = "addToCart(${product.id})"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      </svg></button>
</div>
        `
        })
        renderProducts();
}
;


function addToCart(id) {
        if (cartArray.some((item) => item.id === id) ) {
                changeNumberOfUnits("plus", id)
        } else{
       const item = products.find((product) => product.id === id)
       cartArray.push({
        ...item,
        numberOfUnits : 1,
 document.querySelector(".cart").style.background = "blue";
       });
        }
        updateCart();
}

//cart Array
let cartArray = [];

function updateCart(){
        renderCartItems();
        renderSubtotal();
}

function renderSubtotal() {
        let totalPrice = 0;
        let totalItems = 0;
        cartArray.forEach((item) => {
                totalPrice += item.price * item.numberOfUnits;
                totalItems += item.numberOfUnits;
        });
        subtotalEl.innerHTML = `
        <h2> Subtotal [<span>${totalItems}</span> &nbsp; items]: <span>$${totalPrice}</span> </h2>`
        console.log(totalPrice)
}

function renderCartItems() {
        cartItemsEl.innerHTML = "";
        cartArray.forEach((item) => {
        cartItemsEl.innerHTML +=
        `
                <div class="third">
                <img src="${item.imgSrc}" width="60rem" height="30rem" onclick="removeItemFromCart(${item.id})"> 
                        <h2> $${item.price}</h2>
   <h2> <span onclick = "changeNumberOfUnits('minus', ${item.id})">-</span> ${item.numberOfUnits} 
   <span onclick = "changeNumberOfUnits('plus', ${item.id})">+</span></h2>
                </div> 
        `
        })
}

function changeNumberOfUnits(action, id) {
       cartArray = cartArray.map((item) =>{
        let numberOfUnits = item.numberOfUnits;
        if(item.id === id) {
        if (action === "minus" && numberOfUnits > 1) {
                numberOfUnits --;
        } else if (action === "plus" && numberOfUnits < item.instock) {
                numberOfUnits++;
        }

        }
        return {
        ...item, 
        numberOfUnits,
        };
        });
        updateCart();
}

function removeItemFromCart(id){
        cartArray = cartArray.filter((item)=> item.id !== id)

        updateCart();
}



