import React from 'react'
import { StartRating } from '../../components/StartRating/StartRating'

export const StarRatingPage = () => {
    const [currentRating, setCurrentRating] = React.useState(3);

    const handleOnchange = (rating: number) => {
      setCurrentRating(rating);
    }
  return (
    <div className='bg-gray-800 min-h-screen'>
      <div className=''>
          <h1 className='text-center mt-10 text-white text-3xl'>Star Rating Page</h1>
          <StartRating
            rating={currentRating}
            handleOnchange={handleOnchange}
            size={5}
          />
          <p className='text-center text-white'>Current Rating: {currentRating}</p>
      </div>
    </div>
  )
}
