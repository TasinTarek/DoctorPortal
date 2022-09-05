import React from 'react';
import Card from './Card';
import clock from '../../../Assets/icons/clock.svg'
import marker from '../../../Assets/icons/marker.svg'
import phone from '../../../Assets/icons/phone.svg'
const InfoSection = () => {
    return (
       
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 py-10'>
            <Card CardTitle="Opening Hours" classBg="bg-accent" img={clock}></Card>
            <Card CardTitle="Opening Hours" classBg="bg-neutral" img={phone}></Card>
            <Card CardTitle="Opening Hours" classBg="bg-accent" img={marker}></Card>
       </div>     
    
    );
};

export default InfoSection;