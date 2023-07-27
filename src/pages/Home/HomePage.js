import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import products from "../../Data"
import { ProductCard } from '../../containers/ProductCard/ProductCard';
import { ModalAddedToCart } from '../../containers/ModalAddedToCart/ModalAddedToCart';
import { useAppContext } from '../../store/AppContext';



export const HomePage = () => {
    const { state, dispatch } = useAppContext();
    return (
        <Container>
            <ModalAddedToCart open={state.mode === true} />
            <h1 className="title-products">Produtos</h1>
            <Container fluid >
                <Row className="g-4" xm={12} md={3}>
                    {products.map((product) => (
                        <Col key={product.id}>
                            <ProductCard product={product}/>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Container>
    );
}