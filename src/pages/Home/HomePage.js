import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProductCard } from '../../containers/ProductCard/ProductCard';
import { ModalAddedToCart } from '../../containers/ModalAddedToCart/ModalAddedToCart';
import { Title } from '../../components/Title/Title';
import { useAppContext } from '../../store/AppContext';
import { useEffect } from 'react';
import { fetchProductsDataAction } from '../../store/actions';


export const HomePage = () => {
    const { state, dispatch } = useAppContext();

    useEffect(() => {
        fetchProductsDataAction(dispatch);
    }, [])

    return (
        <Container className='homePage-container'>
            <ModalAddedToCart open={state.mode === true} />
            <Title title='Produtos' />
            <Container fluid className='products-container'>
                <Row className="g-4" xm={12} md={3}>
                    {state.products.map(product => (
                        <Col key={product.id}>
                            <ProductCard product={product}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}