import React from 'react'
import Border from '../components/Border'
import Result from './Result'
import {questions} from "../questions"
import { Link } from 'react-router-dom'
import { UseUserContext } from '../context/UserContext'
import Progress from '../components/Progress'
import "./Quiz.css"
const Quiz = () => {
    const {index,setIndex,value,onRadioChange,handleNext,handleSubmit,time,inter} = UseUserContext();
    const {id,q,o1,o2,o3} = questions[index];
  return (
    <>
    {time.sec !== 20 ?  
     
    <div className='center'>
        <center className='display-3'>Quiz App</center>
    
    <Border>
        <div className='content'>
        <p className='h4'>{id} - {q}</p>
    <ul>
      <li>
        <label>
          <input
            type="radio"
            value={o1}
            checked={value===o1}
            onChange={onRadioChange}
          />
          <span className='p-2 h6'>{o1}</span>
        </label>
      </li>
      <li>
        <label>
          <input
            type="radio"
            value={o2}
            checked={value===o2}
            onChange={onRadioChange}
          />
          <span className='p-2 h6'>{o2}</span>
        </label>
      </li>
      <li>
        <label>
          <input
            type="radio"
            value={o3}
            checked={value===o3}
            onChange={onRadioChange}
          />
          <span className='p-2 h6'>{o3}</span>
        </label>
      </li>
      
      </ul>
      <br/><br/>
      {index === questions.length - 1 ? 
      <Link onClick={handleSubmit} to="/result">Submit</Link> : 
      <button className='btn btn-primary button' onClick={handleNext}>Next</button>
      }
       
      
      
      
       </div>
    </Border>
    <Progress/>

    <div>{time.min} : {time.sec}</div>
     
    </div> : 
    <>
     {clearInterval(inter)}
     <Result/> 
    </>
    }
    </>
  )
}

export default Quiz