import { calculateTotal } from "./math.js";
//Name
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const address = document.getElementById('address');
const city = document.getElementById('city');
const email = document.getElementById('email');

//Regex
const noNumbersRegEx = new RegExp(/^[A-Za-z ]*$/);
const noSymbolsRegEx = new RegExp(/^[A-Za-z0-9 ]*$/);
const emailRegEx = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

const firstNameErrorMsg = document.getElementById('firstNameErrorMsg');
const lastNameErrorMsg = document.getElementById('lastNameErrorMsg');
const addressErrorMsg = document.getElementById('addressErrorMsg');
const cityErrorMsg = document.getElementById('cityErrorMsg');
const emailErrorMsg = document.getElementById('emailErrorMsg');

const first = { element: firstName, regex: noNumbersRegEx, errorDiv: firstNameErrorMsg, errorMsg: 'Fist name cannot have numbers' }
const last = { element: lastName, regex: noNumbersRegEx, errorDiv: lastNameErrorMsg, errorMsg: 'Last name cannot have numbers' }
const addr = { element: address, regex: noSymbolsRegEx, errorDiv: addressErrorMsg, errorMsg: 'Addres cannot have symbols' }
const cty = { element: city, regex: noNumbersRegEx, errorDiv: cityErrorMsg, errorMsg: 'City cannot have numbers' }
const mail = { element: email, regex: emailRegEx, errorDiv: emailErrorMsg, errorMsg: 'Email must have @ and domain' }

const formFields = [first, last, addr, cty, mail];

// Show sofas within html
function createArticle(sofa) {
    const article = document.createElement("article");
    article.classList.add("cart__item");
    article.setAttribute("data-id", sofa._id);
    article.setAttribute("data-color", sofa.selectedColor);
    article.innerHTML = `
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
    `
    return article
}

// Update the amount and price
function updateTotal(total) {
    const totalQuantity = document.getElementById('totalQuantity');
    const totalPrice = document.getElementById('totalPrice');

    totalQuantity.innerHTML = total.numberOfSofas;
    totalPrice.innerHTML = total.totalPriceSofas;
}

// Listen any change of the amount of sofas
function listenQuantity(article, sofa, cart) {
    article.querySelector('.itemQuantity').addEventListener('change', (event) => {
        sofa.selectedQuantity = Number(event.target.value);
        const total = calculateTotal(cart);
        updateTotal(total);
    });
}

// Delete sofa click the button
function deleteButton(article) {
    const deleteButton = article.querySelector(".deleteItem");
    deleteButton.addEventListener("click", () => {
        const key = article.dataset.id + ":" + article.dataset.color;
        window.localStorage.removeItem(key);
        window.location.reload()
    });
}

// Display selected items from product page
function showItemsinPage(cart) {
    const cartItems = document.getElementById("cart__items");
    if (cartItems == null) return;
    for (const sofa of cart) {
        const article = createArticle(sofa);
        cartItems.appendChild(article);

        listenQuantity(article, sofa, cart)
        deleteButton(article);
    }
    const total = calculateTotal(cart);
    updateTotal(total);
}


export { formFields, createArticle, updateTotal, listenQuantity, deleteButton, showItemsinPage }