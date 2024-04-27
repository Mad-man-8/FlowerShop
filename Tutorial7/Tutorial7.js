
function addToCart() {
    if (selected === "unselected"){
        alert("Please select an option before proceeding");
    }else{
    basketItems = document.getElementById('basketItems');
    listItem = document.createElement('li');
    listItem.textContent = product+ ' - $' + price.toFixed(2) + ' ';
    
    basketItems.appendChild(listItem);
    }
}

function clearCart(){
    while (basketItems.firstChild){
        basketItems.removeChild(basketItems.firstChild);
    }
    // listItem.remove();
}

var basketItems;
var listItem;
var price;
var product;
var selectElm = document.getElementById("flowerOptions")
var selected = selectElm.value;
var radioColor;
var flowerColor;

function optionChanged(){
    radioColor = document.getElementsByName("color");
    // need to iterate over the radio options because it doesn't give one element at once
    for (var i = 0; i <radioColor.length; i++){
        if (radioColor[i].checked){
            flowerColor = radioColor[i].value;
            break;
        }
    }

    selected = selectElm.value;
    if (selected === "nothing"){
        determinePrice();
        product = flowerColor+" boquet";
    }else if (selected === "extraFlowers"){
        determinePrice();
        price = price * 1.5;
        product = flowerColor+" boquet - Extra flowers";
    }else if (selected === "champagne"){
        determinePrice()
        price = price+12;
        product = flowerColor+" boquet with Champagne";
    }
}

function determinePrice(){
    if (flowerColor === "white"){
        price = 20;
    }else if (flowerColor === "pink"){
        price = 24;
    }else if (flowerColor === "red"){
        price = 25;
    }
}

function clearOrder(){
    selected = "unselected";
}

function showForm(){
    let showPopppedForm = document.getElementById('paymentDetails');
    showPopppedForm.style.display = 'block';
}
 function closeDetailForm(){
    document.getElementById('paymentDetails').style.display = 'none';
 }