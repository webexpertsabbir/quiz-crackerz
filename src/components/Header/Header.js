import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className='flex justify-between py-5 px-24 bg-lime-400'>
            <h2 className='text-2xl text-green-900 font-bold '>Quiz Online</h2>
            <div className='text-xl font-semibold menu'>
                <Link to='/'>Topics</Link>
                <Link className='ml-2 mr-2' to='/statistics'>Statistics</Link>
                <Link to='/blog'>Blog</Link>
            </div>
        </div>
    );
};

export default Header;