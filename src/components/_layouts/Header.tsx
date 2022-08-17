import React from 'react'

import { BsAlarm, BsMoonStarsFill, BsSunFill } from 'react-icons/bs';

type Props = {
  theme: string;
  toggleTheme: (themeMode: string) => void;
}

const Header = ({ theme, toggleTheme }: Props) => {
  
  const changeTheme = () => {
    theme == 'dark'
    ? toggleTheme('light')
    : toggleTheme('dark')
  }

  return (
    <div className="flex w-full items-center justify-evenly">
      
      <div className="flex flex-1 items-end justify-center">
        <button onClick={changeTheme}>
          { theme == 'dark'
            ? <BsSunFill size={25} color='white' />
            : <BsMoonStarsFill size={25} color='black' />
          }
        </button>
      </div>

      <div className='flex flex-1 items-center justify-center'>
        <BsAlarm size={30} />
        <h1 className="text-4xl font-bold ml-4">
          You WILL wake up!
        </h1>
      </div>

      <div className="flex flex-1">

      </div>
    </div>
  )
}

export default Header