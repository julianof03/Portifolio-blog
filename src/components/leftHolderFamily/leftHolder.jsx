import './leftHolder.css';
import React from 'react'
function LeftHolder({setSelectedTheme, setLeftTheme, leftTheme, themeList, selectedTheme}) {

  const swtichThemeFunction = () => {
    setSelectedTheme(leftTheme);
    setLeftTheme(selectedTheme);
  }

  return (
    <div className='LeftHolder'  onClick={() => swtichThemeFunction()}>
        <p>{themeList[leftTheme].themeName}</p>
    </div>
  )
}

export default LeftHolder