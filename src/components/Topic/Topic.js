import React from 'react';
import { Link } from 'react-router-dom';

const Topic = ({topic,}) => {
    const {name, id, logo, total} = topic;

    return (
        <div className='border rounded'>
            <div className='bg-emerald-100'>
                <img src={logo} alt="" />
            </div>
            <div className='px-2'>
                <h2 className='font-bold text-2xl text-green-800 text-start'>{name}</h2>
                <hr />
                <div className='flex justify-between my-3'>
                    <h2 className='font-bold text-xl text-green-800'>Quiz: {total}</h2>
                    <button className='bg-green-900 px-3 py-1 text-lime-100 font-semibold rounded'><Link to={`/topic/${id}`}>Start prctice</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Topic;