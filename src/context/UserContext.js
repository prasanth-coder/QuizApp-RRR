import React,{useContext,createContext, useState} from 'react'
import { answers,questions } from '../questions';
export const UserContext = createContext(null);


const final_answers = [];
var percent = 0;
const UserContextProvider = ({children}) => {
    const [index,setIndex] = useState(0);
    const [value,setValue] = useState("");
    const [mark,setMark] = useState(0); 
    const [inter,setInter] = useState();
    
    const [time,setTime] = useState({hr : 0,min :0,sec:0,ms:0});
    const [end,setEnd] = useState(false);
    var updatedHr = time.hr,updatedMin = time.min,updatedMs = time.ms,updatedSec = time.sec;
    
    const onRadioChange = (e) => {
      setValue(e.target.value)
    }
    
    const startTimer = () => {
   
      run();
      setInter(setInterval(run,10));
    
  
    
  }
    const run = () => {
       if(updatedMin === 1 && updatedSec === 0){
        setEnd(true);
       }
       if(updatedMin === 60){
          updatedHr++;
          updatedMin = 0;
       }
       if(updatedSec === 60){
         updatedMin++;
         updatedSec = 0;
       }
       if(updatedMs === 100){
         updatedSec++;
         updatedMs = 0;
       }
  
       updatedMs++;
  
        return setTime({ms:updatedMs,sec:updatedSec,hr:updatedHr,min:updatedMin})
        
    }
  
    const handleNext = () => {
     if(value === ""){
      alert("Please Answer The Question");
      return;
     }
     
     percent = percent + (100/questions.length);

     final_answers.push(value);
     calcMark();
     setIndex(prev => prev + 1);
     console.log(answers)
    }

    const calcMark = () => {
      if(final_answers.includes(answers[index])){
        setMark(prev => prev + 1)
  
      }
     
    }

    
    const handleSubmit = () => {
      final_answers.push(value);
      calcMark();


    }
  
  return (
    <UserContext.Provider value={{index,setIndex,value,setValue,onRadioChange,handleNext,handleSubmit,mark,startTimer,time,run,inter,percent}}>
        {children}
    </UserContext.Provider>
  )
}

export const UseUserContext = () => {
  const {index,setIndex,value,setValue,onRadioChange,handleNext,handleSubmit,mark,startTimer,time,run,inter,percent} = useContext(UserContext);
  return {index,setIndex,value,setValue,onRadioChange,handleNext,handleSubmit,mark,startTimer,time,run,inter,percent};
}

export default UserContextProvider;
