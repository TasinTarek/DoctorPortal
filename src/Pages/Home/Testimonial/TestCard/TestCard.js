import React from 'react';

const TestCard = ({testimonial}) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="card-title">{testimonial.name}!</h2>
    <h2 class="card-title">{testimonial.address}!</h2>
    <p>{testimonial.description}</p>
  </div>
  <figure><img src={testimonial.img} alt="Shoes" /></figure>
</div>
    );
};

export default TestCard;