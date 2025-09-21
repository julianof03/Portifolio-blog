import './card.css';
import React from 'react'
function Card({selectedTheme ,setShowPopup, cardData, setPopUpdata}) {
  const activePopup = (cardInfo) => {
    setShowPopup(true);
    setPopUpdata(cardInfo);
  };
  return (
    <>
      {cardData[selectedTheme].content.map(card => (
        <div key={card.id} className='Card' onClick={() => activePopup(card)}>
          <p>{card.content}</p>
        </div>
      ))}
    </>
  )
}

export default Card;