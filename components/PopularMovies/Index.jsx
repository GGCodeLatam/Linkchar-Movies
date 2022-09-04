/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react'
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { useMediaQuery } from 'react-responsive'



const PopularMovies = () => {

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
                if (isDesktopOrLaptop) {
                    setMovieItems(response.results.slice(0, 3));
                    console.log(response.results.slice(0, 3));
                } else {
                    setMovieItems(response.results.slice(0,6));
                    console.log(response.results.slice(0,6));
                }

            } catch {
                console.log('error');
            }
        }
        getMovies();
           // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);




    return (
        <div className='m-2'>
            <div className='text-left text-xl p-2 row-span-1'>
                Popular Movies
            </div>
            <div className='content-center row-span-5'>
                <div className="grid grid-cols-3 gap-3">
                    {
                        movieItems.map((item, i) => (
                            <div key={i} className="col-span-1">
                                <img src={apiConfig.w500Image(item.backdrop_path)} alt="" className='w-5/6 h-auto rounded-xl' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}


export default PopularMovies;