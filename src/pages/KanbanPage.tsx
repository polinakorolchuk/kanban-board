import Board from '@components/Board/Board'
import Header from '@components/Header/Header'
import ThemeSwitcher from '@components/ThemeSwitcher/ThemeSwitcher'

import { KanbanWrapper } from './styled'

const KanbanPage = () => {
  return (
    <KanbanWrapper>
      <Header />
      <Board />
      <ThemeSwitcher />
    </KanbanWrapper>
  )
}

export default KanbanPage
