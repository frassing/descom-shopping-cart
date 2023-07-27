import { Container } from "react-bootstrap";
import { ListGroup } from "../../components/ListGroup/ListGroup";

export const CartPage = () => {

	return (
		<Container>
			<h1>Carrinho</h1>
			<ListGroup 
				items={[

				]}
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