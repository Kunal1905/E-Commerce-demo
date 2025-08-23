import Popular from '../components/Popular/Popular'
import Hero from '../components/Hero/Hero'
import React from 'react'
import Offers from '../components/Offers/Offers'
import NewCollections from '../components/NewCollections/NewCOllections'
import NewsLetter from '../components/NewsLetter/NewsLetter'

const Shop = () => {
  return (
    <div>
        <Hero />
        <Popular />
        <Offers />
        <NewCollections />
        <NewsLetter />
    </div>
  )
}

export default Shop