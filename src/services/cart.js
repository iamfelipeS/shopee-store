//adicionar item ao carrinho
async function addItem(userCart, item) {
    userCart.push(item);
    return userCart;
}

//deletar item do carrinho
async function deleteItem(userCart, name) {
    const index = userCart.findIndex((item) => item.name.toLowerCase() === name);

    if (index !== -1) {
        userCart.splice(index, 1)
    }
}

//remover item do carrinho
async function removeItem(userCart, idItem) {
    return item;
}
//limpar carrinho
async function clearCart(userCart) {
    return true;
}


//mostrar itens do carrinho
async function displayCart(userCart) {
    console.log("Shopee cart list: ")
    userCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | Subtotal ${item.subtotal()}`)
    });
}

//calcular total do carrinho
async function calculateTotal(userCart) {
    console.log("\nShopee cart total is: ");
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log(`🎁 Total: ${result}`)
}
export {
    addItem, calculateTotal, deleteItem, removeItem, displayCart
};