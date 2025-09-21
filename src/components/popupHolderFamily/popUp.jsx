import './popUp.css';
import React from 'react'
function PopUp({showPopup, setShowPopup, popUpData}) {
  const closePopup = () => {
    setShowPopup(false);
  };
  
  return (
    <div className={`popUp ${showPopup ? 'visible' : ''}`}>
        <button onClick={closePopup}>X</button>
        <p>{popUpData.content}</p>
    </div>
  );
}


export default PopUp;