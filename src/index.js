import createItem from './services/item.js';
import * as cartService from './services/cart.js'; 

const myCart = [];
const myWishlist = [];

console.log(`Welcome to Shopee Store! \n`);

const item1 = await createItem("Mochila", 700, 1);
const item2 = await createItem("Mochila com rodízio", 900, 1);
const item3 = await createItem("Camiseta", 140.90, 1);

await cartService.addItem(myCart, item1);
await cartService.addItem(myCart, item2);
await cartService.addItem(myCart, item3);

await cartService.removeItem(myCart, item1);
// await cartService.deleteItem(myCart, 'mochila')

await cartService.displayCart(myCart);

await cartService.calculateTotal(myCart);