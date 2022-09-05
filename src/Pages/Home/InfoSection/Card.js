import React from 'react';

const Card = ({img,cardTitle,classBg}) => {
    return (
        <div class={`px-5  card lg:card-side bg-base-100 shadow-xl py-5 ${classBg}`}>
  <figure><img src={img} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title text-white">{cardTitle}</h2>
   </div>
</div>
    );
};

export default Card;