import React, { useState, useEffect } from 'react'
import User from '../../public/images/user.png'
import Image from 'next/image'
import tmdbApi, { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import Search from './Search';


const Navbar = (props) => {

    let Links = [
        { name: "Movies", link: "/" },
        { name: "TV shows", link: "/" },
        { name: "Animations", link: "/" },
        { name: "Plans", link: "/" },
    ];
    let [open, setOpen] = useState(false);


    const [items, setItems] = useState([]);

    useEffect(() => {
        const getList = async () => {
            let response = null;
            const params = {};

            if (props.type !== 'similar') {
                switch(props.category) {
                    case category.movie:
                        response = await tmdbApi.getMoviesList(props.type, {params});
                        break;
                    default:
                        response = await tmdbApi.getTvList(props.type, {params});
                }
            } else {
                response = await tmdbApi.similar(props.category, props.id);
            }
            setItems(response.results);
        }
        getList();
    }, []);




    return (
        <div className='w-screen px-10 py-10 grid grid-cols-12 content-center'>
            <div className='col-span-1'>
                <div className='text-xl underline decoration-pink-500 decoration-4 text-left text-white'>
                    LinkChar
                </div>
            </div>

            <div className='col-span-4 text-white w-fit content-center'>
                <div onClick={() => setOpen(!open)} className='text-white mx-20 mt-3 cursor-pointer lg:hidden'>
                    <div name={open ? 'close' : 'menu'}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="12" viewBox="0 0 20 12" fill="none">
                            <path d="M1 1L5 5L9 1" stroke="#C4C4C4" />
                        </svg>
                    </div>
                </div>
                <ul className={`md:flex md:items-center md:pb-0 absolute md:static bg-gray-900 md:z-auto left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ' : 'top-[-490px]'}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className='md:ml-8 md:my-0 my-7'>
                                <a href={link.link} className='text-gray-400 hover:text-white duration-500'>{link.name}</a>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='col-span-1 lg:col-span-3'>
            </div>
            <div className='col-span-6 lg:col-span-4 flex place-content-end w-full gap-x-2'>
            <div className='flex gap-2'>
                    {/* <input placeholder='Search' className='mx-2 px-2 w-1/2 lg:w-full bg-gray-700 rounded-lg border-solid border-white text-white' /> */}
                    <Search />
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5" />
                </svg>
                <div className='grid grid-cols-2 grid-rows-2 gap-1 p-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none">
                        <circle cx="3.4" cy="3.9" r="2.9" stroke="white" strokeWidth={1.5} />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none">
                        <circle cx="3.4" cy="3.9" r="2.9" stroke="white" strokeWidth={1.5} />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none">
                        <circle cx="3.4" cy="3.9" r="2.9" stroke="white" strokeWidth={1.5} />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none">
                        <circle cx="3.4" cy="3.9" r="2.9" stroke="white" strokeWidth={1.5} />
                    </svg>
                </div>
                <div className="grid grid-cols-2 content-center">
                    <Image src={User} alt="user" />
                    <div className=''>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none">
                            <path d="M1 1L5 5L9 1" stroke="#C4C4C4" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar