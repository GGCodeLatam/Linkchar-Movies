import React from 'react'

const Movies = () => {

const [menu, setMenu] = useState("");


  return (
    <div className='col-span-4 lg:col-span-4 text-white w-fit content-center'>
    <div className='grid grid-cols-4 gap-10 place-content-start'>
        <div className='col-span-1 text-white'>
            Movies
        </div>
        <div className='col-span-1  text-gray-500 hover:text-white'>
            TV shows
        </div>
        <div className='col-span-1  text-gray-500 hover:text-white'>
            Animations
        </div>
        <div className='col-span-1  text-gray-500 hover:text-white'>
            Plans
        </div>
    </div>
</div>
  )
}

export default Movies