import React, { useEffect, useState } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ClockPicker } from '@mui/x-date-pickers/ClockPicker';

import { showHoursAndMinutes } from '../utils/date';

type Props = {
  visible?: boolean;
  onCancel: () => void;
  onSetAlarm: (date: Date | null) => void;
}

const NewAlarm = ({ visible=true, onCancel, onSetAlarm }: Props) => {

  const BUTTON = 'py-[4px] px-4 rounded-lg';
  const [dateNow, setDateNow] = useState<Date | null>(new Date());

  const handleSetAlarm = () => onSetAlarm(dateNow);

  return (
    <div className='flex flex-col'>
  
    {visible && <>
      <div className='flex flex-row text-3xl items-center justify-center mb-4'>        
        <span>{showHoursAndMinutes(dateNow)}</span>
      </div>
      
   
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ClockPicker 
          date={dateNow} 
          onChange={(newDate) => setDateNow(newDate)}    
          className="bg-gray-200 rounded-3xl"       
        />
      </LocalizationProvider>

      <div className='flex items-center justify-around mt-6'>
        <button className={`${BUTTON} bg-red-400`} onClick={onCancel}>Cancel</button>
        <button className={`${BUTTON} bg-emerald-600`} onClick={handleSetAlarm}>Set alarm</button>
      </div>
      </>
    }
    </div>
  )
}

export default NewAlarm