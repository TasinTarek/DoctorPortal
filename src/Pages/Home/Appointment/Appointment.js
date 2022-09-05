import React from 'react';
import appointment from '../../../Assets/Images/appointment.png'
import doctor from '../../../Assets/Images/doctor.png'
const Appointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className="flex justify-center items-center">
            <div className='flex-1 mt-[-110px]'>
                <img src={doctor}/>
            </div>
            <div className='flex-1 p-5'>
                <h3 className='text-primary my-5'>Appointment</h3>
                <h2 className='text-white text-5xl mb-10'>Make An Appointment</h2>
                <p className='text-white'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                
            </div>
        </section>
            
        
    );
};

export default Appointment;