//store the products array in localstorage as "products"
var productArr=JSON.parse(localStorage.getItem("products")) || [];

document.getElementById("products").addEventListener("submit",addFun);

function addFun(){
    var productObj={
        type:products.type.value,
        desc:products.desc.value,
        price:products.price.value,
        image:products.image.value,
    }
    productArr.push(productObj);
    localStorage.setItem("products",JSON.stringify(productArr));
}