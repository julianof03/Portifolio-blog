import './leftHolder.css';
import React, { useState } from 'react'
function LeftHolder({setSelectedTheme, setLeftTheme, leftTheme, themeList, selectedTheme, setShowPopup}) {
  const [isAnimating, setIsAnimating] = useState(false);

  const swtichThemeFunction = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setShowPopup(false);
    
    setTimeout(() => {
      setSelectedTheme(leftTheme);
      setLeftTheme(selectedTheme);
    }, 1000);
    
    // Para a animação após 2.5 segundos (duração total)
    setTimeout(() => {
      setIsAnimating(false);
    }, 2500);
  }

  return (
    <div className={`LeftHolder ${isAnimating ? 'expanding' : ''}`} onClick={() => swtichThemeFunction()}>
        <p>{themeList[leftTheme].themeName}</p>
    </div>
  )
}

export default LeftHolder