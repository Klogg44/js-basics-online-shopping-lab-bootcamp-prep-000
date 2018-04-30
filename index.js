var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var item = {
    itemName: item,
    itemPrice: Math.floor((Math.random() * 100) + 1)
  };
  cart.push(item);
  return `${item.itemName} has been added to your cart.`
}

function viewCart() {
  if (cart.length > 0) {
    let middle = []
    for (let i=0; i<cart.length; i++) {
      if (i === (cart.length - 1) && i !== 0) {
        middle.push(` and ${cart[i].itemName} at $${cart[i].itemPrice}`)
      } else {
        middle.push(` ${cart[i].itemName} at $${cart[i].itemPrice}`)
      }
    }
    return `In your cart, you have${middle.join()}.`
  } else {
    return 'Your shopping cart is empty.'
  }
}

function total() {
  let sum = 0
  for (let i = 0; i < cart.length; i++){
    sum += cart[i].itemPrice
  }
  return sum
}

function removeFromCart(item) {
  for (let i=0; i<cart.length; i++) {
    console.log(cart[i].itemName)
    if (cart[i].itemName === item) {
      console.log("Match")
      // cart.splice(i,1)
    } else {
      console.log("No Match")
    }
  }
  return
}

function placeOrder(cardNumber) {
  // write your code here
}

addToCart("fish")
addToCart("apple")

console.log(viewCart())

removeFromCart("apple")

console.log(viewCart())
