import styled from 'styled-components';
import { motion } from 'framer-motion';



export const Section = styled.section`
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-bottom: 150px;

    @media screen and (max-width: 991px) {
        padding-right: 60px;
        padding-left: 60px;
    }

    @media screen and (max-width: 767px) {
        padding-right: 50px;
        padding-left: 50px;
    }

    @media screen and (max-width: 479px) {
        padding-right: 20px;
        padding-left: 20px;
    }
`;

export const TopContainer = styled.div`
    max-width: 1247px;
    min-width: 200px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 6vh;
    padding-bottom: 6vh;
    border-radius: 9px;
`;

export const TopHeading = styled.h1`
    margin-top: 10px;
    margin-right: 20px;
    margin-left: 20px;
    color: #341f97;
    font-size: 28px;
    line-height: 42px;
    font-weight: 500;
    text-align: center;

    @media screen and (max-width: 479px) {
        font-size: 25px;
    }
`;

export const Paragraph = styled.p`
    margin-right: 20px;
    margin-bottom: 25px;
    margin-left: 20px;
    color: black;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    text-align: center;

    @media screen and (max-width: 479px) {
        font-size: 14px;
        margin-right: 20px;
        margin-bottom: 25px;
        margin-left: 20px;
    }
`;

export const GridLayout = styled.div`
    max-width: 1247px;
    margin-right: auto;
    margin-left: auto;
    align-items: stretch;
    grid-column-gap: 14px;
    grid-row-gap: 70px;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    @media screen and (max-width: 1160px) {
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 22px;
        grid-column-gap: 12px;
    }

    @media screen and (max-width: 991px) {
        grid-template-columns: 1fr 1fr;
        grid-row-gap: 42px;
    }

    @media screen and (max-width: 767px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 620px) {
        grid-template-columns: 1fr;
    }
`;

export const Card = styled(motion.div)`
    padding-right: 20px;
    padding-left: 20px;
    min-width: 10vw;
    border-radius: 20px;

    @media screen and (max-width: 767px) {
        max-width: 600px;
    }
`;

export const Atag = styled.a`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    transition: all 250ms ease;
    text-decoration: none;
    
`;

export const IconContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 20px 10px 20px;
    background-color: white;
    /* border-bottom: 4px solid #f4ae6e; */
    border-radius: 8px;
    box-shadow: 11px 0 28px 0px rgb(0 0 0 / 15%);
    /* background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */

`;

export const IconBlock =  styled.div`
    width: 120px;
    height: 120px;
    margin-right: auto;
    margin-left: auto;
`;

export const Img = styled.img`
    vertical-align: middle;
    display: inline-block;
    width: 100%;
    height: 100%;
    border: 0px;
    background-size: cover;
`;

export const Heading = styled.h1`
    font-family: Ubuntu, Helvetica, sans-serif;
    color: #341f97;
    font-size: 20px;
    font-weight: 500;
    margin-top: 20px;
    line-height: 21px;
    font-weight: 500;
    text-align: center;
`;

export const Subtitle = styled.p`
    margin-top: 10px;
    padding-right: 12px;
    padding-left: 12px;
    color: #3d3d3d;
    font-size: 16px;
    line-height: 27.84px;
    font-weight: 400;
    text-align: center;
`;

