/**
 * Project 5
 * @author Cristina Picazo Merlos
 * @param {string} title - Project 5
 * @param {string} author - Cristina Picazo Merlos
 * @see https://cristinapicazo.github.io/Kanap/front/html/index.html
 * @returns {Object} 
 */
function Project5(title, author) { }
/*
//Get itmems from local storeage
const cartItemsArray = [];
const contact = [];
const id = document.getElementById('orderId');
const numbersReg = new RegExp('[^0-9]');

for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) > 1) {
        const key = localStorage.key(i);
        const orderNumber = localStorage.getItem(key);
        console.log(numbersReg.test(localStorage.key(i)))

        contact.push(JSON.parse(orderNumber));
        console.log(contact)
        id.innerHTML = key;
    }

}
*/



//Taken id from hombe page
const orderNumber = window.location.search.split('=').at(-1);
//Taken data from back
//const url = `http://127.0.0.1:3000/api/cart/${orderNumber}`;
const url = `http://127.0.0.1:5500/html/cart`;
fetch(url)
    .then(response => {
        const json = response.json()
        return json;
    })
    .then(data => {
        displayItem(data)
        orderNumber = data;
    })
    .catch(err => console.log(err))

const orderId = document.getElementById('orderId');
orderId.innerHTML = 'orderNumber';





