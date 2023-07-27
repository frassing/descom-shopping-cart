
export const getCart = async () => {
	return JSON.parse(localStorage.getItem('cart')) || []
}

export const saveItemInCart = async (item) => {
	const shoppingCart = await getCart();
	
	const newItemInCart = {...item}

	shoppingCart.push(newItemInCart);

	localStorage.setItem('cart', JSON.stringify(shoppingCart));

	return shoppingCart;

}