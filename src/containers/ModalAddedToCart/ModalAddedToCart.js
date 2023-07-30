import './ModalAddedToCart.css';
import { Modal } from "../../components/Modal/Modal";
import { useAppContext } from "../../store/AppContext";
import { closeModalAction } from "../../store/actions"

export const ModalAddedToCart = ({ open }) => {
	const { state, dispatch } = useAppContext();
	const handleClose = () => {
		dispatch(closeModalAction())
	}

	return (
		<Modal
			title={'Adicionado ao carrinho'}
			open={state.mode === true}
			onHide={handleClose}
			controls={[
				{
					label: 'Continuar comprando',
					variant: 'primary',
					onClick: handleClose
				},
				// {
				// 	label: 'Finalizar compra',
				// 	variant: 'dark',
				// 	onClick: () => {
				// 		console.log('Clicou em finalizar.');
				// 	}
				// }
			]}
		>
			<div className="prod_details">
					<img src={state.activeProduct.image} alt={state.activeProduct.name} className='prod_detail_img'/>

					<p className="text-center fw-bold mt-3 mb-1">{state.activeProduct.name}</p>
				</div>	
		</Modal>
	);
}