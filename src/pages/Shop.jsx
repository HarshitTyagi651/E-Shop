import React from 'react'
import Hero from '../components/Hero/hero'
import NewCollection from '../components/NewCollection/newcollection'
import NewsLetter from '../components/NewsLetter/newsletter'
import Offer from '../components/Offer/offer'
import Popular from '../components/Popular/popular'

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offer />
      <NewCollection />
      <NewsLetter />
    </div>
  )
}

export default Shop