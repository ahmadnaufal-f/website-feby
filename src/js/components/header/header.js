import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import webLogo from '../../../res/icon.svg';
import Headroom from 'react-headroom';
import './hamburger.css';
import './header.css';

function Header() {
    const onToggleFunction = function (expanded) {
        const bg = document.getElementById('wx-background');
        const burger = document.getElementById('hamburger');
        if (expanded) {
            bg.classList.add('collapsed');
            burger.classList.add('is-active');
        } else {
            bg.classList.remove('collapsed');
            burger.classList.remove('is-active');
        }
    }

    const onPinFunc = () => {
        document.getElementById('nav-container').classList.add('bg-add');
        if (window.innerWidth < 992) {
            document.getElementById('nav-collapse').classList.remove('bg-add');
        }
    }

    const onUnfixFunc = () => {
        document.getElementById('nav-container').classList.remove('bg-add');
        if (window.innerWidth < 992) {
            document.getElementById('nav-collapse').classList.add('bg-add');
        }
    }

    return (
        <Headroom onPin={onPinFunc} onUnfix={onUnfixFunc}>
            <Navbar collapseOnSelect expand="lg" className='navbar-custom' onToggle={onToggleFunction}>
                <Container className='container-md' id="nav-container">
                    <Navbar.Brand id="navbar-brand" href="#home" className='d-flex align-items-center'>
                        <img
                            src={webLogo}
                            width="32"
                            height="32"
                            alt="Liska Feby logo"
                        />
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" as="div">
                        <button id='hamburger' className="hamburger hamburger--slider" type="button">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </Navbar.Toggle>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav id="nav-collapse" className="me-auto bg-add">
                            <Nav.Link href="#home" className='m-0'>Home</Nav.Link>
                            <Nav.Link href="#about" className='m-0'>About</Nav.Link>
                            <Nav.Link href="#portfolio" className='m-0'>Portfolio</Nav.Link>
                            <Nav.Link href="#" className='d-flex align-items-center gap-1 m-0'>Blog<span className="badge rounded-pill badge-custom px-2 mx-1">coming soon</span></Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Headroom>
    );
}

export default Header;