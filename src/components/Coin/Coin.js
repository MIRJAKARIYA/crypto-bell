import React from 'react';

const Coin = ({coin}) => {
    const {id, image, symbol} = coin;
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <p>{id}</p>
                <small>{symbol}</small>
            </div>
        </div>
    );
};

export default Coin;