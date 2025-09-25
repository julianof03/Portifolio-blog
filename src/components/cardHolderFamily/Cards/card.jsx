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
        <div key={card.id} className='Card' onClick={() => activePopup(card.id)}>
          <div className='Pseudoimage'></div>

          <div className='Rate'>
            <div className='RateBar'>
              <div className='RateBarFill' style={
                { width: `${card.rate}%`, 
                  top: `${((card.rate * 2) - 200)}px`
                }}></div>
            </div>
            <h4>{card.content}</h4>
            <p >{card.rate}%</p>
            

          </div>

          
        </div>
      ))}
    </>
  )
}

export default Card;