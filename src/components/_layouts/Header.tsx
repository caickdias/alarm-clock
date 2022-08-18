import React from 'react'

import { BsAlarm, BsMoonStarsFill, BsSunFill } from 'react-icons/bs';
import { FiSettings } from 'react-icons/fi';

type Props = {
  theme: string;
  toggleTheme: (themeMode: string) => void;
}

const Header = ({ theme, toggleTheme }: Props) => {
  
  const FLEX_CENTER = 'flex flex-1 items-end justify-center';

  const changeTheme = () => {
    theme == 'dark'
    ? toggleTheme('light')
    : toggleTheme('dark')
  }

  return (
    <div className="flex w-full items-center justify-evenly">
      
      <div className={`${FLEX_CENTER}`}>
        <button onClick={changeTheme}>
          { theme == 'dark'
            ? <BsSunFill size={25} />
            : <BsMoonStarsFill size={25} />
          }
        </button>
      </div>

      <div className={`${FLEX_CENTER}`}>
        <BsAlarm size={30} />
        <h1 className="text-4xl font-bold ml-4">
          You WILL wake up!
        </h1>
      </div>

      <div className={`${FLEX_CENTER}`}>
        <button onClick={changeTheme}>
          <FiSettings size={25} />    
        </button>
      </div>
    </div>
  )
}

export default Header