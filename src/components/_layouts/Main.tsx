import React, { useState, useEffect } from 'react'
import {
  TimeDisplayer,
  AlarmSolver,
  NewAlarm,
  NextAlarm,
} from '../index';

const Main = () => {

  const FLEX_CENTER = 'flex items-center justify-center';

  const [dateNow, setDateNow] = useState<Date>(new Date());
  const [isCreatingNewAlarm, setIsCreatingNewAlarm] = useState<boolean>(false);
  const [isAlarmActive, setIsAlarmActive] = useState<boolean>(true);

  useEffect(() => {
    const timer = setInterval(() => {setDateNow(new Date())}, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCreatingNewAlarm = () => setIsCreatingNewAlarm(true);
  const cancelCreatingNewAlarm = () => setIsCreatingNewAlarm(false);

  const setNewAlarm = (date: Date | null) => {
    console.log(date);
    cancelCreatingNewAlarm();
  }

  return (
    <div className={`${FLEX_CENTER} w-full h-3/4`}>
      
      <div className={`${FLEX_CENTER} flex-1`}>
        { !isCreatingNewAlarm && 
          <button className='text-xl' onClick={handleCreatingNewAlarm}>New Alarm</button> 
        }
        <NewAlarm 
          visible={isCreatingNewAlarm} 
          onCancel={cancelCreatingNewAlarm} 
          onSetAlarm={setNewAlarm}
        />        
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