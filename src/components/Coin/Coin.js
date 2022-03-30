import React from 'react';
import { useNavigate } from 'react-router-dom';

const Coin = ({coin}) => {
    const {id, image, symbol} = coin;
    const navigate = useNavigate();
    const getInformation = () =>{
        const url = `/coininfo/${id}`;
        navigate(url)
    }
    return (
        <div className='border p-6 rounded-2xl bg-gray-500 text-yellow-50 text-2xl flex justify-between items-center w-full cursor-pointer hover:bg-gray-800 duration-200' onClick={getInformation}>
            <div>
                <img src={image} className='w-[100px]' alt="" />
            </div>
            <div>
                <p>{id}</p>
                <small>{symbol}</small>
            </div>
        </div>
    );
};

export default Coin;