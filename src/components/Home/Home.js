import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='w-max mt-60 mx-auto'>
                <h1 className='text-6xl'>Welcome to Crypto Bell</h1>
                <Link className='bg-green-700 py-2 px-4 rounded-lg text-white text-lg' to={'/coins'}>Coin Info</Link>
            </div>
        </div>
    );
};

export default Home; 