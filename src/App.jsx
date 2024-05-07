import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './index.css'
import Progression1 from './assets/components/Progression1'
import Progression2 from './assets/components/Progression2'
import Progression3 from './assets/components/Progression3'
import Progression4 from './assets/components/Progression4'
import Progression5 from './assets/components/Progression5'
import './App.css';
function App() {

  return (
      <div className='root'>
        <Progression1/>
        <Progression2/>
        <Progression3/>
        <Progression4/>
        <Progression5/>
      </div>
  )
}

export default App
