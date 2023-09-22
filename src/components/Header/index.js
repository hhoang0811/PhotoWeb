import { NavLink } from 'react-router-dom';
import { Container, Col } from 'reactstrap';
import './Header.scss'

function Header() {
    return (  
        <header className='header'>
            <Container className='wrapper'>
                    <Col xs='auto'>
                        <NavLink
                            end
                            to="/photos"
                            className={({isActive}) => isActive ? "header__link--active" : "header__link"}
                        >
                            PhotoWeb
                        </NavLink>
                    </Col>
                    
                    <Col xs='auto'>
                        <div className="navLink">
                            <NavLink to="/photos/add">Add photo</NavLink>
                        </div>
                    </Col>
            </Container>
        </header>
    );
}

export default Header;