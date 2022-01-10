import styled, { createGlobalStyle } from 'styled-components';
import { motion } from 'framer-motion';

const GlobalStyle = createGlobalStyle`
  * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Poppins', sans-serif;
 } 
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export const MainButton = styled(motion.a)`
    padding: 15px 28px;
    border-radius: 50px;
    background-color: #341f97;
    color: white;
    font-size: 16px;  
    border: none;
    text-decoration: none;

    @media screen and (max-width: 767px) {
      padding: 15px 15px;
      border-radius: 10px;
    }

    @media screen and (max-width: 991px) {
      padding: 14px 18px;
      border-radius: 10px;
    }

    @media screen and (max-width: 421px) {
      padding: 12px 14px;
      border-radius: 10px;
      line-height: 1;
    }
`;


export const ButtonContainer = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
`;


export const BrowserAllBttn = styled.a`
    width: 50%;
    padding-left: 1.4rem;
    padding-right: 1.4rem;
    height: 3rem;
    font-size: 1rem;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: space-around;
    background: transparent;
    color: white;
    border: 2px solid white;
    border-radius: 14px;
    cursor: pointer;
    transition: all .2s cubic-bezier(.06,.67,.37,.99);
    font-weight: 500;
    line-height: 1;
    text-decoration: none;
    margin-top: 30px;
    align-self: center;

    @media screen and (max-width: 760px) {
        padding-left: 2rem;
        padding-right: 2rem;
        height: 3rem;
        font-size: 0.9rem;
    }

    @media screen and (max-width: 460px) {
        padding-left: 5rem;
        padding-right: 5rem;
        height: 3rem;
        font-size: 0.9rem;
        line-height: 1;
        text-align: center;
    }
`;

export const OuterLayout = styled.section`
    padding: 5rem 18rem;
    @media screen and (max-width: 1347px){
        padding: 5rem 14rem;
    }
    @media screen and (max-width: 1186px){
        padding: 5rem 8rem;
    }
    @media screen and (max-width: 990px){
        padding: 5rem 4rem;
    }
`;
export const InnerLayout = styled.section`
   padding: 260px;
   align-items: center;
   justify-content: center;
`;


export default GlobalStyle;
