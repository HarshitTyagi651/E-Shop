import React from 'react';
import './item.css';

const Item = (props) => {
  return (
    <div className='item-page'>
        <div className="item-container">
            <img src={props.image} />
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price-new'>
                    ${props.new_price}
                </div>
                <div className="item-price-old">
                    ${props.old_price}
                </div>
            </div>

        </div>
    </div>
  )
}

export default Item;