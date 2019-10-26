let availableProducts = [];
let myProducts = [];
let filters = {
   default: (_, x) => x.quantity > 0,
   filterByStr: (str, product) => product.name.includes(str)
}

function getCurrProductData(btn) {
   let div = btn.parentElement.parentElement;
   let name = div.getElementsByTagName('span')[0].innerHTML;
   let price = div.getElementsByTagName('strong')[1].innerHTML;
   return { name, price };
}

function generateLiFoMyProducts(product) {
   let li = createElement('li', product.name);
   let strong = createElement('strong', product.price);
   appentElements(li, [strong]);
   return li;
}

function showTotalPrice() {
   let totalPrice = document.getElementsByTagName('h1')[1];
   let price = myProducts.reduce((r, x) => r += Number(x.price), 0);
   totalPrice.innerHTML = `Total Price: ${price.toFixed(2)}`;
}

function moveToMyProducts() {
   let currProduct = getCurrProductData(this);
   myProducts.push(currProduct);
   availableProducts.filter(x => x.name === currProduct.name).map(x => x.quantity--);

   showProducts(availableProducts, 'products', filters.default, genarateLiForAvProducts);
   showProducts(myProducts, 'myProducts', '', generateLiFoMyProducts);
   showTotalPrice();
}

function getProductData() {
   let values = document.getElementsByTagName('input');
   let name = values[1].value;
   let quantity = values[2].value;
   let price = values[3].value;

   if (name !== '' && quantity !== '' && price !== '' && quantity > 0) {
      return { name, quantity, price };
   }

   return 'invalid'
}

function createElement(type, content) {
   let e = document.createElement(type);
   if (typeof content === "string") {
      e.innerHTML = content;
   }
   if (typeof content === "object") {
      e.appendChild(content);
   }

   return e;
}

function appentElements(parent, elements) {
   elements.map(x => parent.appendChild(x));
   return parent;
}

function genarateLiForAvProducts(product) {
   let li = createElement('li');
   let span = createElement('span', product.name);
   let strong = createElement('strong', `Available: ${product.quantity}`);
   let div = createElement('div');
   let strong2 = createElement('strong', Number(product.price).toFixed(2));
   let btn = createElement('button', "Add to Client's List");
   btn.addEventListener('click', moveToMyProducts)

   appentElements(div, [strong2, btn]);
   appentElements(li, [span, strong, div]);

   return li;
}

function showProducts(prodcuctList, section, filterType, generateFunction, str) {
   let ul = document.getElementById(section).getElementsByTagName('ul')[0];
   ul.innerHTML = '';
   if (filterType != '') {
      return prodcuctList.filter(filterType.bind(undefined, str)).map(generateFunction).map(x => ul.appendChild(x));
   }
   return prodcuctList.map(generateFunction).map(x => ul.appendChild(x));
}

function init(e) {
   let productData = getProductData();
   if (productData !== 'invalid') {
      availableProducts.push(productData);
   }
   e.preventDefault()
   showProducts(availableProducts, 'products', filters.default, genarateLiForAvProducts);
}

function clearMyProducts() {
   myProducts = [];
   showProducts(myProducts, 'myProducts', '', generateLiFoMyProducts);
   showTotalPrice();
}

function filterItems() {
   let string = document.getElementById('filter');
   showProducts(availableProducts, 'products', filters.filterByStr, genarateLiForAvProducts, string.value);
}

document.getElementsByTagName('button')[1].addEventListener('click', init);
document.getElementById('myProducts').getElementsByTagName('button')[0].addEventListener('click', clearMyProducts);
document.querySelector('.filter').getElementsByTagName('button')[0].addEventListener('click', filterItems)