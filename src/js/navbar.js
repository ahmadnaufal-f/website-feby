import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import webLogo from '../res/icon.svg';

function MyNavbar() {
    const onToggleFunction = function (expanded) {
        const bg = document.getElementById('wx-background');
        if (expanded) {
            bg.classList.add('collapsed');
        } else {
            bg.classList.remove('collapsed');
        }
    }
    return (
        <Navbar collapseOnSelect expand="lg" className='navbar-custom' onToggle={onToggleFunction}>
            <Container className='container-md'>
                <Navbar.Brand href="#home" className='d-flex align-items-center'>
                    <img
                        src={webLogo}
                        width="32"
                        height="32"
                        alt="Liska Feby logo"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className='m-0'>Home</Nav.Link>
                        <Nav.Link href="#about" className='m-0'>About</Nav.Link>
                        <Nav.Link href="#portfolio" className='m-0'>Portfolio</Nav.Link>
                        <Nav.Link href="#" className='d-flex align-items-center gap-1 m-0'>Blog<span className="badge rounded-pill badge-custom px-2 mx-1">coming soon</span></Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;