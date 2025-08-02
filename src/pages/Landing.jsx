import { useState } from 'react'
import ProductCard from '../components/ProductCard'
import { products } from '../data/product'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Benefits from '../components/Benefits'
import HeroSection from '../components/HeroSection'
import PromotionsAndOffers from '../components/PromotionAndOffers'
import Testimonials from '../components/Testimonial'
import {testimonial} from '../data/testimonal'

function Landing() {
    const featured = products.slice(0, 3);

    return (
        <div>
            <Header />
            <HeroSection />
            <div className="grid grid-cols-3 gap-4 p-2">
                {featured.map((item) => (
                    <ProductCard key={item.id} product={item} />
                ))}
            </div>
             <section id="offers">
                <PromotionsAndOffers/>
             </section>
            <section id="blog">
                <Testimonials testimonials= {testimonial} />
                </section>
            <Benefits />
            <Footer />
        </div>
    )
}

export default Landing