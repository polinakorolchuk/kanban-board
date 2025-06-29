import { colorfulTheme, darkTheme, lightTheme } from '@constants/Themes'
import { ReactNode, useEffect, useState } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { ThemeContext } from './ThemeContext'

export type ThemeName = 'light' | 'dark' | 'colorful'

export interface ThemeContextType {
  themeName: ThemeName
  setThemeName: (name: ThemeName) => void
}

const themes = {
  light: lightTheme,
  dark: darkTheme,
  colorful: colorfulTheme
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [themeName, setThemeName] = useState<ThemeName>('light')

  useEffect(() => {
    const savedTheme = localStorage.getItem('app-theme') as ThemeName | null
    if (savedTheme && themes[savedTheme]) {
      setThemeName(savedTheme)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('app-theme', themeName)
  }, [themeName])

  return (
    <ThemeContext.Provider value={{ themeName, setThemeName }}>
      <StyledThemeProvider theme={themes[themeName]}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  )
}
