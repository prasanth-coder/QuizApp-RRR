import React from 'react'
import { UseUserContext } from '../context/UserContext'

const Result = () => {
    const {mark} = UseUserContext();
  return (
    <div className='display-5'>
       Your Score is {mark} / 5
    </div>
  )
}

export default Result