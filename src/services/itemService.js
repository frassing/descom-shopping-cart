
export const getCartItems = async () => {
	return JSON.parse(localStorage.getItem('cartItems')) || []
}

export const saveItemInCart = async (item) => {
	const shoppingCart = await getCartItems();
	
	const newItemInCart = {...item}

	shoppingCart.push(newItemInCart);

	localStorage.setItem('cartItems', JSON.stringify(shoppingCart));
}