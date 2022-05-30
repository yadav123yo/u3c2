// Add the coffee to local storage with key "coffee"

//https://masai-mock-api.herokuapp.com/coffee/menu


var data = [
    {
        img : "https://tse2.mm.bing.net/th?id=OIP.eXAMtGhm_fZxaEESVVkp0wHaE7&pid=Api&P=0&w=261&h=174",
        price : "29$",
        name :"black coffee",
    },

    {
        img : "https://tse2.mm.bing.net/th?id=OIP.eXAMtGhm_fZxaEESVVkp0wHaE7&pid=Api&P=0&w=261&h=174",
        price : "29$",
        name :"black coffee",
    },

    {
        img : "https://tse2.mm.bing.net/th?id=OIP.eXAMtGhm_fZxaEESVVkp0wHaE7&pid=Api&P=0&w=261&h=174",
        price : "29$",
        name :"black coffee",
    },

    {
        img : "https://tse2.mm.bing.net/th?id=OIP.eXAMtGhm_fZxaEESVVkp0wHaE7&pid=Api&P=0&w=261&h=174",
        price : "29$",
        name :"black coffee",
    },
    {
        img : "https://tse2.mm.bing.net/th?id=OIP.eXAMtGhm_fZxaEESVVkp0wHaE7&pid=Api&P=0&w=261&h=174",
        price : "29$",
        name :"black coffee",
    },
    {
        img : "https://tse2.mm.bing.net/th?id=OIP.eXAMtGhm_fZxaEESVVkp0wHaE7&pid=Api&P=0&w=261&h=174",
        price : "29$",
        name :"black coffee",
    },
    {
        img : "https://tse2.mm.bing.net/th?id=OIP.eXAMtGhm_fZxaEESVVkp0wHaE7&pid=Api&P=0&w=261&h=174",
        price : "29$",
        name :"black coffee",
    },
    {
        img : "https://tse2.mm.bing.net/th?id=OIP.eXAMtGhm_fZxaEESVVkp0wHaE7&pid=Api&P=0&w=261&h=174",
        price : "29$",
        name :"black coffee",
    },
    {
        img : "https://tse2.mm.bing.net/th?id=OIP.eXAMtGhm_fZxaEESVVkp0wHaE7&pid=Api&P=0&w=261&h=174",
        price : "29$",
        name :"black coffee",
    },

];

var addArr = [];

data.forEach(function(elem){
    var box = document.createElement("div");
    var img = document.createElement("img");
    img.setAttribute("src",elem.img);

    var price = document.createElement("p")
    price.innerText = elem.price;

    var name = document.createElement("p")
    name.innerText = elem.name;

    var btn = document.createElement("button")
    btn.innerText = "Add to bucket"
    btn.addEventListener("click",function (){
        addFun(elem);
    });
    box.append(img,price,name,btn);
    menu.append(box)
})

function addFun(elem){
    console.log(elem)
addArr.push(elem);
localStorage.setItem("coffee",JSON.stringify(addArr))
}


