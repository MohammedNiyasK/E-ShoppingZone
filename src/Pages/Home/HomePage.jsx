import React from 'react'
import Body from '../../components/Body/Body'
import Brands from '../../components/Brands/Brands'
import FeaturedCategories from '../../components/FeaturedCategories/FeaturedCategories'
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import LatestProducts from '../../components/LatestProducts/LatestProducts'
import Offer from '../../components/Offer/offer'
import Testimonial from '../../components/Testimonial/Testimonial'

function HomePage() {
  return (
    <div>
        <Header />
        <Body />
        <FeaturedCategories />
        <FeaturedProducts />
        <LatestProducts />
        <Offer />
        <Testimonial />
        <Brands />
        <Footer />
    </div>
  )
}

export default HomePage