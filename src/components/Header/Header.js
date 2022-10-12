import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {


    const [open, setOpen] = useState(false);

    return (
        <div>
            
            <div className='flex justify-between py-5 px-24 bg-lime-400'>

                <h2 className='text-2xl text-green-900 font-bold '>Quiz Online</h2>
                <div className='text-xl font-semibold menu'>
                    <div onClick={() => setOpen(!open)} class="h-8 w-8 md:hidden">
                        {
                            open ? <XMarkIcon/> : <Bars3Icon/>
                        }
                    </div>
                    <div className={` absolute duration-500 ease-in md:static ${open ? 'top-12' : 'top-[-140px]'}`}>
                        <Link to='/'>Topics</Link>
                        <Link className='ml-2 mr-2' to='/statistics'>Statistics</Link>
                        <Link to='/blog'>Blog</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;