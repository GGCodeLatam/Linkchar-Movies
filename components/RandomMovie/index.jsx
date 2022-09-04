import React, { useState, useEffect, useRef } from 'react'
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { useMediaQuery } from 'react-responsive'
import random from 'random'


const NowPlaying = () => {

    let min;
    let max;

    const options = random.int((min = 1), (max = 20))




    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    const [movieItems, setMovieItems] = useState([]);


    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 }
            try {
                const response = await tmdbApi.nowPlaying({ params });
                if (isDesktopOrLaptop) {
                    setMovieItems(response.results[options]);
                    console.log(response.results[2]);
                } else {
                    setMovieItems(response.results[options]);
                    console.log(response.results[2]);
                }

            } catch (err) {
                console.log(err);
            }
        }
        getMovies();
    }, []);

    return (
        <div className='m-2 mr lg:mr-20'>
            <div className='text-left text-xl p-2 row-span-1'>
                Discover
            </div>
            <div className='content-center row-span-5'>
                <div className="grid grid-cols-1 gap-3">
                    <img src={apiConfig.originalImage(movieItems.backdrop_path)} alt="" className='w-full h-72 rounded-3xl' />
                </div>
            </div>
        </div>
    );
}


export default NowPlaying;