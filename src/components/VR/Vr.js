import React from 'react';
import { Container, Grid, Block1, ParagraphContainer, Paragraph, ColumnContainer, 
    Block2, Block2Image, ParaHeading, TopHeadContainer, TopHeading, SubHeading } from './VrElements';

import VrView from '../../images/vr.svg';
import Family from '../../images/family.svg';
import Lounge from '../../images/lounge_1.svg';
import ThreeD from '../../images/3d.svg';

const Vr = () => {
    return (
        <Container id='services'>
            <ColumnContainer>
                <TopHeadContainer>
                    <TopHeading>New Features Coming Soon</TopHeading>
                    <SubHeading>
                    Konnect diagnostics is at the reach to offer a complete and detailed Fetal imaging and diagnosis with a 
                    high expertise team and well equipped facility comfortable and affordable. We care and let you 
                    know how to take care.
                    </SubHeading>
                </TopHeadContainer>

                <Grid>
                    <Block1>
                        <ParaHeading>Virtual fetal museum/ VR tour</ParaHeading>
                        <ParagraphContainer>
                            <Paragraph>
                            What is a Virtual Baby Shower? Virtual or online baby showers are generally 
                            the same concept as traditional baby showers and can happen before baby arrives or after, like a sip and see party
                            </Paragraph>
                        </ParagraphContainer>
                    </Block1>
                    <Block2>
                        <Block2Image src={VrView} alt='Blue'/>
                    </Block2>
                </Grid>
                <Grid>
                    <Block2>
                        <Block2Image src={Family} alt='King'/>
                    </Block2>
                    <Block1>
                        <ParaHeading>Family Photo Booth</ParaHeading>
                        <ParagraphContainer>
                            <Paragraph>
                                Take entertaining and shareable party photos of your friends and family while 
                                making memories with these stylish photo booth props! PARTY DECORATION IDEAS
                            </Paragraph>
                        </ParagraphContainer>
                    </Block1>
                </Grid>
                <Grid>
                    <Block1>
                        <ParaHeading>Premium lounge</ParaHeading>
                        <ParagraphContainer>
                            <Paragraph>
                            Plaza Premium Lounge ... The world's largest independent lounge network, offers travellers a 
                            haven away from the hustle and bustle of the airport, a home away
                            </Paragraph>
                        </ParagraphContainer>
                    </Block1>
                    <Block2>
                        <Block2Image src={Lounge} alt='Fighter'/>
                    </Block2>
                </Grid>
                <Grid>
                    <Block2>
                        <Block2Image src={ThreeD} alt='FlagKing'/>
                    </Block2>
                    <Block1>
                        <ParaHeading>3D Fetal Face printing</ParaHeading>
                        <ParagraphContainer>
                            <Paragraph>
                            3D printing has also become a life-changing tool for visually impaired people. Tactile maps, works of art and 3D printed fetal faces ...
                            </Paragraph>
                        </ParagraphContainer>
                    </Block1>
                </Grid>
            </ColumnContainer>
        </Container>
    )
}

export default Vr;
