import './cardHolder.css';
import React, { useState } from 'react';
import Card from './Cards/Card';
import PopUp from '../popupHolderFamily/popUp';

function CardHolder({ selectedTheme, themeList }) {  // Corrigido aqui com desestruturação
  const [showPopup, setShowPopup] = useState(false);
  const [popUpData, setPopUpdata] = useState([]);

  const cardData = [
    { id: 1, content: 'Card 1 Content' },
    { id: 2, content: 'Card 2 Content' },
    { id: 3, content: 'Card 3 Content' },
    { id: 4, content: 'Card 4 Content' },
  ];

  return (
    <div className={`cardHolder ${themeList[selectedTheme].themeName}`}>
      <Card 
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