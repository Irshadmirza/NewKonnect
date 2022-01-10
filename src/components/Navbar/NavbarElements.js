import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';

import Logo from '../../images/logo.svg';

export const Nav = styled.nav`
    background: ${({ navbarColor }) => (navbarColor ? 'white' : 'transparent')};
    height: 80px;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 12000;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 90px; 
    width: 100%;
    padding: 0 24px;
    max-width: 1300px;
    maring-top: 100px;
`

export const NavLogo = styled(Link)`
    color: black;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
    background-color: transparent;
`

export const NavLogoImage = styled.div`
    background-image: url(${Logo});
    background-repeat: no-repeat;
    width: 250px;
    height: 250px;
    overflow: 'hidden';
    padding: 7px;
    background-color: transparent;
    margin-top: 220px;

    @media screen and (min-width: 768px) {
        margin-left: 6px;
    }
`

export const BurgerIcon = styled.div`
    display: none;

    @media screen and (max-width: 986px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: black;
        z-index: 1999;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-left: 260px;

    @media screen and (max-width: 1050px) {
        display: flex;
  
        align-items: center;
    }

    @media screen and (max-width: 986px) {
        display: none;
    }

`

export const NavItem = styled.li`
    height: 50%;
    border-bottom: 2px solid transparent;

    &:hover {
        border-bottom: 2.5px solid #48dbfb;
    }

    @media screen and (max-width: 1050px) {
        width: 100%;
        height: 100%;

        &:hover {
            border-bottom: 2px solid #fa8231
        }
    }

    @media screen and (max-width: 960px) {
        width: 100%;

        &:hover {
            border: none;
        }
    }
`

export const NavLinks = styled(LinkScroll)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    cursor: pointer;

    @media screen and (max-width: 1050px) {
        width: 100%;
        display: flex;
        height: 100%;
        font-size: 14px;

        &:hover {
            color: #ffa801;
            transition: all 0.3 ease;
        }
    }


    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #4b59f7;
            transition: all 0.3 ease;
        }
    }
`

export const NavLinkss = styled.a`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    font-weight: 500;
    cursor: pointer;

    @media screen and (max-width: 1050px) {
        width: 100%;
        display: flex;
        height: 100%;
        font-size: 14px;

        &:hover {
            color: #ffa801;
            transition: all 0.3 ease;
        }
    }


    @media screen and (max-width: 960px) {
        text-align: center;
        padding: 2rem;
        width: 100%;
        display: table;

        &:hover {
            color: #4b59f7;
            transition: all 0.3 ease;
        }
    }
`

export const NavButton = styled.nav`
    display: flex;
    align-items: center;
    margin-top: 10px;

    @media screen and (max-width: 986px) {
        display: none;
    }
`

export const NavButtonLink = styled(Link)`
    border-radius: 50px;
    background: #48dbfb;
    white-space: nowrap;
    padding: 10px 22px;
    color: white;
    font-size: 16px;
    font-family: 'Poppins', sans-serif;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;


    &:hover {
        transition: all 0.2s ease-in-out;
        color: black;
        border: 2px solid;
        border-width: 2px;
        border-color: #0abde3;
        background: transparent;

    }
`;


