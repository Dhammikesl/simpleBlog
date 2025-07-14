import React from 'react'
import Hero from '../components/Hero'
import Posts from '../components/Posts'

const Home = () => {
    return (
        <div>
            <section className=''>
                <Hero />
            </section>
            <section className='container mt-6'>
                <Posts />
            </section>
        </div>
    )
}

export default Home