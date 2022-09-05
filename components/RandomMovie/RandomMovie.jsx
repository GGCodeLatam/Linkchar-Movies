/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react'
import tmdbApi, { category, movieType, options } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { useMediaQuery } from 'react-responsive'
import random from 'random'

const NowPlaying = () => {


    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })


    const [movieItems, setMovieItems] = useState([]);

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 }
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                if (isDesktopOrLaptop) {
                    let max = 10;
                    let min = 2;
                    setMovieItems(response.results[Math.floor(Math.random() * (max - min + 1)) + min]);
                } else {
                    setMovieItems(response.results[Math.floor(Math.random() * (max - min + 1)) + min]);
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
                <div className="grid grid-cols-1 gap-3">
                    <img src={apiConfig.originalImage(movieItems.backdrop_path)} alt="" className='w-full h-72 rounded-3xl' />
                </div>
            </div>
        </div>
    );
}


export default NowPlaying;