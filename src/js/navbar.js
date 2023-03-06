import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import webLogo from '../res/icon.svg';
import React, { useState, useEffect } from 'react';
import '../style/hamburger.css';

function MyNavbar() {
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

    const [sticky, setSticky] = useState(window.innerWidth < 992 ? 'top' : 0);

    const setViewportWidth = width => {
        const sticky = width < 992 ? 'top' : 0;
        setSticky(sticky);
    }

    useEffect(() => {
        const handleResize = () => setViewportWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = event => {
            if (window.scrollY > 0) {
                document.getElementById('nav-collapse').classList.add('bg-add');
                document.getElementById('navbar-brand').classList.add('hide');
            } else {
                document.getElementById('nav-collapse').classList.remove('bg-add');
                document.getElementById('navbar-brand').classList.remove('hide');
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Navbar collapseOnSelect expand="lg" className='navbar-custom' onToggle={onToggleFunction} sticky={sticky}>
            <Container className='container-md' id="nav-container">
                <Navbar.Brand id="navbar-brand" href="#home" className='d-flex align-items-center'>
                    <img
                        src={webLogo}
                        width="32"
                        height="32"
                        alt="Liska Feby logo"
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                    <button id='hamburger' class="hamburger hamburger--slider" type="button">
                        <span class="hamburger-box">
                            <span class="hamburger-inner"></span>
                        </span>
                    </button>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav id="nav-collapse" className="me-auto">
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