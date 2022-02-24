
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
            itemImg[0].innerHTML = `<img src=${sofa.imageUrl} alt=${sofa.altTxt}>`;
            title.innerHTML = `${sofa.name}`;
            price.innerHTML = `${sofa.price}`;
            description.innerHTML = `${sofa.description}`;
            let colorsArray = [];
            console.log(sofa.colors[i])
            for (let i = 0; i < sofa.colors.length; i++) {
                //console.log(sofa.colors.length)//there are 3 but shows just 1
                //colorsArray = sofa.colors[i].push;
                //console.log(colorsArray)//there are 3 but shows just 1
                //option.text += sofa.colors[i];

                //option.text = sofa.colors[i].name;
                //option.value = sofa.colors[i].name;
                //dropdown.add(option);
                colorsArray[i] = sofa.colors[i].push;
                console.log(colorsArray[i]);
            }
            colors.innerHTML = `<option value="${add.option(colorsArray)}">${add.option(colorsArray)}</option>`;

            //console.log(option.text)//shows just 1
            /*
                        if (localStorage) {
                            localStorage.setItem(title.innerHTML)
                            console.log("You have chosen " + localStorage.getItem(title.innerHTML))
                        }
            
                        document.getElementById('addToCart').addEventListener('click', () => {
                            alert(title.innerHTML);
                        })*/
        }

    }
}
/*

fetch('url', {
method: 'POST',
headers: {
    'Content-type': 'application/json'
},
body: JSON.stringify({

})
})

*/
