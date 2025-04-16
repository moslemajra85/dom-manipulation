// const title = document.querySelector('#title');
// const text = document.querySelector('.text');
// const btn = document.querySelector('button');
// const item = document.querySelector('.container  #text');

// const newItem = document.getElementById('content');

// //create a new div element
// const newDiv = document.createElement('div');
// const subTitle = document.createElement('h2');
// subTitle.textContent = 'My Subtitle';
// const paragraph = document.createElement('p');
// paragraph.textContent = 'This is My Paragraph';
// paragraph.style.backgroundColor = 'orange';
// newDiv.style.border = '1px solid blue';

// //1 - put the subtitle and pagraph inside inside the de newDiv
// //2 -  append the newDiv into the body

// newDiv.appendChild(subTitle);
// newDiv.appendChild(paragraph);

// document.body.appendChild(newDiv);

// const btnPlus = document.querySelector('.increase');
// const btnMius = document.querySelector('.decrease');
// const counter = document.querySelector('.number h1');

// btnPlus.addEventListener('click', () => {
//   counter.textContent = +counter.textContent + 1;
// });

// btnMius.addEventListener('click', () => {
//   if (+counter.textContent <= 0) return;
//   counter.textContent = +counter.textContent - 1;
// });

const products = [
  {
    name: 'MacBook',
    price: 2000,
    imageUrl: 'images/mac.jpg',
  },
  { name: 'iPhone', price: 1500, imageUrl: 'images/iphone.jpg' },
  { name: 'iPad', price: 1000, imageUrl: 'images/ipad.jpg' },
  { name: 'Apple Watch', price: 500, imageUrl: 'images/applewatch.jpg' },
  { name: 'AirPods', price: 300, imageUrl: 'images/airpods.jpg' },
];

const targetContainer = document.getElementById('products');
const totalPrice = document.getElementById('total');
const form = document.getElementById('productForm');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = event.target.name.value;
  const price = +event.target.price.value;
  const imageUrl = event.target.imageUrl.value;

  products.push({
    name,
    price,
    imageUrl,
  });

  console.log(products);
});

// display products to the screen
function dipslay(items) {
  const renderedProducts = items.map(
    (product) => `
      <div class="card">
        <img  src="${product.imageUrl}"/>
        <h2 class="name">Name: ${product.name}</h2>
        <h2 class="price">Price: $${product.price}</h2>
        <div class="action">
        <button class="btn btnPlus">+</button>
        <button class="btn btnMinus">-</button>
        </div>
      </div>
    `
  );

  for (let product of renderedProducts) {
    targetContainer.innerHTML += product;
  }
}

function extractPriceFromString(str) {
  return +str.split('$')[1];
}

function updateTotalPrice() {
  let plusBtns = document.querySelectorAll('.btnPlus');
  let minusBtns = document.querySelectorAll('.btnMinus');

  plusBtns = Array.from(plusBtns);
  minusBtns = Array.from(minusBtns);

  // for (let i = 0; i < plusBtns.length; i++) {
  //   plusBtns[i].addEventListener('click', () => {
  //     const actions = document.querySelectorAll('.action');
  //     const priceElement = actions[i].previousElementSibling;
  //     const total = extractPriceFromString(totalPrice.textContent);
  //     const price = extractPriceFromString(priceElement.textContent);
  //     const result = total + price;

  //     totalPrice.innerText = `Price: $${result}`;
  //   });
  // }
  test(plusBtns, '+');
  test(minusBtns, '-');
}

function test(buttons, operation) {
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
      const actions = document.querySelectorAll('.action');
      const priceElement = actions[i].previousElementSibling;
      const total = extractPriceFromString(totalPrice.textContent);
      const price = extractPriceFromString(priceElement.textContent);

      const result = operation === '+' ? total + price : total - price;

      if (result < 0) return;
      totalPrice.innerText = `Price: $${result}`;
    });
  }
  return;
}

dipslay(products);
updateTotalPrice();
