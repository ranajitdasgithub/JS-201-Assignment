function append(){
    
    var productArr=JSON.parse(localStorage.getItem("products")) || [];
    //console.log(productArr)
    var container=document.getElementById("all_products");
    container.innerHTML=null;
    productArr.forEach(function(elem,index){
        let div=document.createElement("div");
        let image=document.createElement("img");
        image.src=elem.image;
        let type=document.createElement("p");
        type.innerText=elem.type;
        let desc=document.createElement("p");
        desc.innerText=elem.desc;
        let price=document.createElement("p")
        price.innerText="$"+elem.price;
        let btn=document.createElement("button");
        btn.innerText="Remove";
        btn.addEventListener("click",function(){
            removeFun(index);
        });
        div.append(image,type,desc,price,btn);
        
        container.append(div)
        //window.location.reload()
        
    })
}
append()
function removeFun(index){
    var productArr=JSON.parse(localStorage.getItem("products")) || [];
    productArr.splice(index,1);
    //console.log(productArr)
    localStorage.setItem("products",JSON.stringify(productArr))
    window.location.reload()
}