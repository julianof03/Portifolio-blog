import React from 'react'
import './index.css';
import TopHolder from './components/topHolderFamily/topHolder.jsx';
import LeftHolder from './components/leftHolderFamily/LeftHolder.jsx';

function App() {
  return (
    <div>
      <TopHolder></TopHolder>
      <LeftHolder></LeftHolder>
        <p>hello</p>
    </div>
  )
}

export default App