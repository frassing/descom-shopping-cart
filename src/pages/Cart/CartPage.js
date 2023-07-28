import { Container } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { Button } from "../../components/Button/Button";
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
			<ListGroup>
				{state.cart.map((prod, prodIndex) => (
					<ListGroup.Item as="li" key={prodIndex} className='d-flex flex-direction-column justify-content-between align-items-start text-center'>
						<Image className="prod_img ms-1 me-1" src={prod.image} rounded style={{ height: '10rem', objectFit: 'cover', width: '10rem' }} />
							
						<span className="fw-bold ms-auto me-auto">{prod.name}</span>

						<div className='qtd_btn_prod ms-auto me-auto d-flex-column justify-content-center'>
							<p className="fw-bold">Quantidade</p>
							<span className="qtd_value">0</span>

							<div className="buttons pe-1">
								<span className='plus'>
									<Button variant={'dark'} label={'+'} className="btn_increment" />
								</span>
								<span className='minus ps-1'>
									<Button variant={'dark'} label={'-'} className="btn_decrement" />
								</span>
							</div>
						</div>

						<div className='valor_unt ms-auto me-auto'>
							<p className="fw-bold">Valor Unitário</p>
							<span className="product_price">{prod.price}</span>
						</div>

						<div className='subtotal_prod ms-auto me-auto'>
							<p className="fw-bold">Subtotal</p>
							<span className="subtotal_value">subtotal</span>
						</div>
					</ListGroup.Item>
				))}
			</ListGroup>

		</Container>
	);
}