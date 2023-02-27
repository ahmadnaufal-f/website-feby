import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import webLogo from '../res/icon.svg';

function MyNavbar() {
    return (
        <Navbar className='navbar-custom'>
            <Container className='container-md'>
                <Navbar.Brand href="#home" className='d-flex align-items-center'>
                    <img
                        src={webLogo}
                        width="32"
                        height="32"
                        alt="Liska Feby logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className='m-0'>Home</Nav.Link>
                        <Nav.Link href="#about" className='m-0'>About</Nav.Link>
                        <Nav.Link href="#portfolio" className='m-0'>Portfolio</Nav.Link>
                        <Nav.Link href="#" className='d-flex align-items-center gap-1 m-0'>Blog<span className="badge rounded-pill badge-custom px-2 mx-1">coming soon</span></Nav.Link>
                        <Nav.Link href="#contact" className='ms-auto'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;