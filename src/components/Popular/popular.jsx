import React from 'react';
import data_product from '../Assets/data';
import Item from '../Item/item';
import './popular.css';

const Popular = () => {
  return (
    <div className='popular-page'>
        <h2>POPULAR IN WOMEN</h2>
        <hr />
        <div className="items-container">
        <div className="popular-item">
            {data_product.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
        </div>
    </div>
  )
}

export default Popular;