import { useState, useEffect } from "react";
import { Card } from "../../components/Card/Card";
import { useAppContext } from "../../store/AppContext";
import { addToCartProcessAction, fetchCartProcessAction } from "../../store/actions";

export const ProductCard = ({ product }) => {
	const { state, dispatch } = useAppContext();
	const [itemsLoading, setItemsLoading] = useState({});
	
	const handleClick = async (prodId) => {
		setItemsLoading({
			...itemsLoading,
			[prodId] : true
		})
		await addToCartProcessAction(dispatch, product);
		setItemsLoading({
			...itemsLoading,
			[prodId] : false, 
		})
	}

	const isSaved = (state.cart.find(itemInCart => itemInCart.id === product.id)) != undefined ? true : false;

	useEffect(() => {
		fetchCartProcessAction(dispatch)
	}, [])

	return (
		<Card
			product= {product}
			controls={[
				{
					label: !(isSaved) ? 'Adicionar ao Carrinho': 'Adicionado ao Carrinho',
					variant: 'dark',
					loadingLabel: 'Adicionando',
					loading: itemsLoading[product.id],
					disabled: isSaved,
					onClick: () => handleClick(product.id)
				}
			]}
		>
		</Card>
	);
}
