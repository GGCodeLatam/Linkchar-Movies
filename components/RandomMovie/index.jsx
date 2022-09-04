/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react'
import tmdbApi, { category, movieType, options } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { useMediaQuery } from 'react-responsive'
import random from 'random'
import Image from 'next/image';

const NowPlaying = () => {

    const [randomMovie, setRandomMovie] = useState(9);

    useEffect(() => {
        setTimeout(() => {
            const aleatorio = async () => {
                let min;
                let max;
                try {
                    const response = random.int((min = 10), (max = 20));
                    setRandomMovie(response);
                } catch (err) {
                    console.log(err)
                }
            }
        }, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                    setMovieItems(response.results[randomMovie]);
                    console.log(response.results[2]);
                } else {
                    setMovieItems(response.results[randomMovie]);
                    console.log(response.results[2]);
                }

            } catch (err) {
                console.log(err);
            }
        }
        getMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='m-2 mr lg:mr-20'>
            <div className='content-center row-span-5'>
                <div className="grid grid-cols-1 gap-3 relative">
                    <img src={apiConfig.w500Image(movieItems.backdrop_path)} alt="" className='w-full h-72 rounded-3xl' />
                </div>
            </div>
        </div>
    );
}


export default NowPlaying;