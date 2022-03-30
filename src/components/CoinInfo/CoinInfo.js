import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinInfo = () => {
    const {coinId} = useParams();
    const [coin, setCoin] = useState({});
    useEffect( ()=>{
        fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`)
        .then(res => res.json())
        .then(data => setCoin(data))
    },[coinId]);
    console.log(coin)
    return (
        <div className='grid md:grid-cols-2'>
            <div className='border'>
                <img src={coin.image?.large} className='w-9/12' alt="" />
            </div>
            <div className='border'>
                
            </div>
        </div>
    );
};

export default CoinInfo;