import { useAppDispatch } from '@hooks/UseTypedHooks'
import { addColumn } from '@store/reducers/BoardSlice'

import { AddColumnButton, HeaderContainer, HeaderWrapper, Logo } from './styled'

const Header = () => {
  const dispatch = useAppDispatch()

  const handleAddColumn = () => {
    dispatch(addColumn())
  }

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo>Kanban Dashboard</Logo>
        <AddColumnButton aria-label="Add new column" onClick={handleAddColumn}>
          +
        </AddColumnButton>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
