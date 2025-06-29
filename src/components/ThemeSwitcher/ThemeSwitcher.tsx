import { useTheme } from '@hooks/UseTheme'
import React from 'react'

const ThemeSwitcher: React.FC = () => {
  const { themeName, setThemeName } = useTheme()

  return (
    <div style={{ marginBottom: 16 }}>
      <button type="button" disabled={themeName === 'light'} onClick={() => setThemeName('light')}>
        Light
      </button>
      <button type="button" disabled={themeName === 'dark'} onClick={() => setThemeName('dark')}>
        Dark
      </button>
      <button
        type="button"
        disabled={themeName === 'colorful'}
        onClick={() => setThemeName('colorful')}
      >
        Colorful
      </button>
    </div>
  )
}

export default ThemeSwitcher
