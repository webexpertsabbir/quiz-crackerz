import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
        <div className='banner flex justify-center items-center'>
            <div>
                <h2 className='text-yellow-500 text-5xl font-bold uppercase'>You can test your skills with the </h2>
                <h2 className='text-lime-500 text-4xl font-bold uppercase pt-9'>answers of the quiz</h2>
            </div>
        </div>
    );
};

export default Banner;