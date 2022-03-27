//Takes id from home page
const id = window.location.search.split('=').at(-1);
const url = `http://127.0.0.1:3000/api/products/${id}`;
fetch(url)
    .then(response => {
        const json = response.json()
        return json;
    })
    .then(data => {
        displayItem(data)
        sofaChosen = data;
    })
    .catch(err => console.log(err))


const itemImg = document.getElementsByClassName('item__img');
const title = document.getElementById('title');
const price = document.getElementById('price');
const description = document.getElementById('description');
let quantity = document.getElementById('quantity')
let colors = document.getElementById('colors');
//Object to save sofas from back
let sofaChosen;

//Shows selected sofa from home page
function displayItem(sofa) {
    itemImg[0].innerHTML = `<img src=${sofa.imageUrl} alt=${sofa.altTxt}>`;
    title.innerHTML = `${sofa.name}`;
    price.innerHTML = `${sofa.price}`;
    description.innerHTML = `${sofa.description}`;

    //Display colors in a dropdown
    for (const color of sofa.colors) {
        const option = document.createElement("option");
        option.value = color;
        option.text = color;
        colors.add(option);
    }
}

// Button "add to cart" to send it to localstoreage
document.getElementById('addToCart').addEventListener('click', () => {
    const quantityNumber = Number(quantity.value);
    if (quantityNumber == 0) return alert("Please select a minimum quantity");
    if (colors.value == "") return alert("Please select the color");

    // Product, quantity and color
    sofaChosen.selectedColor = colors.value;
    sofaChosen.selectedQuantity = quantityNumber;
    const key = sofaChosen._id + ":" + colors.value;
    const sofa = JSON.parse(localStorage.getItem(key));
    if (sofa == null) return addSofaToCart(key, sofaChosen);
    updateSofaQuantity(quantityNumber, sofa, sofaChosen);

    // Send sofa to cart
    function addSofaToCart(key, sofaChosen) {
        localStorage.setItem(key, JSON.stringify(sofaChosen));
    }

    // Update sofa quantity if it is already in the cart
    function updateSofaQuantity(quantityNumber, sofa, sofaChosen) {
        const newQuantity = quantityNumber + sofa.selectedQuantity;
        sofaChosen.selectedQuantity = newQuantity;
        addSofaToCart(key, sofaChosen);
    }


})

