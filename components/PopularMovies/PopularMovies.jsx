/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from 'react'
import tmdbApi, { movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { useMediaQuery } from 'react-responsive'



const PopularMovies = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })

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
            } catch (err) {
                console.log(err);
            }
        }
        getMovies();
           // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);




    return (
        <div className='m-2'>
            <div className='text-left text-xl pb-5 row-span-1 w-full'>
                Popular Movies
            </div>
            <div className='content-center row-span-5 h-full'>
                <div className="grid grid-cols-3 gap-5 ml-3 lg:ml-5">
                    {
                        movieItems.map((item, i) => (
                            <div key={i} className="col-span-1">
                            <article className="shadow-xl rounded-3xl bg-cover bg-center h-24 lg:h-36 w-5/6 transform duration-500 hover:-translate-y-5 cursor-pointer group" style={{ backgroundImage: `url(${apiConfig.w500Image(item.backdrop_path)})` }}>
                                    <div className="bg-black rounded-3xl bg-opacity-20 h-24 lg:h-36 w-full px-2 lg:px-5 flex flex-wrap flex-row  pt-22  lg:pt-18 hover:bg-opacity-75 transform duration-300">
                                        <h1 className="text-white text-xs lg:text-xl transform translate-y-5 group-hover:translate-y-0 duration-300 drop-shadow-lg shadow-black">
                                            {item.title}
                                        </h1>
                                        {isDesktopOrLaptop ?
                                            <p className="opacity-0  text-white text-xs group-hover:opacity-0 lg:group-hover:opacity-80 transform duration-500">
                                            {item.overview}
                                            <br/>
                                            <strong>Country language: {item.original_language}</strong>
                                        </p>
                                        :
                                        ""}
                                    </div>
                                </article>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}


export default PopularMovies;