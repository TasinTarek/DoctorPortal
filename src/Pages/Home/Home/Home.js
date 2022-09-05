import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import InfoSection from '../InfoSection/InfoSection';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='px-10'>
           <Banner></Banner>
           <InfoSection></InfoSection>
           <Services></Services>
           <Appointment></Appointment>
           <Testimonial></Testimonial>
        </div>
    );
};

export default Home;