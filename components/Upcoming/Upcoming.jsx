import React, { useState, useEffect, useRef } from 'react'
import tmdbApi, { movieType } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import Genres from '../Genres/Genres';



const Upcoming = () => {

    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 }
            try {
                const response = await tmdbApi.getMoviesList(movieType.upcoming, { params });
                setMovieItems(response.results.slice(0, 2));
                console.log(response.results.slice(0, 2));
            } catch {
                console.log('error');
            }
        }
        getMovies();
           // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <div className='mx-2'>
            <div className='text-left text-xl mb-2 px-2'>
                New Trailers
            </div>
            <div className='content-center'>
                <div className="grid grid-rows-2 gap-5">
                    {
                        movieItems.map((item, i) => (
                            <div key={i} className="row-span-1">
                                <img src={apiConfig.w500Image(item.backdrop_path)} alt="" className='rounded-xl w-5/6' />
                            </div>
                        ))
                    }
                </div>
                <div>
                    <Genres />
                </div>
            </div>
        </div>
    );
}


export default Upcoming;