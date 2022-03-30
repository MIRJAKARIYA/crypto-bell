import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='mt-10'>
            <h1 className='text-4xl text-center font-mono'>Contact Us, Our Office Address Down Below</h1>
            <div className='text-center mt-10'>
                <Link to={'bdaddress'} className='bg-green-600 px-4 py-2 text-white rounded-lg hover:bg-green-800 duration-300 mr-4 '>BD address</Link>
                <Link className='bg-green-600 px-4 py-2 text-white rounded-lg hover:bg-green-800 duration-300' to={'usaddress'}>US address</Link>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Contact;