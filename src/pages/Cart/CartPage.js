import { Container, Table } from "react-bootstrap";
import Image from 'react-bootstrap/Image';
import { Button } from "../../components/Button/Button";
import { Title } from "../../components/Title/Title";
import { useAppContext } from "../../store/AppContext";
import { useEffect, useState } from "react";
import { fetchCartProcessAction } from "../../store/actions";

export const CartPage = () => {
	const { state, dispatch } = useAppContext();
	const [quantity, setQuantity] = useState(1);
	const [total, setTotal] = useState(0);
	const [subtotal, setSubTotal] = useState(0);

	useEffect(() => {
		fetchCartProcessAction(dispatch);
	}, [state.type])

	const handleIncrement = (prodId, prodPrice) => {
		setQuantity((prevQuantity) => prevQuantity + 1);
		const price = prodPrice;
		updateTotal(price);
	}

	const handleDecrement = (prodId, prodPrice) => {
		quantity != 0 ? setQuantity((prevQuantity) => prevQuantity - 1) : setQuantity(0);
		const price = prodPrice;
		updateTotal(price);
	}

	const updateTotal = (prodPrice) => {
		setTotal(() => (prodPrice * quantity).toFixed(2));
	}

	const updateSubTotal = () => {
		setSubTotal(() => subtotal);
	}

	useEffect(() => {
		updateSubTotal();
	}, [quantity]);

	return (
		<Container>
			<Title title='Carrinho' />
			{state.cart.length === 0 ? (
				<div className="text-center">Não existem produtos no carrinho.</div>
			) : (<span className="fw-bold">Produto(s) no carrinho: {state.cart.length}</span>)}
			<Table hover responsive="md" className="align-middle">
				<thead>
					<tr>
						<th>Produto</th>
						<th>Preço</th>
						<th>Quantidade</th>
						<th>Total</th>
					</tr>
				</thead>
				<tbody>
					{state.cart.map((prod, prodIndex) => (
						<tr key={prodIndex} id={prod.id} >
							<td>
								<Image className="prod_img ms-1" src={prod.image} rounded style={{ height: '8rem', objectFit: 'cover', width: '8rem' }} />
								<span className="ms-1 ps-4">{prod.name}</span>
							</td>
							<td className="product_price fw-bold">
								R$ <span>{prod.price}</span>
							</td>
							<td>
								<span className='minus'>
									<Button variant={'dark'} label={'-'} onClick={() => handleDecrement(prod.id, prod.price)} />
								</span>
								<span className="qtd_value ms-3 me-3">{quantity}</span>
								<span className='plus'>
									<Button variant={'dark'} label={'+'} onClick={() => handleIncrement(prod.id, prod.price)} />
								</span>

							</td>
							<td className="total_value fw-bold">
								R$ <span>{total}</span>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot >
					<tr>
						<th colSpan={2}>Subtotal</th>
						<th>R$</th>
						<th id="subTotalCompra">{subtotal}</th>
					</tr>

				</tfoot>
			</Table>
		</Container>
	);
}