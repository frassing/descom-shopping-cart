import * as types from './types'

export function reducer(state, action) {
	switch (action.type) {
		case types.openModalAddedToCartType:
			return {
				...state,
				type: types.openModalAddedToCartType,
				mode: true
			};
		case types.closeModalType:
			return {
				...state,
				type: types.closeModalType,
				mode: null
			};
		case types.addToCartInitType:
			return {
				...state,
				type: types.addToCartInitType,
			};
		case types.addToCartSuccessType:
			return {
				...state,
				type: types.addToCartSuccessType,
				shoppingCart: [
					...state.cart,
					action.payload,
				]
			}
		default:
			return {
				...state,
				type: action.type
			}
	}
}