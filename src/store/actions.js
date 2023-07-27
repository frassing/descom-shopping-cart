import * as types from './types'
import * as itemService from '../services/itemService'

const sleep = (time) => (
	new Promise(resolve => {
		setTimeout(resolve, time)
	})
);

export const openModalAddedToCartAction = () => ({
	type: types.openModalAddedToCartType,
});

export const closeModalAction = () => ({
	type: types.closeModalType
});

export const addToCartInitAction = async () => ({
	type: types.addToCartInitType
});

export const addToCartSuccessAction = async (shoppingCart) => ({
	type: types.addToCartSuccessType,
	payload: shoppingCart
});

export const addToCartAction = async (dispatch, product) => {
	dispatch(addToCartInitAction());
	await sleep(1000);
	const cartItem = await itemService.saveItemInCart(product);
	dispatch(addToCartSuccessAction(cartItem));
	dispatch(openModalAddedToCartAction());
};