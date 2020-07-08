import useLocalStorage from './useLocalStorage'
import { useEffect } from 'react'

export const UseDarkMode = () => {
  const [ darkModeState, setDarkModeState] = useLocalStorage("darkmode", initialState);

  useEffect(() => {
      if(darkModeState === true) {
          document.body.classList.add('darkmode')
      } else {
          document.body.classList.remove('darkmode');
      }
     
  }, [darkModeState])

  return [darkModeState, setDarkModeState]
}