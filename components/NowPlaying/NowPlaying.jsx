import React, { useState, useEffect, useRef } from 'react'
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { useMediaQuery } from 'react-responsive'





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
                const response = await tmdbApi.nowPlaying({ params });
                if (isDesktopOrLaptop) {
                    setMovieItems(response.results.slice(0, 3));
                    console.log(response.results.slice(0, 3));
                } else {
                    setMovieItems(response.results.slice(0,2));
                    console.log(response.results.slice(0,2));
                }

            } catch {
                console.log('error');
            }
        }
        getMovies();
    }, []);

    return (
        <div className='m-2'>
            <div className='text-left text-xl p-2 row-span-1'>
                Continue watching
            </div>
            <div className='content-center row-span-5'>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                    {
                        movieItems.map((item, i) => (
                            <div key={i} className="col-span-1">
                                <img src={apiConfig.w500Image(item.backdrop_path)} alt="" className='rounded-xl w-5/6' />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}


export default NowPlaying;