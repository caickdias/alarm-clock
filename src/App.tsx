import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  Header,
  Main,
  Footer
} from './components';

const themeMap: Record<string, string> = {
  'dark': 'text-white bg-zinc-800',
  'light': 'bg-gray-200',
}

function App() {

  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.title = "Alarm Clock";
  }, []);

  const toggleTheme = (themeMode: string) => {
    setTheme(themeMode);
  }

  return (
    <div className={`flex flex-col items-center justify-around h-screen p-6 
      ${themeMap[theme]} font-bold transition-all duration-700`}>
      <Header 
        theme={theme}  
        toggleTheme={toggleTheme}
      />
      
      <Main />
      
      <Footer />
    </div>
  );
}

export default App;
