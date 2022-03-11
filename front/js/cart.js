/**
 * Project 5
 * @author Cristina Picazo Merlos
 * @param {string} title - Project 5
 * @param {string} author - Cristina Picazo Merlos
 * @see https://cristinapicazo.github.io/Kanap/front/html/index.html
 * @returns {Object} 
 */
function Project5(title, author) { }

//Get itmems from local storeage
const cartItemsArray = [];
for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const sofa = localStorage.getItem(key);
    cartItemsArray.push(JSON.parse(sofa));
}

let itemQuantity;
let totalQuantity = document.getElementById('totalQuantity');
let sumQuantity = 0;
let totalPrice = document.getElementById('totalPrice');
let sumPrice = 0;
let deleteItems;
let numToDelete;
let itemQuantityValue;
showItemsinPage();


//Show items in cart
function showItemsinPage() {
    for (let i = 0; i < cartItemsArray.length; i++) {
        let cartItems = document.getElementById('cart__items');
        if (cartItemsArray[i] != undefined) {
            cartItems.innerHTML += `
                                <article class="cart__item" data-id="${cartItemsArray[i]._id}" data-color="${cartItemsArray[i].selectedColor}">
                                                <div class="cart__item__img">
                                                <img src=${cartItemsArray[i].imageUrl} alt=${cartItemsArray[i].altTxt}>
                                                </div>
                                                <div class="cart__item__content">
                                                <div class="cart__item__content__description">
                                                    <h2>${cartItemsArray[i].name}</h2>
                                                    <p>${cartItemsArray[i].selectedColor}</p>
                                                    <p>${cartItemsArray[i].price}</p>
                                                </div>
                                                <div class="cart__item__content__settings">
                                                    <div class="cart__item__content__settings__quantity">
                                                    <p>Qté : </p>
                                                    <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${cartItemsArray[i].selectedQuantity}>
                                                    </div>
                                                    <div class="cart__item__content__settings__delete">
                                                    <p class="deleteItem">Delete</p>
                                                    </div>
                                                </div>
                                                </div>
                                            </article>
                                `;


            //TO DO
            //Delete Sofa 
            deleteItems = document.querySelectorAll('.deleteItem');

            for (const deleteItem of deleteItems) {
                deleteItem.addEventListener('click', function (event) {
                    this.style.backgroundColor = "red";
                    console.log(event.target)
                });
            }
            /*
            for (let n = 0; n < deleteItems.length; n++) {
                deleteItems[n].addEventListener('click', function (event) {
                    //let deleteItemSelected = deleteItem[i];
                    //const itemToDelete = cartItemsArray[deleteItemSelected];
                    const sofa = JSON.parse(localStorage.getItem(cartItemsArray[deleteItems[n]]));
                    console.log('cartItemsArray.length ' + cartItemsArray.length)
                    console.log('deleteItems[n] ' + deleteItems[n])
                    console.log('sofa ' + sofa)
                    alert(event.target);
                    location.reload();
                    //showItemsinPage();
                });
            };
            */

            //Totals
            itemQuantityValue = document.querySelectorAll('input[name="itemQuantity"]');
            let selectedQuantityInProduct = Number(cartItemsArray[i].selectedQuantity);
            let priceProduct = Number(cartItemsArray[i].price);

            //Total Price
            //Show items from products added in cart
            let total = selectedQuantityInProduct * priceProduct;
            sumPrice += total;

            //Total Items
            //Show items from products added in cart
            sumQuantity += selectedQuantityInProduct;
            totalQuantity.innerHTML = sumQuantity;
            totalPrice.innerHTML = sumPrice;

            //Add items in the cart page
            //Go inside each input
            for (const itemQuantityValues of itemQuantityValue) {
                let selectedQuantityInProduct = Number(itemQuantityValues.value);
                //Adjust any change in the quantity
                itemQuantityValues.addEventListener('change', function (event) {
                    if (selectedQuantityInProduct < Number(event.target.value)) {
                        sumQuantity++;
                        selectedQuantityInProduct++;
                        sumPrice += priceProduct;
                        totalPrice.innerHTML = sumPrice;
                        totalQuantity.innerHTML = sumQuantity;
                    }
                    else {
                        sumQuantity--;
                        selectedQuantityInProduct--;
                        sumPrice -= priceProduct;
                        totalPrice.innerHTML = sumPrice;
                        totalQuantity.innerHTML = sumQuantity;
                    }
                })
            }
        }
    }
}


//Order Sofa
const order = document.getElementById('order');
//order.click(function(){
//$.post( "https://github.com/CristinaPicazo/Kanap/blob/main/front/html/cart.html",{
firstName = document.getElementById('firstName'),
    lastName = document.getElementById('lastName'),
    address = document.getElementById('address'),
    city = document.getElementById('city'),
    email = document.getElementById('email')
//} );
document.getElementById('order').addEventListener('click', () => {

    contact.firstName = document.getElementById('firstName'),
        contact.lastName = document.getElementById('lastName'),
        contact.address = document.getElementById('address'),
        contact.city = document.getElementById('city'),
        contact.email = document.getElementById('email')
});

document.getElementById('order').addEventListener('click', () => {
    alert(contact);
});
/*
$("input").keyup(function () {
    var txt = $("input").val();
    $.post("demo_ajax_gethint.asp", { suggest: txt }, function (result) {
        $("span").html(result);
    });
});
*/