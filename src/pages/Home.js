import React, { useState } from 'react';
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import { homeObjOne } from '../data';
import Why from '../components/Why/Why';
import FAQSection from '../components/FaqSection';
import Footer from '../components/Footer/Footer';
import Vr from '../components/VR/Vr';

const Home = () => {

const [isOpen, setOpen] = useState(false);

const toggle = () => {
    setOpen(!isOpen);
}

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Hero {...homeObjOne}/>
            <Vr />
            <Why />
            <FAQSection />
            <Footer />
        </>
    )
}

export default Home
