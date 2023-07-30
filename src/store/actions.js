import * as types from './types'
import * as itemService from '../services/itemService'

// Função para simular o tempo de espera de uma requisição a uma api externa, utilizada para permitir o "loading"
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

export const fetchProductsDataStartAction = () => ({
	type: types.fetchProductsDataStartType
})

export const fetchProductsDataSuccessAction = (productsData) => ({
	type: types.fetchProductsDataSuccessType,
	payload: productsData
})

export const fetchProductsDataAction = async (dispatch) => {
	dispatch(fetchProductsDataStartAction());
	const productsList = await itemService.getProducts();
	dispatch(fetchProductsDataSuccessAction(productsList));
}