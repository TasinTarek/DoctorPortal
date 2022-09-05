import React from 'react';
import Service from './Service/Service';
import cavity from '../../../Assets/Images/cavity.png'
import teeth from '../../../Assets/Images/teeth.png'
import whitening from '../../../Assets/Images/whitening.png'
import treatment from '../../../Assets/Images/treatment.png'
const Services = () => {
    const services = [
        {
            _id: 1,
            Name: "Cavity",
            img: cavity
        },
        {
            _id: 2,
            Name: "Teeth Cleaning",
            img: teeth
        },
        {
            _id: 3,
            Name: "Whitening",
            img: whitening
        },
    ]
    return (
        
       <div className='py-10 mb-5' >
        <div className='mb-10 text-center text-5xl'>
            <h3 className='mb-10'>
                Services
            </h3>
            <h3>
                Services We Provide
            </h3>
        </div>
        <div className="grid grid-col-1 lg:grid-cols-3 ">
            {
                services.map(service =><Service
                    key={service._id}
                    service={service}
                ></Service>)
            }
        </div>
        <div>
        <div class="hero min-h-screen ">
  <div class="hero-content flex-col lg:flex-row">
    <img src={treatment} class="max-w-sm rounded-lg shadow-2xl" />
    <div className='ml-12'>
      <h1 class="text-5xl font-bold">Exceptional Dental Care,On Your Terms</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
       </div>
        
       
    );
};

export default Services;