import createItem from './services/item.js';


const cart = [];

console.log("Welcome to Shopee Store!");

const item1 = await createItem("Mochila", 1000, 1);
const item2 = await createItem("Camiseta", 500, 20);

console.log(`total: ${ item1.subtotal()+item2.subtotal()}`);