import React, { useEffect, useState, useRef } from 'react'

type Props = {
  isAlarmActive: boolean;
  onTurnAlarmOff: () => void;
}

const AlarmSolver = ({ isAlarmActive, onTurnAlarmOff }: Props) => {
  
  //const alarmSound =  useMemo(() => new Audio(require('../assets/alarm.mp3')), []);  
  const alarmSound =  useRef(new Audio(require('../assets/alarm.mp3'))).current;
  
  useEffect(() => {
    if(isAlarmActive){
      playAlarm();
    }
    else {
      pauseAlarm();
    }
  }, [isAlarmActive]);

  const playAlarm = () => {
    alarmSound.loop = true;
    alarmSound.currentTime = 0;
    alarmSound.play();
  }

  const pauseAlarm = () => alarmSound.pause();

  const toggleAlarm = () => {
    if(isAlarmActive){
      onTurnAlarmOff();
    }
  }

  return (
    <div>
      <button className='flex flex-row items-center justify-center' onClick={toggleAlarm}>
        Alarm &nbsp;
        <p className={`${isAlarmActive ? 'bg-green-600' : 'bg-red-500'} p-1`}>
          {isAlarmActive ? 'ON' : 'OFF'}
        </p>   
      </button>   
    </div>
  )
}

export default AlarmSolver