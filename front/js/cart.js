//Get itmems from local storeage
const cart = createCart();



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
    for (let i = 0; i < cart.length; i++) {
        let cartItems = document.getElementById('cart__items');
        if (cart[i] == null) return;
        cartItems.innerHTML += createArticle(cart[i]);
        //TO DO
        //Delete Sofa 

        const currentArticle = document.querySelector(`.cart__item[data-id='${cart[i]._id}'][data-color='${cart[i].selectedColor}']`);
        console.log(currentArticle);
        const deleteItem = currentArticle.querySelector('.deleteItem');
        console.dir(deleteItem)
        deleteItem.addEventListener('click', function () {
            console.log(currentArticle);
            //currentArticle.remove()
            //localStorage.removeItem(key);
        });



        //Totals
        itemQuantityValue = document.querySelectorAll('input[name="itemQuantity"]');
        let selectedQuantityInProduct = Number(cart[i].selectedQuantity);
        let priceProduct = Number(cart[i].price);

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
                    cart[i].selectedQuantity = Number(event.target.value);
                    console.log(cart[i].name + ', ' + cart[i].selectedQuantity)
                    sumPrice += priceProduct;
                    totalPrice.innerHTML = sumPrice;
                    totalQuantity.innerHTML = sumQuantity;
                }
                else {
                    sumQuantity--;
                    selectedQuantityInProduct--;
                    cart[i].selectedQuantity = Number(event.target.value);
                    console.log(cart[i].name + ', ' + cart[i].selectedQuantity)
                    sumPrice -= priceProduct;
                    totalPrice.innerHTML = sumPrice;
                    totalQuantity.innerHTML = sumQuantity;
                }
            })
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
const sofasConfirmed = cart

//When click 'Comander!'
document.getElementById('order').addEventListener('click', (event) => {
    event.preventDefault();
    let contact = [
        orderNumber = order,
        firstName.value,
        lastName.value,
        address.value,
        city.value,
        email.value,
        sofasConfirmed
    ];

    localStorage.setItem(order, JSON.stringify(contact));

    window.location.href = "../html/confirmation.html";

});

function createCart() {
    const cart = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const sofa = localStorage.getItem(key);
        cart.push(JSON.parse(sofa));
    }
    return cart;
}

function createArticle(sofa) {
    return `
    <article class="cart__item" data-id="${sofa._id}" data-color="${sofa.selectedColor}">
                    <div class="cart__item__img">
                    <img src=${sofa.imageUrl} alt=${sofa.altTxt}>
                    </div>
                    <div class="cart__item__content">
                    <div class="cart__item__content__description">
                        <h2>${sofa.name}</h2>
                        <p>${sofa.selectedColor}</p>
                        <p>${sofa.price}</p>
                    </div>
                    <div class="cart__item__content__settings">
                        <div class="cart__item__content__settings__quantity">
                        <p>Qté : </p>
                        <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value=${sofa.selectedQuantity}>
                        </div>
                        <div class="cart__item__content__settings__delete">
                        <p class="deleteItem">Delete</p>
                        </div>
                    </div>
                    </div>
                </article>
    `;
}