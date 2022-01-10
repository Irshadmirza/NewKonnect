import styled from 'styled-components';
import { Link  } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { Link as LinkScroll } from 'react-scroll';

export const SideBarContainer = styled.aside`
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 10000;
    background: #010e46;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in-out;
    opacity: ${({ isOpen }) => ( isOpen ? '100%' : '0' )};
    top: ${({ isOpen }) => ( isOpen ? '0' : '-100%' )};
`;

export const CloseIcon = styled(FaTimes)`
    color: black
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;


export const SideBarWrapper = styled.div`
    color: white;
    margin-bottom: 20px;
    margin-top: 50px;
`;

export const SideBarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px);
    }
`;  

export const SideBarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    flex-direction: row;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: white;
    cursor: pointer;
    height: 100%;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`

export const SideButtonWrap = styled.div`
    display: flex;
    justify-content:center;
    margin-top: -80px;
`

export const SideBarRoute = styled(Link)`
    border-radius: 50px;
    background: #ffa801;
    white-space: nowrap;
    padding: 16px 64px;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    border: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: white;
        color: #010606;
    }
`;
