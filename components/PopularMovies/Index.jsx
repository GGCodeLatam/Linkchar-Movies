import React, { useState, useEffect, useRef } from 'react'
import tmdbApi, { category, movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';




const PopularMovies = () => {

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 }
            try {
                const response = await tmdbApi.getMoviesList(movieType.popular, { params });
                setMovieItems(response.results.slice(0, 3));
                console.log(response.results.slice(0, 3));
            } catch {
                console.log('error');
            }
        }
        getMovies();
    }, []);




    return (
        <div className='m-2'>
            <div className='text-left text-xl p-2 row-span-1'>
                Popular Movies
            </div>
            <div className='content-center row-span-5'>
                <div className="grid grid-cols-3">
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


export default PopularMovies;