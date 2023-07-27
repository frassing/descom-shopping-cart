import ListGroupBS from 'react-bootstrap/ListGroup';
import Image from 'react-bootstrap/Image';
import { Button } from '../Button/Button';


export const ListGroup = ({ items = [], controls = [] }) => {

	return (
		<ListGroupBS>
			{items.map(item => (
				<ListGroupBS.Item as="li" className='d-flex flex-direction-column justify-content-between align-items-start text-center'>
					<div>
						<Image src={item.image} rounded style={{ height: '150px' }} />
					</div>

					<div className="fw-bold ms-3 me-auto">{item.title}</div>

					<div className='me-auto'>
						<p className="fw-bold">Quantidade</p>
						<p>{item.qtd}</p>

						{controls.map((control, controlIndex) => (
							<span className='ms-2'>
								<Button
									key={controlIndex}
									{...control}
								/>
							</span>
						))}
					</div>

					<div className='me-auto ms-2'>
						<p className="fw-bold">Total</p>
						<p>{item.valor}</p>
					</div>
				</ListGroupBS.Item>
			))}

		</ListGroupBS>
	);
}