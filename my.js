let openShopping = document.querySelector(".shopping");
let closeShopping = document.querySelector(".closeShopping");
let list = document.querySelector(".list");
let listCard = document.querySelector(".listCard");
let body = document.querySelector("body");
let total = document.querySelector(".total");
let quantity = document.querySelector(".quantity");
let card = document.querySelector(".card");

openShopping.addEventListener("click", () => {
  card.classList.toggle("active");
});
closeShopping.addEventListener("click", () => {
  card.classList.remove("active");
});

let products = [
  {
    id: 1,
    name: "ORIGINAL",
    image: "1.jpg",
    price: 5000,
  },
  {
    id: 2,
    name: "TARO",
    image: "2.jpg",
    price: 7000,
  },
  {
    id: 3,
    name: "STRAWBERRY",
    image: "3.jpg",
    price: 8000,
  },
  {
    id: 4,
    name: "TIRAMISU",
    image: "4.jpg",
    price: 8000,
  },
  {
    id: 5,
    name: "BLUEBERRY",
    image: "5.jpg",
    price: 5000,
  },
  {
    id: 6,
    name: "COKLAT",
    image: "6.jpg",
    price: 8000,
  },
  {
    id: 7,
    name: "GREEN TEA CRUNCHY",
    image: "2.jpg",
    price: 8000,
  },

  {
    id: 8,
    name: "COKLAT CRUNCHY",
    image: "6.jpg",
    price: 8000,
  },
  {
    id: 9,
    name: "MILK CRUNCHY",
    image: "4.jpg",
    price: 8000,
  },
  {
    id: 10,
    name: "CAPPUCINO",
    image: "1.jpg",
    price: 8000,
  },
];

let listCards = [];
function initApp() {
  products.forEach((value, key) => {
    let newDiv = document.createElement("div");
    newDiv.classList.add("item");
    newDiv.innerHTML = `
    
    <img src="img/${value.image}" onclick="addToCart(${key})"/>
    <div class="title">${value.name}</div>
    <div class="price">Rp. ${value.price.toLocaleString()}</div>
    <button onclick="addToCart(${key})">Masukan Keranjang</button>
    
    `;
    list.appendChild(newDiv);
  });
}
initApp();
function addToCart(key) {
  if (listCards[key] == null) {
    listCards[key] = JSON.parse(JSON.stringify(products[key]));
    listCards[key].quantity = 1;
  }
  reloadCart();
}
function reloadCart() {
  listCard.innerHTML = "";
  let count = 0;
  let totalPrice = 0;
  listCards.forEach((value, key) => {
    totalPrice = totalPrice + value.price;
    count = count + value.quantity;

    if (value != null) {
      let newDiv = document.createElement("li");
      newDiv.innerHTML = `
      
      <div><img src="img/${value.image}"/></div>
      <div>${value.name}</div>
      <div>Rp. ${value.price.toLocaleString()}</div>
      <div>
        <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
        <div class="count">${value.quantity}</div>
        <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
      </div>
      
      `;
      listCard.appendChild(newDiv);
    }
  });
  total.innerText = totalPrice.toLocaleString();
  quantity.innerText = count;
}
function changeQuantity(key, quantity) {
  if (quantity == 0) {
    delete listCards[key];
  } else {
    listCards[key].quantity = quantity;
    listCards[key].price = quantity * products[key].price;
  }
  reloadCart();
}
