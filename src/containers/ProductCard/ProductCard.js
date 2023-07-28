
import { Card } from "../../components/Card/Card";
import { useAppContext } from "../../store/AppContext";
import { addToCartProcessAction } from "../../store/actions";
import { addToCartStartType } from "../../store/types";



export const ProductCard = ({ product }) => {
	const { state, dispatch } = useAppContext();
	const handleClick = () => {
		addToCartProcessAction(dispatch, product);
	}
	
	return (
		<Card
			product={product}
			controls={[
				{
					label: 'Adicionar ao Carrinho',
					variant: 'dark',
					loadingLabel: 'Adicionando',
					loading: state.type === addToCartStartType,
					disabled: false,
					onClick: handleClick
				}
			]}
		>
		</Card>
	);
}
