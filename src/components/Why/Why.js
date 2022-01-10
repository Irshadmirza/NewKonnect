import React from 'react';


import { Section, TopContainer, TopHeading, Paragraph, GridLayout, Card, 
    Atag, IconContainer, IconBlock, Img, Heading, Subtitle } from './WhyElements';

import Report from '../../images/report.svg';
import Skill from '../../images/skilled.svg';
import Machine from '../../images/machine.svg';
import Lounge from '../../images/lounge.svg';




const Why = () => {
    return (
        <Section>
            <TopContainer>
                <TopHeading>Why Konnect?</TopHeading>
                <Paragraph>
                Konnect diagnostics is at the reach to offer a complete and detailed Fetal imaging and diagnosis 
                with a high expertise team and well equipped facility comfortable and affordable. We care and let you know how to take care.
                </Paragraph>
            </TopContainer>
            <GridLayout>
                <Card whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                    <Atag>
                        <IconContainer>
                            <IconBlock>
                                <Img src={Report} alt='raffledraw'/>
                            </IconBlock>
                            <Heading>Accurate Report</Heading>
                            <Subtitle>
                                Accurate reports  at the reach to offer a complete and detailed 
                            </Subtitle>
                        </IconContainer>
                    </Atag>
                </Card>

                    <Card whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                        <Atag>
                            <IconContainer>
                                <IconBlock>
                                    <Img src={Skill} alt='lootbox'/>
                                </IconBlock>
                                <Heading>Skilled Doctors</Heading>
                                <Subtitle>
                                Skilled and experienced doctors and staff
                                </Subtitle>
                            </IconContainer>
                        </Atag>
                    </Card>

                        <Card whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <Atag>
                                <IconContainer>
                                    <IconBlock>
                                        <Img src={Machine} alt='lootbox'/>
                                    </IconBlock>
                                    <Heading>Advanced Equipment</Heading>
                                    <Subtitle>
                                        Advanced Expertise and equipment
                                    </Subtitle>
                                </IconContainer>
                            </Atag>
                        </Card>

                        <Card whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.8 }}>
                            <Atag>
                                <IconContainer>
                                    <IconBlock>
                                        <Img src={Lounge} alt='rewards'/>
                                    </IconBlock>
                                    <Heading>Facilities</Heading>
                                    <Subtitle>
                                        Premium facilities like special suites, waiting lounge etc.
                                    </Subtitle>
                                </IconContainer>
                            </Atag>
                        </Card>
            </GridLayout>
        </Section>
    )
}

export default Why;