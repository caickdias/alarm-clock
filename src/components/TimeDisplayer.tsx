import React, { useState, useEffect } from 'react'

import { getTime, getDate } from '../utils/date';

type Props = {
  date: Date;
  showDayName?: Boolean;
}

const weekDaysNumberToNames: Record<number, string> = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
}

const TimeDisplayer = ({ date, showDayName=false }: Props) => {    

  return (
    <div className='flex flex-col items-center justify-center'>

      <h1 className='text-4xl mb-4'>        
        {showDayName 
          ? weekDaysNumberToNames[date.getDay()] 
          : getDate(date)
        }
      </h1>
      <h1 className='text-7xl mb-20'>        
        {getTime(date)}                
      </h1>
    </div>
  )
}

export default TimeDisplayer