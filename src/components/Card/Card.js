import './Card.css'
import CardBS from 'react-bootstrap/Card';
import { Button } from '../Button/Button';

export const Card = ({ product, controls = [] }) => {
    return (
        <CardBS className="h-100 card-container">
            <CardBS.Img className='card-img' variant="top" src={product.image} alt={product.name}/>
            <CardBS.Body>
                <CardBS.Title>{product.name}</CardBS.Title>
                <CardBS.Subtitle>R$ {product.price}</CardBS.Subtitle>
                <CardBS.Text className='card-description'>
                    {product.description}
                </CardBS.Text>
            </CardBS.Body>
            <CardBS.Footer>
                {controls.map((control, controlIndex) => (
                    <Button
                    key={controlIndex} 
                    {...control}
                    />
                    ))}
            </CardBS.Footer>
        </CardBS>
    );
}