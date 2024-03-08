/*
* Shopping Cart Requirements:
* - Before you start, please run `npm run start:api` to start mock API server
* - data for mock APIs come from ./db/db.json
* - There are 2 APIs you need to call:
*     - http://localhost:4002/cart : this will provide a list of product-ids for current shopping cart
*     - http://localhost:4002/products : this will provide a list of products with full details
*
* We want to display detail of items in shopping carts. i.e: user has added product 1001 and 1004 to the cart.
* product 1001 is TV and product 1002 is iPad. Thus, we would like to display them in tabular format
* inside table#shopping-cart-tbl as below:
* ID     Item
* 1001   TV
* 1002   iPad
*
* */
const View = {
  init: async() => {
    try {

      //fetch cart from API
      const responseCart = await fetch('http://localhost:4002/cart');
      const dataCart = await responseCart.json();
      
      //fetch product data from API
      const responseProduct = await fetch('http://localhost:4002/products');
      const dataProducts = await responseProduct.json();

      //find product and populate table
      const tbodyElem = document.getElementById('shopping-cart-tbl').querySelector('tbody');
      tbodyElem.innerHTML='';

      dataCart.forEach(cartItem => {
        //for each product that matches cart
        const product = dataProducts.find(product => product.id === cartItem.id);
        if(product){
          //create table row
          const row=document.createElement('tr');
          row.innerHTML= `<td>${product.id}</td><td>${product.name}</td>`
          tbodyElem.appendChild(row);
        }
      
      });
    }
    catch (error) {
      console.error('Error fetching data:', error);
    }
  }
};
document.addEventListener('DOMContentLoaded', View.init);
