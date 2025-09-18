import './popUp.css';
import React from 'react'
function PopUp({showPopup, setShowPopup}) {
  const closePopup = () => {
    setShowPopup(prevState => !prevState);
  };
  
  if (!showPopup) return null;
  
  return (
    <div className={`popUp ${showPopup ? 'visible' : ''}`}>
        <button onClick={closePopup}>X</button>
        <p>hello i am a popup</p>
    </div>
  );
}


export default PopUp;