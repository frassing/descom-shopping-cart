import { Container } from "react-bootstrap";
import { ListGroup } from "../../components/ListGroup/ListGroup";
import { useAppContext } from "../../store/AppContext";
import { useEffect } from "react";
import { fetchCartProcessAction } from "../../store/actions";

export const CartPage = () => {
	const { state, dispatch } = useAppContext();

	useEffect(() => {
		fetchCartProcessAction(dispatch);
	}, []);
	
	return (
		<Container>
			<h1>Carrinho</h1>
			<ListGroup 
				itemsList={state.cart}
				controls={[
					{
						variant: 'dark',
						label: '+'
					},
					{
						variant: 'dark',
						label: '-'
					}
				]}
			/>
		</Container>
	);
}