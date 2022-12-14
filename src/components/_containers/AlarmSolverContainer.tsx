import React, { useEffect, useState, useRef } from 'react'

import EquationContainer from './EquationContainer'

import { generateFirstDegreeEquation } from '../../services/data/equations';
import { AlarmLabelSwitch } from '..';

type Props = {
  isAlarmActive: boolean;
  onTurnAlarmOff: () => void;
}

const AlarmSolverContainer = ({ isAlarmActive, onTurnAlarmOff }: Props) => {
  
  //const alarmSound =  useMemo(() => new Audio(require('../assets/alarm.mp3')), []);  
  const alarmSound =  useRef(new Audio(require('../../assets/alarm.mp3'))).current;
  const [currentEquation, setCurrentEquation] = useState<any>({});

  useEffect(() => {
    if(isAlarmActive){
      playAlarm();
      setCurrentEquation(generateFirstDegreeEquation(1));
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

  const handleCheckAnswer = (answer: string) => {    
    if(parseFloat(answer) == currentEquation.solution.toFixed(2)){
      onTurnAlarmOff();
    }
  }

  return (
    <div className='flex flex-col'>
        
      <AlarmLabelSwitch isOn={isAlarmActive} />

      { isAlarmActive &&
        <EquationContainer 
          equation={currentEquation.presentation} 
          onSendAnswer={handleCheckAnswer}      
        />
      }
    </div>
  )
}

export default AlarmSolverContainer