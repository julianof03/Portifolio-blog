import './cardHolder.css';
import React, { useState } from 'react';
import Card from './Cards/Card';
import PopUp from '../popupHolderFamily/popUp';

function CardHolder({ selectedTheme, themeList }) { 
  const [showPopup, setShowPopup] = useState(false);
  const [popUpData, setPopUpdata] = useState([]);

  const cardData = [
    { 
      content: [
        { id: 1, content: 'Eu sou um card de jogos 01' },
        { id: 2, content: 'Eu sou um card de jogos 02' }
      ]
    },
    { 
      content: [
        { id: 1, content: 'Eu sou um card de filmes 01' },
        { id: 2, content: 'Eu sou um card de filmes 02' }
      ]
    },{ 
      content: [
        { id: 1, content: 'Eu sou um card de series 01' },
        { id: 2, content: 'Eu sou um card de series 02' }
      ]
    }
  ];

  return (
    <div className={`cardHolder ${themeList[selectedTheme].themeName}`}>
      <Card 
        selectedTheme = {selectedTheme}
        setShowPopup ={setShowPopup}
        setPopUpdata = {setPopUpdata}
        cardData = {cardData}
      ></Card>
      <PopUp 
        popUpData = {popUpData}
        showPopup = {showPopup}
        setShowPopup ={setShowPopup}
      ></PopUp>
    </div>
  )
}

export default CardHolder