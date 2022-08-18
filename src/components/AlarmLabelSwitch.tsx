import React from 'react'

type Props = {
    isOn: boolean;
}

const AlarmLabelSwitch = ({ isOn }: Props) => {
  return (
    <button className='flex flex-row items-center justify-center mb-4'>
        Alarm &nbsp;
        <p className={`${isOn ? 'bg-green-600' : 'bg-red-500'} p-1`}>
          {isOn ? 'ON' : 'OFF'}
        </p>   
      </button> 
  )
}

export default AlarmLabelSwitch