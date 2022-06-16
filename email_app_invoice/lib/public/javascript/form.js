 
 

 function createItemCard() {
    var container = document.createElement("div");
    container.className = "container";
    var card = document.createElement("div");
    card.className = "Nwcard";
    card.id= "Nwcard";
    var minus = document.createElement("span");
        minus.className = "additembtn";
        minus.id = "minusItemBtn";
        var minusSign = document.createElement("p");
            minusSign.innerText = "Remove";
            minus.appendChild(minusSign);
    var type = document.createElement("div");
              type.innerText = "Digital" ;        
    var name = document.createElement("h2");
                name.className = "card-header";
              name.innerText = "Brand Marketing";
    var description = document.createElement("div");
              description.innerText = "We offer Branding services to you";
    var sellingprice = document.createElement("h4");
              sellingprice.innerText = "£ 34";
    var quantity = document.createElement("div");
              quantity.innerText = "Quantity";
    var quantityinput = document.createElement("div");
                quantityinput.className = "quantity";
        var Qinput = document.createElement("input");
                Qinput.id = "myInput";
                Qinput.className = "form-control";
                Qinput.setAttribute("type", "text");
                Qinput.setAttribute("placeholder", "Number of items");
        quantityinput.appendChild(Qinput);
    var id = document.createElement("div");
              id.innerText = "6292a38f68afb8ca69e3946e";
    container.append(minus,type,name,description,sellingprice,quantity,quantityinput,id);
    card.appendChild(container);  
    document.getElementById("additems").appendChild(card);
    }

    let basket = [];
    let quantity =+ 0;
    function increment() {
    let selectedItem = document.getElementById('_id').innerText;
        quantity++;
    
    basket.push({  selectedItem, quantity }); 
        console.log(basket);
    }

    let decrement = ()=> {}
    let update  = ()=> {}

    // find id of each product and make it the addbtn id 
    id = '';
let getproductid = document.getElementById("_id");

    for (let i =0; i< getproductid.length; i++) {

        console.log(getproductid[i].id);

    }


    function addbtn (){

    let addbtn =  document.getElementsByClassName("container");
    for (let i = 0; i < addbtn.length; i++) {
        id =  addbtn[i];
    function increment() {
       
    let selectedItem = id;
        quantity++;
            
        basket.push({selectedItem, quantity }); 
                console.log(id);
            }
    addbtn[i].addEventListener("click", createItemCard);
    addbtn[i].addEventListener("click", increment); 
    console.log('done');
    }


}
 addbtn();



    // addbtn.addEventListener("click", increment );


 