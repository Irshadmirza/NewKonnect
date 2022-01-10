import styled from 'styled-components';

import { FiChevronsRight } from "react-icons/fi";
import { motion } from 'framer-motion';

import Bg from '../../images/sg.svg';

export const InfoSec = styled.div`
    color: #fff;
    padding: 260px 10px 0px 0px;
    background-image: url(${Bg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-top: -200px;
    max-width: 100%;
`;

export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: row;
`;

export const InfoRow = styled.div`
    display: flex;
    margin: 0 -15px -15px -15px;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: ${({ imgStart }) => (imgStart ? 'row-reverse' : 'row')};
`;

export const InfoColumn = styled.div`
    margin-bottom: 15px;
    margin-top: 85px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 768px) {
        max-width: 100%;
        flex-basis: 100%;
        display: flex;
        justify-content: center;
    }
`;

export const KingWrap = styled.div`
    display: flex;
    flex-direction: row;
    width: 310px;
    height: 30px;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 560px) {
        width: 290px;
        height: 30px;
    }
`;

export const RigthIcon = styled(FiChevronsRight)`
    font-size: 20px;
    color: red;
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const KingBtn = styled.button`
  border-radius: 10px;
  background: #6e6fa4;
  white-space: nowrap;
  color: white;
  font-size: 14px;
  outline: none;
  border: none;
  width: 100px;
  height: 30px;
  cursor: pointer;
  margin-bottom: 16px;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: black;
  }
`;


export const ViewMore = styled.button`
  border-radius: 10px;
  background: transparent;
  color: white;
  font-size: 14px;
  outline: none;
  border: none;
  width: 150px;
  height: 30px;
  cursor: pointer;
  margin-bottom: 16px;
  margin-left: 15px;
  align-items: center;
  justify-content: center;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background-color: #6e6fa4;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  align-items: left aligned;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;

export const TopLine = styled.p`
  color: #48dbfb;
  font-size: 24px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;

  @media screen and (max-width: 768px) {
      font-size: 10px;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 800px;
`;

export const Heading1 = styled.h1`
  margin-bottom: 24px;
  margin-top: 20px;
  font-size: 35px;
  line-height: 1.1;
  font-weight: 600;
  color: #341f97;

  @media screen and (max-width: 768px) {
      font-size: 28px;
  }
`;



export const Subtitle1 = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #3d3d3d;
`;







export const Container = styled.div`
    color: #fff;
    padding: 160px 10px 0px 0px;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-top: -100px;
`;

export const TopHeadContainer = styled.div`
    max-width: 1247px;
    min-width: 200px;
    margin-right: auto;
    margin-left: 200px;
    padding-top: 6vh;
    padding-bottom: 6vh;
    
    
`;

export const Line = styled.div`
    width: 150px;
    height: 3px;
    border-radius: 50px;
    background-color: #341f97;
`;

export const TopHeading = styled.h1`
    margin-top: 10px;
    color: #341f97;
    font-size: 26px;
    line-height: 42px;
    font-weight: 500;

    @media screen and ( max-width: 479px) {
        font-size: 25px;
    }
`;

export const MainHeading = styled.h1`
    margin-top: 10px;
    margin-bottom: 10px;
    color: black;
    font-size: 26px;
    line-height: 42px;
    font-weight: 500;
    color: #341f97;

    @media screen and ( max-width: 479px) {
        font-size: 25px;
    }
`;

export const SideHeading = styled.h1`
    color: #341f97;
    font-size: 14px;
    font-weight: 500;
    line-height: 42px;
    font-weight: 500;

    @media screen and ( max-width: 479px) {
        font-size: 25px;
    }
`;

export const SubHeadContainer = styled.div`
  width: 800px;
`;

export const SubHeading = styled.p`
    margin-bottom: 25px;
    color: black;
    font-size: 13px;
    line-height: 24px;
    font-weight: 400;

    @media screen and ( max-width: 476px) {
        font-size: 14px;
        margin-right: 20px;
        margin-bottom: 25px;
        margin-left: 20px;
    }
`;

export const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;


export const Grid = styled.div`
    max-width: 1247px;
    display: grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    padding: 5px 20px 5px 20px;
    grid-column-gap: 74px;
    grid-row-gap: 16px;
    place-items: center;

    @media screen and (max-width: 991px) {
        display: flex;
        padding-top: 30px;
        padding-bottom: 30px;
        flex-direction: column-reverse;
        grid-template-columns: 1fr;
        box-direction: reverse;
    }
`;

export const Block1 = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    padding: 20px;

    @media screen and (max-width: 991px) {
        align-itmes: center;
    }
`;

export const ParagraphContainer = styled.div`
    max-width: 350px;
    margin-top: 20px;
    padding-left: 10px;

    @media screen and (max-width: 479px) {
        margin-left: 6px;
    }
`;


export const Paragraph = styled.p`
    margin-bottom: 45px;
    color: black;
    font-size: 14px;
    line-height: 27.84px;
    font-weight: 400;

    @media screen and (max-width: 479px) {
        font-size: 14px;
        line-height: 24px;
    }
`;

export const Block2 = styled.div`
    max-height: 480px;
    max-width: 480px;
    align-items: center;
    justify-content: center;
    margin-top: 20px;

    @media screen and ( max-width: 991px) {
        align-self: auto;
        align-items: center;
        justify-content: center;
    }
`;

export const Block2Image = styled.img`
    height: 200px;
    width: 200px; 

    @media screen and ( max-width: 479px ) {
        width: 200px;
        height: 200px;
    }
`;

export const ParaHeading = styled.h1`
    font-size: 32px;
    color: #341f97;
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const ImgTitle = styled.h1`
    font-size: 16px;
    margin-top: 10px;

    @media screen and ( max-width: 550px) {
        font-size: 12px;
        margin-bottom: 12px;
    }
`;

export const Images = styled.img`
    height: 250px;
    width: 250px;
    margin-left: 50px;

    @media screen and ( max-width: 550px ) {
        width: 130px;
        height: 130px;
    }
`;

export const Cont = styled.div`
    align-items: center;
    justify-content: center;
    display: flex;
    margin-top: 50px;
`;



export const IconWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 50px;
`;

export const Icon = styled.img`
    width: 80px;
    height: 80px;

    @media (max-width: 650px) {
        width: 50px;
        height: 50px;
    }

    @media (max-width: 450px) {
        width: 40px;
        height: 40px;
    }

`;

export const Text = styled.h1`
    font-size: 16px;
    margin-left: 20px;


    @media (max-width: 650px) {
        font-size: 13px;
        margin-left: 13px;
    }


    @media (max-width: 380px) {
        font-size: 12px;
    }
`;


export const MissionContainer = styled.div`
    display: grid;
    grid-gap: 2rem;
    margin-bottom: 5rem;
    align-items: stretch;
    grid-template-columns: 1fr 1fr;
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
    grid-template-columns: 1fr 1fr;

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
    margin-top: 100px;
    min-width: 10vw;
    width: 300px;
    height: 400px;
    border-radius: 20px;
    margin-right: 25px;

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

export const Img1 = styled.img`
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