
const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[400px] lg:h-[300px] mt-4">
                <div id="slide1" className="carousel-item relative w-full flex justify-center items-center">
                    <div className='flex flex-col lg:flex-row-reverse  justify-between items-center gap-3 h-full mx-auto'>
                        <div className='h-full rounded-md'>
                            <img
                                src="https://i.ibb.co/6YtNGQV/deer-3673017-640.jpg"
                                className=" w-[800px] lg:w-[1200px] h-[200px] lg:h-full rounded-md" />
                        </div>
                        <div className=' flex justify-center items-center h-full rounded-md border border-blue-600'>
                            <div className=' lg:ml-16 md:ml-16 px-5 py-3  space-y-2'>
                                <h1 className='text-2xl text-blue-600 font-bold'>Sundarban, Bangladesh</h1>
                                <p className="text-slate-700">The Sundarbans, located in Bangladesh, is the world's largest mangrove forest, renowned for its rich biodiversity. It is home to the Bengal tiger, rare wildlife, and dense waterways, making it a UNESCO World Heritage Site and a vital ecological sanctuary.</p>
                            </div>
                        </div>

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full flex justify-center items-center">
                    <div className='flex flex-col lg:flex-row-reverse  justify-between items-center gap-3 h-full mx-auto'>
                        <div className='h-full rounded-md'>
                            <img
                                src="https://i.ibb.co/gVTLcN5/city-4864747-640.jpg"
                                className=" w-[600px] lg:w-[1200px] h-[200px] lg:h-full rounded-md" />
                        </div>
                        <div className='border flex justify-center items-center h-full rounded-md  border-blue-600 '>
                            <div className=' lg:ml-16 md:ml-16 px-5 py-3 space-y-2 '>
                                <h1 className='text-2xl text-green-600 font-bold'>Bangkok, Thailand</h1>
                                <p className="text-slate-600">
                                Bangkok, the capital of Thailand, is a bustling city known for its vibrant street life, ornate temples, cultural landmarks, and dynamic nightlife. It blends modern skyscrapers with traditional markets and historic sites.</p>
                            </div>
                        </div>

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full flex justify-center items-center">
                    <div className='flex flex-col lg:flex-row-reverse  justify-between items-center gap-3 h-full mx-auto'>
                        <div className='h-full rounded-md'>
                            <img
                                src="https://i.ibb.co/PrDQkF8/bali-7969001-640.jpg"
                                className=" w-[600px] lg:w-[800px] h-[200px] lg:h-full rounded-md" />
                        </div>
                        <div className='border flex justify-center items-center h-full rounded-md border-blue-600'>
                            <div className=' lg:ml-16 md:ml-16 px-5 py-3  '>
                                <h1 className='text-2xl text-purple-600 font-bold'>Bali</h1>
                                <p className="text-slate-600">Bali, an Indonesian paradise, is known for its beaches, temples, and vibrant culture, attracting millions of tourists annually.</p>
                            </div>
                        </div>

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full flex justify-center items-center">
                    <div className='flex flex-col lg:flex-row-reverse  justify-between items-center gap-3 h-full mx-auto'>
                        <div className='h-full rounded-md'>
                            <img
                                src="https://i.ibb.co/xYpSXVQ/Vietnam-Ha-Long-Bay-6762301-640.jpg"
                                className=" w-[600px] lg:w-[800px] h-[200px] lg:h-full rounded-md" />
                        </div>
                        <div className='border flex justify-center items-center h-full rounded-md border-blue-600'>
                            <div className=' lg:ml-16 md:ml-16 px-5 py-3  '>
                                <h1 className='text-2xl text-teal-600 font-bold'>Ha Long Bay</h1>
                                <p className="text-slate-600">Ha Long Bay, a UNESCO World Heritage Site, is famous for its emerald waters, limestone islands, and stunning natural scenery.</p>
                            </div>
                        </div>

                    </div>

                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                {/* <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Banner;