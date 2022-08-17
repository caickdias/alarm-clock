import React, { useState, useEffect } from 'react'
import {
  TimeDisplayer,
  AlarmSolver,
  NewAlarmContainer,
  NextAlarm,
} from '../index';

import { getTime, showHoursAndMinutes } from '../../utils/date';
import { getAlarmsFromLocalStorage, setAlarmToLocalStorage } from '../../services/localStorage';

const Main = () => {

  const FLEX_CENTER = 'flex items-center justify-center';

  const [dateNow, setDateNow] = useState<Date>(new Date());
  const [newAlarm, setNewAlarm] = useState<Date | null>(null);
  const [nextAlarm, setNextAlarm] = useState<Date | null>(null);
  const [alarmRing, setAlarmRing] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {            
      setDateNow(new Date())
    }, 1000);
    return () => clearInterval(timer);
  }, []);
 
  useEffect(() => {
    setNextAlarm(new Date(getAlarmsFromLocalStorage()));    
  }, [newAlarm]);

  useEffect(() => {
    if(checkAlarm(dateNow, nextAlarm)){
      setAlarmRing(true);
    }
  }, [dateNow]);


  const checkAlarm = (date1: Date, date2: Date | null) => {
    return showHoursAndMinutes(date1) == showHoursAndMinutes(date2);
  }

  const setNewAlarmHandler = (date: Date | null) => {    
    setNewAlarm(date);
    setAlarmToLocalStorage(date);
  }

  return (
    <div className={`${FLEX_CENTER} w-full h-3/4`}>
      
      <NewAlarmContainer onSetNewAlarm={setNewAlarmHandler} />
            
      <div className={`flex flex-1 flex-col h-full items-center justify-evenly`}>        
        <TimeDisplayer 
          date={dateNow} 
          showDayName
        />
        <div className={`${FLEX_CENTER}`}>          
          <AlarmSolver />
        </div>        
      </div>

      <div className={`${FLEX_CENTER} flex-1 flex-col text-2xl`}>
        Next Alarm
        <p>{ showHoursAndMinutes(nextAlarm) || 'No alarm' }</p>
      </div>

    </div>
  )
}

export default Main