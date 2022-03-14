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
let cartItemsArray = [];
const numbersReg = new RegExp('[^0-9]');
for (let i = 0; i < localStorage.length; i++) {
    if (numbersReg.test(localStorage.key(i)) == true) {
        const key = localStorage.key(i);
        console.log(key)
        console.log(numbersReg.test(key))
        const sofa = localStorage.getItem(key);
        cartItemsArray.push(JSON.parse(sofa));
    }
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
                //cartItems[i].deleteItem = '';
                //localStorage.removeItem('key');
                deleteItem.addEventListener('click', function (event) {
                    console.log('cartItemsArray[i]._id ' + cartItemsArray[i]._id);
                    console.log('deleteItem[i] ' + deleteItem[i]);
                    console.log(deleteItem);
                    this.style.backgroundColor = "red";
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
                selectedQuantityInProduct = Number(itemQuantityValues.value);
                //Adjust any change in the quantity
                itemQuantityValues.addEventListener('change', function (event) {
                    if (selectedQuantityInProduct < Number(event.target.value)) {
                        sumQuantity++;
                        selectedQuantityInProduct++;
                        cartItemsArray[i].selectedQuantity = Number(event.target.value);
                        console.log(cartItemsArray[i].name + ', ' + cartItemsArray[i].selectedQuantity)
                        sumPrice += priceProduct;
                        totalPrice.innerHTML = sumPrice;
                        totalQuantity.innerHTML = sumQuantity;
                    }
                    else {
                        sumQuantity--;
                        selectedQuantityInProduct--;
                        cartItemsArray[i].selectedQuantity = Number(event.target.value);
                        console.log(cartItemsArray[i].name + ', ' + cartItemsArray[i].selectedQuantity)
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

const firstName = document.getElementById('firstName');
const firstNameErrorMsg = document.getElementById('firstNameErrorMsg');
const noNumbers = new RegExp('^[a-z]*$');
checkInput(firstName, noNumbers, firstNameErrorMsg);

const lastName = document.getElementById('lastName');
const lastNameErrorMsg = document.getElementById('lastNameErrorMsg');
checkInput(lastName, noNumbers, lastNameErrorMsg);

const address = document.getElementById('address');
const addressErrorMsg = document.getElementById('addressErrorMsg');
//checkInput(address, noNumbers, addressErrorMsg);

const city = document.getElementById('city');
const cityErrorMsg = document.getElementById('cityErrorMsg');
checkInput(city, noNumbers, cityErrorMsg);

const email = document.getElementById('email');
const emailErrorMsg = document.getElementById('emailErrorMsg');
const emailReg = new RegExp('^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$');
//TO DO - check correct email by regExp
//checkInput(email, emailReg, emailErrorMsg);

function checkInput(name, reg, err) { //input name, regExp, error message
    name.addEventListener('change', () => {
        if (!reg.test(name.value)) {
            err.innerHTML = `Please add correct data`;
        } else {
            err.innerHTML = '';
        }
    });
}
const order = Math.floor((Math.random() * 1000) + 1);
const sofasConfirmed = cartItemsArray

//When click 'Comander!'
document.getElementById('order').addEventListener('click', (event) => {
    //event.preventDefault();
    let contact = [
        orderNumber = order,
        firstName.value,
        lastName.value,
        address.value,
        city.value,
        email.value,
        sofasConfirmed
    ];

    localStorage.setItem(order, JSON.stringify(contact), JSON.stringify(cartItemsArray));

    window.location.href = "./confirmation.html";

});