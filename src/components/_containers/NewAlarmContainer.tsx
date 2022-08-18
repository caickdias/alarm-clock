import React, { useState} from 'react'
import { NewAlarm } from '..';

type Props = {
    onSetNewAlarm: (date: Date | null) => void;
}

const NewAlarmContainer = ({ onSetNewAlarm }: Props) => {
    
    const FLEX_CENTER = 'flex items-center justify-center';

    const [isCreatingNewAlarm, setIsCreatingNewAlarm] = useState<boolean>(false);    

    const handleCreatingNewAlarm = () => setIsCreatingNewAlarm(true);
    const cancelCreatingNewAlarm = () => setIsCreatingNewAlarm(false);

    const newAlarmHandler = (date: Date | null) => {
        onSetNewAlarm(date)
        cancelCreatingNewAlarm();
    }

    return (
    <div className={`${FLEX_CENTER} flex-1`}>
        { !isCreatingNewAlarm && 
          <button className='text-2xl' onClick={handleCreatingNewAlarm}>New Alarm</button> 
        }
        <NewAlarm 
          visible={isCreatingNewAlarm} 
          onCancel={cancelCreatingNewAlarm} 
          onSetAlarm={newAlarmHandler}
        />        
      </div>
  )
}

export default NewAlarmContainer