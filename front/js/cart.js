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
let sumTotalQuantity = "";
let totalPrice = document.getElementById('totalPrice');
let deleteItems = document.getElementsByClassName('deleteItem');



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
    cartItemsArray.forEach(element => {
        delete cartItemsArray[element];
    });
    /*
        deleteItems[i].addEventListener('click', () => {
            delete cartItemsArray[i];
            if (cartItemsArray[i + 1] != undefined) {
                cartItemsArray[i] = cartItemsArray[i - 1]
            }
        });
    */

    //TO DO
    //Totals
    //let sumTotalQuantity = parseInt(cartItemsArray[i].selectedQuantity);
    sumTotalQuantity += cartItemsArray[i].selectedQuantity;
    totalQuantity.innerHTML = sumTotalQuantity;
    totalPrice.innerHTML += parseFloat(cartItemsArray[i].selectedQuantity * cartItemsArray[i].price);
    //.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
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
