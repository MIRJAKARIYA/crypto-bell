import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className='text-center mt-60 mx-auto font-mono'>
                <h1 className='text-6xl'>Welcome to Crypto Finder🧭</h1>
                <div className='border w-max mx-auto mt-5'>
                    <Link className='bg-green-700 py-2 px-4 rounded-lg text-white text-lg hover:bg-green-900' to={'/coins'}>Coin Info</Link>
                </div>
            </div>
        </div>
    );
};

export default Home; 