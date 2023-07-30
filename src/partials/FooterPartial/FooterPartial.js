import './FooterPartial.css';
import { Col, Container, Row } from "react-bootstrap";


export const FooterPartial = () => {
	return (

		<div className='footer mt-5 text-center'>
			<Row className='align-items-start'>
				<Col>
				<p className='footer-title fw-bold mb-1'>Sobre</p>
				<p className='about-text'>
					Projeto desenvolvido no curso de Desenvolvimento Web e FrontEnd da parceria Descomplica e Instituto Nu.
				</p>
				</Col>
				<Col>
				<p className='footer-title fw-bold mb-1'>Encontre-me</p> 
					<ul className='footer-list about-me'>
						<li>
							<a className='cta-me' href='https://github.com/frassing' target='_blank'>GitHub</a>
						</li>
						<li>
							<a className='cta-me' href='https://www.linkedin.com/in/raquel-fragoso/' target='_blank'>LinkedIn</a>
						</li>
					</ul>
				
				</Col>
				<Col>
					<p className='footer-title fw-bold mb-1'>Créditos</p>
					<ul className='footer-list'>
						<li>
							Foto de <a href='https://unsplash.com/pt-br/@iyamiphotography' target='_blank'>Valeriia Miller</a> na <a href='https://unsplash.com/pt-br/fotografias/_42NKYROG7g' target='_blank'>Unsplash</a>
						</li>
						<li>
							Foto de <a href='https://unsplash.com/pt-br/@mathildelangevin' target='_blank'>Mathilde Langevin</a> na <a href='https://unsplash.com/pt-br/fotografias/p3O5f4u95Lo' target='_blank'>Unsplash</a>

						</li>
						<li>
							Foto de <a href="https://unsplash.com/pt-br/@reubenmansell" target='_blank'>Reuben Mansell</a> na Unsplash <a href="https://unsplash.com/pt-br/fotografias/ZiiMjTnwohE" target='_blank'>1</a> e <a href="https://unsplash.com/pt-br/fotografias/DOlMouWbV-I" target='_blank'>2</a>
						</li>
						<li>
							Foto de <a href="https://unsplash.com/pt-br/@goodskinclub" target='_blank'>Good Skin Club</a> na <a href="https://unsplash.com/pt-br/fotografias/kB0w9XDqGS0" target='_blank'>Unsplash</a>
						</li>
						<li>
							Foto de <a href="https://unsplash.com/pt-br/@sahersuthriwala" target='_blank'>Saher Suthriwala</a> na <a href="https://unsplash.com/pt-br/fotografias/5ar4S0ZhmDk" target='_blank'>Unsplash</a>
						</li>
					</ul>
				</Col>
			</Row>
		</div>
	)
}