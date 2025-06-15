import { AddColumnButton, HeaderContainer, HeaderWrapper, Logo } from './styled'

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <Logo>Kanban Dashboard</Logo>
        <AddColumnButton aria-label="Add new column">+</AddColumnButton>
      </HeaderContainer>
    </HeaderWrapper>
  )
}

export default Header
