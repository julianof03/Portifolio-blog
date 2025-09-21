import './topHolder.css';
import React from 'react'
function TopHolder({setSelectedTheme, topTheme, themeList, setTopTheme, selectedTheme}) {
  
  const swtichThemeFunction = () => {
    setSelectedTheme(topTheme);
    setTopTheme(selectedTheme);
  }
  return (
    <div className='topHolder' onClick={() => swtichThemeFunction()}>
        <p>{themeList[topTheme].themeName}</p>
    </div>
  )
}

export default TopHolder