import * as types from './types'

export function reducer(state, action) {
	console.log(state)
	switch (action.type) {
		case types.closeModalType:
			return {
				...state,
				type: types.closeModalType,
				mode: null
			};
		case types.addToCartStartType:
			return {
				...state,
				type: types.addToCartStartType,
			};
		case types.addToCartDoneOpenModalType:
			return {
				...state,
				type: types.addToCartDoneOpenModalType,
				mode: true,
				cart: [
					...state.cart,
					action.payload,
				]
			}
		case types.getActiveProductType:
			return {
				...state,
				type: types.getActiveProductType,
				activeProduct: action.payload
			}
		case types.fetchCartType:
			return {
				...state,
				type: types.fetchCartType,
				cart: action.payload
			}
		default:
			return {
				...state,
				type: action.type
			}
	}
}