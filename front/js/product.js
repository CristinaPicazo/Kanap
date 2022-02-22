
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
const colors = document.getElementById('colors');
var option = document.createElement("option");

function displayItem(sofas) {
    for (let i = 0; i < sofas.length; i++) {
        if (sofas[i]._id === id) {
            const sofa = sofas[i];
            itemImg.innerHTML = `<img src=${sofa.imageUrl} alt=${sofa.altTxt}>`;
            title.innerHTML = `${sofa.name}`;
            price.innerHTML = `${sofa.price}`;
            description.innerHTML = `${sofa.description}`;
            for (let i = 0; i < sofa.colors.length; i++) {
                option.text = sofa.colors[i];
                console.log(option.text)
                console.log(sofa.colors.length)
                //console.log(sofa.colors[i])
                colors.innerHTML += `<option value="${add(option, i)}">${colors.add(option, i)}</option>`;
            }




            console.log(sofa[i].name);
        }

    }



}
console.log(window.location);
title.innerHTML = '<h2>colors</h2>';
console.log(itemImg)

/*
function displayItem(sofa) {
    for (let i = 0; i <= sofa.length; i++) {
        if (sofa[i]._id === id) {
            itemImg.innerHTML = `
                    <img src="../images/${sofa[i].imageUrl}" alt="Photographie d'un canapé">
                    `;

        }
    }
}
*/


console.log(id)
