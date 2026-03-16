import React from 'react';
import Hero from '../../components/Hero/Hero';
import Doctors from '../../components/Doctors/Doctors';
import Services from '../../components/Services/Services';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Doctors></Doctors>
            <Services></Services>
        </div>
    );
};

export default Home;