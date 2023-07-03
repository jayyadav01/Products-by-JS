async function fet()
{
    let response = await fetch('https://dummyjson.com/products');
    let result = await response.json();
    console.log(result.products);

    showData(result.products);
}
fet();

function showData(data)
{
    for(let i=0; i<data.length; i++)
    {
        let dabba = document.createElement('div');
        dabba.classList.add('product');

        let imglink = document.createElement('a');
        imglink.href = 'singlepage.html?id='+data[i].id;

        let img = document.createElement('img');
        img.src = data[i].thumbnail;

        imglink.append(img);

        let title = document.createElement('p');
        title.innerHTML = data[i].title;

        let des = document.createElement('p');
        des.innerHTML = data[i].description;

        let price = document.createElement('p');

        let dollor = document.createElement('i');
        dollor.classList.add("fa-sharp" , "fa-solid" , "fa-dollar-sign");
        price.append(dollor);

        price.innerHTML += ' ' +data[i].price;

        let addtocart = document.createElement('button')
        
        let carticon = document.createElement('i');
        carticon.classList.add("fa-solid" ,"fa-cart-shopping");
        addtocart.append(carticon);
        
        addtocart.innerHTML += ' Add To Cart';


        dabba.append(imglink);
        dabba.append(title);
        dabba.append(des);
        dabba.append(price);
        dabba.append(addtocart);

        document.querySelector('#products').append(dabba);

        dabba.style.border = "2px solid white";
        dabba.style.padding = "20px";
        dabba.style.margin = "20px";
        dabba.style.height = '500px';
        dabba.style.width = '315px';

        let body = document.querySelector("body");
        body.style.backgroundColor = 'skyblue';

        let products = document.querySelector('#products');
        products.style.display = 'flex';
        products.style.flexWrap = 'wrap';

        img.style.width = '300px';
        img.style.height = '300px';

    }
}