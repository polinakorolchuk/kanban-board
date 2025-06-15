import Column from '@components/Column/Column'

import { BoardWrapper } from './styled'

const Board = () => {
  const todoCards = [
    { id: 1, title: 'Task 1', description: 'Task description 1', priority: 'high' as const },
    { id: 2, title: 'Task 2', description: 'Task description 2', priority: 'medium' as const }
  ]

  const inProgressCards = [
    { id: 3, title: 'Task 3', description: 'Task description 3', priority: 'low' as const }
  ]

  const doneCards = [
    { id: 4, title: 'Task 4', description: 'Task description 4', priority: 'medium' as const }
  ]

  return (
    <BoardWrapper>
      <Column title="To Do" color="#4F46E5" cards={todoCards} />
      <Column title="In progress" color="#F59E0B" cards={inProgressCards} />
      <Column title="Done" color="#22C55E" cards={doneCards} />
    </BoardWrapper>
  )
}

export default Board
