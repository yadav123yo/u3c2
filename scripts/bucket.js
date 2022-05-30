// On clicking remove button the item should be removed from DOM as well as localstorage.

var addArr = JSON.parse(localStorage.getItem("coffee"));
displayData(addArr)

function displayData(data){
    data.forEach(function (elem,index){
        var box = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("src",elem.img);
    
        var price = document.createElement("p")
        price.innerText = elem.price;
    
        var name = document.createElement("p")
        name.innerText = elem.name;
    
        var btn = document.createElement("button")
        btn.innerText = "Remove"
        btn.addEventListener("click",function (){
            removeItem(elem,index);
        });
        box.append(img,price,name,btn);
        bucket.append(box)
    })
}
function removeItem(elem,index){
    addArr.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(addArr));
    window.location.reload();
}
