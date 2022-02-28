
const url = 'http://127.0.0.1:3000/api/products';
fetch(url)
    .then(response => {
        const json = response.json()
        return json;
    })
    .then(data => {
        displayItem(data)
    })
    .catch(err => console.log(err))


const id = window.location.search.split('=').at(-1);
const itemImg = document.getElementsByClassName('item__img');
const title = document.getElementById('title');
const price = document.getElementById('price');
const description = document.getElementById('description');
let quantity = document.getElementById('quantity')
let colors = document.getElementById('colors');
let cartItems = [];


function displayItem(sofas) {
    for (let i = 0; i < sofas.length; i++) {
        if (sofas[i]._id === id) {
            const sofa = sofas[i];
            itemImg[0].innerHTML = `<img src=${sofa.imageUrl} alt=${sofa.altTxt}>`;
            title.innerHTML = `${sofa.name}`;
            price.innerHTML = `${sofa.price}`;
            description.innerHTML = `${sofa.description}`;

            for (let n = 0; n < sofa.colors.length; n++) {
                var option = document.createElement("option");
                option.value = sofa.colors[n];
                option.text = sofa.colors[n];
                colors.add(option);
            }
        }


    }

    document.getElementById('addToCart').addEventListener('click', () => {
        if (quantity.value > 0 && colors.value != "") {
            //product, quantity and color
            cartItems.push(id, quantity.value, colors.value);
            localStorage.setItem('id', JSON.stringify(cartItems));
            console.log("id: " + id + " quantity.value " + quantity.value + " colors.value " + colors.value);
        } else {
            alert("Please select a minimum quantity and color");
        }
    })
}
