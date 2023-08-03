// DATA
let data = [
  {
      id: 1,
      name: "Final Fantasy 7 Remake",
      thumbnail: "./assets/final_fantasy7_remake.jpg",
      price: 69.99,
      stock: 2
  },
  {
      id: 2,
      name: "Hogwarts Legacy",
      thumbnail: "./assets/hogwarts_legacy.jpeg",
      price: 59.99,
      stock: 24
  },
  {
      id: 3,
      name: "Monster Hunter World",
      thumbnail: "./assets/monsterhunter_world.png",
      price: 14.99,
      stock: 99
  },
  {
      id: 4,
      name: "Cyberpunk 2077",
      thumbnail: "./assets/cyberpunk_2077.jpg",
      price: 59.99,
      stock: 4
  },
  {
      id: 5,
      name: "Terraria",
      thumbnail: "./assets/terraria.jpg",
      price: 9.99,
      stock: 90
  },
  {
      id: 6,
      name: "Red Dead Redemption 2",
      thumbnail: "./assets/red_dead_redemption_2.jpeg",
      price: 19.79,
      stock: 69
  },
  {
      id: 7,
      name: "Forza Horizon 5",
      thumbnail: "./assets/forza_horizon_5.png",
      price: 39.99,
      stock: 44
  },
  {
      id: 8,
      name: "Cities Skylines",
      thumbnail: "./assets/cities_skyline.jpg",
      price: 29.99,
      stock: 37
  }
]

let shoppingCart = []


let noItem = document.getElementById("no-item");
if(shoppingCart.length == 0){
  //let noItem = document.getElementById("no-item");
  noItem.setAttribute("class", "visible")
}



// IMAGE CAROUSEL

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

autoSlides();

function autoSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(autoSlides, 5000);
}

// END



document.getElementById("best_sellers").addEventListener("load", loadGameData);
let gameList = document.getElementById('best_sellers')
function loadGameData(){


  let h1 = document.createElement("h1")
  h1.innerHTML = "BEST SELLERS"

  gameList.appendChild(h1)

      let rowTag = document.createElement("div")
      rowTag.setAttribute("class", "row")
      //rowTag.classList.add("best-sellers")

        for(let a = 0; a < data.length; a++){
          
          let game = data[a]
          let columnTag = document.createElement("div")
          columnTag.setAttribute("class", "column")
          let card =  document.createElement('div')
          card.setAttribute("class", "card")
          card.classList.add("game-card")
    
          let gamePic = document.createElement('img')
          gamePic.setAttribute("src", game.thumbnail)
        
          let div1 = document.createElement('div')
          div1.setAttribute("class", "game-title")
        
          let p1 = document.createElement("p")
          p1.innerHTML = game['name']
          // let div2 = document.createElement('div')
          // div2.setAttribute("class", "platform")  
        
          let div3 = document.createElement('div')
          div3.setAttribute("class", "game-info")
          let p2 = document.createElement("p")
          p2.innerHTML = game['price']
          p2.setAttribute("class", "game-price")
          let p3 = document.createElement("p")
          p3.innerHTML = `Stock: ${game.stock}`
          p3.setAttribute("class", "game-stock")
        
          let a1 = document.createElement("a")
          a1.setAttribute("class", "add-cart")
          a1.setAttribute("href", "#shopping_cart")
          a1.setAttribute("id", game.id)
          a1.setAttribute("onclick", `addingToCart(${game.id})`)
          a1.innerHTML = "Add to Cart"
        
          div1.appendChild(p1)
          div3.appendChild(p2)
          div3.appendChild(p3)

          columnTag.appendChild(card)
          rowTag.appendChild(columnTag)
          card.appendChild(gamePic)
          card.appendChild(div1)
          card.appendChild(div3)
          card.appendChild(a1)
          //divSeller.appendChild(rowTag)
          gameList.appendChild(rowTag)        
  
        }
}

let addCartBtn = document.getElementsByClassName("add-cart")


for (let i = 0 ; i < addCartBtn.length; i++) {
  //comment[i].addEventListener('click' , showComment , false ) ; 
  addCartBtn[i].addEventListener("click", addingToCart);
}

