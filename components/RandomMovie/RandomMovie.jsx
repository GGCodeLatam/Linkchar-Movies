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

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 }
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                    let max = 10;
                    let min = 2;
                    setMovieItems(response.results[Math.floor(Math.random() * (max - min + 1)) + min]);
            } catch (err) {
                console.log(err);
            }
        }
        getMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className='mr lg:mr-20'>
            <div className='content-center row-span-5'>
                <div className="grid grid-cols-1 gap-3">
{/*                     <img src={apiConfig.originalImage(movieItems.backdrop_path)} alt="" className='w-full h-72 rounded-3xl' /> */}
                    <article className="m-3 shadow-xl  bg-cover bg-center w-auto h-48 lg:h-72 rounded-3xl transform duration-500 hover:-translate-y-5 cursor-pointer group" style={{ backgroundImage: `url(${apiConfig.originalImage(movieItems.backdrop_path)})` }}>
                                    <div className="bg-black  bg-opacity-20 w-auto h-48 lg:h-72 rounded-3xl px-2 lg:px-5 flex flex-wrap flex-row  pt-10  lg:pt-22 hover:bg-opacity-75 transform duration-300">
                                        <h1 className="text-white text-xs lg:text-xl transform translate-y-5 group-hover:translate-y-0 duration-300 drop-shadow-lg shadow-black">
                                            {movieItems.title}
                                        </h1>
                                        <p className="opacity-0 text-white text-xs lg:text-lg group-hover:opacity-0 lg:group-hover:opacity-80 transform duration-500">
                                            {movieItems.overview} <br/>
                                            <strong>Country language: {movieItems.original_language}</strong>
                                        </p>
                                    </div>
                                </article>
                </div>
            </div>
        </div>
    );
}


export default NowPlaying;