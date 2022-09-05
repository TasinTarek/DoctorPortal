import React from 'react';
import quote from '../../../Assets/icons/quote.svg'
import TestCard from './TestCard/TestCard';
import people1 from '../../../Assets/Images/people1.png'
import people2 from '../../../Assets/Images/people2.png'
import people3 from '../../../Assets/Images/people3.png'
const Testimonial = () => {
    const testimonials = [
        {
            _id: 1,
            name: 'Tasin',
            address: 'Dhaka',
            description: 'Mother Father',
            img: people1
            
        },
        {
            _id: 2,
            name: 'Tarek',
            address: 'Dhaka',
            description: 'Mother Father',
            img: people2
        },
        {
            _id: 3,
            name: 'Tasin',
            address: 'Dhaka',
            description: 'Mother Father',
            img: people3
        },
        
    ];
    return (
        <section className='mt-10'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-primary mt-10 '>Testimonial</h3>
                    <h3 className='text-5xl text-bold'>What Our Patient Says</h3>
                </div>
                <div className='w-24 lg:w-48' >
                    <img src={quote}/>
                </div>
            </div>
            <div className='grid grid-col-1 lg:grid-cols-3'>
           { testimonials.map(testimonial => <TestCard
                key={testimonial._id}
                testimonial={testimonial}
                ></TestCard>)}
            </div>
        </section>
    );
};

export default Testimonial;