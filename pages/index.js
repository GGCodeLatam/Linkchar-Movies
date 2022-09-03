import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar';
import Layout from '../components/Layout';

export default function Home() {

  fetch('https://api.themoviedb.org/3/movie/540?api_key=5b49a363432f2c7c8313eea227c49945')
    .then(response => response.json())
    .then(data => console.log(data));


  return (
    <div className='bg-gray-800'>
      <Layout>
        <div className='bg-gray-900 text-center text-white py-4  rounded-lg text-4xl col-span-2 lg:col-span-1 row-span-2 md:row-span-2 lg:row-span-3'>NEW TRAILERS</div>
        <div className='bg-gray-900 text-center text-white py-4  rounded-lg text-4xl col-span-2 lg:col-span-3'>Random movie</div>
        <div className='bg-gray-900 text-center text-white py-4  rounded-lg text-4xl col-span-2 lg:col-span-3'>Continue watching</div>
        <div className='bg-gray-900 text-center text-white py-4  rounded-lg text-4xl col-span-4 lg:col-span-3'>Popular movies</div>
      </Layout>
    </div>
  )
}
