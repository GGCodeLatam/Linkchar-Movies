import React, { useState, useEffect } from 'react'
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import { useMediaQuery } from 'react-responsive'


const NowPlaying = () => {

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
    })


    const [movieItems, setMovieItems] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const params = { page: 1 }
            try {
                const response = await tmdbApi.nowPlaying({ params });
                if (isDesktopOrLaptop) {
                    setMovieItems(response.results.slice(0, 2));
                    console.log(response.results.slice(0, 2));
                } else {
                    setMovieItems(response.results.slice(0, 1));
                    console.log(response.results.slice(0, 2));
                }
            } catch (err) {
                console.log(err);
            }
        }
        getMovies();
    }, [isDesktopOrLaptop]);

    return (
        <div className='m lg:m-2 mr-0 lg:mr-14'>
            <div className='text-left text-lg p-2 row-span-1'>
                Continue watching
            </div>
            <div className='content-center row-span-5 w-auto'>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                    {
                        movieItems.map((item, i) => (
                            <div key={i} className="col-span-1">
                                <article className="m-5 shadow-xl rounded-3xl bg-cover bg-center w-auto h-20 lg:h-48 transform duration-500 hover:-translate-y-5 cursor-pointer group" style={{ backgroundImage: `url(${apiConfig.w500Image(item.backdrop_path)})` }}>
                                    <div className="bg-black rounded-3xl bg-opacity-20 w-full h-20 lg:h-48 px-2 lg:px-5 flex flex-wrap flex-row  pt-22  lg:pt-18 hover:bg-opacity-75 transform duration-300">
                                        <h1 className="text-white text-xs lg:text-xl transform translate-y-5 group-hover:translate-y-0 duration-300 drop-shadow-lg shadow-black">
                                            {item.title}
                                        </h1>
                                        <div className="w-auto h-auto bg-yellow-500 rounded-full mb-2 transform translate-y-5 group-hover:translate-y-0 duration-300">
                                        </div>
                                        <p className="opacity-0 text-white text-xs group-hover:opacity-0 lg:group-hover:opacity-80 transform duration-500">
                                            {item.overview}
                                        </p>
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


export default NowPlaying;