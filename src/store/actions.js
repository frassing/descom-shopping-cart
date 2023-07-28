import * as types from './types'
import * as itemService from '../services/itemService'

const sleep = (time) => (
	new Promise(resolve => {
		setTimeout(resolve, time)
	})
);

export const getActiveItemAction = (activeProd) => ({
	type: types.getActiveProductType,
	payload: activeProd
});

export const closeModalAction = () => ({
	type: types.closeModalType
});

export const addToCartStartAction = () => ({
	type: types.addToCartStartType
});

export const addToCartCompleteOpenModalAction = (prod) => ({
	type: types.addToCartDoneOpenModalType,
	payload: prod
});

export const addToCartProcessAction = async (dispatch, product) => {
	dispatch(addToCartStartAction());
	await sleep(1000);
	const cartItem = await itemService.saveItemInCart(product);
	// dispatch(fetchCartProcessAction(dispatch));
	dispatch(getActiveItemAction(cartItem));
	dispatch(addToCartCompleteOpenModalAction(cartItem));
};

export const fetchCartProcessAction = async (dispatch) => {
	const carrinho = await itemService.getCartItems();
	dispatch(fetchCartDoneAction(carrinho));
} 

export const fetchCartDoneAction = (cart) => ({
	type: types.fetchCartType,
	payload: cart
})