//Get itmems from local storeage
const cart = createCart();
showItemsinPage();
checkForm()

function createCart() {
    const cart = [];
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const sofa = localStorage.getItem(key);
        cart.push(JSON.parse(sofa));
    }
    return cart;
}

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

function total(sofa) {
    let numberOfSofas = 0;
    let totalPriceSofas = 0;

    sofa.forEach(sofa => {
        numberOfSofas += sofa.selectedQuantity;
        totalPriceSofas += sofa.selectedQuantity * sofa.price;
    });

    updateTotal(numberOfSofas, totalPriceSofas);
}

function updateTotal(numberOfSofas, totalPriceSofas) {
    const totalQuantity = document.getElementById('totalQuantity');
    const totalPrice = document.getElementById('totalPrice');

    totalQuantity.innerHTML = numberOfSofas;
    totalPrice.innerHTML = totalPriceSofas;
}

function totalListener(article, sofa) {
    article.querySelector('.itemQuantity').addEventListener('change', (event) => {
        sofa.selectedQuantity = Number(event.target.value);
        cart.selectedQuantity = sofa.selectedQuantity
        total(cart);
    });
}

function deleteButton(article) {
    const deleteButton = article.querySelector(".deleteItem");
    deleteButton.addEventListener("click", () => {
        const key = article.dataset.id + ":" + article.dataset.color;
        window.localStorage.removeItem(key);
        window.location.reload()
    });
}





//Order Sofa
function checkForm() {
    const order = document.getElementById("order").disabled = true;
    //Name
    const firstName = document.getElementById('firstName').value;
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

    //console.log('checkinput ', checkInput(firstName, noNumbers, firstNameErrorMsg, 'name'))
    const fields = { firstName, lastName, address, city, email }
    console.log('fields:', fields)
    console.log('firstName:', firstName)
    firstName.addEventListener('change', () => {
        if (checkInput(firstName.value, noNumbers, firstNameErrorMsg, 'name')) return;
        if (checkInput(lastName.value, noNumbers, lastNameErrorMsg, 'last name')) return;
        if (checkInput(address.value, noSymbols, addressErrorMsg, 'address')) return;
        if (checkInput(city.value, noNumbers, cityErrorMsg, 'city')) return;
        if (checkInput(email.value, emailReg, emailErrorMsg, 'email')) return;
    })
    //Check fields    

    console.log('order to send')
    //order();

    order.disabled = false;
}

function checkInput(name, regex, error, text) {
    if (regex.test(name.value) == false) {
        error.innerHTML = 'Please add correct ', text;
    } else {
        error.innerHTML = ''
        return true;
    }
}


function order() {
    document.getElementById("order").addEventListener('click', (event) => {
        event.preventDefault()
        if (cart.length === 0) return
        checkForm()
        //sendOrder()


    });
}

function mapCartToIds(cart) {
    const ids = [];
    for (const sofa of cart) {
        ids.push(sofa._id)
    }
    return ids;
}

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


