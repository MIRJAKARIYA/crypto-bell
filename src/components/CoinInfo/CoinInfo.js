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
        <div className='grid md:grid-cols-2 mt-16 mx-auto md:w-8/12 h-[650px] items-center bg-gradient-to-br from-red-600 to-slate-500 rounded-3xl text-white gap-7 md:gap-0 p-10 shadow-2xl'>
            <div className='justify-self-center'>
                <img src={coin.image?.large} className='min-w-full md:w-[400px]' alt="" />
            </div>
            <div className='justify-self-center text-lg'>
                <p>Name: {coin.name}</p>
                <p>Country origin: {coin.country_origin || 'not found'}</p>
                <p>Market cap rank: {coin.market_cap_rank}</p>
                <p>Liquidity score: {coin.liquidity_score}</p>
                <p>Public interest score: {coin.public_interest_score}</p>
                <p>Sentiment votes up percentage: {coin.sentiment_votes_up_percentage}</p>
                <p>Sentiment votes down percentage: {coin.sentiment_votes_down_percentage}</p>
                <p>Coingecko rank: {coin.coingecko_rank}</p>
                <p>Coingecko score: {coin.coingecko_score}</p>
            </div>
        </div>
    );
};

export default CoinInfo;