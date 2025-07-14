const Hero = () => {
    return (
        <div className='img-hero overflow-hidden relative'>
            <div className='overlay absolute block bg-black w-full h-full z-40 opacity-5'></div>
            <img src="/hero.jpg" alt="hero-image" className='w-full h-full' />
            <div className='hero-text absolute z-50 top-0 bottom-0 left-0 right-0 h-100 w-100  text-center flex flex-col align-middle justify-center gap-3'>
                <div className='hero-title text-center text-white text-8xl leading-5 uppercase'>
                    Blog
                </div>
                <div className='hero-sub-title text-xl text-white text-opacity-60 mt-6'>
                    Welcome my blog.
                </div>
            </div>
        </div>
    )
}
export default Hero