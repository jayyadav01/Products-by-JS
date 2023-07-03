let pageURL = window.location.href;

if(!pageURL.includes("id"))
{
    alert('Go back and click on a image');
}
else
{
    let id = pageURL.split('=')[1];
    singlefetch(id);

    async function singlefetch()
    {
        let response = await fetch("https://dummyjson.com/products/"+id)
        let result = await response.json();
        console.log(result);

        showData(result);
    }
}

function showData(data)
{
    let box = document.createElement('div');
    box.classList.add('product');

    let img = document.createElement('img');
    img.src = data.thumbnail;

    let title = document.createElement('p');
    title.innerHTML = data.title;

    let des = document.createElement('p');
    des.innerHTML = data.description;

    let price = document.createElement('p');

    let dollor = document.createElement('i');
    dollor.classList.add("fa-sharp" , "fa-solid" , "fa-dollar-sign");
    price.append(dollor);

    price.innerHTML += ' ' +data.price;

    let addtocart = document.createElement('button')
    
    let carticon = document.createElement('i');
    carticon.classList.add("fa-solid" ,"fa-cart-shopping");
    addtocart.append(carticon);
    
    addtocart.innerHTML += ' Add To Cart';


    box.append(img);
    box.append(title);
    box.append(des);
    box.append(price);
    box.append(addtocart);

    document.querySelector('#singleproduct').append(box);
}