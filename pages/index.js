import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';
import RandomMovie from '../components/RandomMovie';
import PopularMovies from '../components/PopularMovies/Index';
import NowPlaying from '../components/NowPlaying/NowPlaying';
import Upcoming from '../components/Upcoming/Upcoming';
import Genres from '../components/Genres/Genres';

export default function Home() {


  return (
    <div className='bg-gray-900'>
      <Layout>
        <div className='bg-gray-900 text-center text-white py-4  rounded-lg ml-2 lg:ml-10 text-4xl col-span-2 lg:col-span-1 row-span-2 md:row-span-2 lg:row-span-3'>
          <Upcoming />
        </div>
        <div className='bg-gray-900 text-center text-white py-4  rounded-lg col-span-2 lg:col-span-3'>
          <RandomMovie />
        </div>
        <div className='bg-gray-900 text-center text-white py-4  rounded-lg text-4xl col-span-2 lg:col-span-3'>
        <NowPlaying />
        </div>
        <div className='bg-gray-900 text-center text-white py-4  rounded-lg text-4xl col-span-4 lg:col-span-3'>
          <PopularMovies />
        </div>
      </Layout>
    </div>
  )
}
