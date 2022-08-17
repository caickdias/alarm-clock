import React, { useState} from 'react'
import { NewAlarm } from './';

const NewAlarmContainer = () => {
    
    const FLEX_CENTER = 'flex items-center justify-center';

    const [isCreatingNewAlarm, setIsCreatingNewAlarm] = useState<boolean>(false);
    const [isAlarmActive, setIsAlarmActive] = useState<boolean>(true);

    const handleCreatingNewAlarm = () => setIsCreatingNewAlarm(true);
    const cancelCreatingNewAlarm = () => setIsCreatingNewAlarm(false);

    const setNewAlarm = (date: Date | null) => {
        console.log(date);
        cancelCreatingNewAlarm();
    }

    return (
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
  )
}

export default NewAlarmContainer