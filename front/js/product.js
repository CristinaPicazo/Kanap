
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
const quantity = document.getElementById('quantity')
var option = document.createElement("option");


function displayItem(sofas) {
    for (let i = 0; i < sofas.length; i++) {
        if (sofas[i]._id === id) {
            const sofa = sofas[i];
            itemImg[0].innerHTML = `<img src=${sofa.imageUrl} alt=${sofa.altTxt}>`;
            title.innerHTML = `${sofa.name}`;
            price.innerHTML = `${sofa.price}`;
            description.innerHTML = `${sofa.description}`;
            //colors.innerHTML= `${sofa.colors.toString }`;
            console.log(colors)
            
            
            /*
            sofa.colors.forEach(color =>
                option.value = sofa.colors[i],
                option.innerHTML += sofa.colors[i].toString,
                
                colors.innerHTML = `<option value="${appendChild(option)}">${appendChild(option)}</option>`
                );
                
                */

            
            for (let n = 0; n < sofa.colors.length; n++) {
                console.log(sofa.colors.length)//there are 3 but shows just 1
                console.log(sofa.colors[0]);
                console.log(sofa.colors[1]);
                console.log(sofa.colors[2]);
                console.log('con n: ' + sofa.colors[n]);
                
                
                sofa.colors.options[sofa.colors.length] = new Option(sofa.colors[sofa.colors[n]],sofa.colors[n]);
                colors.innerHTML = `<option value="${color}">${color}</option>`
                   


                   //console.log('muestra todos: ' + sofa.colors[i].innerHTML.toString);

                   //option.text = sofa.colors[i].toString;
                   //console.log(option.text);
                }
                
               
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


            console.log("quantity of the product " + quantity);
            document.getElementById('addToCart').addEventListener('click', () => {
                //product, quantity and color
                let cartArray = [id, quantity];
                console.log("id: " + id + "quantity of the product " + quantity.value);
                localStorage.setItem(id, quantity);
                
                
                //window.location.href = "./index.html";
            })
            
            
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
   