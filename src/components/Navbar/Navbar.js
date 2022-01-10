import React, { useState } from 'react'
import { Nav, NavContainer, NavLogo, NavLogoImage, BurgerIcon, NavMenu, NavItem, 
    NavLinks, NavButtonLink, NavButton, NavLinkss } from './NavbarElements';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';

    
const Navbar = ({ toggle, navbarColor }) => {

    const [ navbar, setNavbar ] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 75) {
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    };

    const toggleHome = () => {
        scroll.scrollTop()
    }
    
    window.addEventListener('scroll', changeBackground);
    
    return (
        <>
            <Nav navbarColor={navbar}>
                <NavContainer>
                    <NavLogo to='/' onClick={toggleHome}>
                        <NavLogoImage />
                    </NavLogo>
                    <BurgerIcon onClick={toggle}>
                        <FaBars />
                    </BurgerIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='aboutus'
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={-80}
                            >About Us</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'
                                smooth={true} duration={500} spy={true}
                                exact='true' offset={-80}
                            >Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='/ourdoctors'>Our Doctors</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinkss href='https://www.konnectdiagnostics.com/' blank='true'>Diagnostic</NavLinkss>
                        </NavItem>
                    </NavMenu>
                    <NavButton>
                        <NavButtonLink to='requestdemo'>
                            Contact Us
                        </NavButtonLink>
                    </NavButton>
            </NavContainer>
            </Nav> 
        </>
    )
}

export default Navbar