function addingToCart(id){
  data[id-1].stock--;
  let inCartObj = {
    id: data[id-1].id,
    thumbnail: data[id-1].thumbnail ,
    name: data[id-1].name,
    price: data[id-1].price,
    stock: data[id-1].stock,
  }

  shoppingCart.push(inCartObj);
  let stockUpdate = document.getElementsByClassName("game-stock");

  stockUpdate[id-1].innerHTML=`Stock: ${data[id-1].stock}`;

  noItem.setAttribute("class", "invisible")

  let checkCheckoutContainer = document.getElementsByClassName("checkout-container")
  if(checkCheckoutContainer.length != 0){
    checkCheckoutContainer[0].remove();

  }
  
  //create elemen gamenya dicart

  let divInCon = document.createElement("div");
  divInCon.setAttribute("class", "inner-container");
  divInCon.setAttribute("game-id", data[id-1].id)

  let divItemInfos = document.createElement("div");
  divItemInfos.setAttribute("class", "item-infos")


  let cartImg = document.createElement("img")
  cartImg.setAttribute("src", data[id-1].thumbnail)

  let infoContainer = document.createElement("div");
  infoContainer.setAttribute("class", "item-infos-container")

  let cartGameName = document.createElement("h2")
  cartGameName.innerHTML = data[id-1].name;

  let cartGamePrice = document.createElement("p")
  cartGamePrice.innerHTML = `$ ${data[id-1].price}`


  infoContainer.appendChild(cartGameName);
  infoContainer.appendChild(cartGamePrice);
  divItemInfos.appendChild(cartImg);
  divItemInfos.appendChild(infoContainer);
  divInCon.appendChild(divItemInfos);

  // ini taruh di paling bawah
  let cartInfos = document.getElementsByClassName("cart-infos");
  cartInfos[0].appendChild(divInCon)

  // buat checkout section

  let checkoutContainer = document.createElement("div")
  checkoutContainer.setAttribute("class", "checkout-container")

  let checkoutWrapper = document.createElement("div")
  checkoutWrapper.setAttribute("class", "checkout-wrapper")

  let checkoutLeft = document.createElement("div")
  checkoutLeft.setAttribute("class", "checkout-left")

  let pSubTotal = document.createElement("p")
  pSubTotal.innerHTML = "Sub-Total"

  let totalItem = document.createElement("p")
  totalItem.setAttribute("class", "total-items")
  let subTotal = shoppingCart.length; //ini total item

  totalItem.innerHTML = `${subTotal} items`

  let priceTotal = 0;
  for(let a = 0; a < shoppingCart.length; a++){
    priceTotal += (shoppingCart[a]['price'])
  }

  let subTotalPrice = document.createElement("p")
  subTotalPrice.innerHTML = `$ ${priceTotal.toFixed(2)}`

  let checkoutBtn = document.createElement("button")
  checkoutBtn.setAttribute("class", "checkout-btn")
  checkoutBtn.innerHTML = "Checkout"


  checkoutLeft.appendChild(pSubTotal)
  checkoutLeft.appendChild(totalItem)
  checkoutWrapper.appendChild(checkoutLeft)
  checkoutWrapper.appendChild(subTotalPrice)
  checkoutContainer.appendChild(checkoutWrapper)
  checkoutContainer.appendChild(checkoutBtn)

  cartInfos[0].appendChild(checkoutContainer)
  //checkCartLength()
  // let textNoItem = document.getElementsByClassName("no-item")
  // console.log(textNoItem, "ghasgfsdhsdghjsd");
  // textNoItem[0].remove();
}

if(shoppingCart.length == 0){

  let cartInfos = document.getElementsByClassName("cart-infos");
  cartInfos[0].appendChild(noItem)
}



let btnRemoveAll = document.getElementById("remove-all")
btnRemoveAll.addEventListener("click", funcRemoveAll)

function funcRemoveAll(){

  shoppingCart = []
  let toRemoveContainer = document.getElementsByClassName("inner-container")
  
  for(let m = 0; m < toRemoveContainer.length; m++){
    let gameId = toRemoveContainer[m].getAttribute("game-id")
    //console.log(gameId[m], "ini game id");
    toRemoveContainer[m].remove()
    data[gameId-1].stock++;

    let stockUpdate = document.getElementsByClassName("game-stock");

    stockUpdate[gameId-1].innerHTML=`Stock: ${data[gameId-1].stock}`;
  }

  let toRemoveCheckout = document.getElementsByClassName("checkout-container")
  for(let n = 0; n < toRemoveCheckout.length; n++){
    toRemoveCheckout[n].remove()
  }
  // let noItem = document.createElement("h2")
  // noItem.setAttribute("class", "no-item")
  // noItem.innerHTML = "No item in the cart"
  // let cartInfos = document.getElementsByClassName("cart-infos");
  // cartInfos[0].appendChild(noItem)
  noItem.setAttribute("class", "visible")
}

