import './card.css';
import React from 'react'
function Card({setShowPopup, cardData, setPopUpdata}) {
  const activePopup = (cardInfo) => {
    setShowPopup(true);
    setPopUpdata(cardInfo);
  };

  return (
    <>
      {cardData.map(card => (
        <div key={card.id} className='Card' onClick={() => activePopup(card)}>
          <p>{card.content}</p>
        </div>
      ))}
    </>
  )
}

export default Card;