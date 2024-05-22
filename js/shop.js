// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
//import {products} from './products.js';

 var products = [
    {
      id: 1,
      name: "Cooking oil",
      price: 10.5,
      type: "grocery",
      offer: {
        number: 3,
        percent: 20,
      },
    },
    {
      id: 2,
      name: "Pasta",
      price: 6.25,
      type: "grocery",
    },
    {
      id: 3,
      name: "Instant cupcake mixture",
      price: 5,
      type: "grocery",
      offer: {
        number: 10,
        percent: 30,
      },
    },
    {
      id: 4,
      name: "All-in-one",
      price: 260,
      type: "beauty",
    },
    {
      id: 5,
      name: "Zero Make-up Kit",
      price: 20.5,
      type: "beauty",
    },
    {
      id: 6,
      name: "Lip Tints",
      price: 12.75,
      type: "beauty",
    },
    {
      id: 7,
      name: "Lawn Dress",
      price: 15,
      type: "clothes",
    },
    {
      id: 8,
      name: "Lawn-Chiffon Combo",
      price: 19.99,
      type: "clothes",
    },
    {
      id: 9,
      name: "Toddler Frock",
      price: 9.99,
      type: "clothes",
    },
  ];
  
  // => Reminder, it's extremely important that you debug your code.
  // ** It will save you a lot of time and frustration!
  // ** You'll understand the code better than with console.log(), and you'll also find errors faster.
  // ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.
  
  // Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
  let cart = [];
  
  let total = 0;
  
  // Exercise 1
  /*La funció que necessites completar es diu buy(), que rep l'identificador del producte per afegir. 
  Has de localitzar el producte utilitzant aquest identificador rebut en l'array products, per després incloure'l a l'array cart.*/
  function buy(id) {
    const productoAdd = products.find((product) => product.id === id);
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    if (productoAdd) {
      const productoExist = cart.find((item) => item.id === id);
      if (productoExist) {
        productoExist.quantity++;
        total++;
        console.log("cart: ", cart);
        console.log("total: ", total);
      } else {
        cart.push({ ...productoAdd, quantity: 1 });
        total++;
        console.log("cart: ", cart);
        console.log("total: ", total);
      }
      console.log(`Producto "${productoAdd.name}" agregado al carrito.`);
    } else {
      console.log(`El producto con ID ${id} no fue encontrado.`);
    }
  
  
    applyPromotionsCart();
    calculateTotal();
    printCart();
  }
  
  // Exercise 2
  function cleanCart() {
    const confirmMsg =
      "¿Estás seguro/a de vaciar el carrito? Esta acción no se puede deshacer.";
    const userConfirmed = confirm(confirmMsg);
    if (userConfirmed) {
      cart = [];
      total = 0; 
  
      console.log("El carrito se ha vaciado correctamente");
      printCart(); 
    }
  }
  
  // Exercise 3
  function calculateTotal() {
    let totalPrice = 0;
  
    cart.forEach((item) => {
      totalPrice += item.price * item.quantity;
    });
  
    let totalCart = totalPrice;
    console.log("el totalPrice es: ", totalPrice);
    console.log(`Total price of the cart: $${totalCart}`);
    printCart();
  }
  
  // Exercise 4
  function applyPromotionsCart() {
    cart.forEach((item) => {
      let productCart = products.find((product) => product.id === item.id);
  
      if (
        productCart &&
        productCart.offer &&
        item.quantity >= productCart.offer.number
      ) {
        let productTotalPrice = item.price * item.quantity;
        let productDiscount =
          (productTotalPrice * productCart.offer.percent) / 100;
        item.subtotalWithDiscount = productTotalPrice - productDiscount;
        console.log(
          "Promotions applied successfully.",
          item.subtotalWithDiscount
        );
      } else {
        item.subtotalWithDiscount = item.price * item.quantity;
        console.log("total No discount: ", item.subtotalWithDiscount);
      }
    });
  
    printCart();
  }
  
  
    console.log("Promotions applied successfully.");
    printCart(); 
  
  // Exercise 5
  function printCart() {
  
    const cartList = document.getElementById("cart_list");
    const showTotal = document.getElementById("total_price");
    const countProduct = document.getElementById("count_product");
  
    cartList.innerHTML = "";
  
    let cartTableHTML = "";
    let total = 0;
    let productCount = 0;
  
    cart.forEach((item) => {
      cartTableHTML += `
              <tr>
                  <th scope="row">${item.name}</th>
                  <td>$${item.price.toFixed(2)}</td>
                  <td>${item.quantity}</td>
                  <td>$${item.subtotalWithDiscount.toFixed(2)}</td>
                  <td><button type="button" onclick="removeFromCart(${
                    item.id
                  })" class="btn btn-danger btn-sm">Remove</button></td>
              </tr>
          `;
  
      total += item.subtotalWithDiscount;
      productCount += item.quantity;
    });
  
    cartList.innerHTML = cartTableHTML;
  
    showTotal.innerHTML = "$" + total.toFixed(2);
    countProduct.innerHTML = productCount.toString();
  
  }
  
  // Nivell II
  // Exercise 7
  function removeFromCart(id) {
    let index = cart.findIndex((item) => item.id === id);
  
    if (index !== -1) {
      let item = cart[index];
      item.quantity > 1 ? item.quantity-- : cart.splice(index, 1);
      console.log(`Producto "${item.name}" eliminado del cart.`);
    } else {
      console.log(`Producto con ${id} no se encuentra en el cart.`);
    }
    applyPromotionsCart();
    calculateTotal();
    printCart();
  }
  function open_modal() {
    printCart();
  }
  