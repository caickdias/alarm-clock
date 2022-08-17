import React, { useEffect, useState } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { ClockPicker } from '@mui/x-date-pickers/ClockPicker';

type Props = {
  visible?: boolean;
}

const NewAlarm = ({ visible=false }: Props) => {

  const [hours, setHours] = useState<number>(3);
  const [value, setValue] = React.useState<Date | null>(new Date());


  return (
    <div className='flex flex-col'>

      <div className='flex flex-row text-3xl items-center justify-center mb-6'>        
        <span>{value?.toLocaleTimeString()}</span>
      </div>
      
      {true &&
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ClockPicker 
          date={value} 
          onChange={(newDate) => setValue(newDate)}    
          className="bg-gray-200 rounded-3xl"       
        />
      </LocalizationProvider>
  }
    </div>
  )
}

export default NewAlarm