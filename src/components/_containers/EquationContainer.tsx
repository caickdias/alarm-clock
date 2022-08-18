import React, { useState } from 'react'

type Props = {
  equation: string;
  onSendAnswer: (answer: string) => void;
}

const EquationContainer = ({ equation, onSendAnswer }: Props) => {

  const [answer, setAnswer] = useState<string>('');

  const handleChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {    
    const value = event.target.value.replace(/,/g, '.');
    setAnswer(value);
  }

  const handleEnterPress = (event: any) => {
    if(event.keyCode === 13){
      onSendAnswer(answer);
      return;
    }
  }

  return (
    <div className='flex flex-col flex-1 items-center justify-center'>
      <h1 className='text-3xl mb-4'>
        {equation}
      </h1>

      <input 
        className='text-xl h-20 bg-neutral-500 rounded-lg text-center'             
        placeholder='x = ?' 
        value={answer}
        onChange={handleChangeAnswer}
        onKeyDown={handleEnterPress}
        autoFocus
      />
    </div>
  )
}

export default EquationContainer