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
        { id: 1, content: 'Minecraft', rate: 100 },
        { id: 2, content: 'Escape from tarkov', rate: 1 },
        { id: 3, content: 'Rainbow Six X', rate: 85 },
        { id: 4, content: 'GTA V', rate: 80 },
        { id: 5, content: 'No mans Sky', rate: 75 },
        { id: 6, content: 'Read Dead 2', rate: 70 },
        { id: 7, content: 'The Witcher 3', rate: 95 },
        { id: 8, content: 'PalWorld', rate: 66 },
        { id: 9, content: 'Dead Cells', rate: 45 },
        { id: 10, content: 'Balatro', rate: 12 },
        { id: 11, content: 'Satisfactory', rate: 14 },
        { id: 12, content: 'Enshrouded', rate: 25 },
        { id: 13, content: 'Foxhole', rate: 10 }

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