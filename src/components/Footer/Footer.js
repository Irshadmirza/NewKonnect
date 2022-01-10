import React from 'react';
import { MainButton } from '../../globalStyles';
import {
  FooterContainer,
  FooterSubscription,
  FooterSubText,
  FooterSubHeading,
  Form,
  FormInput,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  RowContainer,
} from './Footer.elements';

import Map from '../Map';

function Footer() {
  return (
    <FooterContainer>
     <RowContainer>
     <FooterSubscription>
        <FooterSubHeading>
        Corporate Office
        </FooterSubHeading>
        <FooterSubText>1-5-1055/87/236 & 237,
HMT Officers colony,
Alwal,
Hyderabad , Telangana 500010
India</FooterSubText>

        
      </FooterSubscription>
    
      <Map />
     </RowContainer>
      
      
    </FooterContainer>
  );
}

export default Footer;
