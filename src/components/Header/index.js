import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import './Header.scss'

function Header() {
    return (  
        <header className='header'>
            <Container>
                <Row className='justify-content-between'>
                    <Col xs='auto'>
                        <a 
                            className='header__link header__title'
                            href="https://www.youtube.com/"
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                        WebSite
                        </a>
                    </Col>

                    <Col xs='auto'>
                                <NavLink
                                    to="/"
                                    className={({isActive}) => isActive ? "header__link--active" : "header__link"}
                                >
                                Redux Project
                                </NavLink>
                    </Col>
                </Row>

            </Container>
        </header>
    );
}

export default Header;