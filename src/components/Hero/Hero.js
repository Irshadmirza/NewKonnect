import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, MainButton, PlanButton } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  KingWrap,
  TopLine,
} from './HeroElements';

import { TopHeadContainer, TopHeading, Line, MainHeading, SideHeading, SubHeading, Heading1, Subtitle1,
  SubHeadContainer, Card, Atag, GridLayout, IconContainer, IconBlock, Row} from './HeroElements';

import Mission from '../../images/mission.svg';
import Vision from '../../images/vision.svg';


function Hero({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart,
  start,
  imgObj,
  topLine
}) {

  const [ hover, setHover ] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }


  return (
  <>
      <InfoSec lightBg={lightBg} imgObj={imgObj}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading1 lightText={lightText}>{headline}</Heading1>
                <Subtitle1 lightTextDesc={lightTextDesc}>{description}</Subtitle1>
                <KingWrap>
                    <MainButton whileHover={{ scale: 1.1 }} href='' target='_blank'>
                        Contact Us
                    </MainButton>
                </KingWrap>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      

            <Row>
            <TopHeadContainer id='aboutus'>
                <Line/>
                <TopHeading>About Us</TopHeading> 
                <MainHeading>
                        KONNECT DIAGNISTICS - FETAL MEDICINE UNIT
                </MainHeading>
                <SideHeading>Introduction</SideHeading>
                <SubHeadContainer>
                <SubHeading>
                    Fetal Medicine is a branch of medicine that provides mother and fetus care by assessing the fetal growth, its wellbeing,
                    diagnosis and management of fetal disordersand abnormalities which counsels parents to take care of their child in prior.
                </SubHeading>
                </SubHeadContainer>
                
                <SideHeading>About Us</SideHeading>
                <SubHeadContainer>
                <SubHeading>
                    Over a decade, many diagnostic systems are striving to go through a quality process in Fetal Health Diagnosis. Considering
                    the importance and value of fetal health and care. Konnect Diagnosis is a step ahead of all its competitors in market to provide the
                    best fetal diagnosis and guide the mother by suggesting relevant and superior treatment to forbid the future health issues of the fetus.
                </SubHeading>
                </SubHeadContainer>
                <SubHeadContainer>
                <SubHeading>
                    Konnect diagnostics is at the reach to offer a complete and detailed Fetal imaging and diagnosis with a high expertise team and well
                    equipped facility comfortable and affordable. We care and let you know how to take care.
                </SubHeading>
                </SubHeadContainer>
            </TopHeadContainer> 
            <GridLayout>
                <Card whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
                    <Atag>
                        <IconContainer>
                            <IconBlock>
                                <Img src={Vision} alt='vision'/>
                            </IconBlock>
                            <Heading>Our Vision</Heading>
                            <Subtitle>
                              Our Vision is to serve the superior quality diagnostic care with utmost commitment, dedication, and 
                                affordable. We care and let you know how to take care.
                            </Subtitle>
                        </IconContainer>
                    </Atag>
                </Card>

                    <Card whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.7 }}>
                        <Atag>
                            <IconContainer>
                                <IconBlock>
                                    <Img src={Mission} alt='mission'/>
                                </IconBlock>
                                <Heading>Our Mission</Heading>
                                <Subtitle>
                                Konnect Diagnistics is equipped with a mission of providing a wide range of diagnostics services to the wellness
                                of our patients in a cost-effective and accessible method. we strive to know you better than yourself.
                                </Subtitle>
                            </IconContainer>
                        </Atag>
                    </Card>
            </GridLayout>  
            </Row>
            </InfoSec>
        </>
  );
}

export default Hero;
