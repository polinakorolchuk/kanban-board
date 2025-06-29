import { createContext } from 'react'

import type { ThemeContextType } from '@/context/ThemeProvider'

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
