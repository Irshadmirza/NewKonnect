import React from 'react';
import styled from 'styled-components';
import { InnerLayout } from '../globalStyles';
import questions from '../questions';
import Question from './Question';

import Lady from '../images/doc.png';

function FAQSection() {
    return (
        <Container>
        <FaqStyled>
                <TopLine />
                <h3>Frequently <span>asked questions</span></h3>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Assumenda maxime ipsa nam expedita dolorem distinctio illo 
                    ad doloribus atque fuga, Nihil laboriosam beatae fugit.
                </p>
                

                <div className="questions-con">
                    {
                        questions.map((q)=>{
                            return <Question key={q.id} {...q} />
                        })
                    }
                </div>  
        </FaqStyled>
            <ImgWrapper>
                    <Img src={Lady} alt=""/>
            </ImgWrapper>

        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  align-items: left aligned;
  justify-content: 'flex-end';
`;

const TopLine = styled.p`
  color: #48dbfb;
  font-size: 24px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;

  @media screen and (max-width: 768px) {
      font-size: 10px;
  }
`;

const Img = styled.img`
  padding: 10px;
  border: 0;
  width: 100%;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
`;

const FaqStyled = styled.section`
    width: 50%;
    align-items: center;
    justify-content: center;
    margin-left: 80px;
    .c-para{
        width: 60%;
        margin: 0 auto;
    }
    .questions-con{
        padding-top: 4rem;
    }
    .lines{
        position: absolute;
        left: 0;
        top: 300%;
        width: 100%;
        z-index: -1;
        img{
            width: 100%;
        }
    }

`;



export default FAQSection;
