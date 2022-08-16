import React, { useState, useEffect } from 'react'
import {
  TimeDisplayer,
  AlarmSolver,
} from './'

const Main = () => {

  const FLEX_CENTER = 'flex items-center justify-center';

  const [dateNow, setDateNow] = useState(new Date());
  const [isAlarmActive, setIsAlarmActive] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {setDateNow(new Date())}, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`${FLEX_CENTER} w-full h-3/4`}>
      
      <div className={`${FLEX_CENTER} flex-1`}>
        <button className="">New alarm</button>        
      </div>
      
      
      <div className={`flex flex-1 flex-col h-full items-center justify-evenly`}>
        
        <TimeDisplayer 
          date={dateNow} 
          showDayName
        />

        <div className={`${FLEX_CENTER}`}>          
          <AlarmSolver activity={isAlarmActive} />
        </div>        
      </div>

      <div className={`${FLEX_CENTER} flex-1`}>
        <span>Next Alarm</span>        
      </div>

    </div>
  )
}

export default Main