import React from 'react';
import { Link } from 'react-router-dom';

const Page404 = () => {
    return (
        <div>
            <img src="https://webdeasy.de/wp-content/uploads/2020/06/404-pages.jpg" alt="" />

            <div>
                <Link className='bg-lime-500 py-2 px-3 text-white font-bold rounded' to='/'>Back To Home</Link>
            </div>
        </div>
    );
};

export default Page404;