import './topHolder.css';
import React, { useState } from 'react'
function TopHolder({setSelectedTheme, topTheme, themeList, setTopTheme, selectedTheme}) {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const swtichThemeFunction = () => {
    if (isAnimating) return; 
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setSelectedTheme(topTheme);
      setTopTheme(selectedTheme);
    }, 500);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 2500);
  }
  
  return (
    <div className={`topHolder ${isAnimating ? 'expanding' : ''}`} onClick={() => swtichThemeFunction()}>
        <p>{themeList[topTheme].themeName}</p>
    </div>
  )
}

export default TopHolder