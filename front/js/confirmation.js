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
const cartItemsArray = [];
const contact = [];
const id = document.getElementById('orderId');
const numbersReg = new RegExp('[^0-9]');

for (let i = 0; i < localStorage.length; i++) {
    //if (numbersReg.test(localStorage.order(i)) == false) {
    //const order = localStorage.order(i);
    const key = localStorage.key(i);
    console.log(JSON.parse(key));
    //const sofa = localStorage.getItem(key);
    contact.push(JSON.parse(contact));
    cartItemsArray.push(JSON.parse(cartItemsArray));
    //}
    id.innerHTML = order;
}



