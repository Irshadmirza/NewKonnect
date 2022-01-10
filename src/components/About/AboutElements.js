import styled from 'styled-components';


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
    margin-left: auto;
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
    color: black;
    font-size: 36px;
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

    @media screen and ( max-width: 479px) {
        font-size: 25px;
    }
`;

export const SideHeading = styled.h1`
    color: black;
    font-size: 22px;
    font-weight: 500;
    line-height: 42px;
    font-weight: 500;

    @media screen and ( max-width: 479px) {
        font-size: 25px;
    }
`;

export const SubHeading = styled.p`
    margin-bottom: 25px;
    color: black;
    font-size: 18px;
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
    font-size: 16px;
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