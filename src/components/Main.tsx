import React, { useState, useEffect } from 'react'
import {
  TimeDisplayer,
  AlarmSolver,
  NewAlarm,
  NextAlarm,
} from './'

const Main = () => {

  const FLEX_CENTER = 'flex items-center justify-center';

  const [dateNow, setDateNow] = useState(new Date());
  const [isAlarmActive, setIsAlarmActive] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {setDateNow(new Date())}, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={`${FLEX_CENTER} w-full h-3/4`}>
      
      <div className={`${FLEX_CENTER} flex-1`}>
        <NewAlarm />
      </div>
            
      <div className={`flex flex-1 flex-col h-full items-center justify-evenly`}>        
        <TimeDisplayer 
          date={dateNow} 
          showDayName
        />
        <div className={`${FLEX_CENTER}`}>          
          <AlarmSolver />
        </div>        
      </div>

      <div className={`${FLEX_CENTER} flex-1`}>
        <NextAlarm />
      </div>

    </div>
  )
}

export default Main