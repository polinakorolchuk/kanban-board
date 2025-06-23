import { useAppDispatch } from '@hooks/UseTypedHooks'
import { addColumn } from '@store/reducers/BoardSlice'
import { useState } from 'react'

import {
  AddColumnButton,
  BurgerButton,
  HeaderContainer,
  HeaderWrapper,
  Logo,
  MobileActions,
  MobileMenuWrapper
} from './styled'

const Header = () => {
  const dispatch = useAppDispatch()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleAddColumn = () => {
    dispatch(addColumn())
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo>Kanban Dashboard</Logo>

        <AddColumnButton onClick={handleAddColumn} className="desktop-only" aria-label="Add column">
          +
        </AddColumnButton>

        <MobileMenuWrapper className="mobile-only">
          <BurgerButton onClick={toggleMenu} aria-label="Toggle menu">
            ☰
          </BurgerButton>

          {isMenuOpen && (
            <MobileActions>
              <button type="button" onClick={handleAddColumn}>
                + Add column
              </button>
            </MobileActions>
          )}
        </MobileMenuWrapper>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
