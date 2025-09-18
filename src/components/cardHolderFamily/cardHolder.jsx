import './cardHolder.css';
import React, { useState } from 'react';
import Card from './Cards/Card';
import PopUp from '../popupHolderFamily/popUp';

function CardHolder() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className='cardHolder'>
      <Card setShowPopup ={setShowPopup}></Card>
      <PopUp 
      showPopup = {showPopup}
      setShowPopup ={setShowPopup}
      ></PopUp>
    </div>
  )
}

export default CardHolder