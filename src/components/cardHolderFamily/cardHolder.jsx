import './cardHolder.css';
import React, { useState } from 'react';
import Card from './Cards/Card';
import PopUp from '../popupHolderFamily/popUp';
import cardData from './cardlist';

function CardHolder({ selectedTheme, themeList, setShowPopup, showPopup }) { 
  const [popUpData, setPopUpdata] = useState([]);


  return (
    <div className={`cardHolder ${themeList[selectedTheme].themeName}`}>
      <h1>
        {cardData[selectedTheme].name}
      </h1>
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
        cardData = {cardData}
        selectedTheme= {selectedTheme}
      ></PopUp>
    </div>
  )
}

export default CardHolder