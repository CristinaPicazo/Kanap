// Create cart from localStorage
const cart = createCart();
showItemsinPage();
checkForm()

// Get data from localStorage to show it in the page
function createCart() {
    const cart = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const sofa = localStorage.getItem(key);
        cart.push(JSON.parse(sofa));
    }
    return cart;
}

// Display selected items from product page
function showItemsinPage() {
    const cartItems = document.getElementById("cart__items");
    if (cartItems == null) return;
    for (const sofa of cart) {
        const article = createArticle(sofa);
        cartItems.appendChild(article);

        totalListener(article, sofa)
        deleteButton(article);
    }
    total(cart);
}

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

// Show total amount of sofas and price
function total(sofa) {
    let numberOfSofas = 0;
    let totalPriceSofas = 0;

    sofa.forEach(sofa => {
        numberOfSofas += sofa.selectedQuantity;
        totalPriceSofas += sofa.selectedQuantity * sofa.price;
    });

    updateTotal(numberOfSofas, totalPriceSofas);
}

// If add or subtrack any sofa, update the amount and price
function updateTotal(numberOfSofas, totalPriceSofas) {
    const totalQuantity = document.getElementById('totalQuantity');
    const totalPrice = document.getElementById('totalPrice');

    totalQuantity.innerHTML = numberOfSofas;
    totalPrice.innerHTML = totalPriceSofas;
}

// Listen any change of the amount of sofas
function totalListener(article, sofa) {
    article.querySelector('.itemQuantity').addEventListener('change', (event) => {
        sofa.selectedQuantity = Number(event.target.value);
        cart.selectedQuantity = sofa.selectedQuantity
        total(cart);
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

//Check if the form is correct to be sent
function checkForm() {
    if (order.disabled == true) {
        console.log('order disabled')
    }
    if (order.disabled == false) {
        console.log('order not disabled')
    }
    //Name
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const address = document.getElementById('address');
    const city = document.getElementById('city');
    const email = document.getElementById('email');

    //Regex
    const noNumbers = new RegExp(/^[A-Za-z ]*$/);
    const noSymbols = new RegExp(/^[A-Za-z0-9 ]*$/);
    const emailReg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);

    //Error
    const firstNameErrorMsg = document.getElementById('firstNameErrorMsg');
    const lastNameErrorMsg = document.getElementById('lastNameErrorMsg');
    const addressErrorMsg = document.getElementById('addressErrorMsg');
    const cityErrorMsg = document.getElementById('cityErrorMsg');
    const emailErrorMsg = document.getElementById('emailErrorMsg');

    const errorFields = [firstNameErrorMsg, lastNameErrorMsg, addressErrorMsg, cityErrorMsg, emailErrorMsg];
    correctFormToBeSend(errorFields)


    //Check fields
    firstName.addEventListener('change', () => {
        checkInput(firstName.value, noNumbers, firstNameErrorMsg)
    });
    lastName.addEventListener('change', () => {
        checkInput(lastName.value, noNumbers, lastNameErrorMsg)
    });
    address.addEventListener('change', () => {
        checkInput(address.value, noSymbols, addressErrorMsg)
    });
    city.addEventListener('change', () => {
        checkInput(city.value, noNumbers, cityErrorMsg)
    });
    email.addEventListener('change', () => {
        checkInput(email.value, emailReg, emailErrorMsg)
    });

    console.log("firstNameErrorMsg.innerHTML == ''", firstNameErrorMsg.innerHTML == '')
    console.log("lastNameErrorMsg.innerHTML == ''", lastNameErrorMsg.innerHTML == '')
    console.log("addressErrorMsg.innerHTML == ''", addressErrorMsg.innerHTML == '')
    console.log("cityErrorMsg.innerHTML == ''", cityErrorMsg.innerHTML == '')
    console.log("emailErrorMsg.innerHTML == ''", emailErrorMsg.innerHTML == '')
}
const cart__order__form__question = document.getElementsByClassName('cart__order__form__question');
console.log('cart__order__form__question', cart__order__form__question)
console.log('cart__order__form__question.value', cart__order__form__question.value)
cart__order__form__question.forEach(question => {
    question.addEventListener('change', () => {
        console.log('hi')
    });
});

function correctFormToBeSend(errorFields) {
    errorFields.forEach(errorField => {
        if (errorField.innerHTML == '') {
            return console.log('correct')
        }

    });

    //console.log(correctFormToBeSend(errorFields) == false)
    // if ((firstNameErrorMsg.innerHTML == '') &&
    //     (lastNameErrorMsg.innerHTML == '') &&
    //     (addressErrorMsg.innerHTML == '') &&
    //     (cityErrorMsg.innerHTML == '') &&
    //     (emailErrorMsg.innerHTML == '')) {
    // }
}

// Check every field within the form and send an error if it is not correct
function checkInput(name, regex, error) {
    if (regex.test(name) == false) {
        error.innerHTML = 'Please add correct data ';
    } else {
        error.innerHTML = ''
    }
}

// Listen when click Commander button
function order() {
    document.getElementById("order").addEventListener('click', (event) => {
        console.log('pinchado')
        event.preventDefault()
        if (cart.length === 0) return
        if (correctFormToBeSend() == false) return console.log('false correct...')
        //sendOrder()
    });
}

// Create array of id products to send it to the backend
function mapCartToIds(cart) {
    const ids = [];
    for (const sofa of cart) {
        ids.push(sofa._id)
    }
    return ids;
}

// Send selected sofas and form to backend
function sendOrder() {
    const body = {
        contact: {
            firstName: firstName.value,
            lastName: lastName.value,
            address: address.value,
            city: city.value,
            email: email.value
        },
        products: mapCartToIds(cart)
    }

    const url = `http://127.0.0.1:3000/api/products/order`;
    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    })
        .then((response) => response.json())
        .then((data) => {
            const orderId = data.orderId;
            window.location.href = "../html/confirmation.html?orderId=" + orderId
        })
        .catch((err) => alert(err))
}


