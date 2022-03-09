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
                    alert(event.target);
                    location.reload();
                    //showItemsinPage();
                });
            };




            //TO DO
            //Totals
            itemQuantityValue = document.querySelectorAll('input[name="itemQuantity"]');

            //Total Price
            //Show items from products added in cart
            let total = Number(cartItemsArray[i].selectedQuantity) * Number(cartItemsArray[i].price);
            sumPrice += total;
            totalPrice.innerHTML = sumPrice;

            //Total Items
            //Show items from products added in cart
            sumQuantity += Number(cartItemsArray[i].selectedQuantity);
            totalQuantity.innerHTML = sumQuantity;

            //Add items in the cart page
            for (const itemQuantityValues of itemQuantityValue) {
                itemQuantityValues.addEventListener('change', function (event) {
                    sumQuantity += Number(event.target.value);
                    totalQuantity.innerHTML = sumQuantity;

                    //Price
                    let total = Number(event.target.value) * Number(cartItemsArray[i].price);
                    sumPrice += total;
                    totalPrice.innerHTML = sumPrice;
                })
            }



        }
    }
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
