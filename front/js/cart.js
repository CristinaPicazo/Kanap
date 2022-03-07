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

let totalQuantity = document.getElementById('totalQuantity');
let sumQuantity = 0;
let totalPrice = document.getElementById('totalPrice');
let sumPrice = 0;



//Show items in cart
for (let i = 0; i < cartItemsArray.length; i++) {
    let cartItems = document.getElementById('cart__items');

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


    /*
    productRows.forEach(function(productRow){
        var product = productRow.querySelector(".product");
        var price = productRow.querySelector(".price");
        var quantity = productRow.querySelector(".quantity");
        var order = product[i].innerText +" | "+ price[i].innerText +" | "+ quantity[i].innerText;
        console.log(order);
    });
    deleteItems[i].addEventListener('click', function () {
        //deleteItems[i] = undefined,
        alert('delete click')
    }, { once: true });

    cartItemsArray.forEach(element => {
        delete cartItemsArray[element];
    });

    const filterSofas = cartItemsArray.filter(sofas => 
        sofas != "");


        deleteItems[i].addEventListener('click', () => {
            delete cartItemsArray[i];
            if (cartItemsArray[i + 1] != undefined) {
                cartItemsArray[i] = cartItemsArray[i - 1]
            }
        });
    */

    //TO DO
    //Totals
    sumQuantity += Number(cartItemsArray[i].selectedQuantity);
    totalQuantity.innerHTML = sumQuantity;


    sumPrice += Number(cartItemsArray[i].price);
    totalPrice.innerHTML = sumPrice;


    let deleteItems = document.getElementsByClassName('deleteItem');


}

function deleteSofa() {
    deleteItems.addEventListener('click', function () {
        //deleteItems[i] = undefined,
        alert('delete click')
    }, { once: true });
}



//Order Sofa
const contact = {
    firstName: document.getElementById('firstName'),
    lastName: document.getElementById('lastName'),
    address: document.getElementById('address'),
    city: document.getElementById('city'),
    email: document.getElementById('email')
};

document.getElementById('order').addEventListener('click', () => {
    alert(contact);
});
