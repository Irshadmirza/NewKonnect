import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    background-color: #273c75;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

export const TopHeadContainer = styled.div`
    max-width: 1247px;
    min-width: 200px;
    margin-right: auto;
    margin-left: auto;
    padding-top: 6vh;
    padding-bottom: 6vh;
`;

export const TopHeading = styled.h1`
    margin-top: 10px;
    margin-right: 20px;
    margin-left: 20px;
    color: #ffa801;
    font-size: 34px;
    line-height: 42px;
    font-weight: 500;
    text-align: center;

    @media screen and ( max-width: 479px) {
        font-size: 25px;
    }
`;

export const SubHeading = styled.p`
    margin-right: 20px;
    margin-bottom: 25px;
    margin-top: 35px;
    margin-left: 20px;
    color: white;
    font-size: 18px;
    line-height: 24px;
    font-weight: 400;
    text-align: center;

    @media screen and ( max-width: 476px) {
        font-size: 14px;
        margin-right: 20px;
        margin-bottom: 25px;
        margin-left: 20px;
    }
`;

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: column;
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

export const ParaHeading = styled.h1`
    font-size: 32px;
    color: #ffc048;
`;

export const Paragraph = styled.p`
    margin-bottom: 45px;
    color: white;
    font-size: 16px;
    line-height: 27.84px;
    font-weight: 400;

    @media screen and (max-width: 479px) {
        font-size: 14px;
        line-height: 24px;
    }
`;

export const Block2 = styled.div`
    max-height: 580px;
    max-width: 580px;
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
    height: 400px;
    width: 400px;
    margin-left: 50px;

    @media screen and ( max-width: 479px ) {
        width: 200px;
        height: 200px;
    }
`;
