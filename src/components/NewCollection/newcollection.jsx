import React from 'react';
import newcollection from '../Assets/new_collections';
import Item from '../Item/item';
import './newcollection.css';

const NewCollection = () => {
  return (
    <div className='newcollection-page'>
         <h2>NEW COLLECTION</h2>
        <hr />
        <div className="newscollection-cont">
        <div className="popular-item">
            {newcollection.map((item,i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
        </div>
    </div>
  )
}

export default NewCollection;