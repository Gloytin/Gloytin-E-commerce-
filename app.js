function addToCart(id) {
        if (cartArray.some((item) => item.id === id) ) {
                changeNumberOfUnits("plus", id)
        } else{
       const item = products.find((product) => product.id === id)
       cartArray.push({
        ...item,
        numberOfUnits : 1,
       });
        }
        updateCart();
}

//cart Array
let cartArray = JSON.parse(localStorage.getItem("CART"));
updateCart();

function updateCart(){
        renderCartItems();
        renderSubtotal();

        //save cart to local storage
        localStorage.setItem("CART", JSON.stringify(cartArray));
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



