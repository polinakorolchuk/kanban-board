import { useTheme } from '@hooks/UseTheme'
import React from 'react'

import { ThemeButton, ThemeSwitcherWrapper } from './styled'

const ThemeSwitcher: React.FC = () => {
  const { themeName, setThemeName } = useTheme()

  return (
    <ThemeSwitcherWrapper>
      <ThemeButton
        type="button"
        active={themeName === 'light'}
        onClick={() => setThemeName('light')}
      >
        Light
      </ThemeButton>

      <ThemeButton type="button" active={themeName === 'dark'} onClick={() => setThemeName('dark')}>
        Dark
      </ThemeButton>

      <ThemeButton
        type="button"
        active={themeName === 'colorful'}
        onClick={() => setThemeName('colorful')}
      >
        Colorful
      </ThemeButton>
    </ThemeSwitcherWrapper>
  )
}

export default ThemeSwitcher
