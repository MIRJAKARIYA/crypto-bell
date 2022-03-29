import React from 'react';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <nav className='flex justify-between text-2xl py-7 bg-slate-400'>
            <div className=''>
                <p className='ml-10'>Crypto bell</p>
            </div>
            <div className='flex w-[350px] justify-between mr-28'>
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