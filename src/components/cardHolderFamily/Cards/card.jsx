import './card.css';
import React from 'react'
function Card({setShowPopup}) {
  const activePopup = () => {
    setShowPopup(prevState => !prevState);
  };

  return (
    <div className='Card' onClick={()=>{activePopup()}}>
        <p>hello i am a card</p>
    </div>
  )
}

export default Card;