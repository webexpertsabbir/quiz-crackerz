import React from 'react';

const Topic = ({topic}) => {
    const {name, id, logo} = topic
    return (
        <div>
            <div className='bg-emerald-100'>
                <img src={logo} alt="" />
            </div>
            <div className='flex justify-between my-3'>
                <h2 className='font-bold text-2xl text-green-800'>{name}</h2>
                <button className='bg-green-900 px-3 py-1 text-lime-100 text-xl font-semibold rounded'>Start prctice</button>
            </div>
        </div>
    );
};

export default Topic;