import Column from '@components/Column/Column'
import { useAppSelector } from '@hooks/UseTypedHooks'

import { BoardWrapper } from './styled'

const Board = () => {
  const columns = useAppSelector((state) => state.board.columns)

  return (
    <BoardWrapper>
      {columns.map((column) => (
        <Column
          key={column.id}
          title={column.title}
          color={column.color}
          cards={column.cards.map((card) => ({
            ...card,
            priority: card.priority ?? 'low'
          }))}
        />
      ))}
    </BoardWrapper>
  )
}

export default Board
