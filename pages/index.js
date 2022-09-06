import React from 'react';
import Layout from '../components/Layout';
import RandomMovie from '../components/RandomMovie/RandomMovie';
import PopularMovies from '../components/PopularMovies/PopularMovies';
import NowPlaying from '../components/NowPlaying/NowPlaying';
import Upcoming from '../components/Upcoming/NewTrailers';


export default function Home() {


  return (
    <div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
      <Layout>
        <div className=' text-center text-white py-2  rounded-lg ml-2 lg:ml-10 text-4xl col-span-2 lg:col-span-1 row-span-4 md:row-span-2 lg:row-span-3'>
          <Upcoming />
        </div>
        <div className=' text-center text-white  rounded-lg col-span-2 lg:col-span-3 row-span-2 lg:row-span-1'>
          <RandomMovie />
        </div>
        <div className=' text-center text-white py-2  rounded-lg text-4xl col-span-2 lg:col-span-3'>
          <NowPlaying />
        </div>
        <div className=' text-center text-white py-2 px-5  rounded-lg text-4xl col-span-4 lg:col-span-3'>
          <PopularMovies />
        </div>
      </Layout>
    </div>
  )
}
