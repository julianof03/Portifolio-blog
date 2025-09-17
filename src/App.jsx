import React from 'react'
import './index.css';
import TopHolder from './components/topHolderFamily/topHolder.jsx';
import LeftHolder from './components/leftHolderFamily/LeftHolder.jsx';
import CardHolder from './components/cardHolderFamily/CardHolder.jsx';

function App() {
  return (
    <div className="ContentHolder">
      <TopHolder></TopHolder>
      <LeftHolder></LeftHolder>
      <CardHolder></CardHolder>
    </div>
  )
}

export default App