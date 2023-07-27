import { Card } from "../../components/Card/Card";
import { useAppContext } from "../../store/AppContext";
import { addToCartAction } from "../../store/actions";
import { addToCartInitType } from "../../store/types";


export const ProductCard = ({ product }) => {
	const { state, dispatch } = useAppContext();
	const handleClick = () => {
		addToCartAction(dispatch, product);
	}

	return (
		<Card
			product={product}
			controls={[
				{
					label: 'Adicionar ao Carrinho',
					variant: 'dark',
					loadingLabel: 'Adicionando',
					loading: state.type === addToCartInitType,
					disabled: false,
					onClick: handleClick
				}
			]}
			onClick={handleClick}
		>
		</Card>
	);
}
