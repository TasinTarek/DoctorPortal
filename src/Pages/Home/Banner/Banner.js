import React from 'react';
import banner from '../../../Assets/Images/banner.jpg'
import bg from '../../../Assets/Images/bg.png'
const Banner = () => {
    return (
        <div style={{
          background: `url(${bg})`
        }} class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
<div><img src={banner} class="max-w-sm rounded-lg shadow-2xl" /></div>
    
    
    <div>
      <h1 class="text-5xl font-bold">Your New Smile Starts Here!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="text-white btn btn-primary ">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;