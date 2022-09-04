import React, { useState, useEffect, useRef } from 'react'
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { useMediaQuery } from 'react-responsive'





const Genres = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    const [movieItems, setMovieItems] = useState([]);


    useEffect(() => {
        const getGenres = async () => {
            const params = { page: 1 }
            try {
                const response = await tmdbApi.genres({ params });
                if (isDesktopOrLaptop) {
                    setMovieItems(response.genres.slice(0, 4));
                } else {
                    setMovieItems(response.genres.slice(0, 4));
                }
            } catch (err) {
                console.log(err);
            }
        }
        getGenres();
    }, []);

    return (
        <div className='my-2'>
            <div className='text-left text-xl p-2 row-span-1'>
                Favourite Genres
            </div>
            <div className='content-center row-span-5 '>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 container w-fit">
                    {
                        movieItems.map((item, i) => (
                            <div key={i} className="col-span-1 bg-orange-500 rounded-full px-2 py-1">
                                <div className='text-xs lg:text-lg'>{item.name}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='grid grid-cols-3 my-5'>
                <div className='inline-flex col-span-2'>
                    <div className='bg-gray-400 text-black rounded-full text-lg w-7 px-2 mx-1'>+</div>
                    <div className='text-gray-400 text-xs lg:text-lg'>
                        Add your favorite genres
                    </div>
                </div>
            </div>
            <div>
                <div className='content-center row-span-5 '>
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 container w-fit my-3">
                        <div className="col-span-1 bg-gray-800 rounded-full px-2 py-1">
                            <div className='text-xs lg:text-lg'>Crime</div>
                        </div>
                        <div className="col-span-1 bg-gray-800 rounded-full px-2 py-1">
                            <div className='text-xs lg:text-lg'>Drama</div>
                        </div>
                        <div className="col-span-1 bg-gray-800 rounded-full px-2 py-1">
                            <div className='text-xs lg:text-lg'>Sci-Fi</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Genres;