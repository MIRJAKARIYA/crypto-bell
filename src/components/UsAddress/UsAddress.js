import React from 'react';

const UsAddress = () => {
    return (
        <div className='bg-slate-500 text-white text-2xl md:w-3/4 mt-60 p-8 rounded-2xl mx-auto flex justify-between items-center'>
            <div className='mx-auto md:mx-0'>
                <p>1203 SN Street</p>
                <p>City: New York</p>
                <p>Phone: +1(607)2333333</p>
                <p>Email: contact.usa@cc.com</p>
            </div>
            <div className='hidden md:block'>
                <h1>USA OFFICE</h1>
            </div>
        </div>
    );
};

export default UsAddress;