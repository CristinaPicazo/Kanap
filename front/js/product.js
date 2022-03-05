/**
 * Project 5
 * @author Cristina Picazo Merlos
 * @param {string} title - Project 5
 * @param {string} author - Cristina Picazo Merlos
 * @see https://cristinapicazo.github.io/Kanap/front/html/index.html
 * @returns {Object} 
 */
function Project5(title, author) { }

//Taken id from hombe page
const id = window.location.search.split('=').at(-1);
//Taken data from back
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

//Show sofa in the product page from back and id got it from home page
function displayItem(sofa) {
    itemImg[0].innerHTML = `<img src=${sofa.imageUrl} alt=${sofa.altTxt}>`;
    title.innerHTML = `${sofa.name}`;
    price.innerHTML = `${sofa.price}`;
    description.innerHTML = `${sofa.description}`;

    //Display colors in a dropdown
    for (let n = 0; n < sofa.colors.length; n++) {
        const option = document.createElement("option");
        option.value = sofa.colors[n];
        option.text = sofa.colors[n];
        colors.add(option);

    }
}

//Button "add to cart"
document.getElementById('addToCart').addEventListener('click', () => {
    if (quantity.value > 0 && colors.value != "") {
        //product, quantity and color
        sofaChosen.selectedColor = colors.value;
        sofaChosen.selectedQuantity = quantity.value;

        const cartItemsArray = [];
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            const sofa = localStorage.getItem(key);
            /*
            //Sum duplicates
            sofaChosen.key = key;
            for (let i = 0; i < cartItemsArray.length; i++) {
                if (cartItemsArray[i].key === key) {
                    sofaChosen.selectedQuantity = cartItemsArray[i].selectedQuantity + quantity.value;
                    alert('items added');
                }
            }
            */
            cartItemsArray.push(JSON.parse(sofa));
            /*
            JSON.parse('{"p": 5}', function (k, v) {
                if(cartItemsArray[i]._id+":"+cartItemsArray[i].selectedColor === sofaChosen._id + ":" + colors.value)
            alert(cartItemsArray[i])
            */
        }


        localStorage.setItem(sofaChosen._id + ":" + colors.value, JSON.stringify(sofaChosen));


        //Avoid empty colors and quantity
    } else {
        if (quantity.value == 0 && colors.value != "") {
            alert("Please select a minimum quantity");
        } else if (quantity.value > 0 && colors.value == "") {
            alert("Please select color");
        } else {
            alert("Please select a minimum quantity and color");
        }
    }
})

