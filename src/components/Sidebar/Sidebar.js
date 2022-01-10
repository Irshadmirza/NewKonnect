import React from 'react';

import { SideBarContainer, Icon, CloseIcon, SideBarWrapper, SideBarMenu, SideBarLink, SideButtonWrap, SideBarRoute } from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="aboutus" onClick={toggle}>
                            About Us
                    </SideBarLink>
                    <SideBarLink to="services" onClick={toggle}>
                            Services
                    </SideBarLink>
                    <SideBarLink to="doctors" onClick={toggle}>
                            Our Doctors
                    </SideBarLink>
                </SideBarMenu>
                <SideButtonWrap>
                    <SideBarRoute to='contactus'>
                        Contact Us
                    </SideBarRoute>
                </SideButtonWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default Sidebar
