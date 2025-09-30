import './popUp.css';
import React from 'react'
function PopUp({showPopup, setShowPopup, popUpData, cardData, selectedTheme}) {
  const closePopup = () => {
    setShowPopup(false);
  };
  const popUpList = cardData[selectedTheme].content[popUpData-1];
  if(showPopup){
    return (
      <div className={`popUp ${showPopup ? 'visible' : ''}`}>
          
          <div className='popUpContent'>
            <div className='youtube'></div>
            <h2>{popUpList.content}</h2>
            <div className="contentRate">
              <div className="rate" 
                style={{ 
                  width: `${popUpList.rate}%`,
                  top: `${((popUpList.rate * 8) - 800)}px`  
              }}></div>
              <p>{popUpList.rate}</p>
            </div>
            
            <div className="tagHolder">
              {popUpList.tags.map(tag => (
                  <div key={tag} className="tag"> {tag} </div>
                ))}
            </div>
            <div className="reviewHolder">{popUpList.review}</div>
  
          </div>
          <button onClick={closePopup}>X</button>
      </div>
    );
  }

  return (<></>);
}


export default PopUp;