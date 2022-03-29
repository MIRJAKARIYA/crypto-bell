import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='flex align-middle text-2xl py-7 bg-slate-400 flex-col md:flex-row md:justify-between'>
            <div className='md:ml-10 w-max mx-auto'>
                <p>Crypto finder</p>
            </div>
            <div className='flex w-[350px] mx-auto  justify-between md:mr-28'>
                <div>
                    <CustomLink to='/'>Home</CustomLink>
                </div>
                <div>
                    <CustomLink to='/coins'>Coins</CustomLink>
                </div>
                <div>
                    <CustomLink to='/contact'>Contact</CustomLink>
                </div>
                <div>
                    <CustomLink to='/about'>About</CustomLink>
                </div>
            </div>
        </nav>
    );
};

export default Header;