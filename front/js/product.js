
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
let cartItems = [];
let sofaChosen;


function displayItem(sofa) {
    itemImg[0].innerHTML = `<img src=${sofa.imageUrl} alt=${sofa.altTxt}>`;
    title.innerHTML = `${sofa.name}`;
    price.innerHTML = `${sofa.price}`;
    description.innerHTML = `${sofa.description}`;

    for (let n = 0; n < sofa.colors.length; n++) {
        const option = document.createElement("option");
        option.value = sofa.colors[n];
        option.text = sofa.colors[n];
        colors.add(option);

    }
}


document.getElementById('addToCart').addEventListener('click', () => {
    if (quantity.value > 0 && colors.value != "") {
        //product, quantity and color
        sofaChosen.selectedColor = colors.value;
        sofaChosen.selectedQuantity = parseInt(quantity.value);

        localStorage.setItem(sofaChosen._id + ":" + colors.value, JSON.stringify(sofaChosen));
    } else {
        alert("Please select a minimum quantity and color");
    }
})

