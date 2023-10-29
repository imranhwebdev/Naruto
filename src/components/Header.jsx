import { React } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import logo from '../assets/img/naruto-site-logo.svg';

export default function Header(){
    return(
        <header className="heading">
            <Container>
                <Row>
                    <Col className='text-center'>
                        <a href="/" className='site__logo'>
                            <img src={logo} alt="" /> 
                        </a>  
                    </Col>
                </Row>
            </Container>
        </header>
    );

}