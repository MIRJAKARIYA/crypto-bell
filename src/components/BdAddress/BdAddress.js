import React from 'react';

const BdAddress = () => {
    return (
        <div className='bg-slate-500 text-white text-2xl md:w-3/4 mt-60 p-8 rounded-2xl mx-auto flex justify-between items-center'>
            <div className='mx-auto md:mx-0'>
                <p>Street: 17/4 Dhanmondi.</p>
                <p>City: Dhaka</p>
                <p>Phone: +8801264648978</p>
                <p>Email: contact.bd@cc.com</p>
            </div>
            <div className='hidden md:block'>
                <h1 className='uppercase'>Bangladesh Office</h1>
            </div>
        </div>
    );
};

export default BdAddress;