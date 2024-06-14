import React from 'react';
import './newsletter.css';
const NewsLetter = () => {
  return (
    <div className='newsletter-page'>
        <div className='newsletter-container'>
            <h2>Get Exclusive Offers On Your Email</h2>
            <p>Subscribe to our news letter and stay updated</p>
            <div className='newsletter-input'>
                <input type='email' maxLength={40} placeholder='Enter your email'/>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter;