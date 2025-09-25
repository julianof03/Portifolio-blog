import './index.css';
import React, { useState } from 'react';
import TopHolder from './components/topHolderFamily/topHolder.jsx';
import LeftHolder from './components/leftHolderFamily/LeftHolder.jsx';
import CardHolder from './components/cardHolderFamily/CardHolder.jsx';

function App() {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const [ topTheme, setTopTheme] = useState(1);
  const [ leftTheme, setLeftTheme] = useState(2);
    const [showPopup, setShowPopup] = useState(false);
  const themeList = [{
    themeId: 0,
    themeName: 'Jogos'
  },
  {
    themeId: 1,
    themeName: 'Filmes'
  },
  {
    themeId: 2,
    themeName: 'Series'
  },
  
]

  return (
    <div className="ContentHolder">
      <TopHolder 
        setSelectedTheme={setSelectedTheme}
        setTopTheme={setTopTheme}
        setShowPopup={setShowPopup}
        topTheme={topTheme}
        themeList={themeList}
        selectedTheme={selectedTheme}
      />
      <LeftHolder 
        setSelectedTheme = {setSelectedTheme}
        setLeftTheme = {setLeftTheme}
        setShowPopup = {setShowPopup}
        leftTheme = {leftTheme}
        themeList = {themeList}
        selectedTheme = {selectedTheme}
      ></LeftHolder>
      <CardHolder 
        setShowPopup = {setShowPopup}
        showPopup = {showPopup}
        selectedTheme = {selectedTheme}
        themeList = {themeList}
        ></CardHolder>
    </div>
  )
}

export default App