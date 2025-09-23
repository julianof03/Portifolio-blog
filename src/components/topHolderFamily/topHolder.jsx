import './topHolder.css';
import React, { useState } from 'react'
function TopHolder({setSelectedTheme, topTheme, themeList, setTopTheme, selectedTheme}) {
  const [isAnimating, setIsAnimating] = useState(false);
  
  const swtichThemeFunction = () => {
    if (isAnimating) return; // Previne múltiplos cliques durante a animação
    
    setIsAnimating(true);
    
    // Muda o texto quando a barra estiver totalmente expandida (0.5s)
    setTimeout(() => {
      setSelectedTheme(topTheme);
      setTopTheme(selectedTheme);
    }, 500);
    
    // Para a animação após 2.5 segundos (duração total)
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